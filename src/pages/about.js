function getContactPage() {
    const container = document.createElement("div");
    container.className = "contact-content";

    const h1 = document.createElement("h1");
    h1.innerText = "Contact Us";
    container.appendChild(h1);

    const contacts = document.createElement("div");
    contacts.className = "contacts";

    const contactNames = [
        {"name": "Vismoke Sanji", "role": "Cook", "phone": "+123-456-789", "email": "sanji@sunny.mugiwara"},
        {"name": "Nami", "role": "Navigator", "phone": "+123-456-788", "email": "nami@sunny.mugiwara"},
        {"name": "Monkey D. Luffy", "role": "Captain", "phone": "+123-456-7897", "email": "luffy@sunny.mugiwara"}
    ]

    for (let i = 0; i < 3; i++) {
        const contact = contactNames[i];
        const contactDiv = document.createElement("div");
        contactDiv.className = "contact";

        const h2 = document.createElement("h2");
        h2.innerText = contact.name;
        contactDiv.appendChild(h2);

        const span1 = document.createElement("span1")
        span1.innerText = contact.role;
        span1.style.fontWeight = "600";
        span1.style.display = "block";
        contactDiv.appendChild(span1);

        const span2 = document.createElement("span1")
        span2.innerText = contact.phone;
        span2.style.display = "block";
        contactDiv.appendChild(span2);

        const span3 = document.createElement("span1")
        span3.innerText = contact.email;
        span3.style.display = "block";
        contactDiv.appendChild(span3);

        contacts.appendChild(contactDiv);
    }

    container.appendChild(contacts);

    return container;

}

function loadContacts() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear content
    content.appendChild(getContactPage())
}

export default loadContacts;