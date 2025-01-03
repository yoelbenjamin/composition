import { PencilIcon, BookOpenIcon, LinkIcon } from '@heroicons/react/24/outline'

export default function Toolbar() {
  return (
    <div>
      <div className="sticky top-1/3 m-3">
        <span className=" flex flex-col shadow-sm">

          <button
            type="button"
            className="relative inline-flex items-center rounded-t-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Previous</span>
            <PencilIcon aria-hidden="true" className="size-5" />
          </button>

          <button
            type="button"
            className="relative -mt-px inline-flex items-center rounded-b-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Next</span>
            <BookOpenIcon aria-hidden="true" className="size-5" />
          </button>

        </span>
      </div>
    </div>
  )
}
