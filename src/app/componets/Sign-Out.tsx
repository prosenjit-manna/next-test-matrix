import { Button } from '@mantine/core'
import { signOut } from 'next-auth/react'
import React from 'react'


export default function SignOut() {
  return (
    <form
      action={async () => {
        await signOut()
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  )
}
