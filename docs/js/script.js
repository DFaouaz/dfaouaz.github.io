const burger = document.getElementById("burger");
const burger_menu = document.getElementById("burger_menu");

burger.addEventListener("click", function () {
    if (burger.classList.contains("opened")) {
        burger.classList.replace("opened", "closed");
        burger_menu.classList.replace("opened", "closed");
    }
    else if (burger.classList.contains("closed")){
        burger.classList.replace("closed", "opened");
        burger_menu.classList.replace("closed", "opened");
    }
    else { // Si no encuentra nada, esta cerrado y se abré
        burger.classList.add("opened");
        burger_menu.classList.add("opened");
    }
});