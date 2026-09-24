// Mobile Navigation Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinks.classList.toggle("show");
        if (menuIcon) {
            if (navLinks.classList.contains("show")) {
                menuIcon.classList.remove("bx-menu");
                menuIcon.classList.add("bx-x");
            } else {
                menuIcon.classList.remove("bx-x");
                menuIcon.classList.add("bx-menu");
            }
        }
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            if (navLinks.classList.contains("show")) {
                navLinks.classList.remove("show");
                if (menuIcon) {
                    menuIcon.classList.remove("bx-x");
                    menuIcon.classList.add("bx-menu");
                }
            }
        }
    });

    // Close when clicking any nav link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("show")) {
                navLinks.classList.remove("show");
                if (menuIcon) {
                    menuIcon.classList.remove("bx-x");
                    menuIcon.classList.add("bx-menu");
                }
            }
        });
    });
}

// Scrollspy Active Nav Indicator
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
