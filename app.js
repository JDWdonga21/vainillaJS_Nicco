const title = document.getElementById("title");
title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

//id가 없는 경우 엘리먼트를 어떻게 찾을까?
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const titletag = document.getElementsByTagName("h1");
console.log(titletag);

//이게 좋다 CSS셀렉터를 이용해서 검색
const title3 = document.querySelector(".hello h1");
console.log(title3);

function handleTitleClick() {
  console.log("clicked!!!");
  title3.style.color = "red";
}

function handleMouseEnter() {
  //console.log("mouse is here!");
  title3.innerText = "mouse is here!";
}

function handleMouseLeave() {
  //console.log("mouse is out!");
  title3.innerText = "mouse is out!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("도둑이야!!!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("good WIFI");
}

title3.style.color = "blue";
//title3.addEventListener("click", handleTitleClick);
title3.addEventListener("mouseenter", handleMouseEnter);
title3.addEventListener("mouseleave", handleMouseLeave);

//이것도 된다.
title3.onclick = handleTitleClick;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

const title4 = document.querySelectorAll(".hello h1");
console.log(title4);

//JS 는 event

// const calculator = {
//   add: function (a, b) {
//     //console.log(a + b);
//     return a + b;
//   },
//   sub: function (a, b) {
//     //console.log(a - b);
//     return a - b;
//   },
//   mult: function (a, b) {
//     //console.log(a * b);
//     return a * b;
//   },
//   div: function (a, b) {
//     //console.log(a / b);
//     return a / b;
//   },
//   squar: function (a, b) {
//     //console.log(a ** b);
//     return a ** b;
//   },
// };
// let calResult = 0;
// calResult = calculator.add(10, 3);
// console.log(calResult);
// calResult = calculator.sub(10, 2);
// console.log(calResult);
// calResult = calculator.mult(10, 2);
// console.log(calResult);
// calResult = calculator.div(10, 2);
// console.log(calResult);
// calResult = calculator.squar(10, 3);
// console.log(calResult);
// console.log("---------------- - -----------------------");
// const plusResult = calculator.add(2, 3);
// console.log(plusResult);
// const subcalResult = calculator.sub(plusResult, 2);
// console.log(subcalResult);
// const multResult = calculator.mult(10, subcalResult);
// console.log(multResult);
// const divResult = calculator.div(multResult, 2);
// console.log(divResult);
// const squarResult = calculator.squar(divResult, 3);
// console.log(squarResult);
// console.log("---------------- - -----------------------");
// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }
// const krAge = calculateKrAge(age);
// console.log(krAge);

// const ages = parseInt(prompt("How old are you?"));
// if (isNaN(ages) || ages < 0) {
//   console.log("양수값을 입력해주세요.");
// } else if (ages < 18) {
//   console.log("당신은 너무 어려요.");
// } else if (ages >= 18 && ages <= 50) {
//   console.log("you can drink");
// } else if (ages > 50 && ages <= 80) {
//   console.log("운동이 필요해요.");
// } else {
//   console.log("당신은 나이가 너무 많아요.");
// }
// // && and / || or // === 같은가?비교 // !== 같지않은가?비교
// console.log(ages);
