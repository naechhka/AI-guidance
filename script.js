const burger = document.getElementById("burger-menu");
    const nav = document.getElementById("nav");

    burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});