const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
}

const navLinks = Array.from(document.querySelectorAll('.topbar nav a[href^="#"]'));

function selectNav(link, target) {
  navLinks.forEach(a => a.classList.remove("nav-selected"));
  document.querySelectorAll(".nav-section-selected").forEach(el => {
    el.classList.remove("nav-section-selected", "nav-section-flash");
  });

  if (link) link.classList.add("nav-selected");

  if (target) {
    target.classList.add("nav-section-selected");
    target.classList.remove("nav-section-flash");
    void target.offsetWidth; // restart animation reliably
    target.classList.add("nav-section-flash");

    setTimeout(() => {
      target.classList.remove("nav-section-flash");
    }, 1500);
  }
}

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    const selector = this.getAttribute("href");
    const target = selector ? document.querySelector(selector) : null;

    if (nav) nav.classList.remove("open");

    // Delay very slightly so the browser finishes anchor scrolling first.
    setTimeout(() => selectNav(this, target), 80);
  });
});

// If the page opens with a hash, highlight that destination too.
function syncFromHash() {
  if (!location.hash) return;
  const link = navLinks.find(a => a.getAttribute("href") === location.hash);
  const target = document.querySelector(location.hash);
  if (link && target) selectNav(link, target);
}

window.addEventListener("hashchange", syncFromHash);
window.addEventListener("load", syncFromHash);