import { greenEasy, greenNormal, greenHard } from "../mydata/green_levels.js";
import { brownEasy, brownNormal, brownHard } from "../mydata/brown_levels.js";
import { blueEasy, blueNormal, blueHard } from "../mydata/blue_levels.js";

// Древние - отображаем кнопки уровней
const azathoth = document.querySelector("#azathoth");
const cthulthu = document.querySelector("#cthulthu");
const iogSothoth = document.querySelector("#iogSothoth");
const shubNiggurath = document.querySelector("#shubNiggurath");
const levels = document.querySelector("#levels");
const ancientCard = document.querySelectorAll(".ancient-img");

function showLevelsBtns(ancient) {
  if (mixingCont.classList.contains("mixing-active")) {
    mixingCont.classList.remove("mixing-active");
  }
  for (let i = 0; i < ancientCard.length; i++) {
    ancientCard[i].classList.remove("ancient-img-active");
  }
  ancient.classList.add("ancient-img-active");
  levels.classList.add("levels-container-active");
}

azathoth.addEventListener("click", () => {
  showLevelsBtns(azathoth);
});
cthulthu.addEventListener("click", () => {
  showLevelsBtns(cthulthu);
});
iogSothoth.addEventListener("click", () => {
  showLevelsBtns(iogSothoth);
});
shubNiggurath.addEventListener("click", () => {
  showLevelsBtns(shubNiggurath);
});

// Уровни - отображаем btn замешать колоду
const levelBtns = document.querySelectorAll(".level-item");
const mixBtnCont = document.querySelector("#mix-button");
const levelOne = document.querySelector("#level_1");
const levelTwo = document.querySelector("#level_2");
const levelThree = document.querySelector("#level_3");
const levelFour = document.querySelector("#level_4");
const levelFive = document.querySelector("#level_5");

function showMixBtn(btnNum, numb) {
  for (let i = 0; i < levelBtns.length; i++) {
    levelBtns[i].classList.remove("mix-btn-active1");
    levelBtns[i].classList.remove("mix-btn-active2");
    levelBtns[i].classList.remove("mix-btn-active3");
    levelBtns[i].classList.remove("mix-btn-active4");
    levelBtns[i].classList.remove("mix-btn-active5");
  }
  mixingCont.classList.remove("mixing-active");
  btnNum.classList.add(`mix-btn-active${numb}`);
  mixBtnCont.classList.add("btn-container-active");
}

levelOne.addEventListener("click", () => {
  showMixBtn(levelOne, 1);
});
levelTwo.addEventListener("click", () => {
  showMixBtn(levelTwo, 2);
});
levelThree.addEventListener("click", () => {
  showMixBtn(levelThree, 3);
});
levelFour.addEventListener("click", () => {
  showMixBtn(levelFour, 4);
});
levelFive.addEventListener("click", () => {
  showMixBtn(levelFive, 5);
});

// Отображаем контейнер с колодой
const mixDescBtn = document.querySelector("#mix-desc");
const mixingCont = document.querySelector("#mixing");

function showMixingContainer() {
  mixBtnCont.classList.remove("btn-container-active");
  mixingCont.classList.add("mixing-active");

  if (levelTwo.classList.contains("mix-btn-active2")) {
    console.log("contains");
  }
}
mixDescBtn.addEventListener("click", showMixingContainer);

//  Создаем легкий уровень
const backDescBtn = document.querySelector("#back-desc");
const frontCard = document.querySelector("#front-card");

let arrGreen = ["../assets/MythicCards/green/green1.png"];

function showCard() {
  backDescBtn.addEventListener("click", () => {
    var merged = [].concat.apply([], azathothEasylevel);
    console.log(merged);
    frontCard.style.backgroundImage = `url("${arrGreen[0]}")`;
  });
}
showCard();

let azathothEasylevel = [];

let azathothFirstStep = [];
let azathothSecondStep = [];
let azathothThirdStep = [];

function getEasyLevel() {
  const greenEasyLevel = [...greenEasy];
  const brownEasyLevel = [...brownEasy];
  const blueEasyLevel = [...blueEasy];

  const brownNormalLevel = [...brownNormal];

  // --------------------------  Распределяем зеленый цвет ------------------------------
  const greenFirstStep = 1;
  const greenSecondStep = 2;
  const greenThirdStep = 2;

  for (let i = 0; i < greenFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    azathothFirstStep.push(greenEasyLevel.splice(randomCard, 1));
  }

  for (let i = 0; i < greenSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    azathothSecondStep.push(greenEasyLevel.splice(randomCard, 1));
  }

  for (let i = 0; i < greenThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    azathothThirdStep.push(greenEasyLevel.splice(randomCard, 1));
  }
  document.querySelector("#green-first").textContent = greenFirstStep;
  document.querySelector("#green-second").textContent = greenSecondStep;
  document.querySelector("#green-third").textContent = greenThirdStep;

  // -------------------------  Распределяем коричневый цвет ------------------------------
  const brownFirstStep = 2;
  const brownSecondStep = 3;
  const brownThirdStep = 4;

  for (let i = 0; i < brownFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * brownEasyLevel.length);
    azathothFirstStep.push(brownEasyLevel.splice(randomCard, 1));
  }

  for (let i = 0; i < brownSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * brownEasyLevel.length);
    azathothSecondStep.push(brownEasyLevel.splice(randomCard, 1));
  }

  for (let i = 0; i < brownThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    azathothThirdStep.push(brownNormalLevel.splice(randomCard, 1));
  }

  document.querySelector("#brown-first").textContent = brownFirstStep;
  document.querySelector("#brown-second").textContent = brownSecondStep;
  document.querySelector("#brown-third").textContent = brownThirdStep;

  // -------------------------  Распределяем синий цвет ------------------------------
  const blueFirstStep = 1;
  const blueSecondStep = 1;
  const blueThirdStep = 0;

  for (let i = 0; i < blueFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    azathothFirstStep.push(blueEasyLevel.splice(randomCard, 1));
  }

  for (let i = 0; i < blueSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    azathothSecondStep.push(blueEasyLevel.splice(randomCard, 1));
  }

  for (let i = 0; i < blueThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    azathothThirdStep.push(blueEasyLevel.splice(randomCard, 1));
  }

  document.querySelector("#blue-first").textContent = blueFirstStep;
  document.querySelector("#blue-second").textContent = blueSecondStep;
  document.querySelector("#blue-third").textContent = blueThirdStep;

  azathothEasylevel.push(azathothFirstStep);
  azathothEasylevel.push(azathothSecondStep);
  azathothEasylevel.push(azathothThirdStep);
}
getEasyLevel();
