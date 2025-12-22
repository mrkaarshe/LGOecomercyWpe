import React from 'react'
import { Van,Shield,RotateCcw,Headset } from 'lucide-react';

export const Footer = () => {
  return (
    <div className=' min-h-50 bg-black text-white  w-full '>
        <div className='max-w-7xl pt-15 border-b  border-gray-300 mx-auto grid grid-cols-2 md:grid-cols-4 justify-between items-center'>
            <div className='p-4 flex flex-col gap-2  justify-center items-center'>
                <i className=' p-2 rounded border backdrop-blur-xl bg-white/10  border-white/20 '><Van size={28}/></i>
               <div>
                 <h1 className='text-xs  text-center'>Free Shipping</h1>
                <p className='text-gray-400 text-xs'>On orders over $50</p>
               </div>
            </div>
                        <div className='p-4 flex flex-col gap-2 justify-center items-center'>
                <i className=' p-2 rounded border backdrop-blur-xl bg-white/10  border-white/20 '><Shield size={28}/></i>
               <div>
                 <h1 className='text-xs  text-center'>Secure Payment</h1>
                <p className='text-gray-400 text-xs'>100% secure checkout</p>
               </div>
            </div>
                        <div className='p-4 flex flex-col gap-2 justify-center items-center'>
                <i className=' p-2 rounded border backdrop-blur-xl bg-white/10  border-white/20 '><RotateCcw size={28}/></i>
               <div>
                 <h1 className='text-xs  text-center'>Easy Returns</h1>
                <p className='text-gray-400 text-xs'>30-day return policy</p>
               </div>
            </div>
                        <div className='p-4 flex flex-col gap-2 justify-center items-center'>
                <i className=' p-2 rounded border backdrop-blur-xl bg-white/10  border-white/20 '><Headset size={28}/></i>
               <div>
                 <h1 className='text-xs  text-center'>24/7 Support</h1>
                <p className='text-gray-400 text-xs'>Always here to help</p>
               </div>
            </div>
            
        </div>
         <h1 className='text-center py-10 text-gr400 text-xs'>© 2024 YourCompany. All rights reserved.</h1>
   </div>
  )
}
