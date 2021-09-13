import React from 'react';
import Button from '../button/Button';
import './todoItem.css';

const TodoItem = ({ todo, onClick,  onClickMarkTodo, isDone }) => {
  return (
    <div className="todo_item">
      <div onClick={onClickMarkTodo} className={isDone ? 'checked' : ''}>
        {todo}
      </div>
      <Button text={'Delete'} onClick={onClick} />
    </div>
  );
};

export default TodoItem;
