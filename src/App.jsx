import { useState } from 'react'
import { Container } from 'postcss'

import './App.css'
import SideNav from './components/SideNav'
import HeaderCrumbs from './components/Breadcrumbs'
import ContentBody from './components/ContentBody'
import Toolbar from './components/Toolbar'
import MainNav from './components/MainNavigation'


function App() {

  const [viewingDocument, setViewingDocument] = useState(true);
  const [navCollapsed, setNavCollapsed] = useState(true);

  return (
    <>
      <div className="flex justify-start bg-[#F6F4F0]">

        <MainNav />

        {/*navCollapsed && <SideNav
          navCollapsed={navCollapsed}
          setNavCollapsed={setNavCollapsed}
        />8*/}
        {!navCollapsed && <HeaderCrumbs
          navCollapsed={navCollapsed}
          setNavCollapsed={setNavCollapsed}
        />}
        <ContentBody
          viewingDocument={viewingDocument}
          setViewingDocument={setViewingDocument}
        />
        {viewingDocument && <Toolbar />}

      </div>

    </>
  )
}

export default App
