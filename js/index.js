/** @format */

// 1 click

const signUpButtons = document.querySelectorAll("div.btn");
const signUpButton1 = signUpButtons[0];
signUpButton1.addEventListener("click", () => {
  (signUpButton1.innerText = "L"),
    (signUpButton1.style.backgroundColor = "#0AD8D5");
});
const signUpButton2 = signUpButtons[1];
signUpButton2.addEventListener("click", () => {
  (signUpButton2.innerText = "O"),
    (signUpButton2.style.backgroundColor = "#0AD8D5");
});
const signUpButton3 = signUpButtons[2];
signUpButton3.addEventListener("click", () => {
  (signUpButton3.innerText = "L"),
    (signUpButton3.style.backgroundColor = "#0AD8D5");
});

// 2 dblclick
signUpButton1.addEventListener("dblclick", () => {
  (signUpButton1.innerText = "B"),
    (signUpButton1.style.backgroundColor = "tomato");
});

signUpButton2.addEventListener("dblclick", () => {
  (signUpButton2.innerText = "U"),
    (signUpButton2.style.backgroundColor = "tomato");
});

signUpButton3.addEventListener("dblclick", () => {
  (signUpButton3.innerText = "S"),
    (signUpButton3.style.backgroundColor = "tomato");
});

// 3 mousemove

const logoHeading = document.querySelector("h1");
logoHeading.addEventListener("mousemove", () => {
  (logoHeading.style.color = "red"), (logoHeading.style.fontSize = "5rem");
});

// 4 mouseleave

logoHeading.addEventListener("mouseleave", () => {
  (logoHeading.style.color = "skyBlue"), (logoHeading.style.fontSize = "5rem");
});

// 5 mouseover

const allPTags = document.querySelectorAll("p");
allPTags.forEach((data) =>
  data.addEventListener("mouseover", () => {
    (data.style.color = "tomato"), (data.style.fontSize = "1.9rem");
  })
);

// 6
