
import React from 'react'
import ProfileTabs from './components/ProfileTabs'
import ProfileDashboard from './components/ProfileDashboard'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <>
      <div className='flex items-center justify-center flex-col gap-7  py-5'>
        <ProfileTabs />
        <Gallery />
      </div>
    </>
  )
}

export default App
