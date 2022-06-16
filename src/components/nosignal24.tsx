import React from "react";
import { IVehicle } from "../services/vehiclesApi";
import Nosignal from "../Image/nosignal.png";

interface Props {
  vehicle: IVehicle[];
}

function nosignal24({ vehicle }: Props) {
  return (
    <div>
      {vehicle.map((item, i) => (
        <a
          href={`https://maps.google.com?q=${item.lat},${item.lon}`}
          target="_blank"
          rel="noopener"
          className="bg-white rounded-3xl border shadow-xl p-8 w-full cursor-pointer hover:border-sky-500"
        >
          <div className="flex justify-between items-center mb-4">
            <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-[#DD3F3C] rounded-full">
              <img
                src={Nosignal}
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
      ))}
    </div>
  );
}

export default nosignal24;
