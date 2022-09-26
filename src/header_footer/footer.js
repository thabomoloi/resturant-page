function loadFooter() {
    const gitHubLink = document.createElement("a");
    gitHubLink.href = "https://github.com/thabomcodes";
    gitHubLink.innerHTML = "Copyright &copy; thabomcodes";
    

    const footer = document.querySelector("footer");
    footer.style.textAlign = "center";
    footer.appendChild(gitHubLink);
}

export default loadFooter;