import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-full h-24 flex justify-start items-center'>
      <Link href='/'>
        <img src='/images/logo.svg' className='w-8 ml-8' />
      </Link>
    </header>
  )
}
