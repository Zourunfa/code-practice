const date = new Date("2021-2-12 10:11:12")
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

const formatDate = function (date, format = "YYYY-MM-DD HH:mm:ss") {
  const config = {
    YYYY: date.getFullYear(),
    MM: date.getMonth(),
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds()
  }

  console.log(config);

  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}

console.log(formatDate(date));
console.log(formatDate(date, "YYYY年MM月DD日"));