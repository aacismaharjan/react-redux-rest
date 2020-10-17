import React from 'react'
import { CardContainer, CreatePost, Toast, Navbar, Footer } from './comps'

const App = () => {
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
