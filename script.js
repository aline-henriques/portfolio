document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const scrollContainer = document.querySelector(".projetos-lista");
const leftButton = document.querySelector(".scroll-btn.left");
const rightButton = document.querySelector(".scroll-btn.right");

const scrollAmount = 400;

leftButton.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
    });
});


rightButton.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
    });
});
