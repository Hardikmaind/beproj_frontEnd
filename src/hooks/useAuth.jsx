import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth' // Assuming Firebase Authentication

function useAuth() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = auth.onAuthStateChanged(setUser)
    console.log(user)
    return () => unsubscribe() // Cleanup function to avoid memory leaks
  }, [])

  return {
    user,
    isAuthenticated: !!user, // Check if user is authenticated
  }
}

export default useAuth
