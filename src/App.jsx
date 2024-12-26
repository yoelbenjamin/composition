import { useState } from 'react'

import SideNav from './components/SideNav'
import HeaderCrumbs from './components/Breadcrumbs'
import Content from './components/Content'
import RightNavPill from './components/RightNavPill'


import './App.css'
import { Container } from 'postcss'

function App() {
  

  return (
    <>
      <div className="flex row justify-start items-start">
      <SideNav />
      <HeaderCrumbs />
      <Content />
      </div>
 
    </>
  )
}

export default App
