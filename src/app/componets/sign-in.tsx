'use client'

import { useSession } from "next-auth/react"
import { handleSignIn } from "./authAction"
import { Button } from "@mantine/core"
import SignOut from "./Sign-Out"

export default function SignIn() {
    const { data: session } = useSession()

    if (session?.user?.email) {
        return (
            <>
                <p>You are Logged in! welcome! {session?.user?.name}</p> 
                <p>Go To <a href="/dashboard">Dashboard</a></p>
                <SignOut />
            </>
        )
    }

    return (
        <>
            <form action={handleSignIn}>
                <Button type="submit" color="blue">
                    Signin with GitHub
                </Button>
            </form>
        </>
    )
}