import React, { useState, useEffect } from "react";
import logo from "../Image/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../App/Store";
import { fetchFleets } from "../Features/fleet/fleetSlice";
import { useFleetsQuery } from "../services/fleetApi";
import { useFleetVehiclesMutation } from "../services/fleetVehiclesApi";
import Card from "../components/Card";

interface Fleet {
  fleetID: number;
  fleetDecs: string;
}

interface fleetLocation {
  status: string;
  carRegistration: string;
  location: string;
  lat: string;
  long: string;
  time: string;
  speed: number;
}

function Home(): JSX.Element {
  // const dispatch = useDispatch<AppDispatch>();
  //   const test = useSelector((state: RootState) => state.fleet.test);
  // const handelClick = () => {
  //   dispatch(fetchFleets());
  // };

  const [selectFleet, setSelectFleet] = useState<string>();
  const handleselectFleet: React.MouseEventHandler<HTMLSelectElement> = (e) => {
    // set selected option
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    setSelectFleet(target.value);
  };

  const { data: fleetData, error, isLoading, isSuccess } = useFleetsQuery();
  console.log(fleetData);

  const [fleetVehicles, result] = useFleetVehiclesMutation();
  console.log(result);

  // console.log(result);

  //   const HandleFetchVehicleOnChange = () => {
  //     const [fleetVehicles, result] = useFleetVehiclesMutation();
  //     console.log(result);
  //   };

  // const submitForm = async () => {
  //   try {
  //     const vehicles = await fleetVehicles(selectFleet);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    // onMounted retrieve fleets on login role
    if (selectFleet === "0") {
      return;
    } else {
      fleetVehicles(selectFleet!);
    }
  }, [selectFleet]);

  return (
    <div className="bg-white mx-auto">
      <header className="flex z-10 fixed bg-white shadow-lg justify-between lg:fixed w-full ">
        <img className="flex-start" src={logo} width="150" />
        <div className="flex flex-col space-y-2 lg:space-y-0 sm:flex-row lg:flex-row xl:flex-row sm:items-center lg:items-center xl:items-center sm:space-x-4 lg:space-x-4 xl:space-x-4">
          <div className="flex flex-row-reverse items-center ">
            <div className="relative inline-flex col-start-1 col-end-3">
              <svg
                className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select
                onClick={handleselectFleet}
                className="border border-gray-400 rounded-lg text-gray-600 h-10 pl-5 pr-9 bg-[#ffffff] hover:border-gray-400 focus:outline-none appearance-none"
              >
                <option value="0">Please select Fleet</option>
                {fleetData
                  ? fleetData.map((item, i) => (
                    <option value={item.fleet_id[0]}>
                      {item.fleet_desc}
                    </option>
                  ))
                  : null}
              </select>
            </div>
          </div>
          <a
            href="/login"
            className="flex items-center justify-center  px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none"
          >
            Logout
          </a>
        </div>
      </header>

      <div className="relative h-24 w-32 ...">
        <div className="absolute inset-x-0 top-0 h-10 ..."></div>
      </div>

      <div className="grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full">
        {result.data
          ? result.data.map((item, i) => (
            <a href={`https://maps.google.com?q=${item.lat[0]},${item.lon[0]}`} target="_blank" rel="noopener" className="bg-white rounded-3xl border shadow-xl p-8 w-full cursor-pointer hover:border-sky-500">
              <div className="flex justify-between items-center mb-4">

                <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#EBD4F0]  rounded-full">
                  <svg className="w-8 h-8 fill-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                  </svg>
                </button>
                <div>
                  <span className="font-bold text-green-500">
                    {"Registration : "}
                  </span>
                  <br />
                  <span className="font-medium text-xs text-gray-500 flex justify-end">
                    {new Date(item.local_timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-400">{"SPEED : " + item.speed + " km/h"}</h3>
                <h1 className="font-semibold text-sm text-gray-500">
                  {"Location : " + item.namt}
                </h1>
              </div>
            </a>
          ))
          : null}
      </div>
    </div>
  );
}

export default Home;
