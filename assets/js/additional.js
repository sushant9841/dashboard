//////////////////////////////////////////////////////////////
// Dark Mode
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector(".dark-mode-toggle");

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add("darkmode");
    // 2. Update darkMode in localStorage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove("darkmode");
    // 2. Update darkMode in localStorage
    localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
    enableDarkMode();
}

//////////////////////////////////////////////////////////////
// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
    // get their darkMode setting
    darkMode = localStorage.getItem("darkMode");

    // if it not current enabled, enable it
    if (darkMode !== "enabled") {
        enableDarkMode();
        // if it has been enabled, turn it off
    } else {
        disableDarkMode();
    }
});

//////////////////////////////////////////////////////////////
// Fullscreen Js
var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
    }
}
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
    }
}

//////////////////////////////////////////////////////////////
//  Brightness Value Localstorage
const element = document.getElementById("brightness-slider");
element.addEventListener("input", function (e) {
    //console.log(data);
    localStorage.setItem("data", this.value);
    document.body.style.opacity = localStorage.getItem("data");
    document.getElementById("brightness-slider").setAttribute("value", this.value);
});

var dataval = localStorage.getItem("data") || 1;
document.getElementById("brightness-slider").setAttribute("value", dataval);
document.body.style.opacity = localStorage.getItem("data");

//////////////////////////////////////////////////////////////
//  Font Size Value Localstorage
const elementfont = document.getElementById("font-slider");
elementfont.addEventListener("input", function (e) {
    //console.log(data);
    localStorage.setItem("fontdata", this.value);
    document.getElementById("htmlfont").style.fontSize = localStorage.getItem("fontdata") + "px";
    document.getElementById("font-slider").setAttribute("value", this.value);
});
var fontdataval = localStorage.getItem("fontdata") || 9;
document.getElementById("font-slider").setAttribute("value", fontdataval);
document.getElementById("htmlfont").style.fontSize = localStorage.getItem("fontdata") + "px";

//////////////////////////////////////////////////////////////
// Reset LocalStorage Value and Reload page
function ResetLocalStorage() {
    localStorage.clear();
    window.location.reload();
}

//////////////////////////////////////////////////////////////
// color picker for main theme color

var root = document.querySelector(":root");

var maintheme = getComputedStyle(root);

let colorpicker = document.getElementById("colorpicker");
//colorpicker.value = maintheme.getPropertyValue("--main-theme-color");

setInterval(() => {
    let color = colorpicker.value;
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    //root.style.setProperty("--main-theme-color", color);
    root.style.setProperty("--main-theme-color", `${r}, ${g}, ${b}`);
}, 200);

// saxasx
$(".copybtn, .icon-item").click(function (event) {
    $("#copysuccess")
        .removeClass("copy-hide")
        .delay(1500)
        .queue(function (next) {
            $(this).addClass("copy-hide");
            next();
        });
});

// saxasx
$(".copybtn, .icon-item").click(function (event) {
    $(this)
        .children()
        .addClass("animate__animated animate__bounceIn")
        .delay(800)
        .queue(function (next) {
            $(this).removeClass("animate__animated animate__bounceIn");
            next();
        });
});

//////////////////////////////////////////////////////////////
// Sidebar/header Menu Hide/Show
function sidebar_modal_hideshow() {
    var element = document.getElementById("sidebar_modal");
    element.classList.toggle("active");
    element.classList.toggle("animate__fadeInRight");
    element.classList.toggle("animate__fadeInLeft");
}

//////////////////////////////////////////////////////////////
// Date and time Js

var date = new Date();
const elementDate = document.getElementById("printDate");
const elementDay = document.getElementById("printDay");
const elementTime = document.getElementById("printTime");
const listOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const listOfMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function printDate() {
    var day = date.getDate();
    var numberofmonth = date.getMonth();
    var month = listOfMonth[numberofmonth];
    var year = date.getFullYear();
    // <span class="today">04</span><span style="padding-right: 1rem; border-right: 2px solid var(--theme)">January<em>2022</em></span>

    elementDate.innerHTML =
        "<span class='today'>" + day + "</span><span style='padding-right: 1rem; border-right: 2px solid var(--theme);'  ><em class='mt-1 mb-2'>" + month + "</em><em class=''>" + year + "</em>";
}

function printDay() {
    date = new Date();
    var numberOfDay = date.getDay();
    var day = listOfDays[numberOfDay];
    elementDay.innerHTML = day;
}

function printTime() {
    date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours > 12) {
        hours = hours - 12;
        elementTime.innerHTML = hours + ":" + minutes + ":" + seconds + " PM";
    } else if (hours < 12) {
        //hours = "0" + hours;
        elementTime.innerHTML = hours + ":" + minutes + ":" + seconds + " AM";
    } else if ((hours = 12)) {
        elementTime.innerHTML = hours + ":" + minutes + ":" + seconds + " PM";
    }
}

setInterval(function () {
    printTime();
    printDate();
    printDay();
}, 1000);
