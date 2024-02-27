'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { updatePlayerScore } from '@/app/utils/helpers'

export default function Update() {
  const pathname = usePathname()
  const playerId = pathname.split('/').pop()

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('submit')

    const success = await updatePlayerScore(playerId, e.target[0].value)

    if (success) {
      alert('Player score updated')
    } else {
      alert('Player does not exist')
    }
  }

  useEffect(() => {
    console.log(playerId)
  }, [])

  return (
    <main>
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <input type='number' placeholder='0' />
        <input type='submit' value='Submit' />
      </form>
    </main>
  )
}
