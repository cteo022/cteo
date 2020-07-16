const mediaQuery = window.matchMedia("(max-width: 750px)");
const normalmediaQuery = window.matchMedia("(max-width > 750px)");
const sidebarlinks = document.querySelectorAll('.sidebar-link')
const opensidebar = document.querySelector(".checkbtn");
const navbar = document.querySelector("#navbar ul"); 

function closeNav(){
    navbar.style.right="-200%"
}

function toggleNav(){
    if (navbar.style.right === "-7%") {
        navbar.style.right="-200%"
    } else {
        navbar.style.right="-7%"
    }
}

window.onresize = function(){
    if (mediaQuery.matches) {
        sidebarlinks.forEach(sidebarlink => {
            sidebarlink.addEventListener('click', closeNav);
        });
        opensidebar.addEventListener("click", toggleNav);
    } else {
        navbar.style.right="-200%"
        navbar.removeAttribute("style");
    }    
}

function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}
