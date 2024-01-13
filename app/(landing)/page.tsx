import React from 'react'
import Link from 'next/link'
import { SignInButton, SignUpButton} from '@clerk/nextjs'

const Landingpage = () => {
  return (
    <div>
      <Link href="/sign-in"  >
        <SignInButton>Sign in</SignInButton>
      </Link>
      <Link href="/sign-up"  >
        <SignUpButton>Sign up</SignUpButton>
      </Link>
      
    </div>
  )
}

export default Landingpage
