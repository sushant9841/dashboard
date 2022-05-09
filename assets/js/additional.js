//////////////////////////////////////////////////////////////
// Dark Mode
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

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
var fontdataval = localStorage.getItem("fontdata") || 10;
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
$(".copybtn").click(function (event) {
    // var element = document.getElementById("copysuccess");
    // element.classList.toggle("copy-hide");
    $("#copysuccess")
        .removeClass("copy-hide")
        .delay(1000)
        .queue(function (next) {
            $(this).addClass("copy-hide");
            next();
        });
});
