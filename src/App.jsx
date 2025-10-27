
import React from 'react'
import ProfileTabs from './components/ProfileTabs'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2  w-full min-h-screen p-5 md:p-10  overflow-hidden'>
        <div className='hidden  md:block w-full bg-transparent'>
        </div>
        <div className='flex items-center justify-center  flex-col gap-6 w-full'>
          <div className='w-full max-w-[720px]'>
            <ProfileTabs />
          </div>
          <div className=' w-full max-w-[612px] rounded-[3px] hr  bg-[#404040] p-[4px] '></div>
          <div className='w-full max-w-[720px]'>
            <Gallery />
          </div>
          <div className=' w-full max-w-[612px] rounded-[3px] hr  bg-[#404040] p-[4px] '></div>
        </div>
      </div>
    </>
  )
}

export default App
