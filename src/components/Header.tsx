import React, { useState, useContext } from "react";
import logo from "../Image/logo.png";
import { IFleet } from "../Views/Home";
import { StoreContext } from "../store";
import { useNavigate } from "react-router-dom";

interface Props {
  handleselectFleet: React.MouseEventHandler<HTMLSelectElement>;
  fleetData: IFleet[] | undefined;
}

function Header({ handleselectFleet, fleetData }: Props) {
  const { loggedOut } = useContext(StoreContext);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    loggedOut();
    navigate("/login");
  };
  return (
    <header className=" border-slate-900/10 flex items-center z-30 top-0 fixed justify-between w-full h-16 bg-white lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-30 px-5">
      <img className="flex-start" src={logo} width="120" />

      <button
        onClick={handleLogout}
        className="absolute right-5 border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>

      {/* Hamburger toggle on sm screen */}
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="absolute right-32 sm:flex items-center space-x-2 md:hidden pr-2"
      >
        <div className="p-1 rounded-md hover:bg-gray-100  focus:outline-none">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6 text-gray-700 dark:text-gray-300"
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

      {/* menu on on toggle */}
      {showMenu ? (
        <div className="absolute top-full right-4 md:hidden bg-transparent ring-slate-900/5 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-300 dark:highlight-white/5">
          <div className="flex relative col-start-1 col-end-3">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none z-10 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
            <select
              onClick={handleselectFleet}
              className="absolute top-0 right-0 border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option value="0">Please select Fleet</option>
              {fleetData
                ? fleetData.map((item, i) => (
                    <option key={i} value={item.fleet_id}>
                      {item.fleet_desc}
                    </option>
                  ))
                : null}
            </select>
          </div>
        </div>
      ) : null}
      {/* menu on on toggle */}

      {/* Search bar */}
      <div className="absolute right-32 hidden md:flex relative col-start-1 col-end-3">
        <svg
          className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
            fillRule="nonzero"
          />
        </svg>
        <select
          onClick={handleselectFleet}
          className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
        >
          <option value="0">Please select Fleet</option>
          {fleetData
            ? fleetData.map((item, i) => (
                <option key={i} value={item.fleet_id}>
                  {item.fleet_desc}
                </option>
              ))
            : null}
        </select>
      </div>

      {/* Search bar */}
    </header>
  );
}

export default Header;
