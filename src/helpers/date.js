import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const dateFormat = "YYYY-MM-DDTHH:mm:ss";

const disabledDate = (current) => {
  return current > dayjs().endOf("day");
};

const formatDate = (newDate) => {
  return dayjs(newDate, dateFormat);
};

export const date = {
  disabledDate: disabledDate,
  formatDate: formatDate,
};
