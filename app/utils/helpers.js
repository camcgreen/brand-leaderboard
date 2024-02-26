import { db } from '@/app/config/firebase'
import { collection, addDoc } from 'firebase/firestore'

export const addPlayerToLeaderboard = async (name, score) => {
  try {
    const docRef = await addDoc(collection(db, 'leaderboard'), {
      uuid: crypto.randomUUID(),
      name,
      score,
    })
    console.log('User written with ID: ', docRef.id)
    return true
  } catch (error) {
    console.error('Error adding document ', error)
    return false
  }
}
