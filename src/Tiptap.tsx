// src/Tiptap.tsx
import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// define your extension array
const extensions = [StarterKit]

const content = "<p>Call me Ishmael. Some years ago- never mind how long precisely- having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul;</p>"

const Tiptap = () => {
  return (
    <div className='p-6 w-full'>
      <EditorProvider 
        extensions={extensions} 
        content={content}
        editorContainerProps={{ 
          className: 'overflow-hidden bg-white px-12 py-12 shadow sm:rounded-md sm:px-12 w-full min-h-[1056px] autofocus-none' }}
        >
        <FloatingMenu editor={null}>Start typing...</FloatingMenu>
        <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
      </EditorProvider>
    </div>
    
  )
}

export default Tiptap
