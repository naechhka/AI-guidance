const burger = document.getElementById("burger-menu");
    const nav = document.getElementById("nav");

    burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 479) {
        nav.classList.remove("active");
    }
});