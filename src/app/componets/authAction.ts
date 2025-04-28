"use server"

import { signIn, signOut } from "@/auth"

export async function handleSignIn() {
    await signIn("github", {
        redirectTo: "/dashboard",
    })
}

export async function handleSignOut() {
    await signOut()
}