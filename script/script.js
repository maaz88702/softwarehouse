let humberg_menu = document.getElementById("humberg_menu");
let cancel = document.getElementById("cancel");
let menu = document.getElementById("menu");
let loaderDiv = document.querySelector(".loader");


humberg_menu.addEventListener("click", () => {
    menu.style.left = "0";
})


cancel.addEventListener("click", () => {
    menu.style.left = "100%";
})

// loader function

function loader() {

    loaderDiv.style.display = "none";

}