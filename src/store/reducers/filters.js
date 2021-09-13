import { TOGGLE_FILTER } from '../../constants/filters';

const initialState = [
  { id: 1, text: 'All', isActiveClass: true },
  { id: 2, text: 'Completed', isActiveClass: false },
  { id: 3, text: 'In Progress', isActiveClass: false },
];

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            isActiveClass: !item.isActiveClass,
          };
        }

        return {
          ...item,
          isActiveClass: false,
        };
      });

    default:
      return state;
  }
};
