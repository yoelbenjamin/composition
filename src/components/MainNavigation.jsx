import { PanelLeft, Circle, Search } from 'lucide-react';

import ButtonText, { ButtonIconLeft, ButtonIconRight, ButtonIconBoth } from './Buttons'

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

                <div className='flex gap-1'>
                  <Circle size={12} color='#CDCCC9' />
                  <Circle size={12} color='#CDCCC9' />
                  <Circle size={12} color='#CDCCC9' />
                </div>
                  <button onClick={()=> {
                    props.setNavOpen(false)
                  }}><PanelLeft size={16} color='#676562' /></button>
              </div>

              <div className='flex flex-col gap-[1px]'>

                <ButtonIconLeft buttonText={"Search"} iconType={"Search"} />

                <ButtonIconLeft buttonText={"Drafts"} iconType={"NotebookPen"} />
              </div>
             </li>



          <li>
            <div className='text-xs text-text-default pl-3 pb-1'
            >Folders</div>

            <ul role="list" className="flex flex-col justify-end gap-px overflow-y-auto">


              {Folders.map((item) => (

                <li key={item.id}>
                  {!item.children ? (
                    <ButtonIconLeft buttonText={item.folderName} iconType={item.iconType} />
                  ) : (
                    <Disclosure as="div" defaultOpen={false}>

                      <DisclosureButton className="w-full">
                        {({ open }) => (
                          <ButtonIconBoth as="a" buttonText={item.folderName} iconTypeLeft={item.iconType} iconTypeRight={open ? 'ChevronUp' : 'ChevronDown'} />
                        )}
                      </DisclosureButton>

                      <DisclosurePanel as="ul">
                        {item.children.map((subItem) => (
                          <li key={subItem.id}>
                            <Disclosure.Button className="pl-1 w-full">
                              <ButtonIconLeft buttonText={subItem.folderName} iconType={subItem.iconType} />
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
                <ButtonIconLeft buttonText={"Settings"} iconType={"Cog"} />
              </li>
              <li>
              <ButtonIconLeft buttonText={"Support"} iconType={"Info"} />
              </li>
              <li>
              <ButtonIconLeft buttonText={"Shortcuts"} iconType={"Command"} />
              </li>
              <li>
              <ButtonIconLeft buttonText={"Upgrade"} iconType={"CloudUpload"} />
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
