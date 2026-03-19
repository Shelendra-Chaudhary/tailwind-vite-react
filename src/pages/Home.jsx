import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className="text-center p-10">
      
      <h1 className="text-4xl font-bold bg-red-500 text-black p-4">
        Tailwind CSS with Vite 7 and React
      </h1>

      <p className="text-2xl mt-6">
        Login + Register page example with Tailwind CSS
      </p>

      <div className="mt-8 space-x-6">
        <Link to="/login" className="text-black text-2xl bg-blue-400 px-4 py-2 rounded hover:bg-blue-500">
          Login
        </Link>

        <Link to="/register" className="text-black text-2xl bg-green-400 px-4 py-2 rounded hover:bg-green-500">
          Register
        </Link>
      </div>

    </div>
  )
}