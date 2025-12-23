import { Box } from 'lucide-react'
import React from 'react'
import {Label} from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const page = () => {
  return (
    <div className='max-w-4xl   mx-6 min-w-sm mt-4'>
        <div className='border-b space-y-4'>
            <h1 className='text-gray-600 font-bold'>Orders</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3  p-5 gap-5  border-b'>
            <div className='flex justify-start gap-4  '>
                <span className='flex justify-center items-center w-20 bg-black/10 border-black/40 border  rounded-md'>
                    <Box className=' ' size={48} />
                </span>
                <div className='text-gray-700 text-sm'>
                    <h1>apple Air Pods</h1>
                    <p>Items:1</p>
                    <p>$34534</p>
                </div>
            </div>
            <div className='text-gray-700 text-xs'> 
                <p>GreatStack</p>
                <p>Main Road ,123 Streat ,G Block</p>
                <p>City State</p>
                <p>012323443</p>
            </div>
            <div className='text-gray-700 text-sm'>
                <p>Method:COD</p>
                <p>Date:2/4/2025</p>
                <p>Payment: <span  className='text-yellow-900'>Pending</span></p>
              
            </div>
        </div>
    </div>
  )
}

export default page