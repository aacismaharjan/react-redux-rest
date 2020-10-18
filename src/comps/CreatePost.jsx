import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, postPost, patchPost } from '../redux/actions'
import * as actions from '../redux/actionTypes'

// For generating ID's
let postId = 100

function CreatePost({
  fetchPosts,
  addPost,
  dispatch,
  inEditMode,
  inUpdateMode,
  updatePost,
  patchPost,
  toggleEditMode,
}) {
  const [post, setPost] = useState({
    userId: 0,
    id: 0,
    title: '',
    body: '',
  })

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  useEffect(() => {
    setPost({ ...updatePost.post })
  }, [inUpdateMode, updatePost])

  // Handles form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!(post.title && post.body)) return

    dispatch({ type: actions.TOGGLE_EDIT_MODE })
    if (inUpdateMode) patchPost(post)
    else addPost({ ...post, id: ++postId, userId: postId })
    setPost({ ...post, title: '', body: '' })
  }

  // Handles form changes
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  return (
    <div className='card-creation-section'>
      <div className='action-buttons'>
        {!inEditMode && <button onClick={toggleEditMode}>Add Post</button>}
      </div>

      {inEditMode && (
        <div className='overlay'>
          <form spellCheck='false'>
            <h3 style={{ margin: 0 }}>
              {inUpdateMode ? `Update Post: [${post.id}]` : 'Add Post'}
            </h3>
            <input
              type='text'
              placeholder='Enter title'
              name='title'
              value={post.title || ''}
              onChange={handleChange}
            />
            <textarea
              type='text'
              placeholder='Enter body'
              name='body'
              value={post.body || ''}
              onChange={handleChange}
            />
            <div>
              <button onClick={handleSubmit} style={{ marginRight: '1em' }}>
                {inUpdateMode ? 'Update Post' : 'Add Post'}
              </button>

              {inEditMode && (
                <button
                  type='button'
                  className='btn-secondary'
                  onClick={toggleEditMode}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (store) => {
  const { updatePost, inEditMode, inUpdateMode } = store.postReducer
  return { updatePost, inEditMode, inUpdateMode }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    addPost: (p) => dispatch(postPost(p)),
    patchPost: (p) => dispatch(patchPost(p)),
    toggleEditMode: () => dispatch({ type: actions.TOGGLE_EDIT_MODE }),
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
