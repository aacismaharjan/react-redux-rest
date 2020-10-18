import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Toast = ({ postDelete, postPost, updatePost }) => {
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (postDelete.error) setToast(postDelete.error)
    else if (postDelete.loading) setToast('Deleting post....')
    else if (postPost.error) setToast(postPost.error)
    else if (postPost.loading) setToast('Adding a post...')
    else if (updatePost.error) setToast(updatePost.error)
    else if (updatePost.loading) setToast('Updating a post...')
    else setToast(null)
  }, [postDelete, postPost, updatePost])

  return toast && <h4 className='alert'>{toast}</h4>
}

const mapStateToProps = (store) => {
  const { postDelete, postPost, updatePost } = store.postReducer
  return { postDelete, postPost, updatePost }
}

export default connect(mapStateToProps)(Toast)
