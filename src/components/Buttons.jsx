import React from "react"
import * as Icons from 'lucide-react';

export default function ButtonText({ buttonText }) {
  return (
    <button className="
    flex items-center gap-1 px-2 py-1 
    
    text-text-default hover:text-text-hover hover:bg-button-background
    
    text-sm font-normal rounded-full
    ">
      {buttonText}
    </button>
  )
}

export function ButtonIconLeft({ iconType, buttonText }) {

  const LeftIcon = Icons[iconType];

  return (
    <button className="
    flex items-center gap-1 px-2 py-1 
    
    text-text-default hover:text-text-hover hover:bg-button-background
    
    text-sm font-normal rounded-full
    ">
      <span className=" icon-wrapper
       flex justify-center items-center h-4 w-4">
        {LeftIcon ? React.createElement(LeftIcon, { size: 12 }) : null}
      </span>
      {buttonText}
    </button>
  )
}

export function ButtonIconRight({ iconType, buttonText }) {

  const RightIcon = Icons[iconType];

  return (
    <button className="
    flex items-center gap-1 px-2 py-1 
    
    text-text-default hover:text-text-hover hover:bg-button-background
    
    text-sm font-normal rounded-full
    ">
      {buttonText}
      <span className=" icon-wrapper
       flex justify-center items-center h-4 w-4">
        {RightIcon ? React.createElement(RightIcon, { size: 12 }) : null}
      </span>
    </button>
  )
}


export function ButtonIconBoth({ iconTypeLeft, iconTypeRight, buttonText }) {

  const LeftIcon = Icons[iconTypeLeft];
  const RightIcon = Icons[iconTypeRight];

  return (
    <button className="
    flex items-center gap-1 px-2 py-1 
    
    text-text-default hover:text-text-hover hover:bg-button-background
    
    text-sm font-normal rounded-full
    ">
      <span className=" icon-wrapper
       flex justify-center items-center h-4 w-4">
        {LeftIcon ? React.createElement(LeftIcon, { size: 12 }) : null}
      </span>
      {buttonText}
      <span className=" icon-wrapper
       flex justify-center items-center h-4 w-4">
        {RightIcon ? React.createElement(RightIcon, { size: 12 }) : null}
      </span>

    </button>
  )
}

export function ButtonIndented() {

}