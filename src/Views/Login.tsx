import React from "react";
import Loginlogo from "../Image/LoginLogo.png";
import bgLogin from "../Image/bg1.png";

function Login() {
  return (
    <div className="h-screen relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
                  loading="lazy"
                  className="w-10"
                  alt="tailus logo"
                />
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  Sign in to Kratos Geo Tracker
                </h2>
              </div>

              <div className="px-5 py-7">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  E-mail
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Password
                </label>
                <input
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <button
                  type="button"
                  className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

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
