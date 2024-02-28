'use client'

import { useEffect, useState } from 'react'
import { addPlayer } from '@/app/utils/helpers'
import Header from '@/app/components/header'

export default function Create() {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const success = await addPlayer(e.target[0].value, e.target[1].value)

    if (success) {
      alert('Player added')
    } else {
      alert('Player already exists')
    }
  }

  return (
    <>
      <Header />
      <main>
        <h1>Create</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='name' />
          <input type='number' placeholder='0' />
          <input type='submit' value='Submit' />
        </form>
      </main>
    </>
  )
}
