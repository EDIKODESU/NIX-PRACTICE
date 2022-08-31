let open_pseach = document.querySelector(".seach");
let close_pseach = document.getElementById("pop_up_screen_seach");

open_pseach.addEventListener("click", function()
{
    if(!close_pseach.classList.contains("active")) close_pseach.classList.add("active");
});

close_pseach.addEventListener("click", function()
{
    close_pseach.classList.remove("active");
});
