// =========================
// Smooth Navbar Highlight
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// Reveal Animation
// =========================

const revealElements = document.querySelectorAll(
    ".about, .skills, .projects, .education, .certificates, .resume, .contact"
);

function revealSections() {

    revealElements.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// =========================
// Sticky Navbar Shadow
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// =========================
// Typing Effect
// =========================

const typingText = [
    "Aspiring Frontend Developer",
    "AI Student",
    "Web Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === typingText.length) {
        count = 0;
    }

    currentText = typingText[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".hero h2").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 100);

    }

})();


// =========================
// Back To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};