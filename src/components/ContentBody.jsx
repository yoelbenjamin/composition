
import ContentPage from './ContentPage'
import Toolbar from './Toolbar'

export default function ContentBody() {

  const items = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    // More items...
  ]

  return (
    <div className="flex flex-col w-full justify-center">
       <Toolbar />
      <div className='flex justify-center'>
        <ul role="list" className="space-y-3 mt-16 mb-3 w-[816px]">
        {items.map((item) => (
          <li key={item.id} className="overflow-hidden bg-white px-12 py-12 shadow sm:rounded-md sm:px-12 min-h-[1056px]">
            <h6>Page content will go here</h6>
          </li>
        ))}
        </ul>
      </div>
      
    </div>
  )
}
