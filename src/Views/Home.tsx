import React, { useState, useContext, Fragment, useRef } from "react";
import Header from "../components/Header";
import useSWR from "swr";
import axios, { AxiosRequestConfig } from "axios";
import { StoreContext } from "../store";
import Vehicle from "../components/Vehicle";
import { Dialog, Transition } from "@headlessui/react";

export interface IFleet {
  fleet_id: string;
  fleet_desc: string;
}
export interface IVehicle {
  fleet_id: number;
  veh_id: number;
  registration: string;
  lat: number;
  lon: number;
  local_timestamp: Date;
  speed: number;
  name: string;
  namt: string;
  distance: number;
  evt_id: string;
  Status: string;
  Temp1: string;
  Temp2: string;
}
/**************************************************************** */
/*                API caller function           */
/**************************************************************** */
const fetcher = async (url: string, config: AxiosRequestConfig) => {
  try {
    const r = await axios.get(url, config);
    return r.data;
  } catch (error) {
    console.log(error);
  }
};

function Home(): JSX.Element {
  const { user } = useContext(StoreContext);

  const [selectFleet, setSelectFleet] = useState<string>("0");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string | null>(null);
  const [filterData, setFilterData] = useState<IVehicle[] | null>(null);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const handleSetShowDropdown = (): void => {
    setShowMenu(!showMenu);
  };

  const handleSetShowUserMenu = (): void => {
    setShowUserMenu(!showUserMenu);
  };
  const disablePopupMenu = (): void => {
    setShowMenu(false);
    setShowUserMenu(false);
  };
  const handleShowModal = (): void => {
    setOpen(true);
  };

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchString(e.target.value);
  };

  const search = (data: IVehicle[], filterStr: string | null): void => {
    if (!data) {
      return;
    }
    if (filterStr) {
      let filterd = data.filter((item: IVehicle) => {
        return item.registration.match(filterStr);
      });
      setFilterData(filterd);
    } else {
      console.log("search filter is null");
      setFilterData(data);
    }
  };

  React.useEffect(() => {
    search(vehicleData, searchString);
  }, [searchString]);

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    },
  };

  /**
   * Retrive Fleets
   */
  const { data, error } = useSWR(
    [`/api/fleets/${user!.username}`, config],
    fetcher
  );

  /**
   * Retrive Vehicles
   */
  const { data: vehicleData, error: vehicleError } = useSWR(
    [`/api/fleet/vehicles/${selectFleet}`, config],
    fetcher
  );

  const handleselectFleet: React.MouseEventHandler<HTMLSelectElement> = (e) => {
    const target = e.target as HTMLInputElement;
    setSelectFleet(target.value);
  };

  return (
    <div className="mx-auto min-h-screen bg-panel dark:bg-slate-900">
      <Header
        handleselectFleet={handleselectFleet}
        fleetData={data}
        showUserMenu={showUserMenu}
        setShowUserMenu={handleSetShowUserMenu}
        setShowModal={handleShowModal}
      />

      {/******************************************************************************/
      /*      Search Filter       */
      /******************************************************************************/}

      {vehicleData && selectFleet !== "0" ? (
        <div
          onClick={() => setShowUserMenu(false)}
          className="pt-28 dark:bg-slate-900 bg-panel py-10"
        >
          <form className="flex  items-center max-w-lg mx-auto">
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full mx-5 md:mx-0">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
                onChange={handleSearch}
                type="text"
                id="search"
                className="bg-gray-50 border dark:slate-600 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="ค้นหาจากทะเบียน"
                required
              />
            </div>
          </form>

          <ul className="mt-3 max-w-lg lg:mx-auto mx-5  flex flex-row flex-wrap gap-1">
            <li className="text-sm border-slate-800 dark:text-sky-500 dark:highlight-white/20 p-2 rounded-full text-sky-800">
              ทั้งหมด: {vehicleData.length}
            </li>
            <li className=" text-sm dark:text-sky-500 p-2 rounded-full ">
              ปกติ:{" "}
              {
                vehicleData.filter((item: IVehicle) => item.Status === "NORMAL")
                  .length
              }
            </li>
            <li className=" text-sm dark:text-sky-500 p-2 rounded-full ">
              ดับเครื่องยนต์:{" "}
              {
                vehicleData.filter(
                  (item: IVehicle) => item.Status === "ENGINE OFF"
                ).length
              }
            </li>
            <li className=" text-sm dark:text-sky-500 p-2 rounded-full">
              ไม่มีสัญญาน:{" "}
              {
                vehicleData.filter(
                  (item: IVehicle) => item.Status === "NO SIGNAL 24Hr."
                ).length
              }
            </li>
            <li className=" text-sm  dark:text-sky-500 p-2 rounded-full">
              จอดติดเครื่องยนต์:{" "}
              {
                vehicleData.filter((item: IVehicle) => item.Status === "IDEL")
                  .length
              }
            </li>
            <li className="text-sm dark:text-sky-500 p-2 rounded-full">
              เคลื่อนที่:{" "}
              {
                vehicleData.filter(
                  (item: IVehicle) => item.Status === "SPEEDING"
                ).length
              }
            </li>
          </ul>
        </div>
      ) : null}

      {/******************************************************************************/
      /*      Render placeholder on Vehicles Null, Error, Loading       */
      /******************************************************************************/}
      {vehicleData === undefined || !vehicleData.length ? (
        <div
          onClick={disablePopupMenu}
          className="min-h-screen h-full overflow-hidden flex justify-center items-center"
        >
          <div className="relative overflow-hidden bg-panel dark:bg-slate-900 mb-12">
            <div className="relative overflow-hidden px-6">
              <img
                src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
                className="max-w-full h-auto mx-auto rounded-full bg-gray-50  grayscale"
                alt="title image"
              />
            </div>
            <div className="pt-6 text-center">
              {!vehicleData ? (
                <p className="text-lg leading-normal text-slate-600 font-bold mb-1">
                  Loading...
                </p>
              ) : (
                <p className="text-lg leading-normal text-slate-600 font-bold mb-1">
                  Please select fleet
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {/******************************************************************************/
      /*      Render on fetched Data       */
      /******************************************************************************/}

      <div
        onClick={disablePopupMenu}
        className="dark:bg-slate-900 bg-panel grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full"
      >
        {!searchString && vehicleData
          ? vehicleData.map((item: IVehicle, i: number) => (
              <Vehicle vehicle={item} key={i} />
            ))
          : filterData?.map((item: IVehicle, i: number) => (
              <Vehicle vehicle={item} key={i} />
            ))}
      </div>

      {/******************************************************************************/
      /*      Modal Popup       */
      /******************************************************************************/}

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 md:hidden"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-red-100 sm:mx-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-24 h-24 rounded-2xl p-3 border text-blue-400 border-none bg-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900 mb-5"
                        >
                          Select Fleet
                        </Dialog.Title>
                        <div className="flex relative col-start-1 col-end-3">
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
                            className="border border-gray-300 rounded-full 0 h-10 pl-5 pr-10  hover:border-gray-400 focus:outline-none appearance-none"
                          >
                            <option value="0">Please select Fleet</option>
                            {data
                              ? data.map((item: IFleet, i: number) => (
                                  <option key={i} value={item.fleet_id}>
                                    {item.fleet_desc}
                                  </option>
                                ))
                              : null}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default Home;
