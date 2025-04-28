import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import client from "./app/lib/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    GitHub
  ],
})