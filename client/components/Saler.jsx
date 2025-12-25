"use client"
import { ArrowLeft, ArrowRightLeft, List, ListPlus, PackagePlus, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
const page = () => {
    const [isopen ,setIsopen] = useState(false)
  return (
    <div className={`-translate-x-28  md:translate-0 ${isopen ? "translate-x-0" : ""}   bottom-0 absolute top-24 md:top-2 z-50  left-2 md:left-2  md:relative  min-h-[90vh]`}>
        <aside  className={`${isopen ? "w-[100px] md:w-60 transition-all rounded-2xl " : "w-[100px] rounded-full"}  relative  min-h-[95%] w-60 top-0 md:top-4  mt-0 gap-3 bg-black shadow-2xl   flex flex-col  p-4.5`}>
            <div onClick={()=> setIsopen(!isopen)} className={` border-white/10 absolute z-100  top-1/2 ${isopen ? '' : ''} -right-13 md:right-5  bg-[#333] p-5 rounded-full`}>
                <i className=' text-white'><ArrowRightLeft/></i>
            </div>
            <div className='  rounded-md '>
                <Link href={'/pages/saler'} className="font-bold flex border-b  items-center text-2xl pb-4">
                    {isopen ? (
                        <>
                        <img className=" rounded-full bg-[#333] w-15 p-3 ml-0 md:ml-5" src="/icon.png" />
                        <span className="ml-2 text-white hidden md:block">LGO</span>
                        </>
                    ) : (
                        <img className="bg-[#333] rounded-full w-15 p-3" src="/icon.png" />
                    )}
                    </Link>
            </div>
            <div className=''>
                <ul className='flex flex-col gap-3'>
                    <Link href={'/pages/saler/addProduct'} className=' bg-[#333] hover:bg-white p-4.5 text-white hover:text-black rounded-full font-bold flex gap-2 justify-cen items-center'>
                        <span>
                            <PackagePlus size={25}/>
                        </span>
                        <p className={`${isopen ? "hidden md:block " :"hidden"}`}>Add Product</p>
                    </Link>
                     <Link href={'/pages/saler/ProductsList'} className=' bg-[#333] hover:bg-white p-4.5 text-white hover:text-black rounded-full font-bold flex gap-2 justify-cen items-center'>
                        <span>
                            <List size={25}/>
                        </span>
                        <p className={`${isopen ? "hidden md:block" :"hidden"}`}>Products List</p>

                    </Link>
                     <Link href={'/pages/saler/Orders'} className=' bg-[#333] hover:bg-white p-4.5 text-white hover:text-black rounded-full font-bold flex gap-2 justify-cen items-center'>
                        <span>
                            <ShoppingBag size={25}/>
                        </span>
                        <p className={`${isopen ? "hidden md:block" :"hidden"}`}>Orders</p>
                    </Link>
                </ul>

            </div>
        </aside>
    </div>
  )
}

export default page