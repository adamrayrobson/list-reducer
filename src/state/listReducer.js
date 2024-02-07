import {
  LOAD_START_ACTION,
  LOAD_SUCCESS_ACTION,
  LOAD_ERROR_ACTION,
  ITEM_COMPLETED_ACTION,
  TEXT_CHANGE_ACTION,
  QUANTITY_CHANGE_ACTION,
  SUBMIT_FORM_ACTION
} from './listActions';

export const initialState = {
    list: [],
    text: '',
    quantity: 0,
    completed: false,
    loading: false,
    error: null
};

export function listReducer(state, action) {
  switch (action.type) {
    case LOAD_START_ACTION:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS_ACTION:
      return {
        ...state,
        loading: false,
      };
    case LOAD_ERROR_ACTION:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ITEM_COMPLETED_ACTION:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              completed: action.completed
            };
          }
          return item;
        })
      };
    case TEXT_CHANGE_ACTION:
      return {
        ...state,
        text: action.text
      };
    case QUANTITY_CHANGE_ACTION:
      return {
        ...state,
        quantity: action.quantity
      };
    case SUBMIT_FORM_ACTION:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            text: action.text,
            quantity: action.quantity,
            completed: false
          }
        ],
        text: '',
        quantity: 0
      };
    default:
      console.error(`${action.type} is not supported`)
      return state;
  }
}
