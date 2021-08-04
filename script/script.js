"use strict";
let str = "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333";

const doString = function (a) {
  if (typeof a === "string") {
    a = a.trim();
    if (a.length > 30) {
      a = a.substr(0, 30) + "...";
    }
    return "Это строка:" + a;
  } else {
    return "Это не строка";
  }
};
console.log(doString(str));
