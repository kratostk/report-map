import React from "react";
import { IVehicle } from "../services/vehiclesApi";

interface Props {
  vehicle: IVehicle[];
}

function Card({ vehicle }: Props) {
  return (
    <div>
      {vehicle.map((item, i) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          <div className="relative mx-auto w-full">
            <a
              href="#"
              className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
            >
              <div className="shadow p-4 rounded-lg bg-white">
                <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                  <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                  </div>

                  <div className="absolute flex justify-center bottom-0 mb-3">
                    <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                      <p className="flex items-center font-medium text-gray-800">
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                        Normal
                      </p>

                      <p className="flex items-center font-medium text-gray-800">
                        <svg
                          className="w-5 h-5 fill-current mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 480 512"
                        >
                          <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                        </svg>
                        100 km./hr.
                      </p>
                    </div>
                  </div>

                  <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                    Location
                  </span>
                </div>

                <div className="mt-4">
                  <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1">
                    ฮย 7990
                  </h2>

                  <div className="inline-flex flex-row items-center text-gray-800 gap-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="mt-2 xl:mt-0">09.06.2022 11.00 AM</span>
                  </div>
                  <div className="inline-flex flex-row items-center text-gray-800 gap-4">
                    <svg width="45" height="45" viewBox="0 0 24 24" fill="#000">
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="mt-2 xl:mt-0">
                      อาคารอื้อจือเหลียง 968 ถนนพระราม 4 แขวงสีลม เขตบางรัก
                      กรุงเทพมหานคร 10500.
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
