import dayjs from "dayjs";
import relativeTime from "day/plugin/relativeTime";
import { subtract } from "lodash";

dayjs.extend(relativeTime);


const today = dayjs();
console.log(today.add(5, "days").format("YYYY/MM/DDD"));

console.log(dayjs("1999-01-01").fromNow);
console.log(subtract(3 ,"hours").format("MM/DD HH:mm:ss"));