function getMenuPage() {
    const container = document.createElement("div");
    container.className = "menu-content";

    const h1 = document.createElement("h1");
    h1.innerText = "Menu";
    container.appendChild(h1);

    const menu = document.createElement("div");
    menu.className = "menu";

    const menuItems = [
        {"name": "Curry Rice", "src": "./images/cuury_rice.jpg", "alt": "Curry Rice"},
        {"name": "Ramen", "src": "./images/ramen.jpg", "alt": "Ramen"},
        {"name": "Seafood Fried Rice", "src": "./images/seafood_fried_rice.jpeg", "alt": "Seafood Fried Rice"}
     ]

    for (let i = 0; i < 3; i++) {
        const item = menuItems[i];
        const menuDiv = document.createElement("div");
        menuDiv.className = "menu-item";

        const h3 = document.createElement("h3");
        h3.innerText = item.name;
        menuDiv.appendChild(h3);

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt;
        menuDiv.appendChild(img);

        menu.appendChild(menuDiv);

    }
    container.appendChild(menu);
    return container;
}

function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear content
    content.appendChild(getMenuPage())
}

export default loadMenu;