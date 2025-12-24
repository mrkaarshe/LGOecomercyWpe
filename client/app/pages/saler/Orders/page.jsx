"use client"
import { Box } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Page = () => {
  const [orders, setOrders] = useState([])

  // Fetch orders
  const fetchData = async () => {
    try {
      const res = await fetch('https://lgoecomercywpe.onrender.com/api/order/getOrders')
      const data = await res.json()
      setOrders(data.userOrders) // array of orders
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!orders || orders.length === 0) return <p className='mt-10 ml-1'>Loading orders...</p>

  return (
    <div className='max-w-4xl mx-6  min-w-sm mt-10'>
      <div className='border-b space-y-4'>
        <h1 className='text-gray-600 font-bold'>Orders</h1>
      </div>

      {/* Loop over orders */}
      {orders.map((order) => (
        <div key={order._id} className='grid grid-cols-1 md:grid-cols-3 p-5 gap-5 border-b'>

          {/* Product Info */}
          <div className='flex justify-start gap-4'>
            <span className='flex justify-center items-center w-20 bg-black/10 border rounded-md'>
              <Box size={48} />
            </span>
            <div className='text-gray-700 text-sm'>
{order.products?.map((p) => (
    <div>
        <p>{p.productTitle}</p>
        <p>items: x{p.quantity}</p>
        <p>price: {p.price}</p>
    </div>
))}

            </div>
          </div>

          {/* Customer Info */}
            <div className='text-gray-700 text-xs'>
            <p>{order.info?.name || "No Name"}</p>
            <p>{order.info?.address || "No Address"}</p>
            <p>{order.info?.city || "No City"}</p>
            <p>{order.info?.phone || "No Phone"}</p>
            </div>


          {/* Status & Date */}
          <div className='text-gray-700 text-sm'>
            <p>Method: COD</p>
            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>

            <div className='space-y-2'>
              <Label>Status {order.status}</Label>
               <Select
          value={order.status}   // controlled
          onValueChange={(newStatus) => {
            // update frontend state
            setOrders((prev) =>
              prev.map((o) =>
                o._id === order._id ? { ...o, status: newStatus } : o
              )
            );

            // update backend
            fetch(`https://lgoecomercywpe.onrender.com/api/order/updateStatus/${order._id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ status: newStatus }),
            });
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Page
