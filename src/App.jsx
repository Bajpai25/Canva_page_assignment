import React from 'react'
import Navbar from './assets/components/Navbar'
import Sidebar from './assets/components/Sidepane/Sidebar'
import Hero_img from './assets/components/Hero_section/Hero_img'

function App() {
  return (
    <div>
     <Navbar/>
     <div className='flex flex-row justify-between w-auto '> 
     <Sidebar/>
     <Hero_img/>
     </div>
    </div>
  )
}

export default App
