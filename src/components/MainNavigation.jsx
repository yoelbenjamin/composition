import { PanelLeft, Circle, Search } from 'lucide-react';

import { LinkIconLeft, LinkIconBoth } from './Buttons'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

export default function MainNav(props) {

  let Folders = [{
    id: 1,
    href: '',
    current: false,
    folderName: 'All Folders',
    iconType: 'Folders',
    children: null
  },{
    id: 2,
    href: '',
    current: false,
    folderName: 'Video Scripts',
    iconType: 'Folder',
    children: [
      { id: 1.2, href: '', current: false, folderName: 'Notes', iconType: 'FileText' },
      { id: 1.3, href: '', current: false, folderName: 'Notes', iconType: 'FileText' },{ id: 1.1, href: '', current: false, folderName: 'Dissertation', iconType: 'Folder' }
    ]
  }, {
    id: 3,
    href: '',
    current: false,
    folderName: 'Social Content',
    iconType: 'Folder',
    children: null
  }, {
    id: 4,
    href: '',
    current: false,
    folderName: 'Research',
    iconType: 'Folder',
    children: null
  }, {
    id: 5,
    href: '',
    current: false,
    folderName: 'New Folder',
    iconType: 'Plus',
    children: null
  }];

  return (
    <div className='flex'>
      <div className='flex'>
        <nav className='flex flex-shrink-0 sticky top-0 py-6 px-4 w-[190px] h-screen overflow-auto '>

          <ul role="list" className="flex flex-col gap-10 w-full h-full">

            <li className='flex flex-col gap-5'>
              <div className='flex justify-between pl-3'>

                <div className='flex items-center gap-1'>
                  <Circle size={12} color='#CDCCC9' />
                  <Circle size={12} color='#CDCCC9' />
                  <Circle size={12} color='#CDCCC9' />
                </div>
                  <button onClick={()=> {
                    props.setNavOpen(false)
                  }}><PanelLeft size={16} color='#676562' /></button>
              </div>

              <div className='flex flex-col gap-[1px]'>

                <LinkIconLeft linkText={"Search"} iconType={"Search"} />

                <LinkIconLeft linkText={"Drafts"} iconType={"NotebookPen"} />
              </div>
             </li>



          <li>
            <div className='text-xs text-text-default pl-3 pb-1'
            >Folders</div>

            <ul role="list" className="flex flex-col justify-end gap-px overflow-y-auto">


              {Folders.map((item) => (

                <li key={item.id}>
                  {!item.children ? (
                    <LinkIconLeft linkText={item.folderName} iconType={item.iconType} />
                  ) : (
                    <Disclosure as="div" defaultOpen={false}>

                      <DisclosureButton className="w-full">
                        {({ open }) => (
                          <LinkIconBoth as="a" linkText={item.folderName} iconTypeLeft={item.iconType} iconTypeRight={open ? 'ChevronUp' : 'ChevronDown'} />
                        )}
                      </DisclosureButton>

                      <DisclosurePanel as="ul">
                        {item.children.map((subItem) => (
                          <li key={subItem.id}>
                            <Disclosure.Button className="pl-1 w-full">
                              <LinkIconLeft linkText={subItem.folderName} iconType={subItem.iconType} />
                            </Disclosure.Button>
                          </li>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>

                  )}
                </li>

              ))}

            </ul>

          </li>

          <li className='h-full'></li>

          <li>
              <ul className='flex flex-col gap-px'>
              <li>
                <LinkIconLeft linkText={"Settings"} iconType={"Cog"} />
              </li>
              <li>
                <LinkIconLeft linkText={"Support"} iconType={"Info"} />
              </li>
              <li>
                <LinkIconLeft linkText={"Shortcuts"} iconType={"Command"} />
              </li>
              <li>
                <LinkIconLeft linkText={"Upgrade"} iconType={"CloudUpload"} />
              </li>           
              
              </ul>
          </li>
          </ul>

        </nav>
        <div className='h-full w-[1px] bg-divider-app'></div>
      </div>
    </div>
  )
}
