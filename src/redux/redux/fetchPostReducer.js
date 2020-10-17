import * as actions from '../actionTypes'

// Empty Post
const post = {
  userId: null,
  id: null,
  title: '',
  body: '',
}

// Initial state for our store
let initialStore = {
  posts: [],
  loading: false,
  error: null,
  postDelete: {
    post,
    error: null,
    loading: null,
  },
  postPost: {
    post,
    error: null,
    loading: null,
  },
  updatePost: {
    post,
    error: null,
    loading: null,
  },
  inEditMode: false,
  inUpdateMode: false,
}

const fetchPostReducer = (state = initialStore, action) => {
  switch (action.type) {
    // Fetching Reducer
    case actions.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
        error: null,
      }
    case actions.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload.error,
      }

    // Deleting Reducer
    case actions.DELETE_POST_REQUEST:
      return {
        ...state,
        postDelete: {
          ...state.postDelete,
          loading: true,
          post: { id: action.payload.id },
        },
      }
    case actions.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
        postDelete: {
          ...state.postDelete,
          loading: false,
          error: null,
          post: {},
        },
      }
    case actions.DELETE_POST_FAILURE:
      return {
        ...state,
        postDelete: {
          ...state.postDelete,
          loading: false,
          error: action.payload.error,
          post: {},
        },
      }

    // Adding Reducer
    case actions.POST_POST_REQUEST:
      return {
        ...state,
        postPost: {
          ...state.postPost,
          loading: true,
          post: action.payload.post,
        },
      }
    case actions.POST_POST_SUCCESS:
      return {
        ...state,
        posts: [
          { ...action.payload.post, id: action.payload.post.userId },
          ...state.posts,
        ],
        postPost: {
          ...state.postPost,
          loading: false,
          post: {},
          error: null,
        },
      }
    case actions.POST_POST_FAILURE:
      return {
        ...state,
        postPost: {
          ...state.postPost,
          loading: false,
          error: action.payload.error,
          post: {},
        },
      }

    // Updating Reducer
    case actions.UPDATE_POST_REQUEST:
      return {
        ...state,
        inEditMode: false,
        inUpdateMode: false,
        updatePost: {
          ...state.updatePost,
          loading: true,
        },
      }
    case actions.UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.post.id) {
            return action.payload.post
          }
          return post
        }),
        inEditMode: false,
        inUpdateMode: false,
        updatePost: {
          ...state.updatePost,
          error: null,
          loading: false,
          post: {},
        },
      }
    case actions.UPDATE_POST_FAILURE:
      return {
        ...state,
        inEditMode: false,
        inUpdateMode: false,
        updatePost: {
          ...state.updatePost,
          loading: false,
          error: action.payload.error,
          post: {},
        },
      }
    // Toggle Reducer
    case actions.TOGGLE_EDIT_MODE:
      return {
        ...state,
        inEditMode: !state.inEditMode,
      }
    case actions.TOGGLE_UPDATE_MODE:
      return {
        ...state,
        inEditMode: true,
        inUpdateMode: true,
        updatePost: {
          ...state.updatePost,
          post: {
            ...state.posts.find((post) => post.id === action.payload.id),
          },
        },
      }
    default:
      return state
  }
}

export default fetchPostReducer
