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
        <section className='flex-grow flex flex-col justify-center items-center'>
          <ul className='flex flex-col w-full px-12 pt-12'>
            {leaderboard.map((player, i) => {
              return (
                <div
                  className='flex justify-between items-center mb-12 text-4xl'
                  key={player.id}
                >
                  <div className='bg-[#D9D9D9] mx-6 flex justify-center items-center h-full aspect-square rounded-full'>
                    <p className='text-center'>{i + 1}</p>
                  </div>
                  <Link
                    href={`/update/${player.id}`}
                    className='bg-[#D9D9D9] flex justify-between flex-grow p-6 rounded-full'
                  >
                    <p>{player.name.toUpperCase()}</p>
                    <p>{player.score}</p>
                  </Link>
                </div>
              )
            })}
          </ul>
        </section>
        <section className='bg-[#D9D9D9] text-end px-12 py-12'>
          <p>
            {new Date().toLocaleDateString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </p>
        </section>
      </main>
    </div>
  )
}
