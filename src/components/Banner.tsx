import React from "react";
import { Vehicle, Fleet } from "../views/Home";
import { AiFillCar } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { IoMdFlashOff } from "react-icons/io";
import { TbCarOff } from "react-icons/tb";
import { GiRaceCar } from "react-icons/gi";
import { RiCarWashingFill } from "react-icons/ri";

interface Props {
  vehicles: Vehicle[];
  fleets: Fleet[];
  selectedFleet: string;
  handleVehicleSearchFilter: React.ChangeEventHandler<HTMLInputElement>;
  closeFleetSearchFilterPanel: () => void;
}

const Banner = ({
  vehicles,
  fleets,
  selectedFleet,
  handleVehicleSearchFilter,
  closeFleetSearchFilterPanel,
}: Props): JSX.Element => {
  const getFleetName = (): string => {
    const res = fleets.filter((item: Fleet) => item.fleet_id === selectedFleet);
    return res[0].fleet_desc;
  };

  return (
    <>
      {vehicles && selectedFleet !== "0" ? (
        <div
          onClick={closeFleetSearchFilterPanel}
          className="pt-28 dark:highlight-white/5 highlight-white/5 py-10 flex flex-col justify-center items-center md:h-64"
        >
          <form className="flex items-center max-w-lg mx-auto w-full">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative w-full mx-5 md:mx-0 border-5 border-blue-600 ">
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
                onChange={handleVehicleSearchFilter}
                type="text"
                id="search"
                className="bg-white shadow-md font-Kanit dark:bg-slate-800/50 dark:highlight-white/5 outline:noneS focus:border-none dark:text-slate-400 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                placeholder={`ค้นหาทะเบียนจากกลุ่มยานยนต์ "${getFleetName()}"`}
                required
              />
            </div>
          </form>

          <ul className="bg-white font-Kanit rounded-lg shadow-md dark:bg-slate-800/50 bg-glass highlight-white/5 mt-3 max-w-lg lg:mx-auto mx-5  flex flex-row flex-wrap gap-1">
            <li className="flex flex-row justify-center items-center text-sm   text-slate-800 dark:text-white dark:highlight-white/20 p-2 rounded-full ">
              <AiFillCar className="mr-1 text-slate-700 dark:text-white" />
              ทั้งหมด: {vehicles.length}
            </li>
            <li className="flex flex-row justify-center items-center text-sm   text-slate-800 dark:text-white dark:highlight-white/20 p-2 rounded-full ">
              <FaCarSide className="mr-1 text-slate-700 dark:text-white" />
              ปกติ:{" "}
              {
                vehicles.filter((item: Vehicle) => item.Status === "NORMAL")
                  .length
              }
            </li>
            <li className=" flex flex-row justify-center items-center text-sm   text-slate-800 dark:text-white dark:highlight-white/20 p-2 rounded-full  ">
              <TbCarOff className="mr-1 text-slate-700 dark:text-white" />
              ดับเครื่องยนต์:{" "}
              {
                vehicles.filter((item: Vehicle) => item.Status === "ENGINE OFF")
                  .length
              }
            </li>
            <li className="flex flex-row justify-center items-center text-sm   text-slate-800 dark:text-white dark:highlight-white/20 p-2 rounded-full ">
              <IoMdFlashOff className="mr-1 text-slate-700 dark:text-white" />
              ไม่มีสัญญาณ:{" "}
              {
                vehicles.filter(
                  (item: Vehicle) => item.Status === "NO SIGNAL 24Hr."
                ).length
              }
            </li>
            <li className="flex flex-row justify-center items-center text-sm text-slate-800 dark:text-white dark:highlight-white/20 p-2 rounded-full ">
              <RiCarWashingFill className="mr-1 text-slate-700 dark:text-white" />
              จอดติดเครื่องยนต์:{" "}
              {
                vehicles.filter((item: Vehicle) => item.Status === "IDEL")
                  .length
              }
            </li>
            <li className="flex flex-row justify-center items-center text-sm   text-slate-800 dark:text-white dark:highlight-white/20 p-2 rounded-full ">
              <GiRaceCar className="m-1 text-2xl text-slate-700 dark:text-white" />
              ความเร็วเกินกำหนด:{" "}
              {
                vehicles.filter((item: Vehicle) => item.Status === "SPEEDING")
                  .length
              }
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Banner;
