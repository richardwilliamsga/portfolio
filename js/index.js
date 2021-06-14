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



// Places I worked form //

const placesWorked = document.getElementById("places"); 

placesWorked.addEventListener("change", replaceVid);
function replaceVid(event) {
  const userChoice = placesWorked.value
  console.log(userChoice)
  if(userChoice === "london") {
    document.getElementById("videoBG").setAttribute("src","img/London.mp4")
  }
  else if(userChoice === "newyork") {
  document.getElementById("videoBG").setAttribute("src","img/Newyork.mp4")
  }
  else if(userChoice === "sanfrancisco") {
  document.getElementById("videoBG").setAttribute("src","img/SanFrancisco.mp4")
  }
  else if(userChoice === "sydney") {
  document.getElementById("videoBG").setAttribute("src","img/Sydney.mp4")
  }
  else if(userChoice === "melbourne") {
  document.getElementById("videoBG").setAttribute("src","img/Melbourne.mp4")
  }
  else if(userChoice === "accra") {
    document.getElementById("videoBG").setAttribute("src","img/accra.mp4")
    }
    else if(userChoice === "siemreap") {
      document.getElementById("videoBG").setAttribute("src","img/siemreap.mp4")
      }
      else if(userChoice === "darjeeling") {
        document.getElementById("videoBG").setAttribute("src","img/darjeeling.mp4")
        }
        else if(userChoice === "portmoresby") {
          document.getElementById("videoBG").setAttribute("src","img/portmoresby.mp4")
          }
 }


//  NAVIGATION BAR MOBILE

const menubtn = document.querySelector(".menu-btn"); 
const asidemenu = document.getElementById("navmobmenu");
const navmobskills = document.getElementById("navmobskills");
const navmobconnect = document.getElementById("navmobconnect");
const navmobemployment = document.getElementById("navmobemployment");


menubtn.addEventListener("click", overlayOpen);
function overlayOpen() {
  document.querySelector(".navmobmenu").classList.add("navmobmenuopen")
} 


navmobskills.addEventListener("click", closeOverlaySkills);
function closeOverlaySkills () {
  document.querySelector(".navmobmenu").classList.remove("navmobmenuopen")
} 

navmobconnect.addEventListener("click", closeOverlayConnect);
function closeOverlayConnect () {
  document.querySelector(".navmobmenu").classList.remove("navmobmenuopen")
} 

navmobemployment.addEventListener("click", closeOverlayEmployment);
function closeOverlayEmployment () {
  document.querySelector(".navmobmenu").classList.remove("navmobmenuopen")
} 
