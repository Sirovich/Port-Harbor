window.onload = zoom; 

window.addEventListener('message', messageListener, false);

function messageListener(event) {
    document.querySelector(".post-pic.active").src = event.data;
}

function zoom(){
var pageImages = document.querySelectorAll(".post-pic");
var nextIcon = document.querySelector(".next.icon");
var backIcon = document.querySelector(".back.icon");
var image = document.querySelector(".active");
var modalImg = document.querySelector(".zoom-pic.active")
var modal = document.querySelector(".zoom-container");
var close = document.querySelector(".zoom-close");
close.onclick = closeZoom;
nextIcon.onclick = next;
backIcon.onclick = next;
    image.onclick = function(){
        modalImg.src = this.src;
        modal.style.display = "flex";
    }
}

function closeZoom()
{
    console.log(1);
    var modal = document.querySelector(".zoom-container");
    modal.style.display = "none";
}

var i = 0;

function next(){
    i++;
    var pics = document.querySelectorAll(".post-pic");
    var container = document.querySelector(".main-pic");
    var current = document.querySelector(".zoom-pic.active");
    if (i == pics.length)
    {
        i = 0;        
    }
    current.src = pics[i].src;
}

function back(){
    i--;
    var pics = document.querySelectorAll(".post-pic");
    var container = document.querySelector(".main-pic");
    var current = document.querySelector(".zoom-pic.active");
    if (i == -1)
    {   
        i = pics.length - 1;
    }
    current.src = pics[i].src;
}

function edit()
{
    var gallery = window.open("Gallery/index.html");
    console.log(1);
    console.log(gallery);
    
    

    window.open();
}

function changePic(event)
{
    document.querySelector(".post-pic.active").src = event.message;
}

window.opener.postMessage('ready','*');