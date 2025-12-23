import React from 'react'
import {Card, card ,CardContent, CardTitle} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {Label} from '@/components/ui/label'
import {Button} from '@/components/ui/button'
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
    <div className='  overflow-x-hidden max-w-lg p-2 mx-4 md:mx-2 mt-4'>
        <Card className=''>
            <CardContent className='flex flex-col gap-3'>
                <CardTitle >
                    Add Product
                </CardTitle>
                <div className="mt-4 space-y-2">
                <Label>Product Image</Label>

            <div className="flex gap-4">
                {[1,2,3,4,5].map((i) => (
                <label
                    key={i}
                    className="flex items-center justify-center 
                    border-2 border-dashed 
                    w-24 h-16 text-[10px] 
                    cursor-pointer text-gray-500"
                >
                    IMG
                    <input type="file" className="hidden" />
                </label>
                ))}
            </div>


        </div>
        <div>
            <div className='space-y-2'>
              <Label htmlFor="">Product Name</Label>
            <Input className='' type="text" />
            </div>
            <div className='space-y-2 mt-3'>
                <Label htmlFor="">Product Description</Label>
            <Textarea type="text" />
            </div>
        </div>
        <div className='flex  gap-3'>
            <div className='space-y-2'>
                <Label className="ml-1" htmlFor="">Category</Label>
                 <Select>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                    </Select>
            </div>
         <div className='space-y-2'>
           <Label htmlFor="">Price</Label>
        <Input placeholder="0" />
        </div>
           <div className='space-y-2'>
           <Label htmlFor="">Stock</Label>
        <Input placeholder="0" />
        </div>
                        
                    
     
        </div>
        <Button>Add</Button>
        </CardContent>
        </Card>
    </div>
  )
}

export default page