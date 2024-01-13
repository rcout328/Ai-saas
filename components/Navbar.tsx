"use client";


import React from 'react'
import { Button } from './ui/button'
import { UserButton } from '@clerk/nextjs'
import {Menu} from 'lucide-react'
import { MobileSidebar } from '@/components/Mobiile-navbar'
const Navbar = () => {
  return (
    <div className="flex items-center p-4">
     <MobileSidebar/>
    <div className="justify-end flex w-full">
    <UserButton afterSignOutUrl="/"/>
    </div>
    </div>
  )
}

export default Navbar
