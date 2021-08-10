"use strict";

setInterval(function () {
  let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  let month = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  let d = new Date();
  let n = d.getDay();
  let m = d.getMonth();
  let x;
  let y;
  let z;

  let date = new Date();
  function getZero(num) {
    if (num > 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  if (date.getHours() === 1 && date.getHours() === 21) {
    x = "c";
  } else if (date.getHours() === 2 && date.getHours() <= 4 && date.getHours() === 23) {
    x = "cа";
  } else {
    x = "cов";
  }
  if (
    date.getSeconds() === 1 &&
    date.getSeconds() === 21 &&
    date.getSeconds() === 31 &&
    date.getSeconds() === 41 &&
    date.getSeconds() === 51
  ) {
    y = "да";
  } else if (
    date.getSeconds() === 2 &&
    date.getSeconds() <= 4 &&
    date.getSeconds() === 22 &&
    date.getSeconds() <= 24 &&
    date.getSeconds() === 32 &&
    date.getSeconds() <= 34 &&
    date.getSeconds() === 42 &&
    date.getSeconds() <= 44 &&
    date.getSeconds() === 52 &&
    date.getSeconds() <= 54
  ) {
    y = "ды";
  } else {
    y = "д";
  }
  if (
    date.getMinutes() === 1 &&
    date.getMinutes() === 21 &&
    date.getMinutes() === 31 &&
    date.getMinutes() === 41 &&
    date.getMinutes() === 51
  ) {
    z = "та";
  } else if (
    date.getMinutes() === 2 &&
    date.getMinutes() <= 4 &&
    date.getMinutes() === 22 &&
    date.getMinutes() <= 24 &&
    date.getMinutes() === 32 &&
    date.getMinutes() <= 34 &&
    date.getMinutes() === 42 &&
    date.getMinutes() <= 44 &&
    date.getMinutes() === 52 &&
    date.getMinutes() <= 54
  ) {
    z = "ты";
  } else {
    z = "т";
  }
  document.getElementById("date-1").innerHTML =
    days[n] +
    ", " +
    date.getDate() +
    " " +
    month[m] +
    " " +
    date.getFullYear() +
    " года, " +
    date.getHours() +
    " ча" +
    x +
    " " +
    date.getMinutes() +
    " мину" +
    z +
    " " +
    date.getSeconds() +
    " секун" +
    y;

  document.getElementById("date").innerHTML =
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() +
    " " +
    getZero(date.getDate()) +
    "." +
    getZero(date.getMonth() + 1) +
    "." +
    date.getFullYear();
}, 1000);
