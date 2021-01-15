// skillsChoice

let goSoft = document.querySelector(".goSoftWrapper");
let goHard = document.querySelector(".goHardWrapper");
let goBack = document.querySelector(".goBackWrapper");

// containers

let bodyBCG = document.querySelector("body");

let goMenuWrapper = document.querySelector(".skillsChoiceContainer");
let boxContainer = document.querySelector(".boxContainer");
let boxes = document.querySelectorAll(".boxHidden");

// texts

let texts = document.querySelectorAll(".textHidden");
let textsSoft = document.querySelectorAll(".textHiddenSoft");

// corners

let leftCorner = document.querySelector(".leftCorner");
let rightCornerHard = document.querySelector(".rightCornerHard");
let rightCornerSoft = document.querySelector(".rightCornerSoft");

// onClick

function showSoft() {
  boxes.forEach((box) => {
    box.className = "box";
  });
  textsSoft.forEach((text) => {
    text.className = "text";
  });
  goMenuWrapper.className = "hidden";
  boxContainer.className = "container";
  bodyBCG.className = "bodyBackgroundSoft";
  texts.className = "hidden";
  leftCorner.className = "corners leftCorner";
  rightCornerHard.className = "corners rightCorner";
  leftCorner.style.display = "flex";
}

function showHard() {
  boxes.forEach((box) => {
    box.className = "box";
  });
  texts.forEach((text) => {
    text.className = "text";
  });
  goMenuWrapper.className = "hidden";
  boxContainer.className = "container";
  bodyBCG.className = "bodyBackgroundHard";
  leftCorner.className = "corners leftCorner";
  rightCornerSoft.className = "corners rightCorner";
  leftCorner.style.display = "flex";
}

goSoft.addEventListener("click", showSoft);
goHard.addEventListener("click", showHard);

rightCornerHard.addEventListener("click", function () {
  rightCornerHard.className = "";
  rightCornerSoft.className = "corners rightCorner";
  textsSoft.forEach((text) => {
    text.className = "hidden";
  });
  showHard();
});

rightCornerSoft.addEventListener("click", function () {
  rightCornerSoft.className = "";
  rightCornerHard.className = "corners rightCorner";
  texts.forEach((text) => {
    text.className = "hidden";
  });
  showSoft();
});
