let menu = document.querySelector(".menu");
let menuHidden2 = document.querySelector("#menu-icon");
let menuHidden = document.querySelector("#menu-hidden");
let menuX = document.querySelector("#menu-x");
// let menu2 = document.querySelector("#menu-icon-2");
let slidbar = document.querySelector("#slidbar");
let main = document.querySelector("main");
let ul = document.querySelector(".menu ul");
let turn = true;
let turn2 = true;
menuHidden.addEventListener("click", () => {
  if (turn) {
    slidbar.style.right = "0%";
    // ul.style.top = "100px";
    turn = false;
  }else{
 slidbar.style.right = "-100%";
  //
  turn = true;
  }
});
menuX.addEventListener("click", () => {
  slidbar.style.right = "-100%";
  //
  turn = true;
});

menuHidden2.addEventListener("click", () => {
  if (turn) {
    ul.style.top = "100px";
    turn = false;
  } else {
    ul.style.top = "-500%";
    turn = true;
  }
});

// menu2.addEventListener("click", () => {
//   if (turn) {
//     ul.style.top = "120px";
//     turn = false;
//   } else {
//     ul.style.top = "-500%";
//     turn = true;
//   }
// });
