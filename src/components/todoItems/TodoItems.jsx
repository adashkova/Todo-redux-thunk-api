import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { removeTodo, markTodo, getTodo } from '../../store/actions/actions';
import IfNoTodos from '../IfNoTodos/IfNoTodos';
import TodoItem from '../todoItem/TodoItem';
import Spinner from '../spinner/Spinner';
import './todoItems.css';

const TodoItems = () => {
  const todos = useSelector(state => state.todoReducer);
  const filters = useSelector(state => state.filtersReducer);

  const dispatch = useDispatch();

  // GET TODO FROM API

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handlerDeleteTodo = id => {
    dispatch(removeTodo(id));
  };

  const handlerMarkTodo = id => {
    dispatch(markTodo(id));
  };

  const filterVisibleTodos = todos => {
    let currentFilter = filters.find(filter => filter.isActiveClass);

    if (currentFilter === undefined) {
      currentFilter = 'All';
    }

    if (currentFilter.text) {
      switch (currentFilter.text) {
        case 'All':
          return todos;

        case 'Completed':
          return !todos.isLoading ? todos.filter(todo => todo.isDone) : [];

        case 'In Progress':
          return !todos.isLoading ? todos.filter(todo => !todo.isDone) : [];

        default:
          return todos;
      }
    } else {
      return todos;
    }
  };

  const visibleTodos = filterVisibleTodos(todos);

  return (
    <div className="todo_items">
      {todos.isLoading ? (
        <Spinner />
      ) : visibleTodos.length ? (
        visibleTodos.map(todo => (
          <TodoItem
            key={todo.title}
            todo={todo.title}
            onClick={() => handlerDeleteTodo(todo._id)}
            onClickMarkTodo={() => handlerMarkTodo(todo._id)}
            isDone={todo.isDone}
          />
        ))
      ) : (
        <IfNoTodos />
      )}
    </div>
  );
};

export default connect()(TodoItems);
