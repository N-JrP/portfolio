(() => {
  const BREAKPOINT = 1100;

  function init() {
    const header = document.querySelector(".topbar");
    if (!header) return;

    const nav = header.querySelector("#nav");
    const menuBtn = header.querySelector("#menuBtn");
    const desktopActions = header.querySelector(".toplinks");

    if (!nav || !menuBtn) return;

    nav.querySelectorAll(".mobile-nav-actions").forEach(el => el.remove());

    if (desktopActions) {
      const mobileActions = document.createElement("div");
      mobileActions.className = "mobile-nav-actions";

      desktopActions.querySelectorAll("a").forEach(link => {
        mobileActions.appendChild(link.cloneNode(true));
      });

      nav.appendChild(mobileActions);
    }

    function closeMenu() {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }

    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      const opening = !nav.classList.contains("open");
      nav.classList.toggle("open", opening);
      menuBtn.setAttribute("aria-expanded", opening ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", event => {
      if (window.innerWidth <= BREAKPOINT && !header.contains(event.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > BREAKPOINT) closeMenu();
    });

    if (!window.matchMedia(`(max-width: ${BREAKPOINT}px)`).matches ||
        !("IntersectionObserver" in window)) {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll("#about,#projects,#experience,#skills,#education,#contact,.languages")
    );
    const sectionTimers = new WeakMap();

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.38) return;

        const el = entry.target;
        if (sectionTimers.has(el)) clearTimeout(sectionTimers.get(el));

        el.classList.add("mobile-section-pop");
        sectionTimers.set(el, setTimeout(() => {
          el.classList.remove("mobile-section-pop");
        }, 1250));
      });
    }, {
      threshold: [0.38, 0.55],
      rootMargin: "-8% 0px -8% 0px"
    });

    sections.forEach(el => sectionObserver.observe(el));

    const projects = Array.from(document.querySelectorAll(".project"));
    const projectTimers = new WeakMap();

    function popProject(card, duration = 1400) {
      projects.forEach(p => {
        if (p !== card) p.classList.remove("mobile-project-pop");
      });

      if (projectTimers.has(card)) clearTimeout(projectTimers.get(card));

      card.classList.add("mobile-project-pop");
      projectTimers.set(card, setTimeout(() => {
        card.classList.remove("mobile-project-pop");
      }, duration));
    }

    projects.forEach(card => {
      card.addEventListener("click", event => {
        if (event.target.closest("a")) return;
        popProject(card, 1800);
      });
    });

    const projectObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.62) {
          popProject(entry.target, 1150);
        }
      });
    }, {
      threshold: [0.62],
      rootMargin: "-18% 0px -18% 0px"
    });

    projects.forEach(card => projectObserver.observe(card));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
