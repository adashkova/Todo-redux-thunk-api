import { combineReducers } from 'redux';

import { todos as todoReducer } from './todos';
import { filters as filtersReducer } from './filters';

export default combineReducers({ todoReducer, filtersReducer });
