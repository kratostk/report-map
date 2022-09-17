import { Fleet } from "./../views/Home";

const searchFilter = <T extends Fleet>(
  data: T[] | undefined,
  filterStr: string
): T[] => {
  if (!data) {
    return [];
  }

  const res = data?.filter((item: T) => {
    return item.fleet_desc.match(filterStr);
  });

  return res;
};

export { searchFilter };
