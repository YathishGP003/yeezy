'use client'
import { useCart } from '@/hooks/use-cart'
import React from 'react'
import Checkout from '../checkout'

type Props = {}

const ProductAction = (props: Props) => {
  const {
    items: cartItems,
    addItem: addToCart,
    removeItem: removeFromCart,
    updateQuantity,
    cartTotal,
    isOpen,
    setIsOpen,
  } = useCart()

  return (
    <div className="rounded-lg bg-[#F4F4F5] p-6 sticky top-20 flex flex-col h-[80vh]">
      <div>
        <div className="grid grid-cols-3 gap-4 pb-2 border-b text-base font-medium">
          <div>Product</div>
          <div className="text-center">Q</div>
          <div className="text-right">Price</div>
        </div>

        {/* CARt Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 gap-4 text-base font-normal py-4"
          >
            <div>{item.name}</div>
            <div className="text-center">{item.quantity}</div>
            <div className="text-right">${item.price * item.quantity}</div>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="mt-auto">
        <div className="flex items-center justify-between">
          <div>Subtotal</div>
          <div className="text-right">${cartTotal || 0}</div>
        </div>
      </div>

      <Checkout />
    </div>
  )
}

export default ProductAction
