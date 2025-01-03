import { PanelLeft, Circle, Search } from 'lucide-react';

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'A Deep Learning Appr...', href: '#', current: false },
  { name: 'Document', href: '#', current: true },
]

export default function HeaderCrumbs(props) {
  return (

    <div>
      <nav aria-label="Breadcrumb" className="sticky top-0">
        <ol role="list" className="absolute flex justify-between w-[90px] pl-3 mt-6 ml-4 h-auto">

          <li className='flex items-center gap-1 h-4'>
            <Circle size={12} color='#CDCCC9' />
            <Circle size={12} color='#CDCCC9' />
            <Circle size={12} color='#CDCCC9' />
          </li>

          <li className="flex align-top h-4">
            <button onClick={() => {
              props.setNavOpen(true)
            }}><PanelLeft size={16} color='#676562' /></button>
          </li>

        </ol>
      </nav>
    </div >
  )
}
