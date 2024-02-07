import { useEffect, useCallback } from 'react';
import { useListContext } from '../hooks/useListContext';
import {
  quantityChangeAction,
  textChangeAction,
  submitFormAction,
  itemCheckedAction
} from '../state/listActions';
import List from './List';
import Form from './Form';
import { createItem } from '../services/list';
import { useListEffect, useItemEffect } from '../hooks/useListEffects';

export default function Page() {
  const { state, dispatch } = useListContext();

  const onDescriptionChange = (description) => {
    dispatch(textChangeAction(description));
  };

  const onQuantityChange = (qty) => {
    dispatch(quantityChangeAction(qty));
  };

  useListEffect(dispatch);
  useItemEffect(dispatch);

  const handleSubmit = useCallback(async () => {
    if (state.description && state.qty) {
      dispatch(submitFormAction(state.description, state.qty));
      try {
        await createItem(state.description, state.qty);
        dispatch(textChangeAction(''));
        dispatch(quantityChangeAction(0));
      } catch (error) {
        console.error('Error occurred while creating item:', error);
        // Handle error here, e.g., dispatch an error action
      }
    }
  }, [dispatch, state.description, state.qty]);

  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);

  const changeCheckbox = (itemId, checked) => {
    dispatch(itemCheckedAction(itemId, checked));
  };

  return (
    <>
      <Form
        description={state.description}
        onDescriptionChange={onDescriptionChange}
        qty={state.qty}
        onQtyChange={onQuantityChange}
        onSubmit={() => {
          handleSubmit();
        }}
      />
      {state.loading === true ? <p>Loading!</p> : <List list={state.list} handleCheckedById={changeCheckbox} />}
    </>
  );
}
