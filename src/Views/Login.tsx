import React from 'react'
import Loginlogo from '../Image/LoginLogo.png'

function Login() {
    return (
        <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
            <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl rounded-md">
                <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
                    <svg width="45" height="45" viewBox="0 0 24 24" fill="#FFF">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                </div>

                <form className="p-12 md:p-24">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                    </div>
                    <div className="flex items-center text-lg mb-6 md:mb-8 ">
                        <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                        <input
                            type="text"
                            id="username"
                            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full rounded-md required:border-red-500"
                            placeholder="Username"
                            required />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                    </div>
                    <div className="flex items-center text-lg mb-6 md:mb-8 ">
                        <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                        </svg>
                        <input
                            type="password"
                            id="password"
                            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full rounded-md required:border-red-500"
                            placeholder="Password"
                            required />
                    </div>
                    <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded-md">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login