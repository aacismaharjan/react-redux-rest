import * as actions from './actionTypes'
import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({
      type: actions.FETCH_POSTS_REQUEST,
    })
    axios
      .get(API_URL)
      .then((res) =>
        dispatch({
          type: actions.FETCH_POSTS_SUCCESS,
          payload: {
            posts: res.data,
          },
        })
      )
      .catch((err) =>
        dispatch({
          type: actions.FETCH_POSTS_FAILURE,
          payload: {
            error: err.message,
          },
        })
      )
  }
}

// Post a post to server
export const postPost = (post) => {
  return (dispatch) => {
    dispatch({ type: actions.POST_POST_REQUEST, payload: { post } })
    axios
      .post(API_URL, post)
      .then((res) =>
        dispatch({
          type: actions.POST_POST_SUCCESS,
          payload: { post: res.data },
        })
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
    axios
      .patch(`${API_URL}/${post.id}`, post)
      .then((res) => {
        dispatch({
          type: actions.UPDATE_POST_SUCCESS,
          payload: { post: res.data },
        })
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
    axios
      .delete(`${API_URL}/${id}`)
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
