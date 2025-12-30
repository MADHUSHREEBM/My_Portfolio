/* CLICK ACTIVE MENU */
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

/* Hire Me → Scroll to Contact Section */
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

/* SCROLL ACTIVE HIGHLIGHT */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");

            navLinks.forEach(link => link.classList.remove("active"));

            const activeLink = document.querySelector(`a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

/* IMAGE FADE CHANGE (NO ROTATION) */
const images = document.querySelectorAll(".image-box img");
let index = 0;

setInterval(() => {
    images[index].classList.remove("show");
    index = (index + 1) % images.length;
    images[index].classList.add("show");
}, 2500);

// Popups open/close
function openTimeline() { document.getElementById("timeline-popup").style.display = "block"; }
function closeTimeline() { document.getElementById("timeline-popup").style.display = "none"; }
function openInternship() { document.getElementById("internship-popup").style.display = "block"; }
function closeInternship() { document.getElementById("internship-popup").style.display = "none"; }
function openCertification() { document.getElementById("certification-popup").style.display = "block"; }
function closeCertification() { document.getElementById("certification-popup").style.display = "none"; }
function openPublication() { document.getElementById("publication-popup").style.display = "block"; }
function closePublication() { document.getElementById("publication-popup").style.display = "none"; }

// Click outside to close
window.onclick = function(event) {
  const popups = ["timeline-popup","internship-popup","certification-popup","publication-popup"];
  popups.forEach(id => {
    const popup = document.getElementById(id);
    if(event.target === popup){ popup.style.display = "none"; }
  });
}

// Smooth horizontal scroll
function scrollLeft(containerId) {
  const container = document.getElementById(containerId);
  container.scrollBy({ left: -300, behavior: 'smooth' });
}
function scrollRight(containerId) {
  const container = document.getElementById(containerId);
  container.scrollBy({ left: 300, behavior: 'smooth' });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Save preference
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
}

// Load theme on refresh
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
