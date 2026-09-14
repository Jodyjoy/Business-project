/* =========================================================
   270° ROOFTOP — Menu page
   ========================================================= */
(function () {
  "use strict";

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

  const menuGrid = document.getElementById("menuGrid");
  const menuEmpty = document.getElementById("menuEmpty");
  if (!menuGrid) return;

  function renderMenu() {
    menuGrid.innerHTML = MENU.map(
      (group) => `
      <div class="menu-group reveal" data-key="${group.key}">
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

    // reveal-observe the freshly created groups
    if (window.r270RevealObserver) {
      menuGrid.querySelectorAll(".reveal").forEach((el, i) => {
        el.style.setProperty("--d", (i % 4) * 0.06 + "s");
        window.r270RevealObserver.observe(el);
      });
    }
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
})();
