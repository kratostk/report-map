import React from "react";
import { Vehicle as VehicleType } from "../views/Home";
import { dateENToTH, timeENToTH } from "../utils/formatStr";
import NoSignalIcon from "../Image/no-signal2.svg";
import { FiRadio, FiNavigation, FiThermometer, FiMapPin } from "react-icons/fi";
import { GiCarWheel } from "react-icons/gi";
import GPinIcon from "../assets/svg/g-pin.svg";
import OverSpeedingIcon from "../assets/images/speedometer.png";

interface Props {
  vehicle: VehicleType;
}

function Vehicle({ vehicle }: Props): JSX.Element {
  const statusEnToth = (str: string): string => {
    console.log(str);
    switch (str.trim()) {
      case "ENGINE OFF":
        return "ดับเครื่องยนต์";
      case "NORMAL":
        return "ปกติ";
      case "NO SIGNAL 24Hr.":
        return "ไม่มีสัญญาณ 24 ชม.";
      case "IDLE":
        return "จอดติดเครื่องยนต์";
      case "SPEEDING":
        return "ความเร็วเกินกำหนด";
      default:
        return "ไม่สามารถระบุได้";
    }
  };

  return (
    <a
      href={`https://maps.google.com?q=${vehicle.lat},${vehicle.lon}`}
      target="_blank"
      rel="noopener"
      className="dark:bg-slate-800/50 hover:border hover:border-cyan-500 dark:hover:border dark:hover:border-sky-500 bg-white dark:highlight-white/5 rounded-3xl shadow-lg p-8 w-full cursor-pointer"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="">
          {vehicle.Status === "NORMAL" ? (
            <div className="inline-flex items-center justify-center w-14  h-14 text-blue-100 dark:text-white bg-[#3CA06B] rounded-full">
              <svg
                className="w-8 h-8 fill-white "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
              </svg>
            </div>
          ) : vehicle.Status === "ENGINE OFF" ? (
            <div className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#85929E] rounded-full">
              <svg
                className="w-8 h-8 fill-white "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
              </svg>
            </div>
          ) : vehicle.Status === "NO SIGNAL 24Hr." ? (
            <div className="inline-flex items-center justify-center shrink-0 w-14 h-14 text-blue-100 bg-[#DD3F3C] rounded-full">
              <img
                className="w-8 h-8"
                src={NoSignalIcon}
                alt="no signal 24h."
              />
            </div>
          ) : vehicle.Status === "NO SIGNAL 12Hr." ? (
            <div className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#FCFC51] rounded-full">
              <img
                className="w-8 h-8"
                src={NoSignalIcon}
                alt="no signal 12h."
              />
            </div>
          ) : vehicle.Status === "IDEL" ? (
            <div className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#FC77F8] rounded-full">
              <svg
                className="w-8 h-8 fill-white "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
              </svg>
            </div>
          ) : vehicle.Status === "SPEEDING" ? (
            <div className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#DD3F3C] rounded-full">
              <img
                src={OverSpeedingIcon}
                loading="lazy"
                className="w-10 text-white"
                alt="tailus logo"
              />
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#85929E] rounded-full">
              <svg
                className="w-8 h-8 fill-white "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
              </svg>
            </div>
          )}
        </div>
        <div className="overflow-hidden textPolyFillWrap">
          <div className="flex justify-start items-center m-0 p-0">
            <GiCarWheel className="dark:text-white shrink-0 text-slate-800 mr-2" />
            <span className="font-Kanit font-bold text-slate-900 dark:text-sky-500 w-full textPolyFill">
              {"ทะเบียน : " + vehicle.registration}
            </span>
          </div>
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
          <FiRadio className="mr-3" />
          <div className="flex items-center justify-center">
            <h3 className="font-Kanit">{statusEnToth(vehicle.Status)}</h3>
            {/* {vehicle.Status === "NORMAL" ? (
              <p className="flashing ml-3"></p>
            ) : null} */}

            <span className="flex h-3 w-3 relative ml-3">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  vehicle.Status === "NORMAL"
                    ? "bg-green-500"
                    : vehicle.Status === "ENGINE OFF"
                    ? "bg-sky-500"
                    : "bg-[#DD3F3C]"
                } opacity-75`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${
                  vehicle.Status === "NORMAL"
                    ? "bg-green-500"
                    : vehicle.Status === "ENGINE ON"
                    ? "bg-sky-500"
                    : vehicle.Status === "ENGINE OFF"
                    ? "bg-sky-500"
                    : "bg-[#DD3F3C]"
                }`}
              ></span>
            </span>
          </div>
        </div>

        <div className=" mt-3 dark:text-slate-300 text-slate-700 flex flex-row items-start justify-start">
          <div className="w-10 h-10">
            <FiNavigation />
          </div>
          <h3 className="text-sm text-slate-700 dark:text-slate-300">
            {vehicle.speed} กม./ชม.
          </h3>
        </div>

        <div className="grid grid-cols-2">
          <div className="text-slate-700 dark:text-slate-300 flex flex-row items-start justify-start">
            <div className="w-10 h-10">
              <FiThermometer />
            </div>
            <h3 className="text-sm text-slate-700 dark:text-slate-300">
              {vehicle.Temp1.toString() === "?" ? "0" : vehicle.Temp1} °C
            </h3>
          </div>

          <div className=" text-slate-700 dark:text-slate-300 flex flex-row items-start justify-start">
            <div className="w-10 h-10">
              <FiThermometer />
            </div>
            <h3 className="text-sm">
              {vehicle.Temp2.toString() === "?" ? "0" : vehicle.Temp2} °C
            </h3>
          </div>
        </div>

        <div className=" mt-3 text-slate-700 dark:text-slate-300 flex flex-row items-start justify-start">
          <figure className="w-6 h-6 flex justify-center items-center mr-2">
            {/* <FiMapPin /> */}
            <img
              className="w-full h-full"
              src={GPinIcon}
              alt="google map pin icon"
            />
          </figure>
          <h3 className="text-sm w-full">{vehicle.namt}</h3>
        </div>
      </div>
    </a>
  );
}

export default Vehicle;
