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
    levelBtns[i].classList.remove("mix-btn-active3");
    levelBtns[i].classList.remove("mix-btn-active4");
  }
  mixingCont.classList.remove("mixing-active");
  btnNum.classList.add(`mix-btn-active${numb}`);
  mixBtnCont.classList.add("btn-container-active");
}

levelOne.addEventListener("click", () => {
  showMixBtn(levelOne, 1);
});
levelTwo.addEventListener("click", () => {
  showMixBtn(levelTwo, 1);
});
levelThree.addEventListener("click", () => {
  showMixBtn(levelThree, 3);
});
levelFour.addEventListener("click", () => {
  showMixBtn(levelFour, 4);
});
levelFive.addEventListener("click", () => {
  showMixBtn(levelFive, 4);
});

// Отображаем контейнер с колодой
const mixDescBtn = document.querySelector("#mix-desc");
const mixingCont = document.querySelector("#mixing");
console.log(mixingCont);

function showMixingContainer() {
  mixBtnCont.classList.remove("btn-container-active");
  mixingCont.classList.add("mixing-active");
}
mixDescBtn.addEventListener("click", showMixingContainer);
console.log("Hello");
