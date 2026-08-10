/* ============================================================
   ZARO FITNESS — Storefront logic
   ============================================================ */

const WHATSAPP_NUMBER = "8801315166681";
const FREE_SHIPPING_THRESHOLD = 3000;

/* ---------------- Product Catalog ---------------- */
const PRODUCTS = [
  {
    id: 1,
    name: "2 in 1 Treadmill with Vibration Plate 2026 Model",
    category: "Treadmills",
    oldPrice: 42000,
    price: 32500,
    image: "https://shop.zaro.com.bd/wp-content/uploads/2026/04/Group-22-300x300.png",
    bestSeller: true,
    description:
      "A powerful 2-in-1 home trainer — walk or run on the treadmill, then switch to vibration plate mode to shake up your whole-body routine. Built for daily cardio, recovery and strength in one compact machine.",
    highlights: [
      "2-in-1 treadmill + vibration plate combo",
      "Compact, space-saving home design",
      "Perfect for full-body cardio & muscle conditioning"
    ]
  },
  {
    id: 2,
    name: "Leg & Foot Massager for Pain Relief 2026 Model",
    category: "Massagers",
    oldPrice: 25000,
    price: 14500,
    image: "https://shop.zaro.com.bd/wp-content/uploads/2026/04/foot-massager-lp-copy-300x300.webp",
    bestSeller: true,
    description:
      "Deep-kneading shiatsu leg & foot massager that melts away fatigue, improves blood circulation and relieves pain after long days on your feet. The 2026 model brings stronger rollers and smarter comfort zones.",
    highlights: [
      "Shiatsu kneading + air compression relief",
      "Relieves leg & foot pain, improves circulation",
      "2026 upgraded model"
    ]
  },
  {
    id: 3,
    name: "Stair Stepper Machine - Full-Body Workout & Cardio Fitness Equipment",
    category: "Pedal Exercisers",
    oldPrice: 21500,
    price: 12500,
    image: "https://shop.zaro.com.bd/wp-content/uploads/2026/04/stair-stepper-300x300.webp",
    bestSeller: true,
    description:
      "Climb your way to fitness with a low-impact, full-body cardio stepper that tones legs, glutes and core while burning calories fast. Designed for effective home workouts without taking over your space.",
    highlights: [
      "Low-impact cardio that's easy on joints",
      "Tones legs, glutes & core",
      "Great for home gyms of any size"
    ]
  },
  {
    id: 4,
    name: "Relax Foot Massager 2026 Model",
    category: "Massagers",
    oldPrice: 15500,
    price: 9500,
    image: "https://shop.zaro.com.bd/wp-content/uploads/2026/04/zaro-landing-page-image-10.jpg-300x300.jpeg",
    bestSeller: false,
    description:
      "Your personal foot spa at home. Relaxing kneading and compression massage soothes tired feet, improves blood flow and helps you unwind after a long day.",
    highlights: [
      "Deep kneading & compression massage",
      "Relieves tired feet and improves circulation",
      "2026 upgraded model"
    ]
  },
  {
    id: 5,
    name: "Vibration Plate Exercise Machine 2026 Model",
    category: "Vibration Plates",
    oldPrice: 22000,
    price: 14950,
    image: "https://shop.zaro.com.bd/wp-content/uploads/2026/01/imgi_176_550x468-300x300.png",
    bestSeller: true,
    description:
      "Whole-body vibration training that boosts circulation, improves balance and supports muscle conditioning — all while you stand, stretch or squat. Simple, effective and perfect for all fitness levels.",
    highlights: [
      "Whole-body vibration training",
      "Improves circulation, balance & strength",
      "Suitable for all fitness levels"
    ]
  },
  {
    id: 6,
    name: "ZARO Easy Bike Pedal Exerciser with Warranty",
    category: "Pedal Exercisers",
    oldPrice: 4500,
    price: 2800,
    image: "https://shop.zaro.com.bd/wp-content/uploads/2025/11/61CFDvJQyXL._SL1100_-300x300-1.jpg",
    bestSeller: false,
    description:
      "A compact, quiet pedal exerciser for easy low-impact cardio at home or the office. Great for seniors, recovery and staying active every day — backed by official warranty.",
    highlights: [
      "Quiet, smooth pedalling motion",
      "Great for seniors & low-impact cardio",
      "Official warranty included"
    ]
  },
  {
    id: 7,
    name: "Pelvic Leg Massager",
    category: "Massagers",
    oldPrice: 3500,
    price: 2600,
    image: "https://shop.zaro.com.bd/wp-content/uploads/2025/11/71uDac8KEML._AC_SL1500_-300x300-1.jpg",
    bestSeller: false,
    description:
      "A targeted pelvic & leg massager designed for everyday comfort and relief. Lightweight and easy to use, it helps improve blood flow and ease tension after long hours.",
    highlights: [
      "Targeted pelvic & leg relief",
      "Lightweight, portable design",
      "Everyday comfort & circulation"
    ]
  },
  {
    id: 8,
    name: "Pedal Exercise Machine",
    category: "Pedal Exercisers",
    oldPrice: 5000,
    price: 2950,
    image: "https://shop.zaro.com.bd/wp-content/uploads/2025/11/61CFDvJQyXL._SL1100_-300x300-1.jpg",
    bestSeller: false,
    outOfStock: true,
    description:
      "A budget-friendly pedal exerciser for gentle cardio and leg movement. Compact enough for any corner of the house — ideal for light daily activity.",
    highlights: [
      "Affordable, compact design",
      "Gentle cardio for everyday movement",
      "Fits easily in any room"
    ]
  },
  {
    id: 9,
    name: "Zaro FitHero - Premium 4 Wheel Roller with Yoga Mat & Warranty",
    category: "Rollers & Accessories",
    oldPrice: 6500,
    price: 3950,
    image: "https://shop.zaro.com.bd/wp-content/uploads/2025/11/2-300x300.png",
    bestSeller: false,
    description:
      "A premium 4-wheel ab roller that builds a rock-solid core with smooth, stable motion — plus a free yoga mat and 6-month warranty included.",
    highlights: [
      "Stable 4-wheel design for better control",
      "Free premium yoga mat included",
      "6-month warranty included"
    ]
  },
  {
    id: 10,
    name: "Gyro Ball",
    category: "Rollers & Accessories",
    oldPrice: 2850,
    price: 2190,
    image: "https://shop.zaro.com.bd/wp-content/uploads/2025/09/51ZRcy8fKcL._AC_-300x290.jpg",
    bestSeller: false,
    description:
      "A pocket-sized power trainer that strengthens grip, wrists and forearms using gyroscopic resistance. Start slow, then level up as your strength grows.",
    highlights: [
      "Strengthens grip, wrist & forearm",
      "Gyroscopic resistance training",
      "Compact — train anywhere"
    ]
  },
  {
    id: 11,
    name: "Fat Burn Abdominal Roller with Elbow Support (2025 Edition)",
    category: "Rollers & Accessories",
    oldPrice: 4500,
    price: 3500,
    image: "https://shop.zaro.com.bd/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-23-at-6.06.48-PM-300x300.jpeg",
    bestSeller: false,
    description:
      "Train your core with elbow support that reduces strain on your back while you build strength. The 2025 edition keeps your form smooth and controlled.",
    highlights: [
      "Elbow support for safer core training",
      "Targets abs, shoulders & arms",
      "2025 edition"
    ]
  }
];

/* ---------------- Categories ---------------- */
const CATEGORIES = [
  { id: "all", name: "All", icon: "" },
  {
    name: "Treadmills",
    desc: "Cardio machines for home",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 14a2 2 0 0 0-2 2v3h20v-3a2 2 0 0 0-2-2H4Zm0 0 1.5-4M6.5 14l-1-4M8.5 14l-1-4M10.5 14 9 10M12.5 14 11 10M14.5 14 13 10M16.5 14 15 10M18.5 14l-1-4M20.5 14 20 10M5.5 3h2l1.5 4h10l1.5-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    name: "Massagers",
    desc: "Relief & recovery therapy",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12a7 7 0 0 1 14 0M5 12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3M5 12h14M12 5V3M8 5a4 4 0 0 1 8 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    name: "Vibration Plates",
    desc: "Whole-body workout",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 8h4v8H4zM16 8h4v8h-4zM8 6h8v12H8zM10 4h4M10 20h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    name: "Pedal Exercisers",
    desc: "Cycling & low-impact cardio",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 0 4-6m0 0 3 4m-3-4H8m2 0h7m0 0 3 4m-3-4 3 4m0 0a3 3 0 1 1-1 5.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    name: "Rollers & Accessories",
    desc: "Strength & mobility gear",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 16a3 3 0 0 1 3-3h12a3 3 0 1 1 0 6H6a3 3 0 0 1-3-3Zm6-3V8a3 3 0 0 1 6 0v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  }
];

/* ---------------- Payment Methods ---------------- */
const PAYMENT_METHODS = {
  cod: { label: "Cash on Delivery", note: "Pay when your order arrives." },
  bkash: { label: "bKash", note: "You'll receive payment instructions on WhatsApp." },
  nagad: { label: "Nagad", note: "You'll receive payment instructions on WhatsApp." }
};

/* ---------------- State ---------------- */
let cart = [];
let paymentMethod = "cod";
let shopFilter = { category: "all", sort: "default" };

try {
  cart = JSON.parse(localStorage.getItem("zaro_cart") || "[]");
} catch (e) {
  cart = [];
}
try {
  const savedPay = localStorage.getItem("zaro_payment");
  if (savedPay && PAYMENT_METHODS[savedPay]) paymentMethod = savedPay;
} catch (e) {
  /* ignore */
}

const saveCart = () => localStorage.setItem("zaro_cart", JSON.stringify(cart));
const savePayment = () => localStorage.setItem("zaro_payment", paymentMethod);

const cartCount = () => cart.reduce((sum, item) => sum + item.qty, 0);
const cartTotal = () => cart.reduce((sum, item) => sum + item.qty * item.price, 0);
const findProduct = (id) => PRODUCTS.find((p) => p.id === id);
const discountPct = (p) => Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);

/* ---------------- Utilities ---------------- */
const formatBDT = (n) => "৳" + Number(n).toLocaleString("en-US");
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const starSVG =
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.2 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2Z"/></svg>';
const starRow = (n = 5) => '<span class="stars" aria-label="' + n + ' out of 5 stars">' + starSVG.repeat(n) + "</span>";

const checkSVG =
  '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5 9.5 17 19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* ---------------- Product Card Rendering ---------------- */
function productCard(product, { ranked = false, rank = 0 } = {}) {
  const savePct = discountPct(product);
  const oos = product.outOfStock;

  const badge = oos
    ? '<span class="badge badge-oos">OUT OF STOCK</span>'
    : '<span class="badge badge-sale">SALE</span>';

  const rankBadge =
    ranked && rank < 4 && !oos
      ? `<span class="rank" title="Best Seller #${rank + 1}">${rank + 1}</span>`
      : "";

  const actions = oos
    ? `<button class="add-btn disabled" disabled>Out of Stock</button>`
    : `<button class="add-btn" data-add="${product.id}">
         <svg viewBox="0 0 24 24" fill="none"><path d="M3 7h2l2.4 11a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
         Add to Cart
       </button>`;

  return `
    <article class="product-card reveal" data-product="${product.id}">
      <a href="product.html?id=${product.id}" class="pd-card-link" aria-label="${product.name.replace(/"/g, "&quot;")}">
        <div class="product-media${oos ? " oos" : ""}">
          ${badge}
          ${rankBadge}
          <img src="${product.image}" alt="${product.name.replace(/"/g, "&quot;")}" loading="lazy" />
        </div>
        <div class="product-body">
          <span class="product-cat">${product.category}</span>
          <h3 class="product-title">${product.name}</h3>
          <div class="price-row">
            <span class="price-old">${formatBDT(product.oldPrice)}</span>
            <span class="price-new">${formatBDT(product.price)}</span>
            <span class="price-save">-${savePct}%</span>
          </div>
        </div>
      </a>
      <div class="product-actions">${actions}</div>
    </article>
  `;
}

/* ---------------- Filtering / Sorting ---------------- */
function getFilteredProducts() {
  let list = PRODUCTS.slice();
  if (shopFilter.category !== "all") {
    list = list.filter((p) => p.category === shopFilter.category);
  }
  switch (shopFilter.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "discount":
      list.sort((a, b) => discountPct(b) - discountPct(a));
      break;
    default:
      break;
  }
  return list;
}

function renderFilterChips() {
  const wrap = $("#filterChips");
  if (!wrap) return;
  const names = ["all", ...CATEGORIES.filter((c) => c.name !== "All").map((c) => c.name)];
  wrap.innerHTML = names
    .map(
      (n) => `
      <button class="filter-chip${shopFilter.category === n ? " active" : ""}" data-cat="${n}" role="tab" aria-selected="${shopFilter.category === n}">
        ${n}
      </button>
    `
    )
    .join("");
}

function renderProducts() {
  const grid = $("#featuredGrid");
  const empty = $("#shopEmpty");
  if (!grid) return;
  const list = getFilteredProducts();

  if (list.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  grid.innerHTML = list.map((p, i) => productCard(p, { ranked: true, rank: i })).join("");
}

function renderBestSellers() {
  const grid = $("#bestGrid");
  if (!grid) return;
  const list = PRODUCTS.filter((p) => p.bestSeller);
  grid.innerHTML = list.map((p, i) => productCard(p, { ranked: true, rank: i })).join("");
}

function renderCategories() {
  const grid = $("#catsGrid");
  if (!grid) return;
  grid.innerHTML = CATEGORIES.filter((c) => c.name !== "All")
    .map(
      (c) => `
    <a class="cat-card reveal" href="index.html#shop">
      <div class="cat-icon">${c.icon}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
    </a>
  `
    )
    .join("");
}

/* ---------------- Related Products ---------------- */
function renderRelated(current) {
  const grid = $("#relatedGrid");
  if (!grid) return;
  const sameCat = PRODUCTS.filter((p) => p.id !== current.id && p.category === current.category);
  const others = PRODUCTS.filter((p) => p.id !== current.id && p.category !== current.category);
  const related = [...sameCat, ...others].slice(0, 4);
  grid.innerHTML = related.map((p, i) => productCard(p, { ranked: true, rank: i })).join("");
}

/* ---------------- Product Detail Page ---------------- */
function initProductPage() {
  const wrap = $("#productDetail");
  if (!wrap) return;

  const params = new URLSearchParams(location.search);
  const id = Number(params.get("id"));
  const product = findProduct(id);

  if (!product) {
    wrap.innerHTML = `
      <section class="pd-notfound">
        <div class="container">
          <span class="eyebrow">Oops</span>
          <h1>Product not found</h1>
          <p style="color:var(--text-dim);margin-bottom:24px">The product you're looking for doesn't exist.</p>
          <a href="index.html#shop" class="btn btn-primary">Back to Shop</a>
        </div>
      </section>`;
    renderRelated({ id: 0, category: "" });
    return;
  }

  document.title = `${product.name} — ZARO FITNESS`;
  const savePct = discountPct(product);
  const saveAmount = product.oldPrice - product.price;
  const oos = product.outOfStock;

  wrap.innerHTML = `
    <div class="container">
      <nav class="pd-breadcrumb" aria-label="Breadcrumb">
        <a href="index.html">Home</a><span class="sep">/</span>
        <a href="index.html#shop">Shop</a><span class="sep">/</span>
        <a href="index.html#shop">${product.category}</a><span class="sep">/</span>
        <span>${product.name}</span>
      </nav>

      <div class="pd-grid">
        <div class="pd-media">
          ${oos ? '<span class="badge badge-oos">OUT OF STOCK</span>' : '<span class="badge badge-sale">SALE</span>'}
          <img src="${product.image}" alt="${product.name.replace(/"/g, "&quot;")}" />
        </div>

        <div class="pd-info">
          <span class="pd-cat">${product.category}</span>
          <h1>${product.name}</h1>
          <div class="pd-stars">${starRow(5)}<span class="reviews-count">Be the first to review</span></div>

          <div class="pd-price-row">
            <span class="price-old">${formatBDT(product.oldPrice)}</span>
            <span class="price-new">${formatBDT(product.price)}</span>
            <span class="price-save">-${savePct}%</span>
          </div>
          <p class="pd-price-save-amount">You save ${formatBDT(saveAmount)} on this order</p>

          <p class="pd-desc">${product.description}</p>

          <ul class="pd-highlights">
            ${product.highlights.map((h) => `<li>${checkSVG}<span>${h}</span></li>`).join("")}
          </ul>

          <div class="pd-qty-row">
            <div class="qty-stepper">
              <button id="pdQtyDec" aria-label="Decrease quantity">−</button>
              <span id="pdQtyVal">1</span>
              <button id="pdQtyInc" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn btn-primary pd-add-btn" id="pdAddBtn" ${oos ? "disabled style='opacity:.5;cursor:not-allowed'" : ""}>
              <svg viewBox="0 0 24 24" fill="none"><path d="M3 7h2l2.4 11a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              ${oos ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>

          <div class="pd-trust">
            <div class="pd-trust-item">
              <svg viewBox="0 0 24 24" fill="none"><path d="M3 7a2 2 0 0 1 2-2h12l2 4h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1.5A3.5 3.5 0 0 1 17 12a3.5 3.5 0 0 1-2.5 3H9.5A3.5 3.5 0 0 1 7 12a3.5 3.5 0 0 1-2.5-3H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm3.5 3h13" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
              Cash on Delivery
            </div>
            <div class="pd-trust-item">
              <svg viewBox="0 0 24 24" fill="none"><path d="M3 7a2 2 0 0 1 2-2h12l2 4 1-1m-18 9v-2m20 2h-2M3 11h18m-17 5a3 3 0 1 0 0 2m2-2H5m14 2h-2m2 0a3 3 0 1 0-2 0m2-1h-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Fast 64-District Delivery
            </div>
            <div class="pd-trust-item">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 3 4 6v6c0 4.5 3.4 7.8 8 9 4.6-1.2 8-4.5 8-9V6l-8-3Zm-2 13-3-3m3 0h4l-4 4m-1-9 2 2 3-3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Warranty Included
            </div>
          </div>

          <div class="pd-meta">
            SKU: <span>ZR-${String(product.id).padStart(4, "0")}</span> · Category: <span>${product.category}</span>
          </div>
        </div>
      </div>
    </div>`;

  renderRelated(product);

  let qty = 1;
  const qtyVal = $("#pdQtyVal");
  const setQty = (n) => {
    qty = Math.max(1, Math.min(99, n));
    qtyVal.textContent = qty;
  };
  $("#pdQtyDec").addEventListener("click", () => setQty(qty - 1));
  $("#pdQtyInc").addEventListener("click", () => setQty(qty + 1));
  const addBtn = $("#pdAddBtn");
  if (addBtn && !oos) {
    addBtn.addEventListener("click", () => {
      addToCart(product.id, qty);
    });
  }
}

/* ---------------- Cart UI ---------------- */
function renderCart() {
  const wrap = $("#cartItems");
  if (!wrap) return;
  const subtotal = cartTotal();
  const count = cartCount();

  $("#cartCount").textContent = count;
  $("#cartCount").classList.toggle("zero", count === 0);
  $("#cartSubtotal").textContent = formatBDT(subtotal);

  if (cart.length === 0) {
    wrap.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none"><path d="M3 7h2l2.4 11a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <p>Your cart is empty.<br />Add some gear to get started!</p>
      </div>
    `;
  } else {
    wrap.innerHTML = cart
      .map((item) => {
        const product = findProduct(item.id);
        return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name.replace(/"/g, "&quot;")}" />
          <div>
            <div class="cart-item-title">${product.name}</div>
            <div class="cart-item-price">${formatBDT(product.price)} <strong>× ${item.qty}</strong></div>
            <div class="qty-control">
              <button data-dec="${product.id}" aria-label="Decrease quantity">−</button>
              <span>${item.qty}</span>
              <button data-inc="${product.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div>
            <div class="cart-item-price"><strong>${formatBDT(product.price * item.qty)}</strong></div>
            <button class="cart-item-remove" data-remove="${product.id}" aria-label="Remove ${product.name}">
              <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
          </div>
        </div>
      `;
      })
      .join("");
  }

  const note = $(".cart-note");
  if (note) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      note.textContent = `You qualify for FREE delivery nationwide. Payment: ${PAYMENT_METHODS[paymentMethod].label}.`;
    } else {
      note.textContent = `Add ${formatBDT(FREE_SHIPPING_THRESHOLD - subtotal)} more for FREE delivery. Payment: ${PAYMENT_METHODS[paymentMethod].label}.`;
    }
  }
}

function renderPaymentOptions() {
  const wrap = $("#payOptions");
  if (!wrap) return;
  $$(".pay-option", wrap).forEach((opt) => {
    const input = $("input", opt);
    const isActive = input.value === paymentMethod;
    opt.classList.toggle("active", isActive);
    if (isActive) input.checked = true;
  });
}

function updateWhatsAppLink() {
  const link = $("#waCheckout");
  if (!link) return;
  if (cart.length === 0) {
    link.removeAttribute("href");
    link.style.pointerEvents = "none";
    link.style.opacity = "0.5";
    return;
  }

  const pay = PAYMENT_METHODS[paymentMethod];
  const lines = [
    "Hi ZARO, I'd like to place an order:",
    "",
    ...cart.map((item) => {
      const product = findProduct(item.id);
      return `• ${item.qty} × ${product.name} = ${formatBDT(product.price * item.qty)}`;
    }),
    "",
    `Total: ${formatBDT(cartTotal())}`,
    `Payment: ${pay.label}`,
    "",
    "Please confirm my order."
  ];

  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  link.style.pointerEvents = "auto";
  link.style.opacity = "1";
}

function openCart() {
  const drawer = $("#cartDrawer");
  const overlay = $("#cartOverlay");
  if (!drawer) return;
  drawer.classList.add("open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  const drawer = $("#cartDrawer");
  const overlay = $("#cartOverlay");
  if (!drawer) return;
  drawer.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

/* ---------------- Cart Actions ---------------- */
function addToCart(id, qty = 1) {
  const product = findProduct(id);
  if (!product || product.outOfStock) return;
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  renderCart();
  updateWhatsAppLink();
  showToast(`${product.name} added to cart`);
  openCart();
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
  updateWhatsAppLink();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
  updateWhatsAppLink();
}

/* ---------------- Toast ---------------- */
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.innerHTML = `${checkSVG}${message}`;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ---------------- Mobile Menu ---------------- */
function openMenu() {
  $("#mobileMenu").classList.add("open");
  $("#menuBackdrop").classList.add("show");
  $("#menuBtn").classList.add("open");
  $("#menuBtn").setAttribute("aria-expanded", "true");
}
function closeMenu() {
  $("#mobileMenu").classList.remove("open");
  $("#menuBackdrop").classList.remove("show");
  $("#menuBtn").classList.remove("open");
  $("#menuBtn").setAttribute("aria-expanded", "false");
}

/* ---------------- Header scroll state ---------------- */
function onScroll() {
  $("#siteHeader").classList.toggle("scrolled", window.scrollY > 10);
}

/* ---------------- Reveal on scroll ---------------- */
function initReveal() {
  const els = $$(".reveal:not(.in)");
  if (!els.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => observer.observe(el));
}

/* ---------------- Events ---------------- */
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) {
    addToCart(Number(add.dataset.add));
    return;
  }
  const inc = e.target.closest("[data-inc]");
  if (inc) {
    changeQty(Number(inc.dataset.inc), 1);
    return;
  }
  const dec = e.target.closest("[data-dec]");
  if (dec) {
    changeQty(Number(dec.dataset.dec), -1);
    return;
  }
  const remove = e.target.closest("[data-remove]");
  if (remove) {
    removeFromCart(Number(remove.dataset.remove));
    return;
  }
  const closeTarget = e.target.closest("#cartClose") || e.target === $("#cartOverlay");
  if (closeTarget) closeCart();

  const chip = e.target.closest(".filter-chip");
  if (chip) {
    shopFilter.category = chip.dataset.cat;
    renderFilterChips();
    renderProducts();
    initReveal();
  }
});

const cartBtn = $("#cartBtn");
if (cartBtn) cartBtn.addEventListener("click", openCart);

const menuBtn = $("#menuBtn");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    $("#mobileMenu").classList.contains("open") ? closeMenu() : openMenu();
  });
}
const menuBackdrop = $("#menuBackdrop");
if (menuBackdrop) menuBackdrop.addEventListener("click", closeMenu);
$$("#mobileMenu a").forEach((a) => a.addEventListener("click", closeMenu));

const sortSelect = $("#sortSelect");
if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    shopFilter.sort = sortSelect.value;
    renderProducts();
    initReveal();
  });
}

const payOptions = $("#payOptions");
if (payOptions) {
  payOptions.addEventListener("change", (e) => {
    if (e.target.name === "pay") {
      paymentMethod = e.target.value;
      savePayment();
      renderPaymentOptions();
      renderCart();
      updateWhatsAppLink();
    }
  });
}

window.addEventListener("scroll", onScroll, { passive: true });

/* ---------------- Init ---------------- */
renderCategories();
renderFilterChips();
renderProducts();
renderBestSellers();
renderCart();
renderPaymentOptions();
updateWhatsAppLink();
initProductPage();
initReveal();
