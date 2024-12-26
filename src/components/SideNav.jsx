import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import NavTabs from './NavTabs'
  

const writingOutline = [
  { name: 'Title Page', href: '#', current: true },
  {
    name: 'Context',
    current: false,
    children: [
      { name: 'Preface and acknowledgements', href: '#' },
      { name: 'Abstract', href: '#' },
      { name: 'Table of Contents', href: '#' },
    ],
  },
  {
    name: 'List & Glossary',
    current: false,
    children: [
      { name: 'List of figures and tables', href: '#' },
      { name: 'List of abbreviations', href: '#' },
      { name: 'Glossary', href: '#' },
    ],
  },
  { name: 'Introduction', href: '#', current: false },
  { name: 'Literature Review', href: '#', current: false },
  { name: 'Methodology', href: '#', current: false },
  { name: 'Results', href: '#', current: false },
  { name: 'Discussion', href: '#', current: false },
  { name: 'Conclusion', href: '#', current: false },
  { name: 'Reference List', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Example() {
  return (
    <div className="bg-[#FDFDFC] shadow-[inset_-1px_0px_0px_0px_rgba(0,0,0,0.024)] h-screen w-[240px] shrink-0">

      <div className="flex h-12 shrink-0 items-center py-3 px-3">
        <img
          alt="Composition Logo"
          src="src/assets/composition-logo.svg"
          className="h-8 w-auto"
        />
      </div>

      <NavTabs />

      <nav className="flex flex-1 flex-col px-2">
        <ul role="list" className="flex flex-1 flex-col gap-y-1">
        <li className='block pt-3 pb-1 pl-2 text-xs font-semibold text-gray-700'
              >Outline</li>
          <li>
            <ul role="list" className="mx-2 space-y-1">
            
              {writingOutline.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'block rounded-md py-2 pl-8 pr-2 text-xs font-regular text-gray-700',
                      )}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div" defaultOpen={true}>
                      <DisclosureButton
                        className={classNames(
                          item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                          'group flex w-full items-center gap-x-2 rounded-sm p-2 text-left text-xs font-regular text-gray-700',
                        )}
                      >
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-4 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                        />
                        {item.name}
                      </DisclosureButton>
                      <DisclosurePanel as="ul">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            <DisclosureButton
                              as="a"
                              href={subItem.href}
                              className={classNames(
                                subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                'block rounded-md py-2 pl-8 pr-2 text-xs text-gray-700',
                              )}
                            >
                              {subItem.name}
                            </DisclosureButton>
                          </li>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}
