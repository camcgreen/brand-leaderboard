'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getPlayers } from '@/app/utils/helpers'
import Header from '@/app/components/header'
import HeaderLeaderboard from '@/app/components/headerLeaderboard'

export default function Home() {
  const [leaderboard, setLeaderboard] = useState([])
  useEffect(() => {
    const unsubscribe = getPlayers((players) => {
      players.sort((a, b) => b.score - a.score)
      players = players.slice(0, 10)
      console.log('Updated players: ', players)
      setLeaderboard([...players])
    })
    return unsubscribe
  }, [])

  return (
    <div className='flex flex-col h-screen-sm overflow-hidden'>
      <HeaderLeaderboard />
      <main className='flex-grow flex flex-col justify-between'>
        <section className='flex-grow bg-green-400'>
          <ul>
            {leaderboard.map((player) => {
              return (
                <Link href={`/update/${player.id}`} key={player.id}>
                  <li key={player.id}>
                    {player.name} - {player.score}
                  </li>
                </Link>
              )
            })}
          </ul>
        </section>
        <section className='bg-gray-400'>
          <p>DD/MM/YYYY</p>
        </section>
      </main>
    </div>
  )
}
