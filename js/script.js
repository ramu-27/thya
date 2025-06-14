/* =========================== Typing Animation ================== */
var typed = new Typed(".typing", {
    strings: ["Engineer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

/* =========================== Aside Navigation ================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

// Set initial state: Home page as active
window.addEventListener("load", function () {
    document.querySelector("#home").classList.add("active");
    navList[0].querySelector("a").classList.add("active");
});

// Navigation Click Event
for (let i = 0; i < totalNavList; i++) {
    const link = navList[i].querySelector("a");
    link.addEventListener("click", function () {
        removeActiveClasses();
        this.classList.add("active");

        const targetSection = this.getAttribute("href").split("#")[1];
        document.querySelector(`#${targetSection}`).classList.add("active");

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

// Function to Remove Active Classes
function removeActiveClasses() {
    allSection.forEach((section) => section.classList.remove("active", "back-section"));
    navList.forEach((item) => item.querySelector("a").classList.remove("active"));
}

// Hire Me Button Click Event
document.querySelector(".hire-me").addEventListener("click", function () {
    removeActiveClasses();

    // Activate Contact Section
    document.querySelector("#contact").classList.add("active");

    // Keep About Section Highlighted
    navList.forEach((item) => {
        const link = item.querySelector("a");
        if (link.getAttribute("href") === "#about") {
            link.classList.add("active");
        }
    });

    if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
    }
});

// Toggle Aside Menu
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    document.body.classList.toggle("open"); // ✅ Add this line
    allSection.forEach((section) => section.classList.toggle("open"));
}
