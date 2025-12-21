import React from 'react'
import { Gamepad, Headphones, Shirt, Smartphone, ShoppingBag, Watch } from 'lucide-react'
export const ShopPyCategry = () => {
  return (
    <div className='bg-black t mt-5 py-25 '>
        
        <h1 className='text-4xl font-bold text-center text-white py-10'>Shop by Category</h1>
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4  gap-4 pb-10 px-3'>
            <div className='bg-white/10  backdrop-blur-xl text-white shadow border border-white/20 p-6 rounded-lg flex flex-col items-center hover:shadow-lg transition cursor-pointer'>
                <Smartphone size={48} className='mb-4'/>
                <h2 className='text-lg font-semibold'>Electronics</h2>
            </div>
            <div className='bg-white/10  backdrop-blur-xl text-white shadow border border-white/20 p-6 rounded-lg flex flex-col items-center hover:shadow-lg transition cursor-pointer'>
                <Gamepad size={48} className='mb-4'/>
                <h2 className='text-lg font-semibold'>Gaming</h2>
            </div>
            <div className='bg-white/10  backdrop-blur-xl text-white shadow border border-white/20 p-6 rounded-lg flex flex-col items-center hover:shadow-lg transition cursor-pointer'>
                <Watch size={48} className='mb-4'/>
                <h2 className='text-lg font-semibold'>Watches</h2>
            </div>
            <div className='bg-white/10  backdrop-blur-xl text-white shadow border border-white/20 p-6 rounded-lg flex flex-col items-center hover:shadow-lg transition cursor-pointer'>
                <Headphones size={48} className='mb-4'/>
                <h2 className='text-lg font-semibold'>Audio</h2>
            </div>

        </div>
    </div>
  )
}
