// 'use client'
import Button from '@/components/Button/Button'
// import React, { useEffect, useState } from 'react'

const fetchCharacter = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character/1")
            const character = await response.json()
            return character
} 

//SERVER
const Demo = async () => {
  const character = await fetchCharacter()   ///
  return (
    <div>
        <h1>Es la demo page, y soy server component</h1>
        <h3>{character.name}</h3>
        <p>{character.species}</p>
        <Button />
    </div>
  )
}

//CLIENT
// const Demo = () => {
//     const [state, setState] = useState();
//     const fetchCharacter = async () => {
//         const response = await fetch("https://rickandmortyapi.com/api/character/1")
//         const character = await response.json()
//         setState(character)
//     } 

//     useEffect(() => {
//         fetchCharacter()
//     }, [])

//   return (
//     <div>
//         <h1>Es la demo page, y soy server component</h1>
//         <h3>{state.name}</h3>
//         <p>{state.species}</p>
//         <Button />
//     </div>
//   )
// }

export default Demo