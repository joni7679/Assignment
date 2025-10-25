
import React from 'react'
import ProfileTabs from './components/ProfileTabs'
import ProfileDashboard from './components/ProfileDashboard'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 p-5 w-full'>
        <div>
        </div>
        <div className='flex items-center justify-center  gap-5 flex-col  py-5 relative'>
          <ProfileTabs />
          <div className='w-[612px] rounded-[3px] hr  bg-[#404040] p-[4px] '></div>
          <Gallery />
          <div className='w-[612px] rounded-[3px] hr  bg-[#404040] p-[4px] absolute bottom-0'></div>
        </div>
      </div>
    </>
  )
}

export default App
