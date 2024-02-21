import { UserButton } from '@clerk/nextjs'
import React from 'react'

const SetupPage = () => {
  return (
    <div className=' h-screen'>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default SetupPage