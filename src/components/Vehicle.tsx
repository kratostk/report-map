import React from "react";
import { IVehicle } from "../views/Home";
import speed from "../Image/speed.png";
import nosignal from "../Image/nosignal.png";
import { Radio, MapPin, Navigation, Thermometer } from "react-feather";
import { dateENToTH, timeENToTH } from "../utils/formatStr";
import NoSignalIcon from "../Image/no-signal2.svg";
import SpeedingIcon from "../Image/speeding1.svg";

interface Props {
  vehicle: IVehicle;
}

function Vehicle({ vehicle }: Props): JSX.Element {
  const statusEnToth = (str: string): string => {
    switch (str) {
      case "ENGINE OFF":
        return "ดับเครื่องยนต์";
      case "NORMAL":
        return "ปกติ";
      case "NO SIGNAL 24Hr.":
        return "ไม่มีสัญญาน 24 ชม.";
      case "IDEL":
        return "จอดติดเครื่องยนต์";
      case "SPEEDING":
        return "เคลื่อนที่";
      default:
        return "ไม่สามารถระบุได้";
    }
  };

  return (
    <a
      href={`https://maps.google.com?q=${vehicle.lat},${vehicle.lon}`}
      target="_blank"
      rel="noopener"
      className="glass-bg dark:bg-slate-800/50 hover:dark:bg-slate-800/60 hover:bg-white/50 bg-glass dark:highlight-white/5 rounded-3xl shadow p-8 w-full cursor-pointer hover:border-sky-500"
    >
      <div className="flex justify-between items-center mb-4">
        {vehicle.Status === "NORMAL" ? (
          <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 dark:text-white bg-[#3CA06B] rounded-full">
            <svg
              className="w-8 h-8 fill-white "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
            </svg>
            {/* <FontAwesomeIcon icon={faCar} className="fa-xl" /> */}
          </button>
        ) : vehicle.Status === "ENGINE OFF" ? (
          <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#85929E] rounded-full">
            <svg
              className="w-8 h-8 fill-white "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
            </svg>
          </button>
        ) : vehicle.Status === "NO SIGNAL 24Hr." ? (
          <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#DD3F3C] rounded-full">
            <img className="w-8 h-8" src={NoSignalIcon} alt="no signal 24h." />
          </button>
        ) : vehicle.Status === "NO SIGNAL 12Hr." ? (
          <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#FCFC51] rounded-full">
            <img className="w-8 h-8" src={NoSignalIcon} alt="no signal 12h." />
          </button>
        ) : vehicle.Status === "IDEL" ? (
          <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#FC77F8] rounded-full">
            <svg
              className="w-8 h-8 fill-white "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
            </svg>
          </button>
        ) : vehicle.Status === "SPEEDING" ? (
          <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#FA6505] rounded-full">
            <img
              src={SpeedingIcon}
              loading="lazy"
              className="w-10 text-white"
              alt="tailus logo"
            />
          </button>
        ) : (
          <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#85929E] rounded-full">
            <svg
              className="w-8 h-8 fill-white "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
            </svg>
          </button>
        )}
        <div>
          <span className="font-bold text-slate-900 dark:text-white">
            {"ทะเบียน : " + vehicle.registration}
          </span>
          <br />
          <span className="font-medium text-xs text-slate-700 dark:text-white flex justify-end">
            {/* {new Date(vehicle.local_timestamp).toUTCString()} */}
            {dateENToTH(vehicle.local_timestamp)}
          </span>
          <span className="font-medium text-xs text-slate-700 dark:text-white flex justify-end">
            {/* {new Date(vehicle.local_timestamp).toUTCString()} */}
            {timeENToTH(vehicle.local_timestamp)}
          </span>
        </div>
      </div>
      <div>
        <div
          className={`font-semibold text-slate-700 dark:text-slate-300 flex flex-row text-sm${
            vehicle.Status === "NORMAL"
              ? "text-green-500 flex items-center"
              : "text-gray-400"
          }`}
        >
          {/* <FontAwesomeIcon icon="fa-brands fa-safari" /> */}
          <Radio className="mr-3" />
          <div className="flex items-center justify-center">
            <h3>{statusEnToth(vehicle.Status)}</h3>
            {vehicle.Status === "NORMAL" ? (
              <p className="flashing ml-3"></p>
            ) : null}
          </div>
        </div>

        <div className=" mt-3 dark:text-slate-300 text-slate-700 flex flex-row items-start justify-start">
          <div className="w-10 h-10">
            <Navigation className="mr-3 " />
          </div>
          <h3 className="text-sm text-slate-700 dark:text-slate-300">
            {vehicle.speed} กม./ชม.
          </h3>
        </div>

        <div className="grid grid-cols-2">
          <div className="text-slate-700 dark:text-slate-300 flex flex-row items-start justify-start">
            <div className="w-10 h-10">
              <Thermometer className=" " />
            </div>
            <h3 className="text-sm text-slate-700 dark:text-slate-300">
              {vehicle.Temp1.toString() === "?" ? "0" : vehicle.Temp1} °C
            </h3>
          </div>

          <div className=" text-slate-700 dark:text-slate-300 flex flex-row items-start justify-start">
            <div className="w-10 h-10">
              <Thermometer className="mr-3 " />
            </div>
            <h3 className="text-sm">
              {vehicle.Temp2.toString() === "?" ? "0" : vehicle.Temp2} °C
            </h3>
          </div>
        </div>

        <div className=" mt-3 text-slate-700 dark:text-slate-300 flex flex-row items-start justify-start">
          <div className="w-10 h-10">
            <MapPin className="mr-3 " />
          </div>
          <h3 className="text-sm ">{vehicle.namt}</h3>
        </div>
      </div>
    </a>
  );
}

export default Vehicle;
