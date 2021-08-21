"use strict";

let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
  d = new Date(),
  n = d.getDay(),
  date = new Date(),
  dateStop,
  dateNow,
  timeRemaining,
  day,
  hello,
  x,
  pmam;

if (date.getHours() > 0 && date.getHours() < 10) {
  hello = "утро";
  x = "ое";
} else if (date.getHours() > 10 && date.getHours() < 18) {
  hello = "день";
  x = "ый";
} else if (date.getHours() > 18) {
  hello = "вечер";
  x = "ый";
}
if (date.getHours() >= 12) {
  pmam = "PM";
} else {
  pmam = "AM";
}
dateStop = new Date("31 december 2021").getTime();
dateNow = new Date().getTime();
timeRemaining = (dateStop - dateNow) / 1000;
day = Math.floor(timeRemaining / 3600 / 24);
document.getElementById("date-2").innerHTML = "Добр" + x + " " + hello;
document.getElementById("date-1").innerHTML = "Сегодня: " + days[n];
document.getElementById("date").innerHTML = "Текущее время: " + date.toTimeString().substr(0, 9) + " " + pmam;
document.getElementById("date-3").innerHTML = "До нового года осталось: " + day + " дней";
