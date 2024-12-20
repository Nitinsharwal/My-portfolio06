document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.classList.add("hovered");
        });
        link.addEventListener("mouseout", () => {
            link.classList.remove("hovered");
        });
    });
});
