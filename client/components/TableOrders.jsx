"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export const  TableOrders = () => {
    const [orders ,setOrders]  = useState([])

    const fetchOrders = async()=>{
        try {
            const res = await fetch('https://lgoecomercywpe.onrender.com/api/order/getOrders')
            const data =  await res.json()
            setOrders(data.userOrders)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
     fetchOrders()   
    },[])
  const userOrders = [
    {
      _id: "694b6ef5aaa8f3fe65f473ea",
      info: {
        name: "Oday kaarshe",
        email: "muusebiixi@gmail.com",
      },
      products: [
        {
          productTitle: "RX 6800 XT Gaming",
          price: 179.99,
          quantity: 1,
        },
      ],
      status: "Pending",
      createdAt: "2025-12-24T04:41:25.858Z",
    },
  ]

  return (
    <div className="">
      <h1 className="text-xl font-semibold mb-4">Dashboard Orders</h1>

      <Table className="max-w-[380px] md:max-w-full ">
        <TableHeader>
          <TableRow className="bg-black hover:bg-black/80 rounded-2xl">
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Product</TableHead>
            <TableHead className="text-white">Qty</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) =>
            order.products.map((product, i) => (
              <TableRow key={`${order._id}-${i}`}>
                <TableCell >{order.info.name}</TableCell>
                <TableCell >{product.productTitle}</TableCell>
                <TableCell >{product.quantity}</TableCell>
                <TableCell >
                  <Badge variant="secondary">{order.status}</Badge>
                </TableCell>
                <TableCell >
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
