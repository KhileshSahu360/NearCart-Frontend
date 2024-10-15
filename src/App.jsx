import { useState } from 'react'
import './App.css'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import Sidenav from './components/Sidenav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='grid grid-cols-10 gap-2'>
        <div className=' col-span-2 min-h-[calc(100vh-65px)] lg:block hidden md:block  md:border lg:border lg:relative md:relative lg:top-[65px] md:top-[65px]'> 
          <Sidenav/>
        </div>
        <div className='lg:col-span-8 col-span-10 md:col-span-7 p-4 pr-0 lg:mt-20 md:mt-20   mr-0 '>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App
