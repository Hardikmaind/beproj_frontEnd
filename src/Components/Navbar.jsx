import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const auth = getAuth()
  const navigate = useNavigate() // Access the navigate function
  const { userData } = useAuth()

  const handleSignOut = async () => {
    localStorage.removeItem('is_registered')
    localStorage.removeItem('user')
    localStorage.clear()
    await auth.signOut()
    navigate('/')
    // Redirect to home page or display sign-out message
    console.log('you have been signed out')
  }
  return (
    <div>
      <nav className="bg-blue-800 px-3 py-6">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          {/* <a href="#" className="flex items-center space-x-3"> */}
          <Link to="/">
            <span className="text-4xl font-semibold text-white ">
              AcousticSure
            </span>
          </Link>
          {/* </a> */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col font-medium mt-4 bg-gray-800 rounded-lg md:space-x-4 md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {/* <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent transition-all duration-300 hover:text-black hover:bg-gray-700 hover:border border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li> */}
              {/* <li>
                <button
                  href="#"
                  className="block  md:p-0 text-white rounded  md:hover:text-gray-950 md:dark:hover:bg-transparent transition-all duration-300 hover:text-black hover:bg-gray-700 border-gray-700 border-2"
                >
                  <div className="py-2 px-6">Services</div>
                </button>
              </li> */}
              <li>
                <div
                  href="#"
                  className="block p-9 md:p-0 text-white rounded  md:hover:text-gray-950 md:dark:hover:bg-transparent transition-all duration-300 hover:text-black hover:bg-gray-700 "
                >
                  <div className="py-2 px-6">
                    Welcome {userData && userData.user_name}
                  </div>
                </div>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="block p-9 md:p-0 text-white rounded  md:hover:text-gray-950 md:dark:hover:bg-transparent transition-all duration-300 hover:text-black hover:bg-gray-700 border-gray-700 border-2"
                >
                  <div className="py-2 px-6">Logout</div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
