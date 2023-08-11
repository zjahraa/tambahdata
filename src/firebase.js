import { ref, onUnmounted } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDpyMcXRXl8ZOhnQQzK_MGQ9KuuR1OyYWE",
    authDomain: "admin-vue-854db.firebaseapp.com",
    projectId: "admin-vue-854db",
    storageBucket: "admin-vue-854db.appspot.com",
    messagingSenderId: "660635923540",
    appId: "1:660635923540:web:5fd56b291a0a70bca3a9c1",
    measurementId: "G-HVREH257V1"
}

const firebaseApp = initializeApp(config)
const db = getFirestore(firebaseApp)
const usersCollection = collection(db, 'users')

export const createUser = async user => {
  return await addDoc(usersCollection, user)
}

export const getUser = async id => {
  const userDoc = await getDoc(doc(usersCollection, id))
  return userDoc.exists() ? userDoc.data() : null
}

export const updateUser = async (id, user) => {
  await updateDoc(doc(usersCollection, id), user)
}

export const deleteUser = async id => {
  await deleteDoc(doc(usersCollection, id))
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = onSnapshot(usersCollection, snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
