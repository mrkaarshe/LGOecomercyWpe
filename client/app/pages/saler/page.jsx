"use client"
import { ArrowLeft, ArrowRightLeft, ListPlus, PackagePlus, ShoppingBag } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import Saler from '../../../components/Saler'
import AddProducts from '@/components/AddProducts'
import SallerDashboard from '@/components/SallerDashboard'
const page = () => {
    const [isopen ,setIsopen] = useState(false)
  return (
    <div className='overflow-x-hidden w-screen'>
      <SallerDashboard/>
    </div>
   
  )
}

export default page