/**
 * Creates homepage.
 * @returns The home page.
 */
function getHomepage() {
    const home = document.createElement("div");
    home.classList.add("home");
    home.innerText = "This is homepage";
    return home;
}

function loadHomepage() {
    const content = document.getElementById("#content");
    content.innerHTML = ""; // Clear content
    content.appendChild(getHomepage())
}

export default loadHomepage;