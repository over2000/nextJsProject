import { useState, useEffect } from 'react'
import { getSession, signIn } from 'next-auth/client'

function Dashboard() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      console.log({ session })
      if (!session) {
        setLoading(true)
      } else {
        setLoading(false)
      }
    }

    securePage()
  }, [])

  if (loading) {
    return <h2>Please make login</h2>
  }
  return <h1>Dashboard</h1>
}

export default Dashboard
