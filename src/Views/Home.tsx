import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useFleetsQuery } from "../services/fleetApi";
import { useGetVehiclesQuery } from "../services/vehiclesApi";
import Header from "../components/Header";
import { skipToken } from "@reduxjs/toolkit/query";

function Home(): JSX.Element {
  const [selectFleet, setSelectFleet] = useState<string>("0");

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

=======
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../App/Store";
import { fetchFleets } from "../Features/fleet/fleetSlice";
import { useFleetsQuery } from "../services/fleetApi";
import { useFleetVehiclesMutation } from "../services/fleetVehiclesApi";
import Card from "../components/Card";
import Header from "../components/Header";
import nosignal from "../Image/nosignal.png";

function Home(): JSX.Element {
  const [selectFleet, setSelectFleet] = useState<string>();
>>>>>>> af1cc2c931555e2b0cf2c0df636ea4c0c4b80fd8
  const handleselectFleet: React.MouseEventHandler<HTMLSelectElement> = (e) => {
    const target = e.target as HTMLInputElement;
    setSelectFleet(target.value);
  };

<<<<<<< HEAD
  return (
    <div className="bg-white mx-auto">
      <Header handleselectFleet={handleselectFleet} fleetData={fleetData} />

      {/* Render placeholder on Vehicles Null, Error, Loading */}
      {!vehicleData?.length || isGetVehicleLoading ? (
        <div className="min-h-screen h-full overflow-hidden flex justify-center items-center">
          <div className="relative overflow-hidden bg-white mb-12">
            <div className="relative overflow-hidden px-6">
=======
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
      console.log(selectFleet);
      fleetVehicles(selectFleet!);
    }
  }, [selectFleet]);

  const getCard = result.data
    ? result.data.map((item, i) => {
        if (item.Status === "NORMAL") {
          return (
            <a
              href={`https://maps.google.com?q=${item.lat},${item.lon}`}
              target="_blank"
              rel="noopener"
              className="bg-white rounded-3xl border shadow-xl p-8 w-full cursor-pointer hover:border-sky-500"
            >
              <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#3CA06B] rounded-full">
                  <svg
                    className="w-8 h-8 fill-gray-300 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                  </svg>
                </button>
                <div>
                  <span className="font-bold text-green-500">
                    {"Registration : "}
                  </span>
                  <br />
                  <span className="font-medium text-xs text-gray-500 flex justify-end">
                    {new Date(item.local_timestamp).toUTCString()}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Status : " + item.Status}
                </h3>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Speed : " + item.speed + " km/h"}
                </h3>

                <div className="grid grid-cols-2">
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp1 : " + item.Temp1 + " C"}
                  </h3>
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp2 : " + item.Temp2 + " C"}
                  </h3>
                </div>

                <h1 className="font-semibold text-sm text-gray-500">
                  {"Location : " + item.namt}
                </h1>
              </div>
            </a>
          );
        } else if (item.Status === "ENGINE OFF") {
          return (
            <a
              href={`https://maps.google.com?q=${item.lat},${item.lon}`}
              target="_blank"
              rel="noopener"
              className="bg-white rounded-3xl border shadow-xl p-8 w-full cursor-pointer hover:border-sky-500"
            >
              <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#85929E] rounded-full">
                  <svg
                    className="w-8 h-8 fill-gray-300 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                  </svg>
                </button>
                <div>
                  <span className="font-bold text-green-500">
                    {"Registration : "}
                  </span>
                  <br />
                  <span className="font-medium text-xs text-gray-500 flex justify-end">
                    {new Date(item.local_timestamp).toUTCString()}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Status : " + item.Status}
                </h3>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Speed : " + item.speed + " km/h"}
                </h3>

                <div className="grid grid-cols-2">
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp1 : " + item.Temp1 + " C"}
                  </h3>
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp2 : " + item.Temp2 + " C"}
                  </h3>
                </div>

                <h1 className="font-semibold text-sm text-gray-500">
                  {"Location : " + item.namt}
                </h1>
              </div>
            </a>
          );
        } else if (item.Status === "NO SIGNAL 24Hr.") {
          return (
            <a
              href={`https://maps.google.com?q=${item.lat},${item.lon}`}
              target="_blank"
              rel="noopener"
              className="bg-white rounded-3xl border shadow-xl p-8 w-full cursor-pointer hover:border-sky-500"
            >
              <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#DD3F3C] rounded-full">
                  <img
                    src={nosignal}
                    loading="lazy"
                    className="w-8"
                    alt="tailus logo"
                  />
                </button>
                <div>
                  <span className="font-bold text-green-500">
                    {"Registration : "}
                  </span>
                  <br />
                  <span className="font-medium text-xs text-gray-500 flex justify-end">
                    {new Date(item.local_timestamp).toUTCString()}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Status : " + item.Status}
                </h3>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Speed : " + item.speed + " km/h"}
                </h3>

                <div className="grid grid-cols-2">
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp1 : " + item.Temp1 + " C"}
                  </h3>
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp2 : " + item.Temp2 + " C"}
                  </h3>
                </div>

                <h1 className="font-semibold text-sm text-gray-500">
                  {"Location : " + item.namt}
                </h1>
              </div>
            </a>
          );
        } else if (item.Status === "NO SIGNAL 12Hr.") {
          return (
            <a
              href={`https://maps.google.com?q=${item.lat},${item.lon}`}
              target="_blank"
              rel="noopener"
              className="bg-white rounded-3xl border shadow-xl p-8 w-full cursor-pointer hover:border-sky-500"
            >
              <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#FCFC51] rounded-full">
                  <svg
                    className="w-8 h-8 fill-gray-300 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                  </svg>
                </button>
                <div>
                  <span className="font-bold text-green-500">
                    {"Registration : "}
                  </span>
                  <br />
                  <span className="font-medium text-xs text-gray-500 flex justify-end">
                    {new Date(item.local_timestamp).toUTCString()}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Status : " + item.Status}
                </h3>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Speed : " + item.speed + " km/h"}
                </h3>

                <div className="grid grid-cols-2">
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp1 : " + item.Temp1 + " C"}
                  </h3>
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp2 : " + item.Temp2 + " C"}
                  </h3>
                </div>

                <h1 className="font-semibold text-sm text-gray-500">
                  {"Location : " + item.namt}
                </h1>
              </div>
            </a>
          );
        } else if (item.Status === "IDEL") {
          return (
            <a
              href={`https://maps.google.com?q=${item.lat},${item.lon}`}
              target="_blank"
              rel="noopener"
              className="bg-white rounded-3xl border shadow-xl p-8 w-full cursor-pointer hover:border-sky-500"
            >
              <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#FC77F8] rounded-full">
                  <svg
                    className="w-8 h-8 fill-gray-300 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                  </svg>
                </button>
                <div>
                  <span className="font-bold text-green-500">
                    {"Registration : "}
                  </span>
                  <br />
                  <span className="font-medium text-xs text-gray-500 flex justify-end">
                    {new Date(item.local_timestamp).toUTCString()}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Status : " + item.Status}
                </h3>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Speed : " + item.speed + " km/h"}
                </h3>

                <div className="grid grid-cols-2">
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp1 : " + item.Temp1 + " C"}
                  </h3>
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp2 : " + item.Temp2 + " C"}
                  </h3>
                </div>

                <h1 className="font-semibold text-sm text-gray-500">
                  {"Location : " + item.namt}
                </h1>
              </div>
            </a>
          );
        } else if (item.Status === "SPEEDING") {
          return (
            <a
              href={`https://maps.google.com?q=${item.lat},${item.lon}`}
              target="_blank"
              rel="noopener"
              className="bg-white rounded-3xl border shadow-xl p-8 w-full cursor-pointer hover:border-sky-500"
            >
              <div className="flex justify-between items-center mb-4">
                <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#A04AF0] rounded-full">
                  <svg
                    className="w-8 h-8 fill-gray-300 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                  </svg>
                </button>
                <div>
                  <span className="font-bold text-green-500">
                    {"Registration : "}
                  </span>
                  <br />
                  <span className="font-medium text-xs text-gray-500 flex justify-end">
                    {new Date(item.local_timestamp).toUTCString()}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Status : " + item.Status}
                </h3>
                <h3 className="font-semibold text-sm text-gray-400">
                  {"Speed : " + item.speed + " km/h"}
                </h3>

                <div className="grid grid-cols-2">
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp1 : " + item.Temp1 + " C"}
                  </h3>
                  <h3 className="font-semibold text-sm text-gray-400">
                    {"Temp2 : " + item.Temp2 + " C"}
                  </h3>
                </div>

                <h1 className="font-semibold text-sm text-gray-500">
                  {"Location : " + item.namt}
                </h1>
              </div>
            </a>
          );
        }
      })
    : null;

  return (
    <div className="bg-white mx-auto">
      <Header fleetData={fleetData} handleselectFleet={handleselectFleet} />

      {/* Render placeholder on Vehicles Null, Error, Loading */}
      {!result.isSuccess ? (
        <div className="min-h-screen h-full overflow-hidden flex justify-center items-center">
          <div className="relative overflow-hidden bg-white mb-12">
            <div className="relative overflow-hidden px-6 z-20">
>>>>>>> af1cc2c931555e2b0cf2c0df636ea4c0c4b80fd8
              <img
                src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
                className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                alt="title image"
              />
            </div>
            <div className="pt-6 text-center">
<<<<<<< HEAD
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
=======
              {result.isLoading ? (
                <p className="text-lg leading-normal text-slate-600 font-bold mb-1">
                  Loading...
                </p>
              ) : (
                <p className="text-lg leading-normal text-slate-600 font-bold mb-1">
                  Please select fleet
                </p>
>>>>>>> af1cc2c931555e2b0cf2c0df636ea4c0c4b80fd8
              )}
              <div className="mt-2 mb-5 space-x-2"></div>
            </div>
          </div>
        </div>
      ) : null}
      {/* Render placeholder on Vehicles Null, Error, Loading */}

<<<<<<< HEAD
      <div className="mt-24 grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full">
        {vehicleData
          ? vehicleData.map((item, i) => (
              <div
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
              </div>
            ))
          : null}
=======
      <div className="relative h-28 w-32">
        <div className="fixed top-0 left-0 right-0 h-28 z-10 bg-white"></div>
      </div>

      <div className="grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full">
        {getCard}
>>>>>>> af1cc2c931555e2b0cf2c0df636ea4c0c4b80fd8
      </div>
    </div>
  );
}

export default Home;
