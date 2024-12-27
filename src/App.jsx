import { useState } from 'react'

import './App.css'
import SideNav from './components/SideNav'
import HeaderCrumbs from './components/Breadcrumbs'
import ContentBody from './components/ContentBody'
import Toolbar from './components/Toolbar'
import { Container } from 'postcss'

function App() {

  const [viewingDocument, setViewingDocument] = useState(true);
  const [navCollapsed, setNavCollapsed] = useState(true);

  return (
    <>
      <div className="flex justify-start bg-[#FDFDFC]">
        { navCollapsed && <SideNav
          navCollapsed={navCollapsed}
          setNavCollapsed={setNavCollapsed}
        /> }
        { !navCollapsed && <HeaderCrumbs
          navCollapsed={navCollapsed}
          setNavCollapsed={setNavCollapsed}
          /> }
        <ContentBody 
          viewingDocument={viewingDocument}
          setViewingDocument={setViewingDocument}
        />
        { viewingDocument && <Toolbar /> }
      </div>

    </>
  )
}

export default App
