/* =========================================================
   270° ROOFTOP — Reviews page
   ========================================================= */
(function () {
  "use strict";

  const REVIEWS = [
    {
      name: "Mwasi_001", initials: "M", stars: 4, time: "2 months ago",
      quote: "Had a wonderful experience at 270° Rooftop. The ambience was amazing, with beautiful views over the city skyline.",
    },
    {
      name: "Yaya Sein", initials: "Y", stars: 5, time: "2 months ago",
      quote: "I had a great experience at 270° Rooftop. The atmosphere is amazing, the staff are incredibly attentive.",
    },
    {
      name: "Romana Dubenová", initials: "R", stars: 5, time: "6 months ago",
      quote: "An absolute gem in Nairobi. We didn't only visit the bar but also had an accommodation — a truly memorable stay.",
    },
  ];

  const reviewsTrack = document.getElementById("reviewsTrack");
  if (!reviewsTrack) return;

  const reviewDots = document.getElementById("reviewDots");
  reviewsTrack.innerHTML = REVIEWS.map(
    (r) => `
    <div class="review-slide">
      <div class="review-card">
        <div class="review-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
        <p class="review-quote">"${r.quote}"</p>
        <div class="review-author">
          <div class="review-avatar">${r.initials}</div>
          <div class="review-meta">
            <div class="review-name">${r.name}</div>
            <div class="review-time">${r.time}</div>
          </div>
        </div>
      </div>
    </div>`
  ).join("");
  reviewDots.innerHTML = REVIEWS.map((_, i) => `<button data-i="${i}" aria-label="Go to review ${i + 1}"></button>`).join("");

  let reviewIndex = 0;
  const dotBtns = Array.from(reviewDots.children);

  function goToReview(i) {
    reviewIndex = (i + REVIEWS.length) % REVIEWS.length;
    reviewsTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
    dotBtns.forEach((d, idx) => d.classList.toggle("active", idx === reviewIndex));
  }
  goToReview(0);
  document.getElementById("reviewPrev").addEventListener("click", () => goToReview(reviewIndex - 1));
  document.getElementById("reviewNext").addEventListener("click", () => goToReview(reviewIndex + 1));
  reviewDots.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn) goToReview(Number(btn.dataset.i));
  });

  let reviewAuto = setInterval(() => goToReview(reviewIndex + 1), 6000);
  const carouselEl = document.getElementById("reviewsCarousel");
  carouselEl.addEventListener("mouseenter", () => clearInterval(reviewAuto));
  carouselEl.addEventListener("mouseleave", () => (reviewAuto = setInterval(() => goToReview(reviewIndex + 1), 6000)));

  let touchStartX = 0;
  carouselEl.addEventListener("touchstart", (e) => (touchStartX = e.touches[0].clientX), { passive: true });
  carouselEl.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 50) goToReview(reviewIndex - 1);
    else if (dx < -50) goToReview(reviewIndex + 1);
  });

  /* Mini review grid (additional social proof beyond the carousel) */
  const reviewGrid = document.getElementById("reviewGrid");
  if (reviewGrid) {
    const EXTRA = [
      { name: "Romana D.", initials: "R", stars: 5, quote: "An absolute gem in Nairobi — the Escarpment stay made it even better." },
      { name: "Maxine M.", initials: "M", stars: 5, quote: "I had a bomb HOT spicy margarita the other day. 10/10 would order again." },
      { name: "Cyril M.", initials: "C", stars: 5, quote: "Golden hues and city views — Nairobi sunsets just hit different from up here." },
    ];
    reviewGrid.innerHTML = EXTRA.map(
      (r) => `
      <div class="review-mini reveal" data-reveal="scale">
        <div class="review-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
        <p>"${r.quote}"</p>
        <div class="review-name">${r.name}</div>
      </div>`
    ).join("");
    if (window.r270RevealObserver) {
      reviewGrid.querySelectorAll(".reveal").forEach((el, i) => {
        el.style.setProperty("--d", i * 0.08 + "s");
        window.r270RevealObserver.observe(el);
      });
    }
  }

  /* Star rating widget */
  const starInput = document.getElementById("starInput");
  if (starInput) {
    const starBtns = Array.from(starInput.children);
    const thanksMsg = document.getElementById("thanksMsg");
    starBtns.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        const val = Number(btn.dataset.val);
        starBtns.forEach((b) => b.classList.toggle("hover", Number(b.dataset.val) <= val));
      });
      btn.addEventListener("mouseleave", () => starBtns.forEach((b) => b.classList.remove("hover")));
      btn.addEventListener("click", () => {
        const val = Number(btn.dataset.val);
        starBtns.forEach((b) => b.classList.toggle("selected", Number(b.dataset.val) <= val));
        thanksMsg.classList.remove("hidden");
        localStorage.setItem("r270-rating", val);
      });
    });
    const savedRating = localStorage.getItem("r270-rating");
    if (savedRating) {
      starBtns.forEach((b) => b.classList.toggle("selected", Number(b.dataset.val) <= Number(savedRating)));
      thanksMsg.classList.remove("hidden");
    }
  }
})();
