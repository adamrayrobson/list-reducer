import { createContext, useReducer } from 'react';
import { listReducer, initialState } from '../state/listReducer';
import PropTypes from 'prop-types';

export const ListContext = createContext({
  state: initialState, reducer: listReducer
});

export function ListProvider({ children }) {
  const [state, dispatch] = useReducer(listReducer, initialState);

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      {children}
    </ListContext.Provider>
  );
}

ListProvider.propTypes = {
  children: PropTypes.node.isRequired
};
