// menu

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
// employment

const clickGaLogo = document.getElementById("galogo");
var timesClicked = 0;

clickGaLogo.addEventListener("click", clickedGaLogo);

function clickedGaLogo(event) {
  event.preventDefault();
  timesClicked++;
  if (timesClicked % 2 == 0) {
    document.getElementById("gatext").style.display = "block";
  } else {
    document.getElementById("gatext").style.display = "none";
  }
}

function gahover() {
  document.getElementById("galogo").style.boxShadow = "10px 10px 8px #888888";
}

function galeave() {
  document.getElementById("galogo").style.boxShadow = "none";
}

const clickHarambean = document.getElementById("harambean");
var timesClicked = 0;

clickHarambean.addEventListener("click", clickedHarambean);

function clickedHarambean(event) {
  event.preventDefault();
  timesClicked++;
  if (timesClicked % 2 == 0) {
    document.getElementById("harambeantext").style.display = "block";
  } else {
    document.getElementById("harambeantext").style.display = "none";
  }
}

function harambeanhover() {
  document.getElementById("harambean").style.boxShadow =
    "10px 10px 8px #888888";
}

function harambeanleave() {
  document.getElementById("harambean").style.boxShadow = "none";
}

const clickCzi = document.getElementById("cziimg");
var timesClicked = 0;

clickCzi.addEventListener("click", clickedCzi);

function clickedCzi(event) {
  event.preventDefault();
  timesClicked++;
  if (timesClicked % 2 == 0) {
    document.getElementById("czitext").style.display = "block";
  } else {
    document.getElementById("czitext").style.display = "none";
  }
}

function czihover() {
  document.getElementById("cziimg").style.boxShadow = "10px 10px 8px #888888";
}

function czileave() {
  document.getElementById("cziimg").style.boxShadow = "none";
}

const clickChange = document.getElementById("changeimg");
var timesClicked = 0;

clickChange.addEventListener("click", clickedChange);

function clickedChange(event) {
  event.preventDefault();
  timesClicked++;
  if (timesClicked % 2 == 0) {
    document.getElementById("changetext").style.display = "block";
  } else {
    document.getElementById("changetext").style.display = "none";
  }
}

function changehover() {
  document.getElementById("changeimg").style.boxShadow =
    "10px 10px 8px #888888";
}

function changeleave() {
  document.getElementById("changeimg").style.boxShadow = "none";
}

const clickOaktree = document.getElementById("oaktreeimg");
var timesClicked = 0;

clickOaktree.addEventListener("click", clickedOaktree);

function clickedOaktree(event) {
  event.preventDefault();
  timesClicked++;
  if (timesClicked % 2 == 0) {
    document.getElementById("oaktreetext").style.display = "block";
  } else {
    document.getElementById("oaktreetext").style.display = "none";
  }
}

function oaktreehover() {
  document.getElementById("oaktreeimg").style.boxShadow =
    "10px 10px 8px #888888";
}

function oaktreeleave() {
  document.getElementById("oaktreeimg").style.boxShadow = "none";
}

// var mql = window.matchMedia('(max-width: 700px)');

// mql.addEventListener( "change", (e) => {
//     if (e.matches) {
//     /* the viewport is 600 pixels wide or less */
//     document.getElementById("gatext").style.display = "none";
//     document.getElementById("gatext2").style.display = "flex";
//     } else {
//     /* the viewport is more than than 600 pixels wide */
//     document.getElementById("gatext").style.display = "none";
//   }
// })
