import React, { useState } from "react";
import logo from "../Image/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../App/Store";
import { fetchFleets } from "../Features/fleet/fleetSlice";

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
  oil: number;
}

function Home(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const test = useSelector((state: RootState) => state.fleet.test);
  const handelClick = () => {
    dispatch(fetchFleets());
  };

  return (
    <div className="bg-white mx-auto">
      <div className="flex bg-white shadow-lg">
        <img className="flex-start" src={logo} width="150" />

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
            <select className="border border-gray-400 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-[#ffffff] hover:border-gray-400 focus:outline-none appearance-none">
              <option value="0">Please select Fleet</option>
              <option value="1">K-Trak</option>
              <option value="2">True</option>
              <option value="3">กรมการขนส่งทางบก</option>
              <option value="4">Boss</option>
            </select>
          </div>
        </div>
      </div>

      {Array.from({ length: 5 }, (v, i) => (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 max-w-screen-lg ">
            <div className="w-full py-4 px-8 bg-white shadow-lg rounded-lg my-10">
              <div className="flex justify-left items-center gap-8">
                <div className="bg-gray-800 rounded-full p-2 md:p-4">
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="#FFF">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-gray-800 text-xl font-semibold ">
                    {" "}
                    กย 4559
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Time : 08.06.2522 11.00 AM
                  </p>
                  <p className="mt-2 text-gray-600">Speed : 0 Km./Hr.</p>
                </div>
              </div>
              <div>
                <p className="mt-2 text-gray-600">
                  Location : อาคารอื้อจือเหลียง 968 ถนนพระราม 4 แขวงสีลม
                  เขตบางรัก กรุงเทพมหานคร 10500.
                </p>
              </div>
            </div>

            <div className="w-full py-4 px-8 bg-white shadow-lg rounded-lg my-10">
              <div className="flex justify-left items-center gap-8">
                <div className="bg-gray-800 rounded-full p-2 md:p-4">
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="#FFF">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-gray-800 text-xl font-semibold ">
                    {" "}
                    กย 4559
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Time : 08.06.2522 11.00 AM
                  </p>
                  <p className="mt-2 text-gray-600">Speed : 0 Km./Hr.</p>
                </div>
              </div>
              <div>
                <p className="mt-2 text-gray-600">
                  Location : อาคารอื้อจือเหลียง 968 ถนนพระราม 4 แขวงสีลม
                  เขตบางรัก กรุงเทพมหานคร 10500.
                </p>
              </div>
            </div>

            <div className="w-full py-4 px-8 bg-white shadow-lg rounded-lg my-10">
              <div className="flex justify-left items-center gap-8">
                <div className="bg-gray-800 rounded-full p-2 md:p-4">
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="#FFF">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-gray-800 text-xl font-semibold ">
                    {" "}
                    กย 4559
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Time : 08.06.2522 11.00 AM
                  </p>
                  <p className="mt-2 text-gray-600">Speed : 0 Km./Hr.</p>
                </div>
              </div>
              <div>
                <p className="mt-2 text-gray-600">
                  Location : อาคารอื้อจือเหลียง 968 ถนนพระราม 4 แขวงสีลม
                  เขตบางรัก กรุงเทพมหานคร 10500.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
