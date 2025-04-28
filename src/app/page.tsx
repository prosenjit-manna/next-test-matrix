import SignIn from "./componets/sign-in";
import { SessionProvider } from "next-auth/react"
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <SessionProvider>
      <h1 className="text-4xl font-bold">Welcome to Test Matrix!</h1>

      <p className="mt-4 text-lg">
        This is test matrix, a simple test matrix application built with Next.js and Mantine.
      </p>
      <p className="mt-4 text-lg">
        You can use this application to create and manage test matrices for your projects.
      </p>
     
      <SignIn />
      </SessionProvider>
    </div>
  );
}
