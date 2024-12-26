
import React from 'react'
import { useState } from 'react'


const tabs = [
  { name: 'Document', href: '#', current: true },
  /*{ name: 'Assets', href: '#', current: false },*/
  { name: 'Resources', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavTabs() {
  return (
    <>      
      <div className=" sm:block border-slate-200 border border-x-0 py-2 px-2 ">
        <nav aria-label="Tabs" className="flex space-x-1">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? 'page' : undefined}
              className={classNames(
                tab.current ? 'bg-gray-100 text-gray-700 font-semibold' : 'text-gray-500 hover:text-gray-700 font-medium',
                'rounded-md px-2 py-1 text-xs',
              )}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
