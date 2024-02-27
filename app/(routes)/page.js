'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getPlayers } from '@/app/utils/helpers'

export default function Home() {
  const [leaderboard, setLeaderboard] = useState([])
  useEffect(() => {
    const unsubscribe = getPlayers((players) => {
      // Sort players by score in descending order
      players.sort((a, b) => b.score - a.score)
      console.log('Updated players: ', players)
      setLeaderboard([...players])
    })
    return unsubscribe // Clean up on unmount
  }, [])

  return (
    <main>
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map((player) => {
          return (
            <Link href={`/update/${player.id}`}>
              <li key={player.id}>
                {player.name} - {player.score}
              </li>
            </Link>
          )
        })}
      </ul>
    </main>
  )
}
