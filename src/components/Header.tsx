import React, { useState, useContext } from "react";
import logo from "../Image/logo.png";
import { IFleet } from "../views/Home";
import { StoreContext } from "../storeContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../themeContext";
import { User, LogOut } from "react-feather";
import { MemoizedFleets } from "./Fleets";

interface Props {
  selectFleet: string;
  handleselectFleet: React.MouseEventHandler<HTMLLIElement>;
  fleetData: IFleet[] | undefined;
  showUserMenu: boolean;
  setShowModal: () => void;
  setShowUserMenu: () => void;
  showFleets: boolean;
  handleShowFleets: () => void;
}

function Header({
  selectFleet,
  handleselectFleet,
  fleetData,
  showUserMenu,
  setShowUserMenu,
  showFleets,
  handleShowFleets,
}: Props) {
  const { loggedOut } = useContext(StoreContext);
  const navigate = useNavigate();
  const { user } = useContext(StoreContext);
  const { setTheme, theme } = useContext(ThemeContext);
  const [searchString, setSearchString] = useState<string | null>(null);
  const [filterFleets, setFilterFleets] = useState<IFleet[] | null>(null);
  const [selectFleetName, setSelectFleetName] = useState<string | null>(null);

  const handleLogout = (): void => {
    loggedOut();
    navigate("/login");
  };
  const handlefilterFleets = (): void => {
    if (!fleetData) {
      return;
    }
    if (searchString) {
      let filted = fleetData?.filter((item: IFleet) => {
        return item.fleet_desc.match(searchString);
      });
      setFilterFleets(filted);
    } else {
      setFilterFleets(fleetData);
    }
  };

  React.useEffect(() => {
    setSelectFleetName(
      fleetData?.filter((item) => item.fleet_id === selectFleet)[0].fleet_desc!
    );
  }, [selectFleet]);
  React.useEffect(() => {
    handlefilterFleets();
  }, [searchString]);

  return (
    <header className="backdropBlur dark:darkBackdropBlur shadow-md border-slate-900/10 flex items-center z-10 top-0 fixed justify-between w-full h-16 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-30 px-5">
      <img className="my-auto z-100" src={logo} width="120" />

      <div className="flex items-center justify-center z-100">
        {/**************************************************/}
        {/*                 Search bar                     */}
        {/**************************************************/}
        <form
          onFocus={handleShowFleets}
          className="hidden md:flex max-w-lg mx-auto mr-5"
        >
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full mx-5 md:mx-0">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none z-20">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => setSearchString(e.target.value)}
              type="text"
              id="search"
              className="glass-bg bg-glass border-2 font-Kanit dark:bg-slate-800/50 dark:highlight-white/5 outline:none focus:border-transparent dark:text-slate-400 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder={
                !selectFleet && !fleetData?.length
                  ? `เลือกกลุ่มยานยนต์`
                  : selectFleetName!
              }
              required
            />
          </div>
        </form>

        <div
          className={`${
            !showFleets ? "hidden" : "block"
          } absolute z-10 top-full mx-auto lg:right-20 bg-slate-300 rounded-lg max-h-96 minWidth max-w-full SearchFilter overflow-y-auto overflow-x-hidden`}
        >
          <ul className="minWidthFleetList border dark:border-0 overflow-hidden">
            {fleetData && !searchString ? (
              <MemoizedFleets handleselectFleet={handleselectFleet} />
            ) : (
              filterFleets?.map((item: IFleet) => (
                <li
                  onClick={handleselectFleet}
                  className="p-5 cursor-pointer hover:bg-slate-500"
                  key={item.fleet_id}
                  value={item.fleet_id}
                >
                  {item.fleet_desc}
                </li>
              ))
            )}
          </ul>
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
                className="w-5 h-5 text-slate-800"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            </span>
          </button>
        )}

        {/*********************************************************/}
        {/*           Hamburger toggle on sm screen               */}
        {/*********************************************************/}
        {/* <div
          onClick={() => setShowModal()}
          className="sm:flex items-center space-x-2 md:hidden"
        >
          <div className="p-1 rounded-md hover:bg-gray-100  focus:outline-none">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 dark:text-gray-300 text-slate-800"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div> */}
        {/* Hamburger toggle on sm screen */}

        <div
          onClick={() => setShowUserMenu()}
          className="h-10 w-10 rounded-full bg-[#DD3F3C] ml-3 dark:bg-slate-900/80 glass-bg bg-glass flex items-center justify-center cursor-pointer"
        >
          <p className="text-white">
            {user ? user?.username.slice(0, 1).toUpperCase() : null}
          </p>
        </div>

        {showUserMenu ? (
          <ul className="bg-white absolute z-50 top-full right-5 dark:bg-slate-900 dark:highlight-white/5 rounded-lg ring-1 shadow-lg overflow-hidden">
            <li className="flex flex-row p-4 dark:text-white text-slate-800">
              <User className="mr-3" />
              {user?.username}
            </li>
            <li
              onClick={handleLogout}
              className="p-4 flex items-center cursor-pointer dark:text-white text-slate-800 dark:hover:bg-gray-700"
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

export default React.memo(Header);
