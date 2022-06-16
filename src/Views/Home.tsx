import React, { useState, useEffect } from "react";
import { useFleetsQuery } from "../services/fleetApi";
import { useGetVehiclesQuery } from "../services/vehiclesApi";
import Header from "../components/Header";
import { skipToken } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useLoggedinMutation } from "../services/userApi";

function Home(): JSX.Element {
  const [selectFleet, setSelectFleet] = useState<string>("0");

  const [loggedin, result] = useLoggedinMutation();

  // console.log("token", loggedin());

  /**
   * TODO: use login credential
   */
  const {
    data: fleetData,
    error: isGetFleetError,
    isLoading: isFleetLoading,
    isSuccess: isGetFleetSuccess,
  } = useFleetsQuery("Toe");

  /**
   * * Fetch vehicles of particular fleet.
   */
  const {
    data: vehicleData,
    error: isGetVehicleErr,
    isLoading: isGetVehicleLoading,
    isSuccess: isGetVehicleSuccess,
  } = useGetVehiclesQuery(
    selectFleet === "0" || !selectFleet ? skipToken : selectFleet
  );

  const handleselectFleet: React.MouseEventHandler<HTMLSelectElement> = (e) => {
    const target = e.target as HTMLInputElement;
    setSelectFleet(target.value);
  };

  return (
    <div className="bg-white mx-auto">
      <Header handleselectFleet={handleselectFleet} fleetData={fleetData} />

      {/* Render placeholder on Vehicles Null, Error, Loading */}
      {!vehicleData?.length || isGetVehicleLoading ? (
        <div className="min-h-screen h-full overflow-hidden flex justify-center items-center">
          <div className="relative overflow-hidden bg-white mb-12">
            <div className="relative overflow-hidden px-6">
              <img
                src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
                className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                alt="title image"
              />
            </div>
            <div className="pt-6 text-center">
              {isGetVehicleLoading ? (
                <p className="text-lg leading-normal text-slate-600 font-bold mb-1">
                  Loading...
                </p>
              ) : vehicleData === undefined ? (
                <p className="text-lg leading-normal text-slate-600 font-bold mb-1">
                  Please select fleet
                </p>
              ) : (
                <p className="text-lg leading-normal text-slate-600 font-bold mb-1">
                  No Data :(
                </p>
              )}
              <div className="mt-2 mb-5 space-x-2"></div>
            </div>
          </div>
        </div>
      ) : null}
      {/* Render placeholder on Vehicles Null, Error, Loading */}

      <div className="mt-24 grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full">
        {vehicleData
          ? vehicleData.map((item, i) => (
              <a
                href={`https://maps.google.com/maps?q=${item.lat},${item.lon}`}
                target="_blank"
                rel="noopener"
                key={i}
                className="bg-white rounded-3xl cursor-pointer hover:border-sky-500 border shadow-xl p-8 w-full"
              >
                <div className="flex justify-between items-center mb-4">
                  <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full">
                    <svg
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 26 26"
                      width="26px"
                      height="26px"
                    >
                      <path d="M 9 5 L 9 7 L 7 7 L 7 20 L 9 20 L 9 22 L 11 22 L 11 20 L 13 20 L 13 22 L 15 22 L 15 19.90625 C 15.265625 19.871094 15.554688 19.855469 15.8125 19.8125 C 16.414063 19.613281 16.90625 19.394531 17.40625 19.09375 C 17.804688 18.792969 18.199219 18.40625 18.5 17.90625 C 18.800781 17.40625 18.90625 16.886719 18.90625 16.1875 C 18.90625 15.386719 18.585938 14.695313 18.1875 14.09375 C 17.6875 13.492188 17.085938 13.105469 16.1875 12.90625 C 16.886719 12.605469 17.386719 12.210938 17.6875 11.8125 C 17.988281 11.414063 18.1875 10.886719 18.1875 10.1875 C 18.1875 9.585938 18.105469 9.085938 17.90625 8.6875 C 17.707031 8.289063 17.398438 7.886719 17 7.6875 C 16.601563 7.488281 16.195313 7.289063 15.59375 7.1875 C 15.398438 7.15625 15.199219 7.125 15 7.09375 L 15 5 L 13 5 L 13 7 L 11 7 L 11 5 Z M 10 9 L 12.90625 9 C 13.207031 9 13.488281 8.992188 13.6875 9.09375 C 13.988281 9.09375 14.207031 9.210938 14.40625 9.3125 C 14.605469 9.414063 14.804688 9.488281 14.90625 9.6875 C 15.007813 9.886719 15.09375 10.105469 15.09375 10.40625 C 15.09375 11.007813 14.992188 11.394531 14.59375 11.59375 C 14.195313 11.894531 13.789063 12 13.1875 12 L 10 12 Z M 10 14 L 13.5 14 C 14.199219 14 14.8125 14.199219 15.3125 14.5 C 15.8125 14.800781 16 15.394531 16 16.09375 C 16 16.394531 15.914063 16.800781 15.8125 17 C 15.613281 17.300781 15.386719 17.492188 15.1875 17.59375 C 14.988281 17.695313 14.707031 17.804688 14.40625 17.90625 C 14.105469 18.007813 13.707031 18 13.40625 18 L 10 18 Z" />
                    </svg>
                  </button>
                  <div>
                    <span className="font-bold text-slate-700">
                      {"SPEED :" + item.speed + " km/h"}
                    </span>
                    <br />
                    <span>{item.Status}</span>
                    <br />
                    <span className="font-medium text-xs text-gray-500 flex justify-end">
                      {new Date(item.local_timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-400">
                    Lat: {item.lat}
                  </h3>
                  <h3 className="font-semibold text-sm text-gray-400">
                    Lon: {item.lon}
                  </h3>
                  <h1 className="font-semibold text-xl text-gray-700">
                    $ 1,936.00
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
