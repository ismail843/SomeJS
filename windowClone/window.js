const contextMenu = document.getElementById("contextMenu");

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    contextMenu.style.display = "block";
    contextMenu.style.left = event.pageX + "px";
    contextMenu.style.top = event.pageY + "px";
});

document.addEventListener("click", () => {
    contextMenu.style.display = "none";
});

function toggleStartMenu() {
    const startMenu = document.getElementById("startMenu");
    startMenu.style.display = startMenu.style.display === "block" ? "none" : "block";
}
