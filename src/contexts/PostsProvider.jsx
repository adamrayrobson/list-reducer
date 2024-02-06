import { createContext, useReducer } from 'react';
import { postsReducer, initialState } from '../reducers/postsReducer';
import { log } from '../state/log';
import PropTypes from 'prop-types';

export const PostsContext = createContext({
  state: initialState, reducer: postsReducer
});

export function PostsProvider({ children }) {
  const [state, dispatch] = useReducer(log(postsReducer), initialState());

  const value = { state, dispatch };

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
}

PostsProvider.propTypes = {
  children: PropTypes.node.isRequired
};
