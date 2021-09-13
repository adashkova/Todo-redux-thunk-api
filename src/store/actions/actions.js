import {
  GET_TODO_FROM_API,
  ADD_TODO_STARTED,
  ADD_TODO_SUCCESS,
} from '../../constants/actions';

import { TOGGLE_FILTER } from '../../constants/filters';
import axios from 'axios';
require('dotenv').config();

const apiKey = '78e07c67-4c38-4d11-a6de-eb82ac08d688';
const baseUrl = `https://exceed-todo-list.herokuapp.com/api/v1`;

// Get todo from api
export const getTodo = () => {
  return dispatch => {
    dispatch(addTodoStarted());

    axios
      .get(`${baseUrl}/todos`, {
        headers: {
          'Content-Type': 'application/json',
          apikey: apiKey,
        },
      })
      .then(
        result => {
          dispatch(getTodofromApi(result.data));
        },
        error => {
          alert('error', error);
        }
      );
  };
};
// Add todo
export const addTodo = todo => {
  return dispatch => {
    dispatch(addTodoStarted());

    axios
      .post(
        `${baseUrl}/todos`,
        {
          title: todo,
        },
        {
          headers: {
            apikey: apiKey,
          },
        }
      )
      .then(() => {
        dispatch(getTodo());
      })
      .catch(err => {
        console.log('Error', err);
      });
  };
};
// ToggleTodo

export const markTodo = id => {
  return dispatch => {
    dispatch(addTodoStarted());

    axios
      .put(
        `${baseUrl}/todos/${id}/done`,
        { id },
        {
          headers: {
            apikey: apiKey,
          },
        }
      )
      .then(() => {
        dispatch(getTodo());
      })
      .catch(err => {
        console.log('Error', err);
      });
  };
};
// ClearDone

export const clearDoneTodo = () => {
  return dispatch => {
    dispatch(addTodoStarted());
    const confirm = window.confirm('Delete All Done todo?');
    if (confirm) {
      axios
        .delete(
          `${baseUrl}/todos/clear-done`,

          {
            headers: {
              apikey: apiKey,
            },
          }
        )
        .then(() => {
          dispatch(getTodo());
        })
        .catch(err => {
          console.log('Error', err);
        });
    }
  };
};

//Remove todo from api

export const removeTodo = id => {
  console.log('remove todo', id);

  return dispatch => {
    const confirm = window.confirm('Delete this todo?');
    if (confirm) {
      axios
        .delete(`${baseUrl}/todos/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            apikey: apiKey,
          },
        })
        .then(() => {
          dispatch(getTodo());
        })
        .catch(err => {
          console.log('Error', err);
        });
    } else {
      dispatch(getTodo());
    }
  };
};

// Action creators

export const getTodofromApi = todos => ({
  type: GET_TODO_FROM_API,
  payload: todos,
});

export const addTodoStarted = () => ({
  type: ADD_TODO_STARTED,
});

export const addTodoSuccess = text => ({
  type: ADD_TODO_SUCCESS,
  payload: text,
});

export const toggleFilter = id => ({
  type: TOGGLE_FILTER,
  id,
});
