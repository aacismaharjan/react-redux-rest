import * as actions from './actionTypes'

// Fetch posts from server
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({
      type: actions.FETCH_POSTS_REQUEST,
    })
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) =>
        dispatch({
          type: actions.FETCH_POSTS_SUCCESS,
          payload: {
            posts,
          },
        })
      )
      .catch(({ message: error }) =>
        dispatch({
          type: actions.FETCH_POSTS_FAILURE,
          payload: {
            error,
          },
        })
      )
  }
}

// Post a post to server
export const postPost = (post) => {
  return (dispatch) => {
    dispatch({ type: actions.POST_POST_REQUEST, payload: { post } })
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actions.POST_POST_SUCCESS, payload: { post: data } })
      )
      .catch((err) =>
        dispatch({
          type: actions.POST_POST_FAILURE,
          payload: { error: err.message },
        })
      )
  }
}

// Update post to server
export const patchPost = (post) => {
  return (dispatch) => {
    dispatch({ type: actions.UPDATE_POST_REQUEST, payload: { id: post.id } })
    fetch('https://jsonplaceholder.typicode.com/posts/' + 1, {
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((post) => {
        dispatch({ type: actions.UPDATE_POST_SUCCESS, payload: { post } })
      })
      .catch((err) =>
        dispatch({
          type: actions.UPDATE_POST_FAILURE,
          payload: { error: err.message },
        })
      )
  }
}

// Remove post from server
export const removePost = (id) => {
  return (dispatch) => {
    dispatch({ type: actions.DELETE_POST_REQUEST, payload: { id } })
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'DELETE',
    })
      .then(() => {
        dispatch({ type: actions.DELETE_POST_SUCCESS, payload: { id } })
      })
      .catch((err) =>
        dispatch({
          type: actions.DELETE_POST_FAILURE,
          payload: { error: err.message },
        })
      )
  }
}
