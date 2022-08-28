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
const levelBtns = document.querySelectorAll(".level-item");

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
  if (frontCard.style.backgroundImage) {
    frontCard.style.backgroundImage = "none";
  }
  showMixBtn(levelOne, 1);
});
levelTwo.addEventListener("click", () => {
  if (frontCard.style.backgroundImage) {
    frontCard.style.backgroundImage = "none";
  }
  showMixBtn(levelTwo, 2);
});
levelThree.addEventListener("click", () => {
  if (frontCard.style.backgroundImage) {
    frontCard.style.backgroundImage = "none";
  }
  showMixBtn(levelThree, 3);
});
levelFour.addEventListener("click", () => {
  if (frontCard.style.backgroundImage) {
    frontCard.style.backgroundImage = "none";
  }
  showMixBtn(levelFour, 4);
});
levelFive.addEventListener("click", () => {
  if (frontCard.style.backgroundImage) {
    frontCard.style.backgroundImage = "none";
  }
  showMixBtn(levelFive, 5);
});

// Отображаем контейнер с колодой
const mixDescBtn = document.querySelector("#mix-desc");
const mixingCont = document.querySelector("#mixing");

function showMixingContainer() {
  mixBtnCont.classList.remove("btn-container-active");
  backDescBtn.classList.remove("desc-bg-hide");
  mixingCont.classList.add("mixing-active");

  // -------- Условия для azathoth ----------
  // Проверка на легкий уровень
  if (
    (azathoth.classList.contains("ancient-img-active") &&
      levelOne.classList.contains("mix-btn-active1")) ||
    (azathoth.classList.contains("ancient-img-active") &&
      levelTwo.classList.contains("mix-btn-active2"))
  ) {
    buildAzathothEasyLevel();
    showAzathothEasylevel();
  }
  // Проверка на средний уровень
  if (
    azathoth.classList.contains("ancient-img-active") &&
    levelThree.classList.contains("mix-btn-active3")
  ) {
    buildAzathothNormalLevel();
    showAzathothNormallevel();
  }
  // Проверка на сложный уровень
  if (
    (azathoth.classList.contains("ancient-img-active") &&
      levelFour.classList.contains("mix-btn-active4")) ||
    (azathoth.classList.contains("ancient-img-active") &&
      levelFive.classList.contains("mix-btn-active5"))
  ) {
    buildAzathothHardLevel();
    showAzathothHardlevel();
  }

  // -------- Условия для Cthulthu ----------
  // Проверка на легкий уровень
  if (
    (cthulthu.classList.contains("ancient-img-active") &&
      levelOne.classList.contains("mix-btn-active1")) ||
    (cthulthu.classList.contains("ancient-img-active") &&
      levelTwo.classList.contains("mix-btn-active2"))
  ) {
    buildСthulthuEasyLevel();
    showCthulthuEasylevel();
  }

  // Проверка на средний уровень
  if (
    cthulthu.classList.contains("ancient-img-active") &&
    levelThree.classList.contains("mix-btn-active3")
  ) {
    buildCthulthuNormalLevel();
    showCthulthuNormallevel();
  }
  // Проверка на сложный уровень
  if (
    (cthulthu.classList.contains("ancient-img-active") &&
      levelFour.classList.contains("mix-btn-active4")) ||
    (cthulthu.classList.contains("ancient-img-active") &&
      levelFive.classList.contains("mix-btn-active5"))
  ) {
    buildCthulthuHardLevel();
    showCthulthuHardlevel();
  }

  // -------- Условия для IogSothoth ----------
  // Проверка на легкий уровень
  if (
    (iogSothoth.classList.contains("ancient-img-active") &&
      levelOne.classList.contains("mix-btn-active1")) ||
    (iogSothoth.classList.contains("ancient-img-active") &&
      levelTwo.classList.contains("mix-btn-active2"))
  ) {
    buildIogSothothEasyLevel();
    showIogSothothEasylevel();
  }
  // Проверка на средний уровень
  if (
    iogSothoth.classList.contains("ancient-img-active") &&
    levelThree.classList.contains("mix-btn-active3")
  ) {
    buildIogSothothNormalLevel();
    showIogSothothNormallevel();
  }
  // Проверка на сложный уровень
  if (
    (iogSothoth.classList.contains("ancient-img-active") &&
      levelFour.classList.contains("mix-btn-active4")) ||
    (iogSothoth.classList.contains("ancient-img-active") &&
      levelFive.classList.contains("mix-btn-active5"))
  ) {
    buildIogSothothHardLevel();
    showIogSothothHardlevel();
  }

  // -------- Условия для ShubNiggurath ----------
  // Проверка на легкий уровень
  if (
    (shubNiggurath.classList.contains("ancient-img-active") &&
      levelOne.classList.contains("mix-btn-active1")) ||
    (shubNiggurath.classList.contains("ancient-img-active") &&
      levelTwo.classList.contains("mix-btn-active2"))
  ) {
    buildShubNiggurathEasyLevel();
    showShubNiggurathEasylevel();
  }
  // Проверка на средний уровень
  if (
    shubNiggurath.classList.contains("ancient-img-active") &&
    levelThree.classList.contains("mix-btn-active3")
  ) {
    buildShubNiggurathNormalLevel();
    showShubNiggurathNormallevel();
  }

  // Проверка на сложный уровень
  if (
    (shubNiggurath.classList.contains("ancient-img-active") &&
      levelFour.classList.contains("mix-btn-active4")) ||
    (shubNiggurath.classList.contains("ancient-img-active") &&
      levelFive.classList.contains("mix-btn-active5"))
  ) {
    buildShubNiggurathHardLevel();
    showShubNiggurathHardlevel();
  }
}
mixDescBtn.addEventListener("click", showMixingContainer);

//  Создаем легкий уровень
const backDescBtn = document.querySelector("#back-desc");
const frontCard = document.querySelector("#front-card");

// ----------------------- Azathoth -------------------------------------

let azathothEasylevel = [];

function buildAzathothEasyLevel() {
  azathothEasylevel = [];
  let azathothFirstStep = [];
  let azathothSecondStep = [];
  let azathothThirdStep = [];

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
    azathothFirstStep.push(greenEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    azathothSecondStep.push(greenEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    azathothThirdStep.push(greenEasyLevel.splice(randomCard, 1).join());
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
    azathothFirstStep.push(brownEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * brownEasyLevel.length);
    azathothSecondStep.push(brownEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    azathothThirdStep.push(brownNormalLevel.splice(randomCard, 1).join());
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
    azathothFirstStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    azathothSecondStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    azathothThirdStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#blue-first").textContent = blueFirstStep;
  document.querySelector("#blue-second").textContent = blueSecondStep;
  document.querySelector("#blue-third").textContent = blueThirdStep;

  azathothEasylevel.push(azathothFirstStep);
  azathothEasylevel.push(azathothSecondStep);
  azathothEasylevel.push(azathothThirdStep);
}

function showAzathothEasylevel() {
  let merged = azathothEasylevel.flat();
  let i = 0;

  backDescBtn.addEventListener("click", () => {
    console.log(merged[i]);
    frontCard.style.backgroundImage = `url("${merged[i]}")`;
    i++;
    if (i === merged.length) {
      backDescBtn.classList.add("desc-bg-hide");
    }
  });
}

// ----------------------- Cthulthu -------------------------------------

let cthulthulevel = [];

function buildСthulthuEasyLevel() {
  cthulthulevel = [];
  let cthulthuFirstStep = [];
  let cthulthuSecondStep = [];
  let cthulthuThirdStep = [];

  const greenEasyLevel = [...greenEasy];
  const brownEasyLevel = [...brownEasy];
  const blueEasyLevel = [...blueEasy];

  const brownNormalLevel = [...brownNormal];

  // --------------------------  Распределяем зеленый цвет ------------------------------
  const greenFirstStep = 0;
  const greenSecondStep = 1;
  const greenThirdStep = 3;

  for (let i = 0; i < greenFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    cthulthuFirstStep.push(greenEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    cthulthuSecondStep.push(greenEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    cthulthuThirdStep.push(greenEasyLevel.splice(randomCard, 1).join());
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
    cthulthuFirstStep.push(brownEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * brownEasyLevel.length);
    cthulthuSecondStep.push(brownEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    cthulthuThirdStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#brown-first").textContent = brownFirstStep;
  document.querySelector("#brown-second").textContent = brownSecondStep;
  document.querySelector("#brown-third").textContent = brownThirdStep;

  // -------------------------  Распределяем синий цвет ------------------------------
  const blueFirstStep = 2;
  const blueSecondStep = 0;
  const blueThirdStep = 0;

  for (let i = 0; i < blueFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    cthulthuFirstStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    cthulthuSecondStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    cthulthuThirdStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#blue-first").textContent = blueFirstStep;
  document.querySelector("#blue-second").textContent = blueSecondStep;
  document.querySelector("#blue-third").textContent = blueThirdStep;

  cthulthulevel.push(cthulthuFirstStep);
  cthulthulevel.push(cthulthuSecondStep);
  cthulthulevel.push(cthulthuThirdStep);
}

function showCthulthuEasylevel() {
  let merged = cthulthulevel.flat();
  let i = 0;

  backDescBtn.addEventListener("click", () => {
    frontCard.style.backgroundImage = `url("${merged[i]}")`;
    i++;
    if (i === merged.length) {
      backDescBtn.classList.add("desc-bg-hide");
    }
  });
}

// ----------------------- IogSothoth -------------------------------------

let iogSothothlevel = [];

function buildIogSothothEasyLevel() {
  iogSothothlevel = [];
  let iogSothothFirstStep = [];
  let iogSothothSecondStep = [];
  let iogSothothThirdStep = [];

  const greenEasyLevel = [...greenEasy];
  const brownEasyLevel = [...brownEasy];
  const blueEasyLevel = [...blueEasy];

  const brownNormalLevel = [...brownNormal];

  // --------------------------  Распределяем зеленый цвет ------------------------------
  const greenFirstStep = 0;
  const greenSecondStep = 2;
  const greenThirdStep = 3;

  for (let i = 0; i < greenFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    iogSothothFirstStep.push(greenEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    iogSothothSecondStep.push(greenEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    iogSothothThirdStep.push(greenEasyLevel.splice(randomCard, 1).join());
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
    iogSothothFirstStep.push(brownEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * brownEasyLevel.length);
    iogSothothSecondStep.push(brownEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    iogSothothThirdStep.push(brownNormalLevel.splice(randomCard, 1).join());
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
    iogSothothFirstStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    iogSothothSecondStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    iogSothothThirdStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#blue-first").textContent = blueFirstStep;
  document.querySelector("#blue-second").textContent = blueSecondStep;
  document.querySelector("#blue-third").textContent = blueThirdStep;

  iogSothothlevel.push(iogSothothFirstStep);
  iogSothothlevel.push(iogSothothSecondStep);
  iogSothothlevel.push(iogSothothThirdStep);
}

function showIogSothothEasylevel() {
  let merged = iogSothothlevel.flat();
  let i = 0;

  backDescBtn.addEventListener("click", () => {
    frontCard.style.backgroundImage = `url("${merged[i]}")`;
    i++;
    if (i === merged.length) {
      backDescBtn.classList.add("desc-bg-hide");
    }
  });
}

// ----------------------- ShubNiggurath -------------------------------------

let shubNiggurathlevel = [];

function buildShubNiggurathEasyLevel() {
  shubNiggurathlevel = [];
  let shubNiggurathFirstStep = [];
  let shubNiggurathSecondStep = [];
  let shubNiggurathThirdStep = [];

  const greenEasyLevel = [...greenEasy];
  const brownEasyLevel = [...brownEasy];
  const blueEasyLevel = [...blueEasy];

  const greenNormalLevel = [...greenNormal];
  const brownNormalLevel = [...brownNormal];

  // --------------------------  Распределяем зеленый цвет ------------------------------
  const greenFirstStep = 1;
  const greenSecondStep = 3;
  const greenThirdStep = 2;

  for (let i = 0; i < greenFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    shubNiggurathFirstStep.push(greenEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    shubNiggurathSecondStep.push(greenEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * greenEasyLevel.length);
    shubNiggurathThirdStep.push(greenEasyLevel.splice(randomCard, 1).join());
  }
  document.querySelector("#green-first").textContent = greenFirstStep;
  document.querySelector("#green-second").textContent = greenSecondStep;
  document.querySelector("#green-third").textContent = greenThirdStep;

  // -------------------------  Распределяем коричневый цвет ------------------------------
  const brownFirstStep = 2;
  const brownSecondStep = 2;
  const brownThirdStep = 4;

  for (let i = 0; i < brownFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * brownEasyLevel.length);
    shubNiggurathFirstStep.push(brownEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * brownEasyLevel.length);
    shubNiggurathSecondStep.push(brownEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    shubNiggurathThirdStep.push(brownNormalLevel.splice(randomCard, 1).join());
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
    shubNiggurathFirstStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    shubNiggurathSecondStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * blueEasyLevel.length);
    shubNiggurathThirdStep.push(blueEasyLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#blue-first").textContent = blueFirstStep;
  document.querySelector("#blue-second").textContent = blueSecondStep;
  document.querySelector("#blue-third").textContent = blueThirdStep;

  shubNiggurathlevel.push(shubNiggurathFirstStep);
  shubNiggurathlevel.push(shubNiggurathSecondStep);
  shubNiggurathlevel.push(shubNiggurathThirdStep);
}

function showShubNiggurathEasylevel() {
  let merged = shubNiggurathlevel.flat();
  let i = 0;

  backDescBtn.addEventListener("click", () => {
    frontCard.style.backgroundImage = `url("${merged[i]}")`;
    i++;
    if (i === merged.length) {
      backDescBtn.classList.add("desc-bg-hide");
    }
  });
}

//  Создаем средний уровень
// ----------------------- Azathoth -------------------------------------

let azathothNormallevel = [];

function buildAzathothNormalLevel() {
  azathothNormallevel = [];
  let azathothFirstStep = [];
  let azathothSecondStep = [];
  let azathothThirdStep = [];

  const greenNormalLevel = [...greenNormal];
  const brownNormalLevel = [...brownNormal];
  const blueNormalLevel = [...blueNormal];

  // --------------------------  Распределяем зеленый цвет ------------------------------
  const greenFirstStep = 1;
  const greenSecondStep = 2;
  const greenThirdStep = 2;

  for (let i = 0; i < greenFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    azathothFirstStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    azathothSecondStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    azathothThirdStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  document.querySelector("#green-first").textContent = greenFirstStep;
  document.querySelector("#green-second").textContent = greenSecondStep;
  document.querySelector("#green-third").textContent = greenThirdStep;

  // -------------------------  Распределяем коричневый цвет ------------------------------
  const brownFirstStep = 2;
  const brownSecondStep = 3;
  const brownThirdStep = 4;

  for (let i = 0; i < brownFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    azathothFirstStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    azathothSecondStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    azathothThirdStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#brown-first").textContent = brownFirstStep;
  document.querySelector("#brown-second").textContent = brownSecondStep;
  document.querySelector("#brown-third").textContent = brownThirdStep;

  // -------------------------  Распределяем синий цвет ------------------------------
  const blueFirstStep = 1;
  const blueSecondStep = 1;
  const blueThirdStep = 0;

  for (let i = 0; i < blueFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    azathothFirstStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    azathothSecondStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    azathothThirdStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#blue-first").textContent = blueFirstStep;
  document.querySelector("#blue-second").textContent = blueSecondStep;
  document.querySelector("#blue-third").textContent = blueThirdStep;

  azathothNormallevel.push(azathothFirstStep);
  azathothNormallevel.push(azathothSecondStep);
  azathothNormallevel.push(azathothThirdStep);
}

function showAzathothNormallevel() {
  let merged = azathothNormallevel.flat();
  let i = 0;

  backDescBtn.addEventListener("click", () => {
    console.log(merged[i]);
    frontCard.style.backgroundImage = `url("${merged[i]}")`;
    i++;
    if (i === merged.length) {
      backDescBtn.classList.add("desc-bg-hide");
    }
  });
}

// ------------------- Cthulthu ----------------------------------
let cthulthuNormallevel = [];

function buildCthulthuNormalLevel() {
  cthulthuNormallevel = [];
  let cthulthuFirstStep = [];
  let cthulthuSecondStep = [];
  let cthulthuThirdStep = [];

  const greenNormalLevel = [...greenNormal];
  const brownNormalLevel = [...brownNormal];
  const blueNormalLevel = [...blueNormal];

  // --------------------------  Распределяем зеленый цвет ------------------------------
  const greenFirstStep = 0;
  const greenSecondStep = 1;
  const greenThirdStep = 3;

  for (let i = 0; i < greenFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    cthulthuFirstStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    cthulthuSecondStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    cthulthuThirdStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  document.querySelector("#green-first").textContent = greenFirstStep;
  document.querySelector("#green-second").textContent = greenSecondStep;
  document.querySelector("#green-third").textContent = greenThirdStep;

  // -------------------------  Распределяем коричневый цвет ------------------------------
  const brownFirstStep = 2;
  const brownSecondStep = 3;
  const brownThirdStep = 4;

  for (let i = 0; i < brownFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    cthulthuFirstStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    cthulthuSecondStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    cthulthuThirdStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#brown-first").textContent = brownFirstStep;
  document.querySelector("#brown-second").textContent = brownSecondStep;
  document.querySelector("#brown-third").textContent = brownThirdStep;

  // -------------------------  Распределяем синий цвет ------------------------------
  const blueFirstStep = 2;
  const blueSecondStep = 0;
  const blueThirdStep = 0;

  for (let i = 0; i < blueFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    cthulthuFirstStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    cthulthuSecondStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    cthulthuThirdStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#blue-first").textContent = blueFirstStep;
  document.querySelector("#blue-second").textContent = blueSecondStep;
  document.querySelector("#blue-third").textContent = blueThirdStep;

  cthulthuNormallevel.push(cthulthuFirstStep);
  cthulthuNormallevel.push(cthulthuSecondStep);
  cthulthuNormallevel.push(cthulthuThirdStep);
}

function showCthulthuNormallevel() {
  let merged = cthulthuNormallevel.flat();
  let i = 0;

  backDescBtn.addEventListener("click", () => {
    console.log(merged[i]);
    frontCard.style.backgroundImage = `url("${merged[i]}")`;
    i++;
    if (i === merged.length) {
      backDescBtn.classList.add("desc-bg-hide");
    }
  });
}

// ------------------- IogSothoth ----------------------------------
let iogSothothNormallevel = [];

function buildIogSothothNormalLevel() {
  iogSothothNormallevel = [];
  let iogSothothFirstStep = [];
  let iogSothothSecondStep = [];
  let iogSothothThirdStep = [];

  const greenNormalLevel = [...greenNormal];
  const brownNormalLevel = [...brownNormal];
  const blueNormalLevel = [...blueNormal];

  // --------------------------  Распределяем зеленый цвет ------------------------------
  const greenFirstStep = 0;
  const greenSecondStep = 2;
  const greenThirdStep = 3;

  for (let i = 0; i < greenFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    iogSothothFirstStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    iogSothothSecondStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    iogSothothThirdStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  document.querySelector("#green-first").textContent = greenFirstStep;
  document.querySelector("#green-second").textContent = greenSecondStep;
  document.querySelector("#green-third").textContent = greenThirdStep;

  // -------------------------  Распределяем коричневый цвет ------------------------------
  const brownFirstStep = 2;
  const brownSecondStep = 3;
  const brownThirdStep = 4;

  for (let i = 0; i < brownFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    iogSothothFirstStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    iogSothothSecondStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    iogSothothThirdStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#brown-first").textContent = brownFirstStep;
  document.querySelector("#brown-second").textContent = brownSecondStep;
  document.querySelector("#brown-third").textContent = brownThirdStep;

  // -------------------------  Распределяем синий цвет ------------------------------
  const blueFirstStep = 1;
  const blueSecondStep = 1;
  const blueThirdStep = 0;

  for (let i = 0; i < blueFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    iogSothothFirstStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    iogSothothSecondStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    iogSothothThirdStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#blue-first").textContent = blueFirstStep;
  document.querySelector("#blue-second").textContent = blueSecondStep;
  document.querySelector("#blue-third").textContent = blueThirdStep;

  iogSothothNormallevel.push(iogSothothFirstStep);
  iogSothothNormallevel.push(iogSothothSecondStep);
  iogSothothNormallevel.push(iogSothothThirdStep);
}

function showIogSothothNormallevel() {
  let merged = iogSothothNormallevel.flat();
  let i = 0;

  backDescBtn.addEventListener("click", () => {
    console.log(merged[i]);
    frontCard.style.backgroundImage = `url("${merged[i]}")`;
    i++;
    if (i === merged.length) {
      backDescBtn.classList.add("desc-bg-hide");
    }
  });
}

// ------------------- ShubNiggurath ----------------------------------
let shubNiggurathNormallevel = [];

function buildShubNiggurathNormalLevel() {
  shubNiggurathNormallevel = [];
  let shubNiggurathFirstStep = [];
  let shubNiggurathSecondStep = [];
  let shubNiggurathThirdStep = [];

  const greenNormalLevel = [...greenNormal];
  const brownNormalLevel = [...brownNormal];
  const blueNormalLevel = [...blueNormal];

  // --------------------------  Распределяем зеленый цвет ------------------------------
  const greenFirstStep = 1;
  const greenSecondStep = 3;
  const greenThirdStep = 2;

  for (let i = 0; i < greenFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    shubNiggurathFirstStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    shubNiggurathSecondStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * greenNormalLevel.length);
    shubNiggurathThirdStep.push(greenNormalLevel.splice(randomCard, 1).join());
  }
  document.querySelector("#green-first").textContent = greenFirstStep;
  document.querySelector("#green-second").textContent = greenSecondStep;
  document.querySelector("#green-third").textContent = greenThirdStep;

  // -------------------------  Распределяем коричневый цвет ------------------------------
  const brownFirstStep = 2;
  const brownSecondStep = 2;
  const brownThirdStep = 4;

  for (let i = 0; i < brownFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    shubNiggurathFirstStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    shubNiggurathSecondStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    shubNiggurathThirdStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#brown-first").textContent = brownFirstStep;
  document.querySelector("#brown-second").textContent = brownSecondStep;
  document.querySelector("#brown-third").textContent = brownThirdStep;

  // -------------------------  Распределяем синий цвет ------------------------------
  const blueFirstStep = 1;
  const blueSecondStep = 1;
  const blueThirdStep = 0;

  for (let i = 0; i < blueFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    shubNiggurathFirstStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    shubNiggurathSecondStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * blueNormalLevel.length);
    shubNiggurathThirdStep.push(blueNormalLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#blue-first").textContent = blueFirstStep;
  document.querySelector("#blue-second").textContent = blueSecondStep;
  document.querySelector("#blue-third").textContent = blueThirdStep;

  shubNiggurathNormallevel.push(shubNiggurathFirstStep);
  shubNiggurathNormallevel.push(shubNiggurathSecondStep);
  shubNiggurathNormallevel.push(shubNiggurathThirdStep);
}

function showShubNiggurathNormallevel() {
  let merged = shubNiggurathNormallevel.flat();
  let i = 0;

  backDescBtn.addEventListener("click", () => {
    console.log(merged[i]);
    frontCard.style.backgroundImage = `url("${merged[i]}")`;
    i++;
    if (i === merged.length) {
      backDescBtn.classList.add("desc-bg-hide");
    }
  });
}

//  Создаем сложный уровень
// ----------------------- Azathoth -------------------------------------

let azathothHardlevel = [];

function buildAzathothHardLevel() {
  azathothHardlevel = [];
  let azathothFirstStep = [];
  let azathothSecondStep = [];
  let azathothThirdStep = [];

  const greenHardLevel = [...greenHard];
  const brownHardLevel = [...brownHard];
  const blueHardLevel = [...blueHard];

  const brownNormalLevel = [...brownNormal];

  // --------------------------  Распределяем зеленый цвет ------------------------------
  const greenFirstStep = 1;
  const greenSecondStep = 2;
  const greenThirdStep = 2;

  for (let i = 0; i < greenFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * greenHardLevel.length);
    azathothFirstStep.push(greenHardLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * greenHardLevel.length);
    azathothSecondStep.push(greenHardLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < greenThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * greenHardLevel.length);
    azathothThirdStep.push(greenHardLevel.splice(randomCard, 1).join());
  }
  document.querySelector("#green-first").textContent = greenFirstStep;
  document.querySelector("#green-second").textContent = greenSecondStep;
  document.querySelector("#green-third").textContent = greenThirdStep;

  // -------------------------  Распределяем коричневый цвет ------------------------------
  const brownFirstStep = 2;
  const brownSecondStep = 3;
  const brownThirdStep = 4;

  for (let i = 0; i < brownFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * brownHardLevel.length);
    azathothFirstStep.push(brownHardLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * brownHardLevel.length);
    azathothSecondStep.push(brownHardLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < brownThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * brownNormalLevel.length);
    azathothThirdStep.push(brownNormalLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#brown-first").textContent = brownFirstStep;
  document.querySelector("#brown-second").textContent = brownSecondStep;
  document.querySelector("#brown-third").textContent = brownThirdStep;

  // -------------------------  Распределяем синий цвет ------------------------------
  const blueFirstStep = 1;
  const blueSecondStep = 1;
  const blueThirdStep = 0;

  for (let i = 0; i < blueFirstStep; i++) {
    let randomCard = Math.floor(Math.random() * blueHardLevel.length);
    azathothFirstStep.push(blueHardLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueSecondStep; i++) {
    let randomCard = Math.floor(Math.random() * blueHardLevel.length);
    azathothSecondStep.push(blueHardLevel.splice(randomCard, 1).join());
  }
  for (let i = 0; i < blueThirdStep; i++) {
    let randomCard = Math.floor(Math.random() * blueHardLevel.length);
    azathothThirdStep.push(blueHardLevel.splice(randomCard, 1).join());
  }

  document.querySelector("#blue-first").textContent = blueFirstStep;
  document.querySelector("#blue-second").textContent = blueSecondStep;
  document.querySelector("#blue-third").textContent = blueThirdStep;

  azathothHardlevel.push(azathothFirstStep);
  azathothHardlevel.push(azathothSecondStep);
  azathothHardlevel.push(azathothThirdStep);
  console.log(azathothHardlevel);
}

function showAzathothHardlevel() {
  let merged = azathothHardlevel.flat();
  let i = 0;

  backDescBtn.addEventListener("click", () => {
    frontCard.style.backgroundImage = `url("${merged[i]}")`;
    i++;
    if (i === merged.length) {
      backDescBtn.classList.add("desc-bg-hide");
    }
  });
}
