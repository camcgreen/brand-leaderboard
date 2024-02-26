'use client'

import { useEffect, useState } from 'react'
import { addPlayerToLeaderboard } from '@/app/utils/helpers'

export default function Home() {
  useEffect(() => {
    addPlayerToLeaderboard('John', 100)
  }, [])

  return (
    <main>
      <h1>Hello</h1>
    </main>
  )
}
