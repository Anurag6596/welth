import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <SignIn />
  )
}

export default Page; 
// this inside the app directory is used to render the sign-in page and will be ignored because of the catch-all route in the path