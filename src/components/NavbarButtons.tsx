'use client'
import { IUserSession } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const NavbarButtons: React.FC<{userData: IUserSession}> = ({userData}) => {
    const [userSession, setUserSession] = useState<IUserSession>(userData);
    const pathname = usePathname();
    
    useEffect(() => {
        if(userData.token) {
            setUserSession(userData)
        }
    }, [pathname, userData.token])


  return (
    <div className="flex items-center justify-end gap-3">
    {
      !userSession.token ? (
        <>
            <Link
            className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
            href="/register"
          >
            Sign in
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            href="/login"
          >
            Login
          </Link>
          </>
      ) : (
        <>
            <Link
              className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              href="/cart"
            >
              Cart
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="/dashboard"
            >
              Profile
            </Link>
        </>
      )
    }
    
  </div>
  )
}

export default NavbarButtons