"use client";
import { Toast } from "@/helpers";
import { IProduct, IUserSession } from "@/types";
import React from "react";

interface ButtonProps {
  children: React.ReactNode
  userData: IUserSession
  product: IProduct
}

const Button: React.FC<ButtonProps> = ({children, userData, product}) => {

  const handleClick = () => {
    if(!userData.token) {
      Toast.fire({
        icon: "info",
        title: "You must be logged to add products"
      })
    } else {
      const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
      const productExist = cart.some((item: IProduct) => {
        if(item.id === product.id) return true;
        return false;
      })

      if(productExist) {
        Toast.fire({
          icon: "warning",
          title: "This product already exist in your cart"
        })
      } else {
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
        Toast.fire({
          icon: "success",
          title: "Product added to your cart"
        })
      }
    }
  }

  return (
    <button onClick={handleClick} className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100">
      <svg
        className="stroke-indigo-600 "
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
          stroke=""
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      {children}
    </button>
  );
};

export default Button;
