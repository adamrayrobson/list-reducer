import { ACTION } from './postActions';

export const initialState = () => {
  return {
    posts: [],
    loading: true,
    error: null
  };
};

export function postsReducer(state, action) {
  switch (action.type) {
    case ACTION.GET_POSTS:
      return { ...state, loading: true, error: null };
    case ACTION.GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case ACTION.GET_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION.CREATE_POST:
      return { ...state, loading: true, error: null };
    case ACTION.CREATE_POST_SUCCESS:
      return { ...state, loading: false, posts: [...state.posts, action.payload] };
    case ACTION.CREATE_POST_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION.DELETE_POST:
      return { ...state, loading: true, error: null };
    case ACTION.DELETE_POST_SUCCESS:
      return { ...state, loading: false, posts: state.posts.filter(post => post.id !== action.payload) };
    case ACTION.DELETE_POST_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION.UPDATE_POST:
      return { ...state, loading: true, error: null };
    case ACTION.UPDATE_POST_SUCCESS:
      return { ...state, loading: false, posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post) };
    case ACTION.UPDATE_POST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
