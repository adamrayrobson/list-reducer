import { useContext } from 'react';
import { PostsContext } from '../contexts/PostsProvider';

export function usePostsContext() {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error('usePostsContext must be used within a PostsProvider');
  }
  return context;
}
