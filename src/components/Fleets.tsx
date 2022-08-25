import React from "react";
import { StoreContext } from "../storeContext";
import { IFleet } from "../views/Home";

type Props = {
  handleselectFleet: React.MouseEventHandler<HTMLLIElement>;
};

function Fleets({ handleselectFleet }: Props) {
  const { fleetsData } = React.useContext(StoreContext);
  // console.log("FLEETS COMPONENT", fleetsData);
  return (
    <>
      {fleetsData?.slice(0, 200).map((fleet: IFleet, index: number) => (
        <li
          onClick={handleselectFleet}
          className="p-5 cursor-pointer hover:bg-slate-200 overflow-hidden dark:text-white dark:hover:bg-slate-900 dark:bg-slate-800 bg-white"
          key={index}
          value={fleet.fleet_id}
        >
          {fleet.fleet_desc}
        </li>
      ))}
    </>
  );
}

export const MemoizedFleets = React.memo(Fleets);
