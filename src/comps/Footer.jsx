import React from 'react'

export default function Footer() {
  return (
    <div>
      <h6
        style={{
          textAlign: 'center',
          color: 'gray',
          fontWeight: 500,
          padding: '1em',
          margin: 0,
        }}
      >
        &copy; 2020, Made with{' '}
        <span role='img' aria-label='Heart'>
          🖤
        </span>{' '}
        by Aashish Maharjan
      </h6>
    </div>
  )
}
