'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { updatePlayerScore, deletePlayer } from '@/app/utils/helpers'
import Header from '@/app/components/header'

export default function Update() {
  const router = useRouter()
  const pathname = usePathname()
  const playerId = pathname.split('/').pop()

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('submit')

    const success = await updatePlayerScore(playerId, e.target[0].value)

    if (success) {
      alert('Player score updated')
      router.push('/')
    } else {
      alert('Player does not exist')
    }
  }

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this player?'
    )
    if (confirmDelete) {
      const result = await deletePlayer(playerId)
      if (result) {
        alert('Player deleted')
        router.push('/')
      } else {
        alert('Error deleting player')
      }
    }
  }

  useEffect(() => {
    console.log(playerId)
  }, [])

  return (
    <>
      <Header />
      <main className='fixed right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2'>
        {/* <h1 className='text-4xl text-center mb-16'>UPDATE A PLAYER</h1> */}
        <div>
          <form onSubmit={handleSubmit} className='flex flex-col'>
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
          <button
            className='cursor-pointer w-full rounded-full bg-red-500 text-white p-8 mb-8 flex justify-center items-center text-center hover:bg-red-700 transition-colors duration-300 ease-in-out'
            onClick={handleDelete}
          >
            DELETE
          </button>
        </div>
      </main>
    </>
  )
}
