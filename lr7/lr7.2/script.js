let menu = document.querySelector(".burger-menu-btn");
menu.addEventListener("click", () => {
    if(menu.className === "burger-menu-btn") {
        console.log(menu.className)
        menu.className = 'burger-menu-btn-clicked';
        let items = document.querySelector(".burger-menu-items");
        items.style = "display: flex;";
    } else {
        menu.className = 'burger-menu-btn';
        let items = document.querySelector(".burger-menu-items");
        items.style = "display: none;";
    }
})