import ButtonText, { ButtonIconLeft, ButtonIconRight, ButtonIconBoth } from './Buttons'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

export default function MainNav() {


  return (

    <>
      <ButtonText buttonText={"Research"} />
      <ButtonIconLeft buttonText={"Research"} iconType={"Folder"} />

      <ButtonIconRight buttonText={"Text Goes Here"} iconType={"Folder"} />

      <ButtonIconBoth buttonText={"Text Goes Here"} iconTypeLeft={"Folder"} iconTypeRight={"Folder"} />


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
    </>
  )
}


