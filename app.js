const CART_STORAGE_KEY = "tn_order_bag_v2";

const PRODUCTS = [
  {
    id: "shea-ghana",
    name: "Ghanaian Unrefined Shea Butter",
    category: "Butters",
    inci: "Butyrospermum Parkii Butter",
    desc: "Rich emollient butter for whipped body butters and balms.",
    featured: true,
    packs: [
      { label: "500g", price: 1000 },
      { label: "1kg", price: 1850 },
      { label: "5kg", price: 8200 }
    ]
  },
  {
    id: "shea-nilotica",
    name: "East African Nilotica Shea Butter",
    category: "Butters",
    inci: "Vitellaria Nilotica Seed Butter",
    desc: "Soft-melting East African shea for lightweight facial balms.",
    packs: [
      { label: "250g", price: 850 },
      { label: "500g", price: 1600 },
      { label: "1kg", price: 2950 }
    ]
  },
  {
    id: "mango-butter",
    name: "Cosmetic-Grade Mango Butter",
    category: "Butters",
    inci: "Mangifera Indica Seed Butter",
    desc: "Lightweight kernel butter that boosts elasticity cleanly.",
    featured: true,
    packs: [
      { label: "500g", price: 2350 },
      { label: "1kg", price: 4450 }
    ]
  },
  {
    id: "cocoa-butter",
    name: "Natural Cocoa Butter",
    category: "Butters",
    inci: "Theobroma Cacao Seed Butter",
    desc: "Firm protective lipid adding structure to bars and balms.",
    packs: [
      { label: "250g", price: 1150 },
      { label: "500g", price: 2150 },
      { label: "1kg", price: 4100 }
    ]
  },
  {
    id: "olivem-1000",
    name: "Olivem 1000 Emulsifier",
    category: "Emulsifiers",
    inci: "Cetearyl Olivate, Sorbitan Olivate",
    desc: "PEG-free olive emulsifier for silky liquid-crystal lotions.",
    featured: true,
    packs: [
      { label: "100g", price: 1250 },
      { label: "500g", price: 4900 }
    ]
  },
  {
    id: "btms-50",
    name: "BTMS-50 Conditioning Emulsifier",
    category: "Emulsifiers",
    inci: "Behentrimonium Methosulfate, Cetyl Alcohol",
    desc: "High-slip conditioning emulsifier for hair masks and leave-ins.",
    packs: [
      { label: "100g", price: 1300 },
      { label: "500g", price: 4450 }
    ]
  },
  {
    id: "arlacel-165",
    name: "Arlacel / Lotionpro 165",
    category: "Emulsifiers",
    inci: "Glyceryl Stearate, PEG-100 Stearate",
    desc: "Non-ionic O/W emulsifier tolerant of wide pH and actives.",
    packs: [
      { label: "100g", price: 750 },
      { label: "500g", price: 2500 }
    ]
  },
  {
    id: "polawax-nf",
    name: "Polawax Emulsifying Wax NF",
    category: "Emulsifiers",
    inci: "Cetearyl Alcohol, Polysorbate 60",
    desc: "Dependable self-emulsifying wax for stable body lotions.",
    packs: [
      { label: "250g", price: 900 },
      { label: "1kg", price: 3200 }
    ]
  },
  {
    id: "beeswax-yellow",
    name: "Yellow Beeswax Pellets",
    category: "Waxes & Clays",
    inci: "Cera Alba",
    desc: "Triple-filtered golden pastilles for lip balms and salves.",
    packs: [
      { label: "100g", price: 500 },
      { label: "500g", price: 1250 },
      { label: "1kg", price: 2000 }
    ]
  },
  {
    id: "cera-bellina",
    name: "Cera Bellina Wax",
    category: "Waxes & Clays",
    inci: "Polyglyceryl-3 Beeswax",
    desc: "Prevents graininess in shea balms and creates smooth gels.",
    packs: [
      { label: "100g", price: 1350 },
      { label: "500g", price: 4850 }
    ]
  },
  {
    id: "bentonite-clay",
    name: "Montmorillonite Bentonite Clay",
    category: "Waxes & Clays",
    inci: "Bentonite",
    desc: "Volcanic detox clay for clarifying masks and scalp care.",
    packs: [
      { label: "250g", price: 700 },
      { label: "1kg", price: 2450 }
    ]
  },
  {
    id: "kaolin-clay",
    name: "White Kaolin Clay",
    category: "Waxes & Clays",
    inci: "Kaolin",
    desc: "Fine mineral clay for sensitive facial masks and cleansers.",
    packs: [
      { label: "250g", price: 650 },
      { label: "1kg", price: 2100 }
    ]
  },
  {
    id: "geogard-ect",
    name: "Preservative ECO (Geogard ECT)",
    category: "Preservatives & Actives",
    inci: "Benzyl Alcohol, Salicylic Acid, Glycerin, Sorbic Acid",
    desc: "ECOCERT broad-spectrum preservative for aqueous skincare.",
    featured: true,
    packs: [
      { label: "100ml", price: 1450 },
      { label: "500ml", price: 5200 }
    ]
  },
  {
    id: "allantoin",
    name: "Allantoin Powder",
    category: "Preservatives & Actives",
    inci: "Allantoin",
    desc: "Soothing skin active supporting barrier recovery in creams.",
    packs: [
      { label: "100g", price: 1350 }
    ]
  },
  {
    id: "carbomer-940",
    name: "Carbomer 940 Thickener",
    category: "Preservatives & Actives",
    inci: "Carbomer",
    desc: "High-clarity rheology modifier for clear gels and serums.",
    packs: [
      { label: "100g", price: 700 },
      { label: "1kg", price: 5500 }
    ]
  },
  {
    id: "xanthan-gum",
    name: "Cosmetic Xanthan Gum",
    category: "Preservatives & Actives",
    inci: "Xanthan Gum",
    desc: "Natural gum stabilizer preventing emulsion separation.",
    packs: [
      { label: "100g", price: 600 },
      { label: "500g", price: 2300 }
    ]
  },
  {
    id: "avocado-oil",
    name: "Cold-Pressed Avocado Oil",
    category: "Carrier & Essential Oils",
    inci: "Persea Gratissima Oil",
    desc: "Kenyan vitamin-rich carrier oil for skin and hair care.",
    packs: [
      { label: "250ml", price: 550 },
      { label: "1L", price: 2200 }
    ]
  },
  {
    id: "coco-glucoside",
    name: "Coco Glucoside Surfactant",
    category: "Surfactants & Packaging",
    inci: "Coco-Glucoside",
    desc: "Plant-derived sulfate-free surfactant for mild washes.",
    packs: [
      { label: "250ml", price: 850 },
      { label: "1L", price: 2900 }
    ]
  }
];

const INCI_DATA = [
  { common: "Shea Butter (Ghanaian)", inci: "Butyrospermum Parkii Butter", group: "Butters & Oils", fn: "Rich emollient & barrier occlusive for butters and creams.", phase: "Oil Phase · 32–40°C", usage: "2% – 100%", shopSearch: "Shea Butter" },
  { common: "Shea Butter (Nilotica)", inci: "Vitellaria Nilotica Seed Butter", group: "Butters & Oils", fn: "Soft-melting East African butter for facial and body care.", phase: "Oil Phase · 25–30°C", usage: "2% – 100%", shopSearch: "Nilotica" },
  { common: "Mango Butter", inci: "Mangifera Indica Seed Butter", group: "Butters & Oils", fn: "Lightweight antioxidant butter for skin elasticity.", phase: "Oil Phase", usage: "2% – 80%", shopSearch: "Mango Butter" },
  { common: "Cocoa Butter", inci: "Theobroma Cacao Seed Butter", group: "Butters & Oils", fn: "Firm lipid fat adding structure to bars and balms.", phase: "Oil Phase", usage: "2% – 50%", shopSearch: "Cocoa Butter" },
  { common: "Avocado Oil", inci: "Persea Gratissima Oil", group: "Butters & Oils", fn: "Vitamin-rich Kenyan carrier oil for dry skin and hair.", phase: "Oil / Cool-Down", usage: "1% – 100%", shopSearch: "Avocado Oil" },
  { common: "Olivem 1000", inci: "Cetearyl Olivate, Sorbitan Olivate", group: "Emulsifiers", fn: "Natural olive PEG-free emulsifier with biomimetic feel.", phase: "Oil/Water · pH 3–12", usage: "3% – 8%", shopSearch: "Olivem 1000" },
  { common: "BTMS-50", inci: "Behentrimonium Methosulfate, Cetyl Alcohol, Butylene Glycol", group: "Emulsifiers", fn: "Cationic hair conditioning emulsifier for masks and leave-ins.", phase: "Oil Phase · 75°C", usage: "2% – 10%", shopSearch: "BTMS-50" },
  { common: "Arlacel / Lotionpro 165", inci: "Glyceryl Stearate, PEG-100 Stearate", group: "Emulsifiers", fn: "Non-ionic O/W emulsifier tolerant of electrolytes.", phase: "Oil Phase · pH 4–9", usage: "2% – 6%", shopSearch: "Arlacel" },
  { common: "Polawax NF", inci: "Cetearyl Alcohol, Polysorbate 60", group: "Emulsifiers", fn: "Self-emulsifying wax for stable commercial lotions.", phase: "Oil Phase · 70°C", usage: "3% – 8%", shopSearch: "Polawax" },
  { common: "Preservative ECO (Geogard ECT)", inci: "Benzyl Alcohol, Salicylic Acid, Glycerin, Sorbic Acid", group: "Preservatives & Actives", fn: "ECOCERT broad-spectrum preservative for aqueous formulas.", phase: "Cool-Down (<40°C) · pH 3–8", usage: "0.6% – 1.0%", shopSearch: "Geogard" },
  { common: "Allantoin Powder", inci: "Allantoin", group: "Preservatives & Actives", fn: "Soothing anti-irritant active for barrier repair.", phase: "Water Phase (Warm)", usage: "0.1% – 0.5%", shopSearch: "Allantoin" },
  { common: "Vegetable Glycerin", inci: "Glycerin", group: "Preservatives & Actives", fn: "Plant humectant drawing moisture into the epidermis.", phase: "Water Phase", usage: "1% – 5%", shopSearch: "" },
  { common: "Vitamin E (Tocopherol)", inci: "Tocopherol", group: "Preservatives & Actives", fn: "Oil-soluble antioxidant slowing oil rancidity.", phase: "Cool-Down (<40°C)", usage: "0.2% – 1.0%", shopSearch: "" },
  { common: "Yellow Beeswax Pellets", inci: "Cera Alba", group: "Waxes, Clays & Surfactants", fn: "Natural hardening wax for salves and lip balms.", phase: "Oil Phase · 62–65°C", usage: "2% – 25%", shopSearch: "Beeswax" },
  { common: "Cera Bellina Wax", inci: "Polyglyceryl-3 Beeswax", group: "Waxes, Clays & Surfactants", fn: "Prevents graininess in shea balms and oil gels.", phase: "Oil Phase", usage: "3% – 20%", shopSearch: "Cera Bellina" },
  { common: "Xanthan Gum", inci: "Xanthan Gum", group: "Waxes, Clays & Surfactants", fn: "Natural thickener, gel former, and emulsion stabilizer.", phase: "Glycerin Slurry → Water", usage: "0.2% – 1.0%", shopSearch: "Xanthan Gum" },
  { common: "White Kaolin Clay", inci: "Kaolin", group: "Waxes, Clays & Surfactants", fn: "Gentle mineral clay for sensitive masks and soaps.", phase: "Powder Phase", usage: "5% – 40%", shopSearch: "Kaolin" },
  { common: "Bentonite Clay", inci: "Bentonite", group: "Waxes, Clays & Surfactants", fn: "Volcanic detox clay for deep-cleansing facial masks.", phase: "Powder Phase", usage: "5% – 30%", shopSearch: "Bentonite" },
  { common: "Coco Glucoside", inci: "Coco-Glucoside", group: "Waxes, Clays & Surfactants", fn: "Mild plant surfactant for sulfate-free facial washes.", phase: "Water Phase · pH 4.5–6.5", usage: "5% – 25%", shopSearch: "Coco Glucoside" }
];

function formatKES(num) {
  return "KES " + Number(num || 0).toLocaleString("en-KE");
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function makeRef(prefix) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
  return `${prefix}-${code}`;
}

function showToast(msg) {
  const toastEl = document.getElementById("toast");
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toastEl.classList.remove("show"), 3200);
}

/* Persistent Cart State */
function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    // Ignore storage errors
  }
}

let cart = loadCart();

function addToCart(product, pack) {
  const key = `${product.id}_${pack.label}`;
  const existing = cart.find((item) => item.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      name: product.name,
      pack: pack.label,
      price: pack.price,
      qty: 1
    });
  }
  saveCart(cart);
  renderCart();
  showToast(`Added ${product.name} (${pack.label}) to bag`);
}

function renderCart() {
  const cartCountEls = document.querySelectorAll(".js-cart-count");
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCountEls.forEach((el) => (el.textContent = totalQty));
  if (cartTotalEl) cartTotalEl.textContent = formatKES(totalAmount);

  if (!cartItemsEl) return;

  if (!cart.length) {
    cartItemsEl.innerHTML = `<p style="color:var(--muted);font-size:0.88rem;margin:0;">Your bag is empty. Browse our <a href="shop.html" style="color:var(--forest);font-weight:700;text-decoration:underline;">Raw Materials Shop</a>.</p>`;
    return;
  }

  cartItemsEl.innerHTML = cart
    .map(
      (item, idx) => `
      <div class="cart-item">
        <div>
          <strong style="display:block;font-size:0.86rem;color:var(--forest-deep);">${escapeHtml(item.name)}</strong>
          <span style="font-size:0.78rem;color:var(--muted);">${escapeHtml(item.pack)} · ${formatKES(item.price)}</span>
        </div>
        <div style="display:flex;align-items:center;gap:0.4rem;flex-shrink:0;">
          <button type="button" class="qty-btn dec-item" data-idx="${idx}" aria-label="Decrease quantity">−</button>
          <strong style="font-size:0.85rem;min-width:18px;text-align:center;">${item.qty}</strong>
          <button type="button" class="qty-btn inc-item" data-idx="${idx}" aria-label="Increase quantity">+</button>
          <button type="button" class="qty-btn remove-item" data-idx="${idx}" aria-label="Remove item" style="margin-left:0.2rem;">×</button>
        </div>
      </div>`
    )
    .join("");

  cartItemsEl.querySelectorAll(".inc-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      cart[Number(btn.dataset.idx)].qty += 1;
      saveCart(cart);
      renderCart();
    });
  });

  cartItemsEl.querySelectorAll(".dec-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      if (cart[idx].qty > 1) cart[idx].qty -= 1;
      else cart.splice(idx, 1);
      saveCart(cart);
      renderCart();
    });
  });

  cartItemsEl.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      cart.splice(Number(btn.dataset.idx), 1);
      saveCart(cart);
      renderCart();
    });
  });
}

function initCartDrawer() {
  const cartDrawer = document.getElementById("cartDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const checkoutBtn = document.getElementById("checkoutWhatsappBtn");

  const openDrawer = () => {
    if (cartDrawer) cartDrawer.classList.add("open");
    if (drawerBackdrop) drawerBackdrop.classList.add("open");
  };
  const closeDrawer = () => {
    if (cartDrawer) cartDrawer.classList.remove("open");
    if (drawerBackdrop) drawerBackdrop.classList.remove("open");
  };

  document.querySelectorAll(".js-open-cart").forEach((btn) => btn.addEventListener("click", openDrawer));
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (!cart.length) {
        showToast("Add an ingredient to send an order.");
        return;
      }
      const lines = cart.map((i) => `- ${i.name} (${i.pack}) x${i.qty} = ${formatKES(i.price * i.qty)}`);
      const total = formatKES(cart.reduce((s, i) => s + i.price * i.qty, 0));
      const text = encodeURIComponent(
        `Hello Terra Naturals (Loise), I would like to order:\n${lines.join("\n")}\nEstimated Total: ${total}\nPayment: M-Pesa / Cash on Delivery.`
      );
      window.open(`https://wa.me/254790559934?text=${text}`, "_blank", "noopener");
    });
  }
}

/* Mobile Menu */
function initNavigation() {
  const toggleBtn = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* Reusable Product Card Renderer */
function renderProductCardsInto(container, list) {
  if (!list.length) {
    container.innerHTML = `<div style="grid-column:1/-1;background:var(--white);border:1px solid var(--border);border-radius:var(--radius-md);padding:1.5rem;text-align:center;">
      <p style="margin:0 0 0.8rem;color:var(--muted);">No matches found. We stock 79+ SKUs in Nairobi.</p>
      <a href="contact.html" class="btn btn-primary btn-sm">Ask About Stock</a>
    </div>`;
    return;
  }

  container.innerHTML = list
    .map((p) => {
      const options = p.packs.map((pk, i) => `<option value="${i}">${escapeHtml(pk.label)}</option>`).join("");
      return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-visual">
          <span class="product-cat-tag">${escapeHtml(p.category)}</span>
          <span class="product-inci">${escapeHtml(p.inci)}</span>
        </div>
        <div class="product-body">
          <h3>${escapeHtml(p.name)}</h3>
          <p class="product-desc">${escapeHtml(p.desc)}</p>
          <div class="pack-row">
            <select class="pack-select" aria-label="Select pack size for ${escapeHtml(p.name)}">
              ${options}
            </select>
            <span class="product-price">${formatKES(p.packs[0].price)}</span>
          </div>
          <div class="product-actions">
            <button type="button" class="btn btn-primary add-to-cart-btn">Add to Bag</button>
          </div>
        </div>
      </article>`;
    })
    .join("");

  container.querySelectorAll(".product-card").forEach((card) => {
    const product = PRODUCTS.find((x) => x.id === card.dataset.id);
    const select = card.querySelector(".pack-select");
    const priceEl = card.querySelector(".product-price");
    const addBtn = card.querySelector(".add-to-cart-btn");

    select.addEventListener("change", () => {
      priceEl.textContent = formatKES(product.packs[Number(select.value)].price);
    });

    addBtn.addEventListener("click", () => {
      addToCart(product, product.packs[Number(select.value)]);
    });
  });
}

function initHomeFeatured() {
  const featuredEl = document.getElementById("homeFeaturedProducts");
  if (!featuredEl) return;
  renderProductCardsInto(featuredEl, PRODUCTS.filter((p) => p.featured).slice(0, 4));
}

function initShopPage() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const searchInput = document.getElementById("productSearch");
  const filterWrap = document.getElementById("categoryFilters");
  const sortSelect = document.getElementById("productSort");
  const countLabel = document.getElementById("catalogCountLabel");

  let activeCat = "All";
  let sortMode = "featured";

  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get("cat");
  const urlSearch = params.get("search");

  if (urlCat && filterWrap) {
    const matchBtn = Array.from(filterWrap.querySelectorAll(".filter-btn")).find(
      (b) => b.dataset.cat.toLowerCase() === urlCat.toLowerCase()
    );
    if (matchBtn) {
      activeCat = matchBtn.dataset.cat;
      filterWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b === matchBtn));
    }
  }
  if (urlSearch && searchInput) {
    searchInput.value = urlSearch;
  }

  function render() {
    const q = (searchInput ? searchInput.value : "").trim().toLowerCase();
    let list = PRODUCTS.filter((p) => {
      const catOk = activeCat === "All" || p.category === activeCat;
      const qOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.inci.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return catOk && qOk;
    });

    if (sortMode === "price-asc") {
      list = [...list].sort((a, b) => a.packs[0].price - b.packs[0].price);
    } else if (sortMode === "price-desc") {
      list = [...list].sort((a, b) => b.packs[0].price - a.packs[0].price);
    }

    if (countLabel) {
      countLabel.textContent = `${list.length} of ${PRODUCTS.length} featured items (79+ SKUs in Nairobi)`;
    }
    renderProductCardsInto(grid, list);
  }

  if (filterWrap) {
    filterWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCat = btn.dataset.cat;
      render();
    });
  }
  if (searchInput) searchInput.addEventListener("input", render);
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      sortMode = sortSelect.value;
      render();
    });
  }

  render();
}

function initInciPage() {
  const tbody = document.getElementById("inciBody");
  if (!tbody) return;

  const searchInput = document.getElementById("inciSearch");
  const countEl = document.getElementById("inciCount");
  const groupWrap = document.getElementById("inciGroupFilters");

  let activeGroup = "All";

  function render() {
    const q = (searchInput ? searchInput.value : "").trim().toLowerCase();
    const rows = INCI_DATA.filter((r) => {
      const groupOk = activeGroup === "All" || r.group === activeGroup;
      const qOk =
        !q ||
        r.common.toLowerCase().includes(q) ||
        r.inci.toLowerCase().includes(q) ||
        r.fn.toLowerCase().includes(q) ||
        r.phase.toLowerCase().includes(q);
      return groupOk && qOk;
    });

    if (countEl) countEl.textContent = `${rows.length} of ${INCI_DATA.length} ingredients`;

    tbody.innerHTML = rows
      .map(
        (r) => `
        <tr>
          <td>
            <strong>${escapeHtml(r.common)}</strong>
            <div style="font-size:0.74rem;color:var(--muted);margin-top:0.15rem;">${escapeHtml(r.group)}</div>
          </td>
          <td><span class="inci-code">${escapeHtml(r.inci)}</span></td>
          <td>
            <div>${escapeHtml(r.fn)}</div>
            <div style="font-size:0.75rem;color:var(--forest-soft);margin-top:0.2rem;font-weight:600;">${escapeHtml(r.phase)}</div>
          </td>
          <td><strong>${escapeHtml(r.usage)}</strong></td>
          <td>
            ${
              r.shopSearch
                ? `<a href="shop.html?search=${encodeURIComponent(r.shopSearch)}" class="btn btn-soft btn-sm">Shop →</a>`
                : `<a href="contact.html" class="btn btn-outline btn-sm">Ask</a>`
            }
          </td>
        </tr>`
      )
      .join("");
  }

  if (groupWrap) {
    groupWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      groupWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeGroup = btn.dataset.group;
      render();
    });
  }
  if (searchInput) searchInput.addEventListener("input", render);
  render();
}

function initConsultancyPage() {
  const form = document.getElementById("consultForm");
  if (!form) return;

  const serviceSelect = document.getElementById("cService");
  const notesInput = document.getElementById("cNotes");
  const confirmBox = document.getElementById("consultConfirmBox");

  const params = new URLSearchParams(window.location.search);
  const preService = params.get("service");
  const preCourse = params.get("course");

  if (preService && serviceSelect) {
    const match = Array.from(serviceSelect.options).find((o) =>
      o.value.toLowerCase().includes(preService.toLowerCase())
    );
    if (match) serviceSelect.value = match.value;
  }
  if (preCourse && notesInput) {
    notesInput.value = `Inquiry for ${preCourse}. Please share upcoming Nairobi dates.`;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ref = makeRef("TN-CNS");
    const name = document.getElementById("cName").value.trim();
    const phone = document.getElementById("cPhone").value.trim();
    const service = serviceSelect.value;
    const notes = notesInput.value.trim();

    const waText = encodeURIComponent(
      `Hello Loise (Terra Naturals), Booking Ref ${ref}:\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDetails: ${notes}`
    );

    if (confirmBox) {
      confirmBox.innerHTML = `
        <strong style="display:block;font-family:var(--font-display);color:var(--forest-deep);margin-bottom:0.35rem;">✓ Booking Brief Ready (Ref ${ref})</strong>
        <p style="margin:0 0 0.75rem;font-size:0.85rem;color:var(--ink);">
          Thanks, <strong>${escapeHtml(name)}</strong>. Confirm your <strong>${escapeHtml(service)}</strong> slot with Loise Nguru on WhatsApp.
        </p>
        <a href="https://wa.me/254790559934?text=${waText}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Send via WhatsApp</a>
      `;
      confirmBox.classList.add("show");
      confirmBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    form.reset();
    showToast(`Booking brief ${ref} ready.`);
  });
}

function initWorkshopsPage() {
  const form = document.getElementById("workshopForm");
  if (!form) return;

  const trackSelect = document.getElementById("wTrack");
  const notesInput = document.getElementById("wNotes");
  const confirmBox = document.getElementById("workshopConfirmBox");

  document.querySelectorAll(".enroll-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const course = btn.dataset.course;
      if (trackSelect) {
        const match = Array.from(trackSelect.options).find((o) => o.value === course);
        if (match) trackSelect.value = course;
      }
      if (notesInput && !notesInput.value.trim()) {
        notesInput.value = `Please share upcoming dates for ${course}.`;
      }
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      showToast(`Selected "${course}".`);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ref = makeRef("TN-TRN");
    const name = document.getElementById("wName").value.trim();
    const phone = document.getElementById("wPhone").value.trim();
    const track = trackSelect.value;
    const seats = document.getElementById("wSeats").value;
    const notes = notesInput.value.trim();

    const waText = encodeURIComponent(
      `Hello Terra Naturals (Loise), Training Inquiry ${ref}:\nName/Org: ${name}\nPhone: ${phone}\nProgram: ${track}\nParticipants: ${seats}\nNotes: ${notes}`
    );

    if (confirmBox) {
      confirmBox.innerHTML = `
        <strong style="display:block;font-family:var(--font-display);color:var(--forest-deep);margin-bottom:0.35rem;">✓ Reservation Logged (Ref ${ref})</strong>
        <p style="margin:0 0 0.75rem;font-size:0.85rem;color:var(--ink);">
          Thanks, <strong>${escapeHtml(name)}</strong>. Confirm <strong>${escapeHtml(track)}</strong> (${escapeHtml(seats)}) on WhatsApp.
        </p>
        <a href="https://wa.me/254790559934?text=${waText}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Confirm on WhatsApp</a>
      `;
      confirmBox.classList.add("show");
      confirmBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    form.reset();
    showToast(`Training inquiry ${ref} logged.`);
  });
}

function initContactPage() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const confirmBox = document.getElementById("contactConfirmBox");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ref = makeRef("TN-MSG");
    const name = document.getElementById("ctName").value.trim();
    const topic = document.getElementById("ctTopic").value;
    const msg = document.getElementById("ctMessage").value.trim();

    const waText = encodeURIComponent(
      `Hello Terra Naturals (${ref}), my name is ${name}. Inquiry (${topic}): ${msg}`
    );

    if (confirmBox) {
      confirmBox.innerHTML = `
        <strong style="display:block;font-family:var(--font-display);color:var(--forest-deep);margin-bottom:0.35rem;">✓ Message Received (Ref ${ref})</strong>
        <p style="margin:0 0 0.75rem;font-size:0.85rem;color:var(--ink);">
          Thanks, <strong>${escapeHtml(name)}</strong>. Tap below for fastest response on WhatsApp.
        </p>
        <a href="https://wa.me/254790559934?text=${waText}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Message on WhatsApp</a>
      `;
      confirmBox.classList.add("show");
    }

    form.reset();
    showToast(`Message ${ref} received.`);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCartDrawer();
  renderCart();
  initHomeFeatured();
  initShopPage();
  initInciPage();
  initConsultancyPage();
  initWorkshopsPage();
  initContactPage();
});
