window.onload = start;

var pic;
var childWin;

function start()
{
    var pics = document.querySelectorAll(".pic-container")
    for(var i = 0; i < pics.length; i++){
        pics[i].onclick = function(){
            childWin = window.open("D:/Projects/3/index.html");
            window.addEventListener('message', messageListener, false);
            pic = this.querySelector("img").src;
        }
    }
}

function messageListener(event) {
    if(event.data == 'ready') {
        childWin.postMessage(pic, '*');
        window.close();
    }
}