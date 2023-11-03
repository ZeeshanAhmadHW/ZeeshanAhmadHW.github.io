//variable to keep track of current slide
var current = 0;
//array of images to loop through
var images = [];
//variable that stores the amount of time before image is changed
var interval = 1000;
images = ["images/1.jpeg","images/2.jpeg","images/3.jpeg","images/4.jpeg",
          "images/5.jpeg","images/6.jpeg","images/7.jpeg","images/8.jpeg"];

//function that has the logic of slide changing
function carouselshift(){
    document.querySelector('[name="slide"]').src = images[current];
    if (current === 7){
        current = 0;
    }else{
        current = current + 1;
    }
    
}

//interval which calls the slide changing function after a given amount of time
imageloop = setInterval(carouselshift,interval);

//final function for the carousel
function slide(){
    imageloop;
}