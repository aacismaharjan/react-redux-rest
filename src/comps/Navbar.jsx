import React from 'react'
import { getThemeColor, setThemeColor } from './ColorTheme'

export default function Navbar() {
  const handleColorChange = (e) => {
    const color = e.target.value
    document.documentElement.style.setProperty('--primary', color)
    setThemeColor(color)
  }
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
        <form>
          <input
            type='color'
            name='color'
            className='color'
            defaultValue={getThemeColor() || '#000000'}
            onChange={handleColorChange}
          />
        </form>
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
