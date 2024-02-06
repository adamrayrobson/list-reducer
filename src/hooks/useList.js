import {
  loadingAction,
  errorAction,
  getPostsSuccessAction,
  getPostSuccessAction,
  createPostSuccessAction,
  deletePostSuccessAction,
  updatePostSuccessAction,
} from '../state/actions';

import {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem
} from '../services/posts';

export async function useGetList(dispatch) {
  dispatch(loadingAction());
  try {
    const items = await getItems();
    dispatch(getPostsSuccessAction(items));
  } catch (err) {
    dispatch(errorAction(err));
  }
}

export async function useGetItem(dispatch, id) {
  dispatch(loadingAction());
  try {
    const item = await getItem(id);
    dispatch(getPostSuccessAction(item));
  } catch (err) {
    dispatch(errorAction(err));
  }
}

export async function useCreatePost(dispatch, post) {
  dispatch(loadingAction())
  try {
    const res = await createItem(post)
    dispatch(createPostSuccessAction(res.data))
  } catch (e) {
    dispatch(errorAction(e))
  }
}

export async function useDeletePost(dispatch, id) {
  dispatch(loadingAction())
  try {
    const res = await deleteItem(id)
    dispatch(deletePostSuccessAction(res.data))
  } catch (e) {
    dispatch(errorAction(e))
  }
}

export async function useUpdatePost(dispatch, id, post) {
  dispatch(loadingAction())
  try {
    const res = await updateItem(id, post)
    dispatch(updatePostSuccessAction(res.data))
  } catch (e) {
    dispatch(errorAction(e))
  }
}


