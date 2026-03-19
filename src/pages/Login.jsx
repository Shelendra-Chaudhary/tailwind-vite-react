import { Link } from "react-router-dom"
export default function Login() {
  return (
    <div className="flex items-center justify-center">
      
      <div className="w-full max-w-max p-6 bg-gray-800 rounded-lg shadow-lg text-white py-10">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Login Page
        </h2>

        <label for="username" className="block text-sm font-medium mb-2 text-left">
            Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label for="password" className="block text-sm font-medium mb-2 text-left">
            Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer transition duration-300 text-white font-bold py-3 rounded">
          Login
        </button>

        <Link to="/" className="block text-center mt-4 text-sm text-gray-400 hover:text-gray-200">
          Back to Home
        </Link>

        <Link to="/register" className="block text-center mt-4 text-sm text-gray-400 hover:text-gray-200">
          Don't have an account? Register here
        </Link>

      </div>

    </div>
  )
}