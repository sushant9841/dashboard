// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;
// for (i = 0; i < dropdown.length; i++) {
//     dropdown[i].addEventListener("click", function () {
//         this.classList.toggle("rotate");
//         var dropdownContent = this.nextElementSibling;
//         if (dropdownContent.style.display === "flex") {
//             dropdownContent.style.display = "none";
//         } else {
//             dropdownContent.style.display = "flex";
//         }
//     });
// }

var accordions = document.getElementsByClassName("dropdown-btn");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        this.classList.toggle("semi-active");
        this.classList.toggle("rotate");
        this.nextElementSibling.classList.toggle("show");
        hideAll(this);
    };
}

function hideAll(exceptThis) {
    for (var i = 0; i < accordions.length; i++) {
        if (accordions[i] !== exceptThis) {
            accordions[i].classList.remove("semi-active");
            accordions[i].classList.remove("rotate");
            accordions[i].nextElementSibling.classList.remove("show");
        }
    }
}

var accordionsInner = document.getElementsByClassName("sub-dropdown-btn");

for (var n = 0; n < accordionsInner.length; n++) {
    accordionsInner[n].onclick = function () {
        this.classList.toggle("semi-active");
        this.classList.toggle("rotate");
        this.nextElementSibling.classList.toggle("show");
        hideAllinner(this);
    };
}

function hideAllinner(exceptThis) {
    for (var n = 0; n < accordionsInner.length; n++) {
        if (accordionsInner[n] !== exceptThis) {
            accordionsInner[n].classList.remove("semi-active");
            accordionsInner[n].classList.remove("rotate");
            accordionsInner[n].nextElementSibling.classList.remove("show");
        }
    }
}

// const rot = document.getElementsByClassName("has-sub"),
//     sub = document.getElementsByClassName("submenu");
// if (sub.style.display === "flex") {
//     rot.classList.add("rotate");
// } else {
//     rot.classList.remove("rotate");
// }

/*=============== SHOW MENU ===============*/
// const navMenu = document.getElementById("nav-menu"),
//     navToggle = document.getElementById("nav-toggle"),
//     navClose = document.getElementById("nav-close"),
//     navHeader = document.getElementById("header");

// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// if (navToggle) {
//     navToggle.addEventListener("click", () => {
//         navHeader.classList.add("hide-menu");
//     });
// }

// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */
// if (navClose) {
//     navClose.addEventListener("click", () => {
//         navHeader.classList.remove("hide-menu");
//     });
// }

function hideshow() {
    var head = document.getElementById("header");
    if (head.style.width >= "20%") {
        head.style.width = "0";
        head.classList.add("hide-span");
    } else {
        head.style.width = "50%";
        head.classList.remove("hide-span");
    }
}

function openSearch() {
    var element = document.getElementById("searchbarhide");
    element.classList.toggle("d-none");
    var element = document.getElementById("searchbarshow");
    element.classList.toggle("d-none");
}
// function hideshow() {
//     var head = document.getElementById("header");
//     var x;
//     for (x = 0; x < head.length; x++) {
//         head[x].addEventListener("click", function () {
//             if (head.style.width === "50%") {
//                 head.style.width = "0";
//                 head.classList.add("hide-span");
//             } else {
//                 head.style.width = "50%";
//                 head.classList.remove("hide-span");
//             }
//         });
//     }
// }

$(".nav--menu a").on("click", function () {
    var $this = $(this),
        $bc = $('<li class="breadcrumb-item"> </li>');

    $this.parents("li").each(function (n, li) {
        var $a = $(li).children("a").clone();
        $bc.prepend(" > ", $a);
    });
    $(".breadcrumb").html(
        $bc.prepend('<a href="#"><i class="ri-home-2-line remix"></i></a>')
    );
    return false;
});
