import { Fleet } from "./app.type";

export const fleetsReducer = (
  state: Array<Fleet>,
  action: any
): Array<Fleet> => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};
