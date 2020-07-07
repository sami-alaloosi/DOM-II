/** @format */

//click functions
const letterL = (e) => {
  (e.target.innerText = "L"), (e.target.style.backgroundColor = "#0AD8D5");
};

const letterO = (e) => {
  (e.target.innerText = "O"), (e.target.style.backgroundColor = "#0AD8D5");
};

// 1 click
const signUpButtons = document.querySelectorAll("div.btn");

const signUpButton1 = signUpButtons[0];
signUpButton1.addEventListener("click", letterL);

const signUpButton2 = signUpButtons[1];
signUpButton2.addEventListener("click", letterO);

const signUpButton3 = signUpButtons[2];
signUpButton3.addEventListener("click", letterL);

// dblclick functions
const tomatoBG = (something) => (something.style.backgroundColor = "tomato"); // will give a tomato background-color

const letterB = (e) => {
  (e.target.innerText = "b"), tomatoBG(e.target);
};

const letterU = (e) => {
  (e.target.innerText = "U"), tomatoBG(e.target);
};

const letterS = (e) => {
  (e.target.innerText = "S"), tomatoBG(e.target);
};
// 2 dblclick
signUpButton1.addEventListener("dblclick", letterB);

signUpButton2.addEventListener("dblclick", letterU);

signUpButton3.addEventListener("dblclick", letterS);

// mousemove fuctions
const bigRed = (e) => {
  (e.target.style.color = "red"), (e.target.style.fontSize = "5rem");
};

const blueFont = (e) => (e.target.style.color = "skyBlue");
// 3 mousemove

const logoHeading = document.querySelector("h1");
logoHeading.addEventListener("mousemove", bigRed);

// 4 mouseleave

logoHeading.addEventListener("mouseleave", blueFont);

// 5 mouseover

const allPTags = document.querySelectorAll("p");
allPTags.forEach((data) =>
  data.addEventListener("mouseover", () => {
    (data.style.color = "tomato"), (data.style.fontSize = "1.9rem");
  })
);

// 6 resize
const yellowBus = document.querySelector("header img");
yellowBus.style.margin = "1rem";

window.addEventListener(
  "resize",
  () => (yellowBus.style.border = "4px yellow solid")
);

// 7 load

window.addEventListener(
  "load",
  () => (yellowBus.style.border = "4px red solid")
);

// 8 keydown

document.addEventListener("keydown", function (e) {
  if (e.key === "+") {
    allPTags.forEach((data) => (data.style.fontSize = "5rem"));
  } else if (e.key === "-") {
    allPTags.forEach((data) => (data.style.fontSize = "1rem"));
  }
});

// 9 keyup

document.addEventListener("keyup", (e) => {
  if (e.key === "=") {
    allPTags.forEach((data) => (data.style.fontSize = "2rem"));
  }
});

// wheel fuction
let scale = 1;
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  yellowBus.style.transform = `scale(${scale})`;
}

// 10 wheel

yellowBus.addEventListener("wheel", zoom);
