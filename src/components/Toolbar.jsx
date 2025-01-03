import { ChevronDown, Bold, Italic, Underline, Highlighter, Link2, Strikethrough, List, ListOrdered, Library, TextSearch } from 'lucide-react';

export default function Toolbar() {
  return (
    <div className="flex flex-row items-center rounded-md p-0.5 gap-1 bg-white border-[1px] border-button-border max-w-fit">


      <button
        className="flex items-center justify-between gap-0 pl-2 pr-0.5 py-0.5 w-auto

          text-text-default hover:text-text-hover hover:bg-button-hover-grey

          text-xs font-normal rounded">
        Heading 2
        <span className=" icon-wrapper
            flex justify-center items-center h-5 w-5">

          <ChevronDown size={12} />
        </span>
      </button>


      <div className="h-5 w-[1px] bg-button-hover-grey rounded-lg"></div>

      <div className="flex gap-1">
        <button className=" icon-wrapper
            flex justify-center items-center h-5 w-5 button rounded text-text-default hover:bg-button-hover-grey hover:text-text-hover">
          <Bold size={12} />
        </button>
        <button className=" icon-wrapper
            flex justify-center items-center h-5 w-5 button rounded text-text-default hover:bg-button-hover-grey hover:text-text-hover">
          <Italic size={12} />
        </button>
        <button className=" icon-wrapper
            flex justify-center items-center h-5 w-5 button rounded text-text-default hover:bg-button-hover-grey hover:text-text-hover">
          <Underline size={12} />
        </button>
        <button className=" icon-wrapper
            flex justify-center items-center h-5 w-5 button rounded text-text-default hover:bg-button-hover-grey hover:text-text-hover">
          <Strikethrough size={12} />
        </button>
      </div>

      <div className="h-5 w-[1px] bg-button-hover-grey rounded-lg"></div>

      <div className="flex gap-1">
        <button className=" icon-wrapper
            flex justify-center items-center h-5 w-5 button rounded text-text-default hover:bg-button-hover-grey hover:text-text-hover">
          <List size={12} />
        </button>
        <button className=" icon-wrapper
            flex justify-center items-center h-5 w-5 button rounded text-text-default hover:bg-button-hover-grey hover:text-text-hover">
          <ListOrdered size={12} />
        </button>
      </div>

      <div className="h-5 w-[1px] bg-button-hover-grey rounded-lg"></div>


      <button className="icon-wrapper flex justify-center items-center h-5 w-5 button rounded text-text-default hover:bg-button-hover-grey hover:text-text-hover">
        <Link2 size={12} />
      </button>


      <div className="h-5 w-[1px] bg-button-hover-grey rounded-lg"></div>


      <button className="icon-wrapper flex justify-center items-center h-5 w-5 button rounded text-text-default hover:bg-button-hover-grey hover:text-text-hover">
        <Highlighter size={12} />
      </button>


      <div className="h-5 w-[1px] bg-button-hover-grey rounded-lg"></div>

      <button
        className="flex items-center justify-between gap-0 pl-1 pr-2 py-0.5 w-auto

          text-text-default hover:text-text-hover hover:bg-button-hover-grey

          text-xs font-normal rounded">
        <span className=" icon-wrapper
            flex justify-center items-center h-5 w-5">

          <TextSearch size={12} />
        </span>
        Find citation

      </button>
    </div >

  )
}
