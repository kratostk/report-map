import React, { useState, useContext } from "react";
import Header from "../components/Header";
import useSWR from "swr";
import { StoreContext } from "../storeContext";
import Vehicle from "../components/Vehicle";
import { GiCarWheel } from "react-icons/gi";
import SelectFleetSM from "../components/SelectFleetSM";
import Banner from "../components/Banner";
import fetcher from "../utils/fetcher";

export type Fleet = {
  fleet_id: string;
  fleet_desc: string;
};
export type Vehicle = {
  fleet_id: number;
  veh_id: number;
  registration: string;
  lat: number;
  lon: number;
  local_timestamp: Date;
  speed: number;
  name: string;
  namt: string;
  distance: number;
  evt_id: string;
  Status: string;
  Temp1: string;
  Temp2: string;
};

function Home(): JSX.Element {
  const { user, fetchFleets } = useContext(StoreContext);

  const [nullSafetyFleets, setNullSafetyFleets] = useState<
    Array<Fleet> | undefined
  >();

  const [selectFleet, setSelectFleet] = useState<string>("0");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false); // logged in user menu panel
  const [searchString, setSearchString] = useState<string | null>(null);
  const [filterData, setFilterData] = useState<Vehicle[] | null>(null);
  const [showFleets, setShowFleets] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  function toggleSearchByFleet() {
    setShowFleets(true);
  }

  function toggleProfileMenu() {
    setShowUserMenu(!showUserMenu);
  }

  const disablePopupMenu = (): void => {
    setShowMenu(false);
    setShowUserMenu(false);
    setShowFleets(false);
  };
  const handleShowModal = (): void => {
    setOpen(true);
  };

  const handleSetMobileFleetModal = (v: boolean) => {
    setOpen(v);
  };

  const handleVehicleSearchFilter: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    setSearchString(e.target.value);
  };

  const search = (data: Vehicle[], filterStr: string | null): void => {
    if (!data) {
      return;
    }
    if (filterStr) {
      let filterd = data.filter((item: Vehicle) => {
        return item.registration.match(filterStr);
      });
      setFilterData(filterd);
    } else {
      setFilterData(data);
    }
  };

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user?.token}`,
    },
  };

  /**
   * Retrive Fleets
   */
  const { data: fleets, error: fetchFleetError } = useSWR(
    [
      `https://geotrackerbackend.kratostracking.com:5000/api/fleets/${
        user!.username
      }`,
      config,
    ],
    fetcher
  );

  /**
   * Retrive Vehicles
   */
  const { data: vehicles, error: fetchVehicleError } = useSWR(
    [
      `https://geotrackerbackend.kratostracking.com:5000/api/fleet/vehicles/${selectFleet}`,
      config,
    ],
    fetcher,
    { refreshInterval: 30000 } // revalidate every 30 seconds
  );

  /**
   * Change select fleet on submit button
   */

  const handleselectFleet: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const target = e.target as HTMLInputElement;
    setSelectFleet(target.value);
  };
  const closeFleetSearchFilterPanel = (): void => {
    setShowFleets(false);
    setShowUserMenu(false);
  };

  const handleSelectFleetOnMobile: React.MouseEventHandler<HTMLLIElement> = (
    e
  ) => {
    const target = e.target as HTMLInputElement;
    setSelectFleet(target.value);
    setOpen(false);
  };

  React.useEffect(() => {
    search(vehicles, searchString);
  }, [searchString]);

  React.useEffect(() => {
    if (!fleets) {
      return;
    } else {
      //* In some case fleetID == null
      let nullSafeFleetArr = fleets.filter(
        (item: Fleet) => item.fleet_id !== null
      );

      setNullSafetyFleets(nullSafeFleetArr);

      //* Set first fleet to be fetched initially.
      setSelectFleet(nullSafeFleetArr[0].fleet_id);

      //* update global state context
      fetchFleets(nullSafeFleetArr);
    }
  }, [fleets]);

  return (
    <div className="mx-auto min-h-screen bg-sky-100 dark:bg-slate-900">
      <Header
        selectFleet={selectFleet}
        handleselectFleet={handleselectFleet}
        fleetData={fleets}
        showUserMenu={showUserMenu}
        setShowUserMenu={toggleProfileMenu}
        setShowModal={handleShowModal}
        showFleets={showFleets}
        handleShowFleets={toggleSearchByFleet}
      />

      {/****************************************/
      /*      VEHICLE SEARCH FILTER       */
      /****************************************/}
      <Banner
        fleets={fleets}
        vehicles={vehicles}
        selectedFleet={selectFleet}
        handleVehicleSearchFilter={handleVehicleSearchFilter}
        closeFleetSearchFilterPanel={closeFleetSearchFilterPanel}
      />

      {/****************************************************************/
      /*      RENDER PLACEHOLDER ON VEHICLE null, Error, Loading       */
      /****************************************************************/}
      {vehicles === undefined || !vehicles.length ? (
        <div
          onClick={disablePopupMenu}
          className="min-h-screen h-full overflow-hidden flex justify-center items-center"
        >
          <div className="relative overflow-hidden bg-panel mb-12 bg-transparent">
            <div className="relative overflow-hidden px-6">
              <img
                src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
                className="max-w-full h-auto mx-auto rounded-full bg-glass glass-bg"
                alt="title"
              />
            </div>
            <div className="pt-6 text-center">
              {!vehicles ? (
                <p className="text-lg font-Kanit leading-normal text-slate-800 font-bold mb-1">
                  โหลดข้อมูล...
                </p>
              ) : (
                <p className="text-lg font-Kanit leading-normal text-slate-600 font-bold mb-1">
                  กรุณาเลือกกลุ่มยานยนต์
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={disablePopupMenu}
          className="front-idex grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full pb-10"
        >
          {!searchString && vehicles
            ? vehicles.map((item: Vehicle, i: number) => (
                <Vehicle vehicle={item} key={i} />
              ))
            : filterData?.map((item: Vehicle, i: number) => (
                <Vehicle vehicle={item} key={i} />
              ))}
        </div>
      )}

      {/*************************************************/
      /*                 RENDER VEHICLE DATA            */
      /**************************************************/}

      {/******************************************************************************/
      /*                FIXED OPEN SEARCH FILTER FORM FOR MOBILE ICON                */
      /******************************************************************************/}
      <div className="md:hidden shadow-lg fixed bottom-10 right-10 bg-sky-700 rounded-full w-16 h-16 ">
        <button
          onClick={() => handleShowModal()}
          className="w-full h-full flex justify-center items-center"
        >
          <GiCarWheel className="w-10 h-10 text-white" />
        </button>
      </div>

      {/*****************************************************************/}
      {/*             SEARCH FILTER FORM FOR MOBILE SCREEN              */}
      {/*****************************************************************/}
      <SelectFleetSM
        fleets={nullSafetyFleets}
        handleSelectFleetOnMobile={handleSelectFleetOnMobile}
        isMobileFleetModalOpen={open}
        setMobileFleetModal={handleSetMobileFleetModal}
      />
    </div>
  );
}

export default Home;
