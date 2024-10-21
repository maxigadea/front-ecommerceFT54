import { IUserSession } from '@/types';
import { cookies } from 'next/headers';
import React from 'react'

const ProfileView = () => {
  const cookieStore = cookies();
  const userData: IUserSession = JSON.parse(cookieStore.get('userData')?.value ?? "{}")
  return (
    <div>
        <h1>Your profile</h1>
        <h2>Your name: {userData.user.name}</h2>
        <p>Your shipping address: {userData.user.address}</p>
        <p>Your phone: {userData.user.phone}</p>
    </div>
  )
}

export default ProfileView