import React from "react"
import * as Icons from 'lucide-react';

export default function LinkText({ linkText }) {
  return (
    <a href="javascript:void(0)" className="
    flex items-center gap-1 px-2 py-1 w-full
    
    text-text-default hover:text-text-hover hover:bg-button-background
    
    text-sm font-normal rounded-full
    ">
      {linkText}
    </a>
  )
}

export function LinkIconLeft({ iconType, linkText }) {

  const LeftIcon = Icons[iconType];

  return (
    <a href="javascript:void(0)" className="
    flex items-center gap-1 px-2 py-1 w-full
    
    text-text-default hover:text-text-hover hover:bg-button-background
    
    text-sm font-normal rounded-full
    ">
      <span className=" icon-wrapper
       flex justify-center items-center h-5 w-5">
        {LeftIcon ? React.createElement(LeftIcon, { size: 12 }) : null}
      </span>
      {linkText}
    </a>
  )
}

export function LinkIconRight({ iconType, linkText }) {

  const RightIcon = Icons[iconType];

  return (
    <a href="javascript:void(0)" className="
    flex items-center justify-between gap-1 px-2 py-1 w-full
    
    text-text-default hover:text-text-hover hover:bg-button-background
    
    text-sm font-normal rounded-full
    ">
      {linkText}
      <span className=" icon-wrapper
       flex justify-center items-center h-5 w-5">
        {RightIcon ? React.createElement(RightIcon, { size: 12 }) : null}
      </span>
    </a>
  )
}


export function LinkIconBoth({ iconTypeLeft, iconTypeRight, linkText }) {

  const LeftIcon = Icons[iconTypeLeft];
  const RightIcon = Icons[iconTypeRight];

  return (
    <a href="javascript:void(0)" className="
    flex items-center justify-between px-2 py-1 w-full
    
    text-text-default hover:text-text-hover hover:bg-button-background
    
    text-sm font-normal rounded-full
    ">
      <span className="flex gap-1">
        <span className=" icon-wrapper
       flex justify-center items-center h-5 w-5">
        {LeftIcon ? React.createElement(LeftIcon, { size: 12 }) : null}
        </span>
        {linkText}
      </span>
      <span className=" icon-wrapper
       flex justify-center items-center h-5 w-5">
        {RightIcon ? React.createElement(RightIcon, { size: 16 }) : null}
      </span>
    </a>
  )
}
