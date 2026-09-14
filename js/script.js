/* =========================================================
   270° ROOFTOP — Interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     0. DATA
  --------------------------------------------------------- */
  const MENU = [
    {
      group: "Signature Cocktails", key: "signature",
      items: [
        ["Cloud Nine Aviation", "Tanqueray gin, triple sec, aquafaba, purple haze, lime", 1200],
        ["270° Special G&T", "Gin, kiwi, cucumber, basil leaves, tonic soda, elderflower", 1200],
        ["Berry Botanic Fizz", "Gin, peach schnapps, lime, crushed berries, tonic", 1200],
        ["270° Vegan Whiskey Sour", "Whiskey, aquafaba, sweet & sour, angostura, orange", 1200, "vegan"],
        ["Paloma Mezcalita", "Mezcal, grapefruit, cordial, lime, simple syrup, sparkling soda", 1200],
        ["Golden Spark", "Rum, turmeric-infused honey, lime, ginger soda, candied orange citrus", 1200],
        ["El Franco Spicy Margarita", "Tequila, mezcal, grapefruit, watermelon, mint, jalapeño, lime", 1300],
        ["Tiki Don Colada", "Don Julio Blanco, lychee juice, coconut cream, blue curaçao", 1400],
        ["270° Bourbon Fashioned", "Bourbon whiskey, smoked cinnamon aroma, angostura, simple syrup, sparkling water", 1200],
        ["Kentucky Mint Julep", "Jim Beam whiskey, fresh mint extract, sweet & sour, KWV brandy", 1200],
        ["270° Sunset", "Whiskey, Aperol, pineapple, aquafaba, simple syrup, lime juice", 1200],
        ["Berlin Herbal Mule", "Jägermeister, vodka, rosemary ginger-infused honey cordial, Red Bull", 1200],
        ["Peachy Limoncello Spritz", "Prosecco, peach purée, limoncello liqueur, sparkling soda", 1200],
      ],
    },
    {
      group: "Sips", key: "sips",
      items: [
        ["Mimosa", "Prosecco, fresh orange juice", 850],
        ["Sweet Dreams", "KWV brandy, crème de cassis, chocolate sauce, caramel, whip cream, nutmeg", 950],
        ["Nairobi Nightcap", "Vodka, Kahlúa coffee liqueur, Baileys, whip cream topping", 950],
      ],
    },
    {
      group: "Mocktails", key: "mocktail",
      items: [
        ["Arnold Palmer Iced Tea", "", 600],
        ["270° Lahori Apple-Mint", "", 600],
        ["Virgin Mojito", "", 600],
        ["Berry Bliss", "", 600],
      ],
    },
    {
      group: "Beer &amp; Cider", key: "beer",
      items: [
        ["Tusker Lager", "", 450],
        ["Tusker Lite", "", 450],
        ["Tusker Ndimu", "", 450],
        ["White Cap Lager", "", 450],
        ["White Cap Crisp", "", 450],
        ["Heineken", "", 600],
        ["Heineken 0.0", "", 600],
        ["254 Sand Trap", "", 550],
        ["254 Ninja", "", 550],
        ["Manyatta Cider", "", 500],
      ],
    },
    {
      group: "Coffee", key: "coffee",
      items: [
        ["Cappuccino", "", 300],
        ["Flat White", "", 300],
        ["Latte", "", 350],
        ["Americano", "", 250],
        ["Espresso", "", 150],
        ["Espresso Macchiato", "", 250],
        ["Hot Chocolate", "", 400],
        ["Mocha", "", 350],
        ["Mint Mocha", "", 400],
        ["Drip Coffee", "", 350],
        ["Americano Fizz", "", 350],
        ["Iced Americano", "", 300],
        ["Iced Latte", "", 400],
        ["Iced Berry Latte", "", 400],
        ["Matcha Latte", "", 500],
        ["Iced Matcha Latte", "", 500],
        ["Affogato", "", 350],
        ["Extras: Extra Shot / Alt. Milk / Syrup", "Extra espresso shot Ksh 60 · alternative milk Ksh 100 · vanilla, caramel or peppermint syrup Ksh 50", 0],
      ],
    },
    {
      group: "Tea", key: "coffee",
      items: [
        ["Kenyan Chai", "", 400],
        ["Masala Tea", "", 400],
        ["Pure Green Tea", "", 400],
        ["Hibiscus Tea", "", 400],
        ["Turmeric Tea", "", 400],
        ["Dawa", "", 450],
        ["Iced Dawa", "", 500],
      ],
    },
    {
      group: "Juices &amp; Smoothies", key: "juice",
      items: [
        ["Fresh Juice: Orange | Passion Fruit", "", 450],
        ["Tropical Mix | Pineapple", "", 450],
        ["Signature Smoothie: Mango Banana", "", 600],
        ["Pineapple Coconut | Tropical Green", "", 600],
        ["Matcha Smoothie", "", 600],
      ],
    },
    {
      group: "Water", key: "soft",
      items: [
        ["Still Filtered Water (1L)", "", 150],
        ["Still Water (1L)", "", 250],
        ["Sparkling Water (750ml)", "", 350],
      ],
    },
    {
      group: "Soft Drinks", key: "soft",
      items: [
        ["Stoney Tangawizi", "", 250],
        ["Coca-Cola", "", 250],
        ["Coca-Cola Zero", "", 250],
        ["Tonic Water", "", 300],
        ["Sprite", "", 250],
        ["Fanta", "", 250],
      ],
    },
    {
      group: "Shell &amp; Fin", key: "shellfin", note: "Bite-Sized Bliss",
      items: [
        ["Pweza", "Chargrilled octopus, orange-infused sweet potato purée, red pepper sofrito, citrus oil, micro herbs", 1550, "sf"],
        ["Tempura Prawns", "Tempura-crusted prawns, garlic mayonnaise, lettuce, lime", 1750, "sf,g,e"],
        ["Prawn & Mango Salad", "Butter-poached prawns, fresh mangoes, strawberries, mango-basil dressing", 1650, "sf,n"],
        ["Salt and Pepper Squids", "Fried calamari, spring onion, jalapeño, soy aioli", 1200, "sf,e,g"],
      ],
    },
    {
      group: "Shell &amp; Fin", key: "shellfin", note: "Large Serves",
      items: [
        ["Grilled Fish", "Catch of the day, garden vegetables, pea purée, dill-champagne sauce, basil oil, choice of side", 2050, "sf"],
        ["Prawn Ramen", "Crunchy prawn dumpling, prawn broth, ramen noodles, spicy egg, poached prawns, nori", 2250, "sf,e,g,n"],
        ["Seafood Laksa", "Fish, prawns, calamari, octopus, lemongrass-infused coconut broth, rice", 2350, "sf"],
        ["Seafood Risoni", "Orzo rice, prawns, calamari, seafish, confit tomatoes, garden peas", 2250, "sf,g,d"],
      ],
    },
    {
      group: "Grill &amp; Thrill", key: "grillthrill", note: "Bite-Sized Bliss",
      items: [
        ["270° Wings", "Mildly spiced wings, sweet and sour glaze, sesame seeds, lemon-gochujang dip", 1050, "g,e,s"],
        ["Beef Tataki", "Char-seared beef fillet, ginger ponzu, caramelised onion, green chili & avocado mojo", 1050, "s,n"],
        ["Lamb Dumplings", "Lamb dumplings, garlic-tahini yoghurt, tomato butter, coriander-onion crunch", 1200, "g,d,s"],
        ["Curried Sausage Bites", "Tempura Kenyan sausage, buttered curry sauce, garlic mayonnaise, micro herbs", 1050],
      ],
    },
    {
      group: "Grill &amp; Thrill", key: "grillthrill", note: "Large Serves",
      items: [
        ["Lamb Shank", "Slow-cooked lamb shank, aromatic gravy, grilled vegetables, smoked butter peas, garlic mashed potatoes", 2300, "g,d"],
        ["Quesadilla", "Pulled beef rump, tortilla, mozzarella, mojo verde, pico de gallo", 1700, "g,d"],
        ["Sirloin Steak", "Grilled angus steak, red wine and mushroom jus, onion purée, garden vegetables, fries", 2500, "g,d,n"],
        ["Lamb Burger", "Lamb patty, sweet and sour onions, smoked cheddar, lettuce, grilled tomatoes, mint yoghurt, fries", 1750, "g,d,e"],
        ["Chicken Masala", "Sautéed chicken, masala sauce, mint yoghurt, coriander, coconut steamed rice or side", 1350, "d"],
        ["270° Layer Lasagna", "House-made lasagna sheets, minced beef, béchamel, roasted tomato sauce, grated parmesan", 1950, "d,e,g"],
        ["Jerk Chicken", "Classic jerk marinated chicken, garden vegetables, jerk sauce, choice of side", 2250],
        ["Beef Tips & Spuds", "Seared beef fillet, potato dumplings, garlic-chili beef jus, crunchy garlic, coriander", 1800, "g,d"],
      ],
    },
    {
      group: "Leafy &amp; Lovely", key: "leafylovely", note: "Bite-Sized Bliss",
      items: [
        ["Mushroom Croquettes", "Homemade mushroom croquettes, parsley garlic foam, red bell pepper aioli, bean sprouts, sunflower seeds", 900, "g,n,d,e"],
        ["Burrata & Tomatoes", "Fresh, roasted and confit tomatoes, burrata, homemade sourdough bread", 1150, "d,g"],
        ["270° Mezze", "Baba ganoush, classic hummus, tomato jam, muhammara, garlic flat bread", 950, "vegan,g,n"],
        ["Mushroom Gyoza", "Mushroom dumplings, mushroom broth, sesame oil, micro herbs", 1150, "vegan,g,d"],
        ["Koosa Hoos", "Slow cooked zucchini, garlic, cumin, tomatoes, homemade garlic flat bread", 950, "vegan,g"],
        ["Eggplant Miso Salad", "Glazed aubergine, lettuce, house pickles, cherry tomatoes, strawberries, pomegranate, green oil", 1150, "vegan,n"],
        ["Fried Camembert", "Panko-crusted camembert cheese cubes, mango purée, berry & grape salad", 1200, "d,g"],
      ],
    },
    {
      group: "Leafy &amp; Lovely", key: "leafylovely", note: "Large Serves",
      items: [
        ["Cacio e Pepe", "Spaghetti, cooked al dente, pepper corns, parmesan cheese", 1300, "d,g,e"],
        ["Buddha Bowl", "Tabbouleh, avocado with cashew cream, house pickles, chili-lime chickpeas, muhammara", 1200, "vegan,g,n"],
        ["Mushroom Orzo", "Orzo pasta, mushroom, sun-dried tomatoes, baby spinach, parmesan, confit garlic", 1550, "g,d,n,e"],
        ["Aubergine Stir Fry", "Aubergine, tofu, coconut steamed rice, chili oil, oriental sauce", 1200, "vegan,g,n"],
        ["Vegetable Masala", "Sautéed vegetables, masala sauce, onion & coriander crunch, coconut steamed rice or garlic flat bread", 1200, "d"],
      ],
    },
    {
      group: "Sides", key: "shellfin", note: "Shared",
      items: [
        ["French Fries", "", 400, "v,d"],
        ["Onion Rings", "", 350, "g"],
        ["Parmesan Fries", "", 500, "d,e,g"],
        ["Fried Sweet Plantain", "", 400, "vegan"],
        ["Garden Salad", "", 350, "vegan"],
        ["Garlic Flat Bread", "", 350, "g"],
      ],
    },
  ];

  const GALLERY = [
    { label: "Sunset Skyline View", icon: "🌇", grad: "linear-gradient(135deg,#ff5f7e,#ff8a5c,#ffc15c)" },
    { label: "Spicy Margarita on Marble", icon: "🍹", grad: "linear-gradient(135deg,#ff8a5c,#ffb36b)" },
    { label: "Lounge Seating & Patio Heaters", icon: "🛋️", grad: "linear-gradient(160deg,#2b3a55,#141d2f)" },
    { label: "Long Table, Set for Celebration", icon: "🌹", grad: "linear-gradient(135deg,#f5c451,#ff8a5c)" },
    { label: "City Lights at Night", icon: "🌃", grad: "linear-gradient(160deg,#141a2b,#3a2f57)" },
    { label: "Sharing Plates & Small Bites", icon: "🍽️", grad: "linear-gradient(135deg,#ff9fb0,#ffc15c)" },
    { label: "18th-Floor Balcony Greenery", icon: "🌿", grad: "linear-gradient(135deg,#8fbf7a,#3f8f2e)" },
    { label: "Live DJ Sunset Set", icon: "🎧", grad: "linear-gradient(135deg,#7dd3fc,#a78bfa)" },
    { label: "Bar & Mixology Bench", icon: "🍸", grad: "linear-gradient(135deg,#ff5f7e,#a78bfa)" },
  ];

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

  /* ---------------------------------------------------------
     1. HEADER: scroll shrink / hide / scrollspy
  --------------------------------------------------------- */
  const header = document.getElementById("siteHeader");
  let lastY = window.scrollY;

  function onScrollHeader() {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 30);
    if (y > lastY && y > 200) header.classList.add("hide-header");
    else header.classList.remove("hide-header");
    lastY = y;
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
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

  // Scrollspy
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = navLinks
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === id));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spyObserver.observe(s));

  /* ---------------------------------------------------------
     2. THEME TOGGLE
  --------------------------------------------------------- */
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("r270-theme");
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "night" ? "sunset" : "night";
    document.documentElement.setAttribute("data-theme", current);
    localStorage.setItem("r270-theme", current);
  });

  /* ---------------------------------------------------------
     3. CURSOR GLOW (desktop only)
  --------------------------------------------------------- */
  if (window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    });
  }

  /* ---------------------------------------------------------
     4. REVEAL ON SCROLL
  --------------------------------------------------------- */
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
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------------------------------------------------------
     5. LIVE HOURS / OPEN-CLOSED / CROWD METER
  --------------------------------------------------------- */
  function getHoursFor(day) {
    // 5 = Friday, 6 = Saturday -> later close
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

    [dot, dotLg].forEach((d) => d.classList.toggle("closed", !isOpen));

    if (isOpen) {
      const minsLeft = close - nowMins;
      text.textContent = `Open now`;
      primary.textContent = "We're open right now";
      if (minsLeft <= 60) {
        secondary.textContent = `Closing soon — last orders in about ${minsLeft} min (closes ${formatMinutes(close)})`;
      } else {
        secondary.textContent = `Closes today at ${formatMinutes(close)}`;
      }
    } else {
      text.textContent = `Closed now`;
      let nextOpenText;
      if (nowMins < open) {
        nextOpenText = `Opens today at ${formatMinutes(open)}`;
      } else {
        const nextDay = (day + 1) % 7;
        const nextHours = getHoursFor(nextDay);
        nextOpenText = `Opens tomorrow at ${formatMinutes(nextHours.open)}`;
      }
      primary.textContent = "We're closed right now";
      secondary.textContent = nextOpenText;
    }

    // Busy meter (heuristic, purely presentational)
    let busyPct, busyLabel;
    if (!isOpen) {
      busyPct = 0; busyLabel = "Closed — check back during opening hours";
    } else {
      const hour = now.getHours();
      if (hour >= 17 && hour < 20) { busyPct = 85; busyLabel = "Busy — sunset rush, reserve ahead"; }
      else if (hour >= 20 && hour < 22.5) { busyPct = 65; busyLabel = "Moderately busy"; }
      else if (hour >= 11 && hour < 15) { busyPct = 30; busyLabel = "Quiet — great for lunch"; }
      else { busyPct = 15; busyLabel = "Less busy than usual"; }
      if (day === 5 || day === 6) busyPct = Math.min(100, busyPct + 15);
    }
    document.getElementById("crowdFill").style.width = busyPct + "%";
    document.getElementById("crowdCaption").textContent = busyLabel;
    document.getElementById("busyText").textContent = isOpen ? busyLabel.split("—")[0].trim() : "Closed";

    // Highlight today in hours list
    document.querySelectorAll("#hoursList li").forEach((li) => {
      li.classList.toggle("today", Number(li.dataset.day) === day);
    });
  }
  updateLiveStatus();
  setInterval(updateLiveStatus, 60 * 1000);

  /* ---------------------------------------------------------
     6. MENU RENDER + FILTER + SEARCH
  --------------------------------------------------------- */
  const menuGrid = document.getElementById("menuGrid");
  const menuEmpty = document.getElementById("menuEmpty");

  function renderMenu() {
    menuGrid.innerHTML = MENU.map(
      (group) => `
      <div class="menu-group" data-key="${group.key}">
        <h3 class="menu-group-title">${group.group} ${group.note ? `<small>${group.note}</small>` : ""}</h3>
        <div class="menu-items">
          ${group.items
            .map(([name, desc, price, tags]) => {
              const tagHtml = tags
                ? tags.split(",").map((t) => `<span class="item-tag">${t.trim()}</span>`).join("")
                : "";
              const priceHtml = price ? `Ksh ${price.toLocaleString()}` : "";
              return `
            <div class="menu-item" data-name="${name.toLowerCase()}">
              <div>
                <div class="item-name">${name}${tagHtml}</div>
                ${desc ? `<div class="item-desc">${desc}</div>` : ""}
              </div>
              <div class="item-price">${priceHtml}</div>
            </div>`;
            })
            .join("")}
        </div>
      </div>`
    ).join("");
  }
  renderMenu();

  const menuTabs = document.getElementById("menuTabs");
  const menuSearch = document.getElementById("menuSearch");
  let activeFilter = "all";

  function applyMenuFilters() {
    const query = menuSearch.value.trim().toLowerCase();
    let anyVisible = false;

    document.querySelectorAll(".menu-group").forEach((groupEl) => {
      const matchesCategory = activeFilter === "all" || groupEl.dataset.key === activeFilter;
      let groupHasVisible = false;

      groupEl.querySelectorAll(".menu-item").forEach((itemEl) => {
        const matchesQuery = !query || itemEl.dataset.name.includes(query);
        const visible = matchesCategory && matchesQuery;
        itemEl.classList.toggle("hidden-item", !visible);
        if (visible) groupHasVisible = true;
      });

      groupEl.classList.toggle("hidden", !groupHasVisible);
      if (groupHasVisible) anyVisible = true;
    });

    menuEmpty.classList.toggle("hidden", anyVisible);
  }

  menuTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    menuTabs.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    activeFilter = btn.dataset.filter;
    applyMenuFilters();
  });
  menuSearch.addEventListener("input", applyMenuFilters);

  /* ---------------------------------------------------------
     7. GALLERY + LIGHTBOX
  --------------------------------------------------------- */
  const galleryGrid = document.getElementById("galleryGrid");
  galleryGrid.innerHTML = GALLERY.map(
    (g, i) => `
    <figure class="gallery-item reveal" data-index="${i}" tabindex="0">
      <div class="gallery-art" style="background:${g.grad}">
        <div class="gallery-icon">${g.icon}</div>
      </div>
      <figcaption class="gallery-caption">${g.label}</figcaption>
    </figure>`
  ).join("");
  galleryGrid.querySelectorAll(".gallery-item").forEach((el) => revealObserver.observe(el));

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
    lightboxArt.innerHTML = `<div class="gallery-icon" style="font-size:5rem;height:100%;">${g.icon}</div>`;
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

  /* ---------------------------------------------------------
     8. REVIEWS CAROUSEL
  --------------------------------------------------------- */
  const reviewsTrack = document.getElementById("reviewsTrack");
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

  // touch swipe
  let touchStartX = 0;
  carouselEl.addEventListener("touchstart", (e) => (touchStartX = e.touches[0].clientX), { passive: true });
  carouselEl.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 50) goToReview(reviewIndex - 1);
    else if (dx < -50) goToReview(reviewIndex + 1);
  });

  /* ---------------------------------------------------------
     9. STAR RATING WIDGET
  --------------------------------------------------------- */
  const starInput = document.getElementById("starInput");
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

  /* ---------------------------------------------------------
     10. RESERVATION FORM
  --------------------------------------------------------- */
  const rDate = document.getElementById("rDate");
  const today = new Date().toISOString().split("T")[0];
  rDate.min = today;
  rDate.value = today;

  const rGuests = document.getElementById("rGuests");
  rGuests.innerHTML =
    '<option value="">#</option>' +
    Array.from({ length: 10 }, (_, i) => i + 1).map((n) => `<option>${n}${n === 10 ? "+" : ""}</option>`).join("");

  const reserveForm = document.getElementById("reserveForm");
  const confirmModal = document.getElementById("confirmModal");
  const confirmCode = document.getElementById("confirmCode");
  const confirmDetails = document.getElementById("confirmDetails");
  const upcomingBanner = document.getElementById("upcomingBanner");
  const upcomingText = document.getElementById("upcomingText");

  function setFieldError(field, msg) {
    const wrap = field.closest(".field");
    wrap.classList.toggle("invalid", !!msg);
    wrap.querySelector(".error-msg").textContent = msg || "";
  }

  function validateForm() {
    let valid = true;
    const name = reserveForm.name;
    const phone = reserveForm.phone;
    const email = reserveForm.email;
    const date = reserveForm.date;
    const time = reserveForm.time;
    const guests = reserveForm.guests;

    if (name.value.trim().length < 2) { setFieldError(name, "Please enter your full name"); valid = false; }
    else setFieldError(name, "");

    const phoneDigits = phone.value.replace(/\D/g, "");
    if (phoneDigits.length < 9) { setFieldError(phone, "Enter a valid phone number"); valid = false; }
    else setFieldError(phone, "");

    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { setFieldError(email, "Enter a valid email"); valid = false; }
    else setFieldError(email, "");

    if (!date.value) { setFieldError(date, "Pick a date"); valid = false; }
    else setFieldError(date, "");

    if (!time.value) { setFieldError(time, "Pick a time"); valid = false; }
    else setFieldError(time, "");

    if (!guests.value) { setFieldError(guests, "Select guests"); valid = false; }
    else setFieldError(guests, "");

    return valid;
  }

  reserveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast("Please fix the highlighted fields");
      return;
    }
    const submitBtn = reserveForm.querySelector(".btn-full");
    submitBtn.classList.add("loading");

    setTimeout(() => {
      submitBtn.classList.remove("loading");
      const code = "270-" + Math.floor(100000 + Math.random() * 900000);
      const booking = {
        code,
        name: reserveForm.name.value.trim(),
        phone: reserveForm.phone.value.trim(),
        date: reserveForm.date.value,
        time: reserveForm.time.value,
        guests: reserveForm.guests.value,
        occasion: reserveForm.occasion.value,
      };
      localStorage.setItem("r270-booking", JSON.stringify(booking));

      confirmCode.textContent = code;
      confirmDetails.innerHTML = `
        <div><strong>${booking.name}</strong></div>
        <div>${formatDate(booking.date)} at ${booking.time}</div>
        <div>${booking.guests} guest${booking.guests > 1 ? "s" : ""}${booking.occasion ? " · " + booking.occasion : ""}</div>
      `;
      confirmModal.classList.remove("hidden");
      renderUpcoming();
      reserveForm.reset();
      rDate.value = today;
    }, 900);
  });

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

  document.getElementById("cancelUpcoming").addEventListener("click", () => {
    localStorage.removeItem("r270-booking");
    upcomingBanner.classList.add("hidden");
    showToast("Reservation cancelled");
  });
  document.getElementById("modalClose").addEventListener("click", () => confirmModal.classList.add("hidden"));
  document.getElementById("modalDone").addEventListener("click", () => confirmModal.classList.add("hidden"));
  document.getElementById("modalNewBooking").addEventListener("click", () => {
    confirmModal.classList.add("hidden");
    document.getElementById("rName").focus();
  });
  confirmModal.addEventListener("click", (e) => { if (e.target === confirmModal) confirmModal.classList.add("hidden"); });

  /* ---------------------------------------------------------
     11. NEWSLETTER
  --------------------------------------------------------- */
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterThanks = document.getElementById("newsletterThanks");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newsletterThanks.classList.remove("hidden");
    showToast("Subscribed! See you at sunset 🌇");
    newsletterForm.reset();
  });

  /* ---------------------------------------------------------
     12. TOAST
  --------------------------------------------------------- */
  const toast = document.getElementById("toast");
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  /* ---------------------------------------------------------
     13. BACK TO TOP + SCROLL CUE
  --------------------------------------------------------- */
  const backToTop = document.getElementById("backToTop");
  window.addEventListener(
    "scroll",
    () => backToTop.classList.toggle("show", window.scrollY > 600),
    { passive: true }
  );
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.getElementById("scrollCue").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  /* ---------------------------------------------------------
     14. FOOTER YEAR
  --------------------------------------------------------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
