import loadHomepage from "../pages/home";

function getHeader() {
    const siteName = document.createElement("span");
    siteName.innerText = "Sunny Eats";

    const navBar = document.createElement("nav");
    navBar.classList.add("nav-menu");

    const home = document.createElement("button");
    home.innerText = "Home";
    home.classList.add("active");

    const menu = document.createElement("button");
    menu.innerText = "Menu";

    const contact = document.createElement("button");
    contact.innerText = "Contact";

    home.addEventListener("click", ()=> {
        home.className = "active";
        menu.className = "";
        contact.className = "";
        loadHomepage();
    });
    menu.addEventListener("click", ()=> {
        home.className = "";
        menu.className = "active";
        contact.className = "";
    });
    contact.addEventListener("click", ()=> {
        home.className = "";
        menu.className = "";
        contact.className = "active";
    });

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(contact);

    return {siteName, navBar};
}

function loadHeader() {
    const header = document.querySelector("header");
    header.appendChild(getHeader().siteName);
    header.appendChild(getHeader().navBar);
}

export default loadHeader;