"use strict";
const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const day = document.getElementById("fordays");
const todayDay = new Date();

for (let i = 0; i < week.length; i++) {
  const dayOff = document.createElement("div");
  if (week[i] === "Суббота" || week[i] === "Воскресенье") {
    dayOff.classList.add("italic");
  }
  if ((i + 1) % 7 === new Date().getDay()) {
    dayOff.innerHTML = week[i].bold();
    dayOff.classList.add("today");
  } else {
    dayOff.innerHTML = week[i];
  }

  document.body.appendChild(dayOff);
}
