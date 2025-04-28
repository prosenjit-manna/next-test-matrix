import { signOut } from 'next-auth/react'
import React from 'react'


export default function logout() {
  return (
    <form
      action={async () => {
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}
