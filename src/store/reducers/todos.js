import {
  ADD_TODO_SUCCESS,
  GET_TODO_FROM_API,
  ADD_TODO_STARTED,
} from '../../constants/actions';

const initState = {
  isLoading: false,
  todos: [],
  error: undefined,
};

export const todos = (state = initState, action) => {
  switch (action.type) {
    case GET_TODO_FROM_API:
      return action.payload;

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        todos: [...state.todos, action.payload],
      };

    case ADD_TODO_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
