import { IVehicle } from "../Views/Home";

const search = (data: IVehicle[], filterStr: string): IVehicle[] => {
  return data.filter((item: IVehicle) => {
    return item.registration.match(filterStr);
  });
};

export { search };
