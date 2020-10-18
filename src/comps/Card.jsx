import React from 'react'
import { connect } from 'react-redux'
import { removePost } from '../redux/actions'
import * as actions from '../redux/actionTypes'

function Card({ post, removePost, postDelete, updatePost, toggleUpdateMode }) {
  const { id, title, body } = post

  const EditButton = () => (
    <span className='card-edit' onClick={toggleUpdateMode}>
      {updatePost.post.id === id && updatePost.loading ? 'Editing...' : 'Edit'}
    </span>
  )

  const DeleteButton = () => (
    <span className='card-delete' onClick={removePost}>
      {postDelete.post.id === id && postDelete.loading
        ? 'Deleting...'
        : 'Delete'}
    </span>
  )

  // let postId = id.toString().padString(2, '0')
  let postId = id.toString().padStart(2, '0')

  return (
    <div className='card'>
      <h2>
        <span className='card-id'>{postId}</span>
        <span className='card-title'>{title}</span>
        <EditButton />
        <DeleteButton />
      </h2>
      <p>{body}</p>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    post: { id },
  } = ownProps
  return {
    removePost: () => dispatch(removePost(id)),
    toggleUpdateMode: () =>
      dispatch({ type: actions.TOGGLE_UPDATE_MODE, payload: { id } }),
  }
}

const mapStateToProps = (store) => {
  const { postDelete, updatePost } = store.postReducer
  return {
    postDelete,
    updatePost,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
