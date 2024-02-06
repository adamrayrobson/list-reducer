export const ACTION = {
  GET_POSTS_SUCCESS: 'get-posts-success',
  GET_POST_SUCCESS: 'get-post-success',
  CREATE_POST_SUCCESS: 'create-post-success',
  DELETE_POST_SUCCESS: 'delete-post-success',
  UPDATE_POST_SUCCESS: 'update-post-success',
  LOADING_ACTION: 'loading-action',
  ERROR_ACTION: 'error-action'
}

export function errorAction(error) {
  return {
    type: ACTION.ERROR_ACTION,
    payload: error
  };
}

export function loadingAction() {
  return {
    type: ACTION.LOADING_ACTION
  };
}

export function getPostsSuccessAction(posts) {
  return {
    type: ACTION.GET_POSTS_SUCCESS,
    payload: posts
  };
}

export function getPostSuccessAction(post) {
  return {
    type: ACTION.GET_POST_SUCCESS,
    payload: post
  };
}

export function createPostSuccessAction(post) {
  return {
    type: ACTION.CREATE_POST_SUCCESS,
    payload: post
  };
}

export function deletePostSuccessAction(id) {
  return {
    type: ACTION.DELETE_POST_SUCCESS,
    payload: id
  };
}

export function updatePostSuccessAction(post) {
  return {
    type: ACTION.UPDATE_POST_SUCCESS,
    payload: post
  };
}

