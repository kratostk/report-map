import { User } from "./app.type";

export const userReducer = (state: User | null, action: any): User | null => {
  switch (action.type) {
    case "ADD":
      return (state = action.payload);
    default:
      return state;
  }
};
