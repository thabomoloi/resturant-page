/**
 * Creates homepage.
 * @returns The home page.
 */
function getHomepage() {
    const home = document.createElement("div");
    home.classList.add("home-content");

    const top_paragraph = document.createElement("p");
    top_paragraph.innerText = "Get the best food in the sea.";
    
    const bottom_paragaph = document.createElement("p");
    bottom_paragaph.innerText = "Visit us in our ship: Thousand Sunny";

    const imageHome = document.createElement("img");
    imageHome.src = "assets/images/home_image.jpeg";
    imageHome.alt = "Sanji holding a dish.";

    home.appendChild(top_paragraph);
    home.appendChild(imageHome);
    home.appendChild(bottom_paragaph);

    return home;
}

function loadHomepage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear content
    content.appendChild(getHomepage())
}

export default loadHomepage;