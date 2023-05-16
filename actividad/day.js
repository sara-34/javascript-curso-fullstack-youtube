import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
dayjs.extend(utc);

const today2 = dayjs();
console.log(today2.format());

const birthDate = dayjs("1990-05-10");
console.log(birthDate.format());

const formatStr = "DD/MM/YYYY HH:mm:ss"
console.log(today.format(formatStr));


