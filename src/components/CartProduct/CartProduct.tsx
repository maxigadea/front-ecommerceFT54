import { IProduct } from '@/types'
import React from 'react'

const CartProduct:React.FC<IProduct> = ({image, name, price}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <a href="#" className="shrink-0 md:order-1">
        <img className="h-20 w-20" src={image} alt="imac image" />
      </a>

      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="text-end md:order-4 md:w-32">
          <p className="text-base font-bold text-gray-900 ">${price}</p>
        </div>
      </div>

      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <a href="#" className="text-base font-medium text-gray-900 hover:underline ">{name}</a>
        <div className="flex items-center gap-4">
          <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartProduct