let body = document.querySelector("body");
let btn_open = document.querySelector(".openFavoritesWindow");
let btn_close = document.querySelector(".btmCloseModalWindow");
let modal_screen = document.querySelector(".modal_screen");
let pop_up = document.getElementById("modal");
let modal_window = document.querySelector(".modal_window");

btn_open.addEventListener("click", function()
{
    pop_up.classList.add("modal_active");
    modal_window.scrollTop = 0;
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
    modal_screen.classList.add("mscreen_active");
});

modal_screen.addEventListener("click", function()
{   
    pop_up.classList.remove("modal_active");
    setTimeout(DeleteModal, 560);
});

btn_close.addEventListener("click", function(e)
{
    e.preventDefault();
    pop_up.classList.remove("modal_active");
    setTimeout(DeleteModal, 560);
});

let DeleteModal = () =>
{
    modal_screen.classList.remove("mscreen_active");
    window.onscroll = function(){};
}
