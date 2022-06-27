import React, { useState, useContext } from "react";
import logo from "../Image/logo.png";
import { IFleet } from "../views/Home";
import { StoreContext } from "../store";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../themeContext";
import { User, LogOut } from "react-feather";

interface Props {
  handleselectFleet: React.MouseEventHandler<HTMLSelectElement>;
  fleetData: IFleet[] | undefined;
  showUserMenu: boolean;
  setShowModal: () => void;
  setShowUserMenu: () => void;
}

function Header({
  handleselectFleet,
  fleetData,
  showUserMenu,
  setShowModal,
  setShowUserMenu,
}: Props) {
  const { loggedOut } = useContext(StoreContext);
  const navigate = useNavigate();
  const { user } = useContext(StoreContext);
  const { setTheme, theme } = useContext(ThemeContext);

  const handleLogout = (): void => {
    loggedOut();
    navigate("/login");
  };
  return (
    <header className="border-slate-900/10 supports-backdrop-blur:bg-white/95 dark:bg-slate-800/50 glass-bg backdrop-blur flex items-center z-10 top-0 fixed justify-between w-full h-16 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-30 px-5">
      <img className="flex-start" src={logo} width="120" />

      {/**************************************************/}
      {/*                 Search bar                     */}
      {/**************************************************/}
      <div className="flex items-center justify-center">
        <div className="hidden md:flex relative col-start-1 col-end-3 mr-5">
          <svg
            className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none z-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#ededed"
              fillRule="nonzero"
            />
          </svg>
          <select
            onClick={handleselectFleet}
            className="  bg-glass glass-bg dark:highlight-white/5 dark:bg-transparent dark:text-white dark:border highlight-white/5 rounded-full 0 h-10 pl-5 pr-10 text-slate-700 hover:border-gray-400  appearance-none"
          >
            <option
              className="dark:highlight-white/5 dark:text-white dark:bg-slate-800 highlight-white/5"
              value="0"
            >
              Please select Fleet
            </option>
            {fleetData
              ? fleetData.map((item, i) => (
                  <option
                    className="dark:bg-slate-800 dark:highlight-white/5 dark:text-white highlight-white/5"
                    key={i}
                    value={item.fleet_id}
                  >
                    {item.fleet_desc}
                  </option>
                ))
              : null}
          </select>
        </div>

        {theme === "dark" ? (
          <button onClick={() => setTheme("light")} className="mr-3">
            <span>
              <svg
                id="theme-toggle-light-icon"
                className="w-5 h-5 text-slate-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        ) : (
          <button onClick={() => setTheme("dark")} className="mr-3">
            <span>
              <svg
                id="theme-toggle-dark-icon"
                className="w-5 h-5 text-slate-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            </span>
          </button>
        )}

        {/* Hamburger toggle on sm screen */}
        <div
          onClick={() => setShowModal()}
          className="sm:flex items-center space-x-2 md:hidden"
        >
          <div className="p-1 rounded-md hover:bg-gray-100  focus:outline-none">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 text-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        {/* Hamburger toggle on sm screen */}

        <div
          onClick={() => setShowUserMenu()}
          className="h-10 w-10 rounded-full ml-3 dark:bg-slate-900/80 glass-bg bg-glass flex items-center justify-center cursor-pointer"
        >
          <p className="text-white">
            {user ? user?.username.slice(0, 1).toUpperCase() : null}
          </p>
        </div>

        {showUserMenu ? (
          <ul className="p-3 bg-white absolute z-50 top-full right-5 bg-glass glass-bg dark:bg-slate-900/80 dark:highlight-white/5 rounded-lg ring-1 shadow-lg overflow-hidden w-36">
            <li className="mb-3 flex flex-row py-1 px-2 dark:text-white text-slate-800">
              <User className="mr-3" />
              {user?.username}
            </li>
            <li
              onClick={handleLogout}
              className="py-1 px-2 flex items-center cursor-pointer dark:text-white text-slate-800 hover:bg-gray-200"
            >
              <LogOut className="mr-3 " />
              Logout
            </li>
          </ul>
        ) : null}
      </div>

      {/* Search bar */}
    </header>
  );
}

export default Header;
