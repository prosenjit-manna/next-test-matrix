"use server"

import { signIn, signOut } from "@/auth"
import { NextResponse } from "next/server"

export async function handleSignIn() {
    await signIn("github")
}

export async function handleSignOut() {
    await signOut()
}