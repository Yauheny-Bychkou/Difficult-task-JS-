"use strict";
let str = "строка";
let num = 123;

const doString = function (a) {
  if (typeof a !== "string") {
    console.log("Это не строка");
  } else {
    a = a.trim();
    if (str.length > 30) {
      console.log((a = a.substr(0, 30) + "..."));
    } else {
      console.log(a);
    }
  }
};
doString(str);
