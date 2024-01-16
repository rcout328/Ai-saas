import { LandingContent } from '@/components/landingcontent'
import { LandingHero } from '@/components/landinghero'
import { LandingNavbar } from '@/components/landingnavbar'

import React from 'react'

const page = () => {
  return (
    <div>
      <LandingNavbar/>
      <LandingHero/>
      <LandingContent/>
      
    </div>
  )
}

export default page
