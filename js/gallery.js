/* =========================================================
   270° ROOFTOP — Gallery page
   ========================================================= */
(function () {
  "use strict";

  // `img` is the filename this item will use automatically once dropped into
  // images/gallery/ (see images/gallery/README.md) — until then, the gradient
  // + emoji placeholder below renders instead.
  const GALLERY = [
    { label: "Sunset Skyline View", icon: "🌇", cat: "views", grad: "linear-gradient(135deg,#c15c43,#cf9a52,#e8c073)", img: "sunset-skyline-view.jpg" },
    { label: "Spicy Margarita on Marble", icon: "🍹", cat: "drinks", grad: "linear-gradient(135deg,#c15c43,#e08a63)", img: "spicy-margarita-on-marble.jpg" },
    { label: "Lounge Seating & Patio Heaters", icon: "🛋️", cat: "ambiance", grad: "linear-gradient(160deg,#22303f,#12161c)", img: "lounge-seating-patio-heaters.jpg" },
    { label: "Long Table, Set for Celebration", icon: "🌹", cat: "ambiance", grad: "linear-gradient(135deg,#c15c43,#8a3f4f)", img: "long-table-set-for-celebration.jpg" },
    { label: "City Lights at Night", icon: "🌃", cat: "views", grad: "linear-gradient(160deg,#141a2b,#22785f)", img: "city-lights-at-night.jpg" },
    { label: "Sharing Plates & Small Bites", icon: "🍽️", cat: "food", grad: "linear-gradient(135deg,#cf9a52,#e8c073)", img: "sharing-plates-small-bites.jpg" },
    { label: "18th-Floor Balcony Greenery", icon: "🌿", cat: "ambiance", grad: "linear-gradient(135deg,#22785f,#45a888)", img: "18th-floor-balcony-greenery.jpg" },
    { label: "Live DJ Sunset Set", icon: "🎧", cat: "ambiance", grad: "linear-gradient(135deg,#22785f,#cf9a52)", img: "live-dj-sunset-set.jpg" },
    { label: "Bar & Mixology Bench", icon: "🍸", cat: "drinks", grad: "linear-gradient(135deg,#c15c43,#22785f)", img: "bar-mixology-bench.jpg" },
    { label: "Grilled Seafood Platter", icon: "🦐", cat: "food", grad: "linear-gradient(135deg,#e08a63,#cf9a52)", img: "grilled-seafood-platter.jpg" },
    { label: "Golden Hour Cappuccino", icon: "☕", cat: "food", grad: "linear-gradient(135deg,#8a5a3c,#c99a6c)", img: "golden-hour-cappuccino.jpg" },
    { label: "270° Panorama at Dusk", icon: "🏙️", cat: "views", grad: "linear-gradient(135deg,#c15c43,#22785f,#cf9a52)", img: "270-panorama-at-dusk.jpg" },
  ];

  const galleryGrid = document.getElementById("galleryGrid");
  if (!galleryGrid) return;

  let activeCat = "all";

  function renderGallery() {
    const filtered = GALLERY.filter((g) => activeCat === "all" || g.cat === activeCat);
    galleryGrid.innerHTML = filtered
      .map(
        (g, i) => `
      <figure class="gallery-item reveal" data-reveal="scale" data-index="${GALLERY.indexOf(g)}" tabindex="0" style="--d:${(i % 6) * 0.06}s">
        <div class="gallery-art" style="background:${g.grad}">
          <img class="gallery-photo" src="images/gallery/${g.img}" alt="${g.label}" loading="lazy"
               onload="this.closest('.gallery-art').classList.add('has-photo')" onerror="this.remove()">
          <div class="gallery-icon">${g.icon}</div>
        </div>
        <figcaption class="gallery-caption">${g.label}</figcaption>
      </figure>`
      )
      .join("");
    if (window.r270RevealObserver) {
      galleryGrid.querySelectorAll(".reveal").forEach((el) => window.r270RevealObserver.observe(el));
    } else {
      galleryGrid.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    }
  }
  renderGallery();

  const filterBtns = document.querySelectorAll(".gallery-filters .tab-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCat = btn.dataset.filter;
      renderGallery();
    });
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxArt = document.getElementById("lightboxArt");
  const lightboxCaption = document.getElementById("lightboxCaption");
  let lbIndex = 0;

  function openLightbox(i) {
    lbIndex = i;
    renderLightbox();
    lightbox.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  function renderLightbox() {
    const g = GALLERY[lbIndex];
    lightboxArt.style.background = g.grad;
    lightboxArt.innerHTML = `
      <img src="images/gallery/${g.img}" alt="${g.label}"
           style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"
           onload="this.nextElementSibling.style.display='none'" onerror="this.remove()">
      <div class="gallery-icon" style="font-size:5rem;height:100%;">${g.icon}</div>`;
    lightboxCaption.textContent = g.label;
  }
  function closeLightbox() {
    lightbox.classList.add("hidden");
    document.body.style.overflow = "";
  }
  galleryGrid.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item) openLightbox(Number(item.dataset.index));
  });
  galleryGrid.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const item = e.target.closest(".gallery-item");
      if (item) openLightbox(Number(item.dataset.index));
    }
  });
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => {
    lbIndex = (lbIndex - 1 + GALLERY.length) % GALLERY.length;
    renderLightbox();
  });
  document.getElementById("lightboxNext").addEventListener("click", () => {
    lbIndex = (lbIndex + 1) % GALLERY.length;
    renderLightbox();
  });
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") document.getElementById("lightboxPrev").click();
    if (e.key === "ArrowRight") document.getElementById("lightboxNext").click();
  });
})();
