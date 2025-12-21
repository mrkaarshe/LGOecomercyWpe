import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import products from '@/products.json'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
export const Products = () => {
  return (
    <div className='mt-30 container mx-auto px-3 '>
        <div className='mb-10 px-5'> 
            <h1 className='text-4xl font-bold text-center mb-10'>Featured Products</h1>
        </div>
        <div className='flex justify-between items-center mb-6'>
            <h1>Products</h1>
               <Link href={'/pages/Products'} className='flex gap-3'>
            View All < ArrowRight/>
            </Link>
        </div>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {products.map((product,index) => (
                product.top === true && (
                <Link href={`/pages/Detail/${product.id}`} key={index} className='bg-white/30 shadow rounded-lg p-4 mb-6 flex h- flex-col justify-between'>
                    <img src={product.image} alt={product.name} className='w-68 h-86 object-cover bg-cover rounded-md mr-4'/>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
                            <p className='text-gray-600 mb-4'>{product.description}</p>
                        </div>
                        <div className='flex items-center justify-between pb-3'>
                            <span className='text-lg font-bold'>${product.price}</span>
                            <Badge variant="default">{product.stock} In stock</Badge>
                        </div>
                            <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition'>
                                Add to Cart
                            </button>
                    </div>
                </Link>
                )   
                
            ))}
        </div>
        </div>



    </div>
  )
}
