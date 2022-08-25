import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";

function view() {
  return (
    <>
      <Header
        selectFleet={"selectFleet"}
        handleselectFleet={() => {}}
        showUserMenu={false}
        fleetData={undefined}
        setShowUserMenu={() => {}}
        setShowModal={() => {}}
        showFleets={false}
        handleShowFleets={() => {}}
      />
      <div className="flex flex-col lg:flex-row dark:bg-slate-900 dark:text-white">
        <div className="lg:w-1/2 lg:pr-1 shadow-2xl z-10">
          <div>
            <figure className="relative rounded-md overflow-hidden">
              <img
                src={
                  "https://www.autoinfo.co.th/wp-content/uploads/2021/05/185745466_3924859184299392_7478465652066029500_n-1024x682.jpg"
                }
                alt="tesla"
              />
            </figure>
            <article className="p-10">
              <div className="flex flex-row items-center">
                <div className="mt-3 flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://randomuser.me/api/portraits/men/47.jpg"
                    alt="{user.handle}"
                  />
                </div>

                <div className="pl-3">
                  <h2>Elon musk</h2>
                  <h2>Driver license: 2xv03kfefl</h2>
                </div>
              </div>

              <h1>Car make: Tesla Motor</h1>
              <h2>Plate: C29FG5</h2>
              <h2>Fleet: True Leasing</h2>

              <div className="mt-3 shadow-lg rounded-sm p-5">
                <h1>Status: Engine On</h1>
                <h1>Last: Know location: Payao</h1>
                <h1>lat: 12345, lon: 1246663</h1>
              </div>
            </article>
          </div>
        </div>
        <div className="Map">
          <Map />
        </div>
      </div>
    </>
  );
}

export default view;
