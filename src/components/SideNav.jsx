import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/20/solid'
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


export default function SideNav(props) {

  return (

    <div className=" h-screen w-[240px] shrink-0 sticky top-0 p-3 ">
      <div className="bg-[#FCFBF9] border border-slate-100 h-full rounded-md hover:shadow transition-all ">

        <div className="flex h-12 shrink-0 items-center py-3 px-3 justify-between">
          <img
            alt="Composition Logo"
            src="src/assets/composition-logo.svg"
            className="h-8 w-auto"
          />

          <button
            type="button"
            className="rounded px-1 py-1 text-xs font-semibold hover:bg-[#f7f2eb]"
            onClick={() => {
              props.setNavCollapsed(false)
            }}
       
          >
            <ChevronDoubleLeftIcon className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        <NavTabs />

        <nav className="flex flex-1 flex-col px-2">
          <ul role="list" className="flex flex-1 flex-col gap-y-1">
            <li className='block pt-3 pb-1 pl-1 text-xs font-semibold text-gray-700'
            >Outline</li>
            <li>
              <ul role="list" className="mx-2 space-y-1 overflow-y-auto">

                {writingOutline.map((item) => (
                  <li key={item.name}>
                    {!item.children ? (
                      <a
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-[#f7f2eb] font-medium' : 'hover:bg-[#f7f2eb]',
                          'block rounded-md py-2 pl-8 pr-2 text-xs font-regular text-gray-700',
                        )}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Disclosure as="div" defaultOpen={true}>
                        <DisclosureButton
                          className={classNames(
                            item.current ? 'bg-[#f7f2eb]' : 'hover:bg-[#f7f2eb]',
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
                                  subItem.current ? 'bg-gray-50' : 'hover:bg-[#f7f2eb]',
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
    </div>
  )
}


/*

import { CheckCircleIcon } from '@heroicons/react/20/solid'

const steps = [
  { name: 'Create account', href: '#', status: 'complete' },
  { name: 'Profile information', href: '#', status: 'current' },
  { name: 'Theme', href: '#', status: 'upcoming' },
  { name: 'Preview', href: '#', status: 'upcoming' },
]

export default function Example() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <nav aria-label="Progress" className="flex justify-center">
        <ol role="list" className="space-y-6">
          {steps.map((step) => (
            <li key={step.name}>
              {step.status === 'complete' ? (
                <a href={step.href} className="group">
                  <span className="flex items-start">
                    <span className="relative flex size-5 shrink-0 items-center justify-center">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="size-full text-indigo-600 group-hover:text-indigo-800"
                      />
                    </span>
                    <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              ) : step.status === 'current' ? (
                <a href={step.href} aria-current="step" className="flex items-start">
                  <span aria-hidden="true" className="relative flex size-5 shrink-0 items-center justify-center">
                    <span className="absolute size-4 rounded-full bg-indigo-200" />
                    <span className="relative block size-2 rounded-full bg-indigo-600" />
                  </span>
                  <span className="ml-3 text-sm font-medium text-indigo-600">{step.name}</span>
                </a>
              ) : (
                <a href={step.href} className="group">
                  <div className="flex items-start">
                    <div aria-hidden="true" className="relative flex size-5 shrink-0 items-center justify-center">
                      <div className="size-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                    </div>
                    <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</p>
                  </div>
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}


*/