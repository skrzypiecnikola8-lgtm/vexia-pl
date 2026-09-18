```javascript
// ======================================
// VEXIA.PL
// Podstawowe animacje i interakcje
// ======================================


// Płynne przewijanie do sekcji
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// Lekki efekt przesuwania tła za kursorem
const background = document.querySelector(".background");

document.addEventListener("mousemove", event => {

    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    if (background) {

        background.style.transform =
            `translate(${x}px, ${y}px)`;

    }

});


// Animacja kart przy wejściu na ekran
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

cards.forEach(card => {
    observer.observe(card);
});


// Aktualny rok w stopce
const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.textContent =
        `© ${year} VEXIA.PL • Stworzone dla społeczności.`;

}
```
