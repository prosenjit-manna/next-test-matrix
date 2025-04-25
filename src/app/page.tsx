
export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl font-bold">Welcome to Test Matrix!</h1>

      <p className="mt-4 text-lg">
        This is test matrix, a simple test matrix application built with Next.js and Mantine.
      </p>
      <p className="mt-4 text-lg">
        You can use this application to create and manage test matrices for your projects.
      </p>
     
      {/* Login With Github  */}
      <button
        className="mt-8 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
        Login with GitHub
      </button>

    </div>
  );
}
