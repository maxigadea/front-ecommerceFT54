'use client'
import { Toast } from '@/helpers'
import { register } from '@/helpers/auth.helper'
import { validateRegisterForm } from '@/helpers/validate'
import { IRegisterProps, TRegisterErrors } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const RegisterView = () => {
    const router = useRouter()
    const initialState = {
        email: "",
        password: "",
        name: "",
        address: "",
        phone: ""
    }

    const [dataUser, setDataUser] = useState<IRegisterProps>(initialState)
    const [errors, setErrors] = useState<TRegisterErrors>(initialState)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await register(dataUser);
        Toast.fire({
            icon: "success",
            title: "Registered in successfully"
        })
        router.push("/login")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setDataUser({
            ...dataUser,
            [name]: value
        })
    }   

    useEffect(() => {
        const errors = validateRegisterForm(dataUser)
        setErrors(errors)
    }, [dataUser])

  return (
    <div>
        <h1>Register in to Bross Store</h1>

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

            <div>
                <label htmlFor='password'>Password:</label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    value={dataUser.password}
                    placeholder="**********"
                    onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>

            <div>
                <label htmlFor='name'>Name:</label>
                <input 
                    id="name"
                    type="text"
                    name="name"
                    value={dataUser.name}
                    placeholder="Bon Jovi"
                    onChange={handleChange}
                />
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
                <label htmlFor='address'>Address:</label>
                <input 
                    id="address"
                    type="text"
                    name="address"
                    value={dataUser.address}
                    placeholder="Posadas, misiones"
                    onChange={handleChange}
                />
                {errors.address && <span>{errors.address}</span>}
            </div>

            <div>
                <label htmlFor='phone'>Phone:</label>
                <input 
                    id="phone"
                    type="text"
                    name="phone"
                    value={dataUser.phone}
                    placeholder="11-234345"
                    onChange={handleChange}
                />
                {errors.phone && <span>{errors.phone}</span>}
            </div>

            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegisterView