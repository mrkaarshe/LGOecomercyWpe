"use client"
import { ArrowLeft, ArrowRightLeft, ListPlus, PackagePlus, ShoppingBag } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import Saler from '../../../components/Saler'
import AddProducts from '@/components/AddProducts'
const page = () => {
    const [isopen ,setIsopen] = useState(false)
  return (
    <div className='overflow-hidden'>
      <AddProducts/>
    </div>
   
  )
}

export default page