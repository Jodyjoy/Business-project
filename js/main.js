/* =========================================================
   270° ROOFTOP — Shared site behavior (runs on every page)
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     TOAST (exposed globally so page scripts can use it)
  --------------------------------------------------------- */
  const toast = document.getElementById("toast");
  let toastTimer;
  window.showToast = function (msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  };

  /* ---------------------------------------------------------
     HEADER: scroll shrink / hide
  --------------------------------------------------------- */
  const header = document.getElementById("siteHeader");
  if (header) {
    let lastY = window.scrollY;
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        header.classList.toggle("scrolled", y > 30);
        if (y > lastY && y > 200) header.classList.add("hide-header");
        else header.classList.remove("hide-header");
        lastY = y;
      },
      { passive: true }
    );
  }

  /* ---------------------------------------------------------
     MOBILE NAV
  --------------------------------------------------------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    mainNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.classList.remove("open");
        document.body.style.overflow = "";
      })
    );
  }

  /* ---------------------------------------------------------
     ACTIVE NAV LINK (per current page, no scrollspy needed)
  --------------------------------------------------------- */
  const currentFile = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentFile || (currentFile === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  /* ---------------------------------------------------------
     THEME TOGGLE (Night / Day palette)
  --------------------------------------------------------- */
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("r270-theme");
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "day" ? "night" : "day";
      document.documentElement.setAttribute("data-theme", current);
      localStorage.setItem("r270-theme", current);
    });
  }

  /* ---------------------------------------------------------
     CURSOR GLOW (desktop only)
  --------------------------------------------------------- */
  if (window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    });
  }

  /* ---------------------------------------------------------
     REVEAL ON SCROLL (staggered)
  --------------------------------------------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    revealEls.forEach((el, i) => {
      if (!el.style.getPropertyValue("--d")) {
        el.style.setProperty("--d", Math.min(i % 6, 5) * 0.08 + "s");
      }
    });
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
    window.r270RevealObserver = revealObserver;
  }

  /* ---------------------------------------------------------
     PARALLAX (hero background layers only — GPU transform,
     rAF-batched single scroll listener, off on mobile/reduced
     motion so it never fights touch scrolling or costs battery)
  --------------------------------------------------------- */
  const parallaxEls = Array.from(document.querySelectorAll("[data-parallax]"));
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (parallaxEls.length && !prefersReducedMotion) {
    let ticking = false;
    const applyParallax = () => {
      ticking = false;
      if (window.innerWidth < 760) {
        parallaxEls.forEach((el) => (el.style.transform = ""));
        return;
      }
      const y = window.scrollY;
      parallaxEls.forEach((el) => {
        const factor = Number(el.dataset.parallax) || 0.15;
        const rect = el.parentElement.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        el.style.transform = `translate3d(0, ${Math.round(y * factor)}px, 0)`;
      });
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(applyParallax);
        }
      },
      { passive: true }
    );
    applyParallax();
  }

  /* ---------------------------------------------------------
     LIVE HOURS / OPEN-CLOSED / CROWD METER
     (used wherever #statusText / #hoursList exist)
  --------------------------------------------------------- */
  function getHoursFor(day) {
    if (day === 5 || day === 6) return { open: 11 * 60, close: 23 * 60 + 30 };
    return { open: 11 * 60, close: 22 * 60 + 30 };
  }
  function formatMinutes(mins) {
    let h = Math.floor(mins / 60);
    const m = mins % 60;
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${m.toString().padStart(2, "0")} ${ampm}`;
  }
  function updateLiveStatus() {
    const now = new Date();
    const day = now.getDay();
    const nowMins = now.getHours() * 60 + now.getMinutes();
    const { open, close } = getHoursFor(day);
    const isOpen = nowMins >= open && nowMins < close;

    const dot = document.getElementById("statusDot");
    const dotLg = document.getElementById("statusDotLg");
    const text = document.getElementById("statusText");
    const primary = document.getElementById("liveStatusPrimary");
    const secondary = document.getElementById("liveStatusSecondary");
    const busyText = document.getElementById("busyText");

    [dot, dotLg].forEach((d) => d && d.classList.toggle("closed", !isOpen));

    if (text) text.textContent = isOpen ? "Open now" : "Closed now";

    if (primary || secondary) {
      if (isOpen) {
        const minsLeft = close - nowMins;
        if (primary) primary.textContent = "We're open right now";
        if (secondary) {
          secondary.textContent =
            minsLeft <= 60
              ? `Closing soon — last orders in about ${minsLeft} min (closes ${formatMinutes(close)})`
              : `Closes today at ${formatMinutes(close)}`;
        }
      } else {
        if (primary) primary.textContent = "We're closed right now";
        if (secondary) {
          let nextOpenText;
          if (nowMins < open) nextOpenText = `Opens today at ${formatMinutes(open)}`;
          else {
            const nextHours = getHoursFor((day + 1) % 7);
            nextOpenText = `Opens tomorrow at ${formatMinutes(nextHours.open)}`;
          }
          secondary.textContent = nextOpenText;
        }
      }
    }

    let busyPct, busyLabel;
    if (!isOpen) {
      busyPct = 0;
      busyLabel = "Closed — check back during opening hours";
    } else {
      const hour = now.getHours();
      if (hour >= 17 && hour < 20) { busyPct = 85; busyLabel = "Busy — sunset rush, reserve ahead"; }
      else if (hour >= 20 && hour < 22.5) { busyPct = 65; busyLabel = "Moderately busy"; }
      else if (hour >= 11 && hour < 15) { busyPct = 30; busyLabel = "Quiet — great for lunch"; }
      else { busyPct = 15; busyLabel = "Less busy than usual"; }
      if (day === 5 || day === 6) busyPct = Math.min(100, busyPct + 15);
    }
    const crowdFill = document.getElementById("crowdFill");
    const crowdCaption = document.getElementById("crowdCaption");
    if (crowdFill) crowdFill.style.width = busyPct + "%";
    if (crowdCaption) crowdCaption.textContent = busyLabel;
    if (busyText) busyText.textContent = isOpen ? busyLabel.split("—")[0].trim() : "Closed";

    document.querySelectorAll("#hoursList li").forEach((li) => {
      li.classList.toggle("today", Number(li.dataset.day) === day);
    });
  }
  if (document.getElementById("statusText") || document.getElementById("liveStatusPrimary")) {
    updateLiveStatus();
    setInterval(updateLiveStatus, 60 * 1000);
  }

  /* ---------------------------------------------------------
     STAT COUNTERS (count up when visible)
  --------------------------------------------------------- */
  document.querySelectorAll(".stat-num[data-count]").forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = el.dataset.count.includes(".") ? el.dataset.count.split(".")[1].length : 0;
    const suffix = el.dataset.suffix || "";
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          obs.unobserve(el);
          const duration = 1400;
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = (target * eased).toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
  });

  /* ---------------------------------------------------------
     BACK TO TOP
  --------------------------------------------------------- */
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => backToTop.classList.toggle("show", window.scrollY > 600), { passive: true });
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const scrollCue = document.getElementById("scrollCue");
  if (scrollCue) {
    scrollCue.addEventListener("click", () => {
      const next = document.querySelector(".hero").nextElementSibling;
      if (next) next.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------
     NEWSLETTER (present on multiple pages)
  --------------------------------------------------------- */
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    const newsletterThanks = document.getElementById("newsletterThanks");
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (newsletterThanks) newsletterThanks.classList.remove("hidden");
      window.showToast("Subscribed! See you at sunset 🌇");
      newsletterForm.reset();
    });
  }

  /* ---------------------------------------------------------
     FOOTER YEAR
  --------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     UPCOMING RESERVATION BANNER (shown site-wide if one exists)
  --------------------------------------------------------- */
  const upcomingBanner = document.getElementById("upcomingBanner");
  if (upcomingBanner) {
    const upcomingText = document.getElementById("upcomingText");
    function formatDate(iso) {
      const d = new Date(iso + "T00:00:00");
      return d.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
    }
    function renderUpcoming() {
      const raw = localStorage.getItem("r270-booking");
      if (!raw) { upcomingBanner.classList.add("hidden"); return; }
      const b = JSON.parse(raw);
      upcomingText.textContent = `${formatDate(b.date)} at ${b.time} for ${b.guests} · code ${b.code}`;
      upcomingBanner.classList.remove("hidden");
    }
    renderUpcoming();
    window.r270RenderUpcoming = renderUpcoming;
    const cancelBtn = document.getElementById("cancelUpcoming");
    if (cancelBtn) {
      cancelBtn.addEventListener("click", () => {
        localStorage.removeItem("r270-booking");
        upcomingBanner.classList.add("hidden");
        window.showToast("Reservation cancelled");
      });
    }
  }
})();
