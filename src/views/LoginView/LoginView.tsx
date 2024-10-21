'use client'
import { login } from '@/helpers/auth.helper'
import { validateLoginForm } from '@/helpers/validate'
import { ILoginErrors, ILoginProps } from '@/types'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Toast } from '@/helpers'
import { useRouter } from 'next/navigation'

const LoginView = () => {
    const router = useRouter();
    const initialState = {
        email: "",
        password: ""
    }

    const [dataUser, setDataUser] = useState<ILoginProps>(initialState)
    const [errors, setErrors] = useState<ILoginErrors>(initialState)
    const [visible, setVisible] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const response = await login(dataUser);
        const {token, user} = response;
    
        Cookies.set('userData', JSON.stringify({token, user}), { expires: 1 })
        Toast.fire({
            icon: "success",
            title: "Login in successfully"
        })
        router.push("/")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setDataUser({
            ...dataUser,
            [name]: value
        })
    }   

    useEffect(() => {
        const errors = validateLoginForm(dataUser)
        setErrors(errors)
    }, [dataUser])

  return (
    <div>
        <h1>Sign in to Bross Store</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email_address'>Email:</label>
                <input 
                    id="email_address"
                    type="email"
                    name="email"
                    value={dataUser.email}
                    placeholder="johndoe@example.com"
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>

            <div className='flex flex-col gap-2 '>
                <label htmlFor='password'>Password:</label>
                <div>
                    <input 
                        id="password"
                        type={`${visible ? "password" : "text"}`}
                        name="password"
                        value={dataUser.password}
                        placeholder="**********"
                        onChange={handleChange}
                    />
                    <button onClick={() => setVisible(!visible)}>See</button>
                </div>
                
                {errors.password && <span className='text-red-700'>{errors.password}</span>}
            </div>

            <button type='submit'>Sign in</button>
        </form>
    </div>
  )
}

export default LoginView