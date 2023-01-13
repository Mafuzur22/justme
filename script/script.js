container = document.getElementById("type-con");
loading = document.getElementById("ring-id");
allLoad = document.getElementById("load-id");
body = document.getElementsByTagName("BODY")[0];
setTimeout(function(){
    loading.style.display = "none";
    allLoad.style.display = "none";
    container.style.display = "flex";

}, 4000)
navigationBar = document.getElementById("nav-bar-id");
details = document.getElementById("details-id");
workTxt = document.getElementById("work-id");
contactTxt = document.querySelector(".contact-txt");
contactMe = document.querySelector(".contact-me");
mainCon = document.querySelector(".main");


body.onscroll = function(){
    navigationBar.style.display = "flex";
    navigationBar.style.position = "fixed";
    workTxt.style.display = "inline";
    contactTxt.style.display = "inline";
    contactMe.style.display = "grid";
    mainCon.style.display = "flex";
    details.style.display = "grid";
}