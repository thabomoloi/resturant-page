/**
 * Creates homepage.
 * @returns The home page.
 */
function getHomepage() {
    const home = document.createElement("div");
    home.classList.add("home-content");

    const h1 = document.createElement("h1");
    h1.innerText = "Sunny Eats Resturant";
    h1.style.color = "white";
    h1.style.textAlign = "center"

    const top_paragraph1 = document.createElement("p");
    top_paragraph1.innerText = "Get the best food in the sea.";
    
    const bottom_paragaph1 = document.createElement("p");
    bottom_paragaph1.innerText = "Visit us in our ship: The Thousand Sunny";

    const imageHome = document.createElement("img");
    
    const image = (x) => {
        if (x.matches) 
            imageHome.src = "./images/home_image.jpeg";
        else
            imageHome.src = "./images/home_image_mobile.jpeg";
    }
    imageHome.alt = "Sanji holding a dish.";

    var query = window.matchMedia("(min-width: 600px)");
    image(query);
    query.addEventListener('change', (event) => {
        image(event.target);
    })
    
    home.appendChild(h1);
    home.appendChild(top_paragraph1);
    home.appendChild(imageHome);
    home.appendChild(bottom_paragaph1);

    return home;
}

/**
 * Loads the home page.
 */
function loadHomepage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear content
    content.appendChild(getHomepage())
}

export default loadHomepage;