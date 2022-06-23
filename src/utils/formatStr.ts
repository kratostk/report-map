const parseDayTH = (str: string): string => {
  switch (str.slice(0, 3)) {
    case "Mon":
      return "จันทร์";
    case "Tue":
      return "อังคาร";
    case "Wed":
      return "พุธ";
    case "Thu":
      return "พฤหัสบดี";
    case "Fri":
      return "ศุกร์";
    case "Sat":
      return "เสาร์";
    case "Sun":
      return "อาทิตย์";
    default:
      return "undefined";
  }
};

const parseMonthTH = (str: string): string => {
  switch (str) {
    case "Jan":
      return "มกราคม";
    case "Feb":
      return "กุมภาพันธ์";
    case "Mar":
      return "มีนาคม";
    case "Apr":
      return "เมษายน";
    case "May":
      return "พฤษภาคม";
    case "Jun":
      return "มิถุนายน";
    case "Jul":
      return "กรกฎาคม";
    case "Aug":
      return "สิงหาคม";
    case "Sep":
      return "กันยายน";
    case "Oct":
      return "ตุลาคม";
    case "Nov":
      return "พฤศจิกายน";
    case "Dec":
      return "ธันวาคม";
    default:
      return "underfined";
  }
};

const dateENToTH = (date: Date): string => {
  const arrStr: string[] = new Date(date).toUTCString().split(" ");
  return `${parseDayTH(arrStr[0])}, ${arrStr[1]} ${parseMonthTH(arrStr[2])} ${
    arrStr[3]
  }`;
};
const timeENToTH = (date: Date): string => {
  const arrStr: string[] = new Date(date).toUTCString().split(" ");
  const arrTime = arrStr[4].split(":");
  return `เวลา ${arrTime[0]}:${arrTime[1]} น.`;
};

export { dateENToTH, timeENToTH };
