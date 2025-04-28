'use client'

import { useSession } from "next-auth/react"
import { handleSignIn } from "./authAction"
import SignOut from "./Sign-Out"

export default function SignIn() {
    const { data: session } = useSession()

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