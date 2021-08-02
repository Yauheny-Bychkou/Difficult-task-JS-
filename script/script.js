let lang = "en";
let namePerson = "Валентин";
if (lang === "ru") {
  console.log(`  Понедельник
  Вторник
  Среда
  Четверг
  Пятница
  Суббота
  Воскресенье`);
} else if (lang === "en") {
  console.log(`  Monday
  Tuesday
  Wednesday
  Thursday
  Friday
  Saturday
  Sunday`);
}
switch (lang) {
  case "en":
    console.log(`  Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
    Sunday`);
    break;
  case "ru":
    console.log(`  Понедельник
    Вторник
    Среда
    Четверг
    Пятница
    Суббота
    Воскресенье`);
    break;
}

let obj = {
  ru: ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
  en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};
let arr = obj[lang];
console.log(arr);

let result =
  namePerson === "Артем"
    ? console.log("Директор")
    : namePerson === "Максим"
    ? console.log("Преподаватель")
    : console.log("Студент");
