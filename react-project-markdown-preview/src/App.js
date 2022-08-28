import React from 'react'
import { AiFillEye, AiFillEdit } from 'react-icons/ai'
import { data } from './data'
import ReactMarkdown from 'react-markdown'

function App() {
  const [value, setValue] = React.useState(data)

  return (
    <main className="App d-flex align-items-center flex-column">
      <h1 className='text-light'>Markdown Preview</h1>

      <section id='editor-section' className='rounded m-5'>
        <div className='
          w-100
          text-white
          bg-danger
          p-2
          fs-5
          border-danger
          border-bottom-dark
          rounded-top
          d-flex
          justify-content-between
      '>Editor<AiFillEdit /></div>
        <textarea
          id='editor'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className='
            rounded-bottom 
            border
            border-danger
            border-3
            border-top-0
            w-100
            m-0
            p-2
            fs-6
        '>
        </textarea>
      </section>

      <section id='preview-section'>
        <div className='
          text-white
          bg-success
          p-2
          fs-4
          border-success
          border-bottom-dark
          rounded-top
          d-flex
          justify-content-between'>Preview <AiFillEye /></div>
        <div id='preview' className='
            rounded-bottom 
            border
            border-success
            border-3
            border-top-0
            w-100
            m-0
            p-2
            text-dark
        '>
          <ReactMarkdown children={value}></ReactMarkdown >
        </div>
      </section>
    </main >
  );
}


export default App;
