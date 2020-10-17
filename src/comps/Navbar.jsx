import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <a
        href='https://www.instagram.com/aacismaharjan'
        target='_blank'
        rel='noopener noreferrer'
      >
        Aashish Maharjan
      </a>
      <div className='right-side'>
        <a
          className='btn btn-sm'
          href='https://github.com/aacismaharjan/react-redux-rest.git'
          target='_blank'
          rel='noopener noreferrer'
        >
          Source Code
        </a>
      </div>
    </nav>
  )
}
