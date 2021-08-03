"use strict";
let str;

str = "строка";
const doString = function (a) {
  if (typeof a === "string") {
    console.log("Это строка");
  } else {
    console.log("Это не строка");
  }
  if (str.length > 30) {
    str = str.substr(0, 30) + "...";
  }
  console.log(str.trim());
};
doString("word");
