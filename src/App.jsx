import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/Main'
import './index.css';
const App=()=> {
  return (
    <div className='main'>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App
