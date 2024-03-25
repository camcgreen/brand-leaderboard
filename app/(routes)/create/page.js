'use client'

import { useEffect, useState } from 'react'
import { addPlayer } from '@/app/utils/helpers'
import Header from '@/app/components/header'
import { useRouter } from 'next/navigation'

export default function Create() {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()

    const success = await addPlayer(e.target[0].value, e.target[1].value)

    if (success) {
      alert('Player added')
      router.push('/')
    } else {
      alert('Player already exists')
    }
  }

  return (
    <>
      <Header />
      <main className='fixed right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2'>
        {/* <h1 className='text-4xl text-center mb-16'>ADD A PLAYER</h1> */}
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input
            type='text'
            placeholder='PLAYER NAME'
            className='border border-black rounded-full bg-transparent p-8 mb-8 flex justify-center items-center text-center'
          />
          <input
            type='number'
            step='1'
            pattern='\d+'
            placeholder='0+'
            className='border border-black rounded-full bg-transparent p-8 mb-8 flex justify-center items-center text-center'
          />
          <input
            type='submit'
            value='SUBMIT'
            className='cursor-pointer rounded-full bg-black text-white p-8 mb-8 flex justify-center items-center text-center hover:bg-gray-900 transition-colors duration-300 ease-in-out'
          />
        </form>
      </main>
    </>
  )
}
