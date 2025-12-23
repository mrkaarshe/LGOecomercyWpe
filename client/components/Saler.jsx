"use client"
import { ArrowLeft, ArrowRightLeft, ListPlus, PackagePlus, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
const page = () => {
    const [isopen ,setIsopen] = useState(false)
  return (
    <div className={`-translate-x-22  md:translate-0 ${isopen ? "translate-x-0" : ""}  bg-white/95 bottom-0 absolute top-20 md:top-0  left-0  md:relative  min-h-[90vh]`}>
        <aside  className={`${isopen ? "w-60 transition-all" : "w-[100px]"}  relative  min-h-screen w-60 border-r mt-4 gap-3  rounded-tr-2xl flex flex-col  p-4`}>
            <div onClick={()=> setIsopen(!isopen)} className=' border-white/10 absolute  top-1/2 -right-10 bg-[#333] p-5 rounded-full'>
                <i className=' text-white'><ArrowRightLeft/></i>
            </div>
            <div className='  rounded-md '>
                <Link href={'/pages/saler'} className="font-bold flex border-b  items-center text-2xl pb-4">
                    {isopen ? (
                        <>
                        <img className="bg-black rounded-full w-15 p-3" src="/icon.png" />
                        <span className="ml-2">LGO</span>
                        </>
                    ) : (
                        <img className="bg-black rounded-full w-15 p-3" src="/icon.png" />
                    )}
                    </Link>
            </div>
            <div className=''>
                <ul className='flex flex-col gap-3'>
                    <Link href={'/pages/saler/addProduct'} className=' bg-black/99 hover:bg-black/10 p-4 text-white hover:text-black rounded-full font-bold flex gap-2 justify-cen items-center'>
                        <span>
                            <PackagePlus size={25}/>
                        </span>
                        <p className={`${isopen ? "block" :"hidden"}`}>Add Product</p>
                    </Link>
                     <Link href={'/pages/saler/ProductsList'} className=' bg-black/99 hover:bg-black/10 p-4 text-white hover:text-black rounded-full font-bold flex gap-2 justify-cen items-center'>
                        <span>
                            <ListPlus size={25}/>
                        </span>
                        <p className={`${isopen ? "block" :"hidden"}`}>Add List</p>

                    </Link>
                     <Link href={'/pages/saler/Orders'} className=' bg-black/99 hover:bg-black/10 p-4 text-white hover:text-black rounded-full font-bold flex gap-2 justify-cen items-center'>
                        <span>
                            <ShoppingBag size={25}/>
                        </span>
                        <p className={`${isopen ? "block" :"hidden"}`}>Orders</p>
                    </Link>
                </ul>

            </div>
        </aside>
    </div>
  )
}

export default page