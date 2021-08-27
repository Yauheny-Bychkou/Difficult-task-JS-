"use strict";
let task1 = document.querySelector("#task1");
let task2 = document.querySelector("#task2");

// №1
task1.innerHTML = task1.innerHTML.replace(/функ[а-яё]+/gi, `<strong>функция</strong>`);

// №2
const regExp = /\d{2}:\d{2}/gi;
const arrayContent = task2.innerHTML.match(regExp);
arrayContent.forEach((item) => {
  const string = item.toString();
  task2.innerHTML = task2.innerHTML.replace(string, `<b>${string}</b>`);
});

// №3
const regExp2 = /"\W+"/gi;
const arrayBodyContent = document.body.innerHTML.match(regExp2);

arrayBodyContent.forEach((item) => {
  const string = item.toString();
  document.body.innerHTML = document.body.innerHTML.replace(string, `<mark>${string}</mark>`);
});

// №4 и №6
const RegExpLink = /\w+\:\/\/\w+(\.\w+)+((\/[\w-]+)+\/)*/g;
const linkNameReg = /\w+(\.\w+)+/g;
const arrayBodyContentLink = document.body.innerText.match(RegExpLink);
const linkNames = arrayBodyContentLink.join(" ").match(linkNameReg);

arrayBodyContentLink.forEach((item, index) => {
  const string = item.toString();
  const linkName = linkNames[index].toString();
  document.body.innerHTML = document.body.innerHTML.replace(string, `<a href="${string}">${linkName}</a>`);
});

// №5
const regFindColor = /#[A-Fa-f0-9]+/g;
const colorsArray = document.body.innerHTML.match(regFindColor);
console.log(colorsArray);
