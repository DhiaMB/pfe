import React from 'react'
import { UserJSON } from '@clerk/nextjs/server'
import { UserProfile } from '@clerk/nextjs'
const Profilepage = () => {
  return (
    <div>
      <UserProfile />
    </div>
  )
}

export default Profilepage
