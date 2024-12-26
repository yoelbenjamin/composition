import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function Content() {
  return (
    <section className=" flex h-screen w-full justify-center">
      <div className="border-b border-gray-200 m-20 pb-5 w-2/3 max-h-min">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <div className="sm:w-0 sm:flex-1">
            <h1 id="message-heading" className="text-base font-semibold text-gray-900">
              Title Page
            </h1>
            <p className="mt-1 truncate text-sm text-gray-500">Some other text</p>
          </div>

          <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:shrink-0 sm:justify-start">
            <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
              <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-red-500">
                <circle r={3} cx={3} cy={3} />
              </svg>
              Incomplete
            </span>
            <Menu as="div" className="relative ml-3 inline-block text-left">
              <div>
                <MenuButton className="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">

                  <MenuItem>
                    <a
                      href="#"
                      className="flex justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      <span>Duplicate</span>
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <button
                      type="button"
                      className="flex w-full justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      <span>Delete</span>
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </section>
  )
}
