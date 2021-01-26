const burguer = document.getElementById("burguer");

burguer.addEventListener("click", function () {
    if (burguer.classList.contains("opened")) {
        burguer.classList.replace("opened", "closed");
    }
    else if (burguer.classList.contains("closed")){
        burguer.classList.replace("closed", "opened");
    }
    else {
        burguer.classList.add("closed");
    }
});