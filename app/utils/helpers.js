import { db } from '@/app/config/firebase'
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
  limit,
  deleteDoc,
} from 'firebase/firestore'

export const addPlayer = async (playerName, initialScore) => {
  try {
    const q = query(collection(db, 'players'), where('name', '==', playerName))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      console.log('A player with this name already exists.')
      return null
    }

    const docRef = await addDoc(collection(db, 'players'), {
      name: playerName,
      score: initialScore,
    })
    console.log('Player added with ID: ', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('Error adding player: ', error)
  }
}

export const updatePlayerScore = async (playerId, newScore) => {
  try {
    const playerRef = doc(db, 'players', playerId)
    await updateDoc(playerRef, { score: newScore })
    console.log('Score updated for player with ID: ', playerId)
    return true
  } catch (error) {
    console.error('Error updating score: ', error)
    return false
  }
}

export const getPlayers = (callback) => {
  const q = query(collection(db, 'players'))
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const players = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    callback(players)
  })
  return unsubscribe
}

export const deletePlayer = async (playerId) => {
  try {
    const playerRef = doc(db, 'players', playerId)
    await deleteDoc(playerRef)
    console.log('Player deleted with ID: ', playerId)
    return true
  } catch (error) {
    console.error('Error deleting player: ', error)
    return false
  }
}
