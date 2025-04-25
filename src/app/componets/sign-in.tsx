'use client'

import { useSession } from "next-auth/react"
import { handleSignIn, handleSignOut } from "./siginInAction"
import { useRouter } from "next/navigation"

export default function SignIn() {
    const { data: session } = useSession()
    const router = useRouter()

    const onLogout = async () => {
        await handleSignOut()
        router.refresh() // Refresh the current page
        // Alternatively, use router.push("/") to redirect to the home page
    }

    if (session?.user?.email) {
        return (
            <>
                <p>You are an admin, welcome! {session?.user?.email}</p>
                <button onClick={onLogout}>Logout</button>
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