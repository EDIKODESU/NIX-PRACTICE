let next_btn = document.querySelector(".btnRight");
let back_btn = document.querySelector(".btnLeft");
let image = document.querySelectorAll(".contentSlideReviewsr");
let slider_line = document.querySelector(".SlideReviews");

let count = 0;
let width_slide = null;
let slide = image.length / 2;

function init()
{
    width_slide = 560 + 48;
    slider_line.style.width = width_slide * image.length + "px";
    moveSlider();
}

window.addEventListener("resize", init);
init();

next_btn.addEventListener("click", function(){
    count++;
    locationSlide();
})

back_btn.addEventListener("click", function(){
    count--;
    locationSlide();
})

function moveSlider()
{
    slider_line.style.transform = "translate(-" + count * 1216 + "px)";
}

function locationSlide()
{
    if(count >= slide) count = 0;
    if(count < 0) count = slide - 1;
    moveSlider();
}