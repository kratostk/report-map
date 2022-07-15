import React from "react";
import { StoreContext } from "../storeContext";

function TestMemo() {
  const { user } = React.useContext(StoreContext);
  console.log("re-Rendering Test memo");
  return <div>Hello World :) ${user?.name}</div>;
}

export const MemoizedTest = React.memo(TestMemo);
