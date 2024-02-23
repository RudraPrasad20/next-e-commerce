"use client"

import { Modal } from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'
import { UserButton } from '@clerk/nextjs'
import React, { useEffect } from 'react'

const SetupPage = () => {
  const onopen = useStoreModal((state) => state.onopen)
  const isopen = useStoreModal((state) => state.isopen)
  // const { onopen, isopen } = useStoreModal()

  useEffect(()=>{
    if(!isopen){
      onopen()
    }
  },[isopen,onopen])

  return (
    <div className=' p-4'>
      Root page
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default SetupPage