var myNav = document.getElementById('mynav');
var myBtn = document.getElementById('mybtn');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 395 || document.documentElement.scrollTop >= 395 ) {
        myNav.classList.add("nav-white");
        myNav.classList.remove("bg-yellow");
        myBtn.classList.add("btn-success");
        myBtn.classList.remove("btn-dark");
    } 
    else {
        myNav.classList.add("bg-yellow");
        myNav.classList.remove("nav-white");
        myBtn.classList.add("btn-dark");
        myBtn.classList.remove("btn-success");
    }
};