"use strict";
const z1 = document.getElementsByClassName("z-1")[0];
const z2 = document.getElementsByClassName("z-2")[0];
const z3 = document.getElementsByClassName("z-3")[0];

const ratio = 0.05;
let x;
let y;

document.addEventListener("mousemove", function (e) {
  x = e.pageX;
  y = e.pageY;
});

requestAnimationFrame(function animation() {
  z1.style.transform = "translate(" + x * ratio + "px," + y * ratio + "px)";

  z2.style.transform =
    "translate(" +
    (x * ratio) / 2 +
    "px," +
    (y * ratio) / 2 +
    "px) rotate(217deg)";

  z3.style.transform =
    "translate(" +
    (x * ratio) / 3 +
    "px," +
    (y * ratio) / 3 +
    "px) rotate(71deg)";

  requestAnimationFrame(animation);
});
