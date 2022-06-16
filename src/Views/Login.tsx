<<<<<<< HEAD
import React, { useState } from "react";
import Loginlogo from "../Image/LoginLogo.png";
import bgLogin from "../Image/bg1.png";
=======
import React from "react";
import logo from "../Image/logo.png";
>>>>>>> af1cc2c931555e2b0cf2c0df636ea4c0c4b80fd8

type Login = {
  username: string | null;
  password: string | null;
};

function Login() {
  const [credentials, setCredentials] = useState<Login>({
    username: null,
    password: null,
  });

  const handleType: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <div className="h-screen relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <img
<<<<<<< HEAD
                  src={Loginlogo}
=======
                  src={logo}
>>>>>>> af1cc2c931555e2b0cf2c0df636ea4c0c4b80fd8
                  loading="lazy"
                  className="w-20"
                  alt="tailus logo"
                />
                <h2 className="mb-8 text-xl text-cyan-900 font-bold xl:text-2xl lg:text-2xl">
                  Sign in to Kratos Geo Tracker
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="px-5 py-7">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Username
                </label>
                <input
                  name="username"
                  onChange={handleType}
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Username"
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Password
                </label>
                <input
                  name="password"
                  onChange={handleType}
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Username"
                />
                <button
<<<<<<< HEAD
                  type="submit"
                  className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
=======
                  type="button"
                  className="transition duration-200 bg-[#2F847C] hover:bg-[#054B4A] focus:bg-[#054B4A] focus:shadow-sm focus:ring-4 focus:ring-[#2F847C] focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
>>>>>>> af1cc2c931555e2b0cf2c0df636ea4c0c4b80fd8
                >
                  <span className="inline-block mr-2">Login</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>

              <div className="space-y-4 text-gray-600 text-center sm:-mb-8">
                <p className="text-xs">
                  By proceeding, you agree to our{" "}
                  <a href="#" className="underline">
                    Terms of Use
                  </a>{" "}
                  and confirm you have read our{" "}
                  <a href="#" className="underline">
                    Privacy and Cookie Statement
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
