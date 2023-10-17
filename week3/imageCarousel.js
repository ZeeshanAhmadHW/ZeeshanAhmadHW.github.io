var current = 0;
var images = [];
var interval = 1000;
images = ["images/1.jpeg","images/2.jpeg","images/3.jpeg","images/4.jpeg",
          "images/5.jpeg","images/6.jpeg","images/7.jpeg","images/8.jpeg"];

function slide(){
    imageloop = setInterval(function(){
        if (current === 7){
            current = 0;
        }else{
            current = current + 1;
        }
        document.querySelector('[name="slide"]').src = images[current]
    },interval)
}