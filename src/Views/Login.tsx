import React, { useState } from "react";
import logo from "../Image/logo.png";

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
                  src={logo}
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
                  type="button"
                  className="transition duration-200 bg-[#2F847C] hover:bg-[#054B4A] focus:bg-[#054B4A] focus:shadow-sm focus:ring-4 focus:ring-[#2F847C] focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
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
