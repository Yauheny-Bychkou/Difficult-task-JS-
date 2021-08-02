let lang = "en";
let namePerson = "Валентин";
let result;
let obj;
let arr;

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

result =
  namePerson === "Артем"
    ? console.log("Директор")
    : namePerson === "Максим"
    ? console.log("Преподаватель")
    : console.log("Студент");

obj = {
  ru: ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
  en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};
arr = obj[lang];

console.log(arr);
