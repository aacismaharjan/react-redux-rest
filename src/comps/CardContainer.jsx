import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import Loading from './Loading'

function CardContainer({ loading, error, posts }) {
  if (loading) return <Loading />
  if (error)
    return (
      <div style={{ padding: '2em', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>:(</h1>
        <h5 style={{ margin: 0 }}>Something went wrong!</h5>
      </div>
    )

  return (
    <div className='post-section'>
      <div className='card-container'>
        {posts && posts.map((post) => <Card key={post.id} post={post} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (store) => {
  const { error, loading, posts } = store.postReducer
  return { error, loading, posts }
}

export default connect(mapStateToProps)(CardContainer)
