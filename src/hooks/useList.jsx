import { useState, useEffect } from 'react';

import { getItems } from '../services/list';
import { useListContext } from './useListContext';
import { loadErrorAction, loadStartAction, loadSuccessAction } from '../state/listActions';

export function useList() {
  const [items, setItems] = useState([]);
  const { state, dispatch } = useListContext();

  useEffect(() => {
    const fetchItems = async () => {
      dispatch(loadStartAction());
      try {
        const res = await getItems();
        setItems(res);
        dispatch(loadSuccessAction(res));
      } catch (e) {
        dispatch(loadErrorAction());
      }
    };

    fetchItems();
  }, [dispatch]);

  state.list = items;

  return {
    state
  }
}
