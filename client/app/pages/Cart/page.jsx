"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Trash, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@/components/ui/button";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '@/app/Store/cartSlice';


export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items ?? []);
  const subTotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax        = subTotal * 0.08; // 8 %
  const shipping   = subTotal > 0 ? 5 : 0;
  const total      = subTotal + tax + shipping;


  const increasequantity = (id) =>{
    dispatch(increaseQuantity({id}))
  }

  useEffect(()=>{
    increasequantity()
    localStorage.setItem('cart',JSON.stringify(items))
  },[items])
  

  if (items.length === 0)
    return (
      <div className="max-w-sm min-h-[70vh]  flex flex-col justify-center items-center mx-auto px-6">
        <ShoppingBag size={98} className="mx-auto text-gray-400" />
        <h1 className="text-4xl font-bold mt-10">Your cart is empty</h1>
        <p className="text-gray-600 mt-2">Add some products to get started!</p>

        <Link
          href="/pages/Products"
          className="inline-block mt-6  text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Back To Shoping
          
        </Link>
      </div>
    );

  return (
    <div className="container min-h-[70vh] mt-26 mx-auto px-6">
      <h1 className="text-4xl font-bold mt-10">My Cart</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ----------  ITEMS  ---------- */}
        <div className="md:col-span-2 flex flex-col gap-4 max-h-[600px] rounded-md  overflow-y-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center m-1  p-4 border border-gray-300 rounded-md"
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-cover rounded"
                />
                <div className="space-y-1">
                  <h2 className="text-xs md:text-xl font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.category}</p>

                  {/* +/- controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={()=> increasequantity(id)}
                      className="border border-gray-200 bg-gray-100 px-2 rounded-full hover:bg-gray-200"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                      className="border border-gray-200 bg-gray-100 px-2 rounded-full hover:bg-gray-200"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
                <button
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  className="mt-2 text-red-500 hover:text-red-700"
                >
                  <Trash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ----------  ORDER SUMMARY  ---------- */}
        <div className="p-6 border border-gray-300 rounded-md h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2"><span>Subtotal</span><span>${subTotal.toFixed(2)}</span></div>
          <div className="flex justify-between mb-2"><span>Tax (8%)</span><span>${tax.toFixed(2)}</span></div>
          <div className="flex justify-between mb-4"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
          <div className="border-t border-gray-300 pt-4 flex justify-between font-bold text-lg">
            <span>Total</span><span>${total.toFixed(2)}</span>
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <Link
              href="/pages/Checkout"
              className=""
            >
              <Button className="w-full  text-white py-3 rounded-md hover:bg-gray-800 transition text-center">
                Proceed to Checkout
              </Button>
            </Link>
            <Link
              href="/pages/Products"
              className=""
            >
              <Button className="w-full bg-white text-black py-3 border rounded-md hover: hover:text-white transition text-center">
                Continue Shoping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}