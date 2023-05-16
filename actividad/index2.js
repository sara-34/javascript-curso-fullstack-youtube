const today = new Date();

console.log(today);

const birthDay = new Date("2004-02-12T11:45:00")
console.log(today);
console.log(birthDay);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getDate()); 
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getTime());

//Sumando dos fechas.

const today1 = new Date();
const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;
const twoDayLater = new Date(today.getTime() + TWO_DAYS_IN_MS);

const yesterday = new Date("2023-03-23");

const diffInMilliseconds = today.getTime() - yesterday.getTime();

const ONE_DAY_IN_MS = 1 * 24 * 60 * 60 * 1000;

const diffiInDays = diffInMilliseconds / ONE_DAY_IN_MS
console.log(twoDayLater);

console.log(diffiInDays);
 



