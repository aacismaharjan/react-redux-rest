import React from 'react'
import { CardContainer, CreatePost, Toast, Navbar, Footer } from './comps'
import { ApplyThemeColor } from './comps/ColorTheme'

const App = () => {
  ApplyThemeColor()
  return (
    <>
      <Navbar />
      <CreatePost />
      <CardContainer />
      <Toast />
      <Footer />
    </>
  )
}

export default App
