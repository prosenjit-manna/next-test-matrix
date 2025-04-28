'use client'

import { useSession } from "next-auth/react"
import { handleSignIn, handleSignOut } from "./authAction"
import { useRouter } from "next/navigation"
import SignOut from "./Sign-Out"

export default function SignIn() {
    const { data: session } = useSession()
    const router = useRouter()

   

    if (session?.user?.email) {
        return (
            <>
                <p>You are an admin, welcome! {session?.user?.email}</p>
                <SignOut />
            </>
        )
    }

    return (
        <>
            <form action={handleSignIn}>
                <button type="submit">Signin with GitHub</button>
            </form>
        </>
    )
}