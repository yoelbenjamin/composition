import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'A Deep Learning Appr...', href: '#', current: false },
  { name: 'Document', href: '#', current: true },
]

export default function HeaderCrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="relative">
      <ol role="list" className="absolute flex items-center space-x-2 mx-4 my-3">
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <HomeIcon aria-hidden="true" className="size-4 shrink-0" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className='flex'>
            <div className="flex items-center">
              <ChevronRightIcon aria-hidden="true" className="size-4 shrink-0 text-gray-400" />
              <a
                href={page.href}
                aria-current={page.current ? 'page' : undefined}
                className="ml-1 text-xs font-medium min-w-max shrink-0 text-gray-500 hover:text-gray-700"
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
