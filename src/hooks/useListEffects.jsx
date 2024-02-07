import { useEffect } from 'react';
import {
  loadStartAction,
  loadSuccessAction,
  loadErrorAction
} from '../state/listActions';
import { updateItem } from '../services/list';
import { getItems } from '../services/list';

export function useListEffect(dispatch) {
  useEffect(() => {
    dispatch(loadStartAction());
    getItems()
      .then(items => {
        dispatch(loadSuccessAction(items));
      })
      .catch(error => {
        dispatch(loadErrorAction(error));
      });
  }, [dispatch]);
}

export function useItemEffect(item, dispatch) {
  useEffect(() => {
    if (item) {
      dispatch(loadStartAction());
      updateItem(item.id, item)
        .then(updatedItem => {
          dispatch(loadSuccessAction(updatedItem));
        })
        .catch(error => {
          dispatch(loadErrorAction(error));
        });
    }
  }, [item, dispatch]);
}
