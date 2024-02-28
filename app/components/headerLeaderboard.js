import Link from 'next/link'

export default function HeaderLeaderboard() {
  return (
    <header className='w-full px-12 py-12 flex justify-between items-center bg-black text-white'>
      <Link href='/'>
        <img src='/images/logo-white.svg' className='w-24' />
      </Link>
      <p className='text-6xl'>LEADERBOARD</p>
    </header>
  )
}
