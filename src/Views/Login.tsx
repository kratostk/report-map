import React from 'react'
import Loginlogo from '../Image/LoginLogo.png'
import bgLogin from '../Image/bg1.png'

function Login() {
    return (
        <div className="bg-cover h-screen overflow-hidden flex items-center justify-center mx-auto" style={{ backgroundImage: `url(${bgLogin})` }}>
            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-30 rounded shadow-xl">
                <div className='flex items-center justify-center'>
                    <label className="block text-white text-xl text-center font-bold mb-2">
                        Login
                    </label>
                </div>
                <div>
                    <label className="block text-white text-sm font-bold mb-2">
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
                    <label className="block text-white text-sm font-bold mb-2">
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
                <button className="tracking-wider bg-gray-900 hover:bg-gray-800 rounded font-medium p-2 md:p-4 text-white uppercase w-full">
                    Login
                </button>
            </form>
        </div>

    )
}

export default Login