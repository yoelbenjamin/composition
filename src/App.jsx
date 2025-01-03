import { useState } from 'react'
import { Container } from 'postcss'

import './App.css'

import HeaderCrumbs from './components/Breadcrumbs'
import ContentBody from './components/ContentBody'
import Toolbar from './components/Toolbar'
import MainNav from './components/MainNavigation'


function App() {

  const [viewingDocument, setViewingDocument] = useState(true);
  const [navOpen, setNavOpen] = useState(true);

  return (
    <>
      <div className="flex justify-start bg-[#F6F4F0]">
        
        { navOpen ? 
          (<MainNav
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          />) : (<HeaderCrumbs
          navOpen={navOpen}
          setNavOpen={setNavOpen}
        /> )}

        <ContentBody
          viewingDocument={viewingDocument}
          setViewingDocument={setViewingDocument}
        />

      </div>

    </>
  )
}

export default App
