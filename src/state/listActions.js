export const LOAD_START_ACTION = 'load-start-action';
export const LOAD_SUCCESS_ACTION = 'load-success-action';
export const LOAD_ERROR_ACTION = 'load-error-action';
export const ITEM_COMPLETED_ACTION = 'item-completed-action';
export const TEXT_CHANGE_ACTION = 'text-change-action';
export const QUANTITY_CHANGE_ACTION = 'quantity-change-action';
export const SUBMIT_FORM_ACTION = 'submit-form-action';
export const GET_ITEMS_ACTION = 'get-items-action';

export function loadStartAction() {
  return {
    type: LOAD_START_ACTION
  };
}

export function loadSuccessAction(items) {
  return {
    ...items,
    type: LOAD_SUCCESS_ACTION
  };
}

export function loadErrorAction() {
  return {
    type: LOAD_ERROR_ACTION
  };
}

export function itemCompletedAction(id, completed) {
  return {
    id,
    completed,
    type: ITEM_COMPLETED_ACTION
  };
}

export function textChangeAction(text) {
  return {
    text,
    type: TEXT_CHANGE_ACTION
  };
}

export function quantityChangeAction(quantity) {
  return {
    quantity,
    type: QUANTITY_CHANGE_ACTION
  };
}

export function submitFormAction(text, quantity) {
  return {
    text,
    quantity,
    type: SUBMIT_FORM_ACTION
  };
}

