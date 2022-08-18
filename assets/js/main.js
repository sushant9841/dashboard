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

//////////////////////////////////////////////////////////////
// Sidebar Dropdown button hide/show
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

//////////////////////////////////////////////////////////////
// Sidebar Sub-Dropdown button hide/show
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

//////////////////////////////////////////////////////////////
// Sidebar/header Menu Hide/Show
function hideshow() {
    var element = document.getElementById("header");
    element.classList.toggle("hide-span");
}

//////////////////////////////////////////////////////////////
// Searchbar Hide/show
function openSearch() {
    var element = document.getElementById("searchbarhide");
    element.classList.toggle("d-none");
    var element = document.getElementById("searchbarshow");
    element.classList.toggle("d-none");
}

//////////////////////////////////////////////////////////////
// Callbutton Hide/show
function openCallDailer() {
    var element = document.getElementById("callControl");
    element.classList.toggle("d-none");
}

//////////////////////////////////////////////////////////////
// Navmenu Auto Active
$(function () {
    var current = location.pathname;
    $("#nav-menu li a").each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr("href").indexOf(current) !== -1) {
            $this.addClass("active");
            $this.parents(".submenu").addClass("show");
            $this.closest(".submenu").prev(".dropdown-btn").addClass("active rotate");
            $this.closest(".submenu").prev(".sub-dropdown-btn").addClass("active rotate");
            $this.parents(".submenu").parents(".submenu").prev(".dropdown-btn").addClass("active rotate");
            ".dropdown-btn".addClass("active");
        }
    });
});

//////////////////////////////////////////////////////////////
// table-overflow drag
// var elementScroll = document.querySelector(".table-overflow");
// var tableoverflow = 0;

// elementScroll.addEventListener("mousedown", function (e) {
//     this.sx = this.scrollLeft;
//     tableoverflow = e.pageX - this.offsetLeft;

//     this.addEventListener("mousemove", mouseMoveFunction);
// });

// elementScroll.addEventListener("mouseup", function (e) {
//     this.removeEventListener("mousemove", mouseMoveFunction);
//     tableoverflow = 0;
// });

// function mouseMoveFunction(e) {
//     var tableoverflow2 = e.pageX - this.offsetLeft;
//     if (tableoverflow) this.scrollLeft = this.sx + tableoverflow - tableoverflow2;
// }

//////////////////////////////////////////////////////////////
// datatables
$(document).ready(function () {
    $(".datatable").DataTable({
        responsive: true,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "All"],
        ],
        scrollX: true,
    });
});
$(document).ready(function () {
    $(".datatable_excel").DataTable({
        responsive: true,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "All"],
        ],
        scrollX: true,
        dom: "Bfrtip",
        buttons: ["pageLength", "excel"],
    });
});

$(".datatable_select").DataTable({
    select: true,
});
// datatable width doesn't work properly when placed inside tab; this code helps to resize/adjust the tab when it is active.
$('button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
});

//////////////////////////////////////////////////////////////
// Select 2
$(document).ready(function () {
    $(".select2").select2();
});

//////////////////////////////////////////////////////////////
// dragable contain
// Implement drag and drop for the image
$(".dragable").on("mousedown", function (e) {
    var $this = $(this),
        $window = $(window),
        mouseX = e.pageX,
        mouseY = e.pageY,
        width = $this.outerWidth(),
        height = $this.outerHeight();
    (elemX = $this.offset().left + width - mouseX), (elemY = $this.offset().top + height - mouseY);

    e.preventDefault();
    $window
        .on("mousemove.drag", function (e2) {
            $this.offset({
                left: e2.pageX + elemX - width,
                top: e2.pageY + elemY - height,
            });
        })
        .one("mouseup", function () {
            $window.off("mousemove.drag");
        });
});

// theme selector
var selectedScheme = "Default";

$("#body_theme").change(function () {
    $("body").removeClass(selectedScheme).addClass($(this).val());
    selectedScheme = $(this).val();
});
