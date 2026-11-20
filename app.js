const PRODUCTS = [
  {
    id: "shea-ghana",
    name: "Shea Butter — Ghanaian Unrefined",
    category: "Butters",
    inci: "Butyrospermum Parkii Butter",
    desc: "Rich West African emollient butter ideal for whipped body butters, balms, and nourishing skin creams.",
    packs: [
      { label: "500g", price: 1000 },
      { label: "1kg", price: 1850 },
      { label: "5kg", price: 3000 }
    ]
  },
  {
    id: "mango-butter",
    name: "Mango Butter — Cosmetic Grade",
    category: "Butters",
    inci: "Mangifera Indica Seed Butter",
    desc: "Lightweight, antioxidant-rich butter pressed from mango kernels; boosts skin elasticity without heaviness.",
    packs: [
      { label: "500g", price: 2350 },
      { label: "1kg", price: 4450 }
    ]
  },
  {
    id: "olivem-1000",
    name: "Olivem 1000 Emulsifier",
    category: "Emulsifiers",
    inci: "Cetearyl Olivate, Sorbitan Olivate",
    desc: "PEG-free natural olive-derived emulsifier creating silky, biomimetic liquid-crystal facial lotions.",
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
    desc: "Gold-standard hair conditioning emulsifier delivering exceptional slip, detangling, and soft-touch feel.",
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
    desc: "Versatile non-ionic O/W emulsifier tolerant of wide pH ranges and electrolyte-rich active serums.",
    packs: [
      { label: "100g", price: 750 },
      { label: "500g", price: 2500 }
    ]
  },
  {
    id: "beeswax-yellow",
    name: "Beeswax Pellets — Yellow",
    category: "Waxes & Clays",
    inci: "Cera Alba",
    desc: "Triple-filtered golden beeswax pastilles for effortless melting in lip balms, salves, and barrier creams.",
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
    desc: "Hydrophilic beeswax derivative that eliminates graininess in shea balms and creates smooth oil gels.",
    packs: [
      { label: "100g", price: 1350 },
      { label: "500g", price: 4850 }
    ]
  },
  {
    id: "bentonite-clay",
    name: "Bentonite Clay — Montmorillonite",
    category: "Waxes & Clays",
    inci: "Bentonite",
    desc: "Mineral-rich volcanic detox clay prized for clarifying facial masks, scalp cleansers, and soaps.",
    packs: [
      { label: "250g", price: 700 },
      { label: "1kg", price: 2450 }
    ]
  },
  {
    id: "geogard-ect",
    name: "Preservative ECO (Geogard ECT)",
    category: "Preservatives & Actives",
    inci: "Benzyl Alcohol, Salicylic Acid, Glycerin, Sorbic Acid",
    desc: "ECOCERT/COSMOS-accepted broad-spectrum preservative protecting aqueous skincare from bacteria & fungi.",
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
    desc: "Soothing skin-protectant active that calms irritation and accelerates barrier recovery in daily creams.",
    packs: [
      { label: "100g", price: 1350 }
    ]
  },
  {
    id: "carbomer-940",
    name: "Carbomer 940 Thickener",
    category: "Preservatives & Actives",
    inci: "Carbomer",
    desc: "High-clarity rheology modifier for crystal-clear gels, hand sanitizers, and stable cream viscosity.",
    packs: [
      { label: "100g", price: 700 },
      { label: "1kg", price: 5500 }
    ]
  },
  {
    id: "avocado-oil",
    name: "Cold-Pressed Avocado Oil",
    category: "Carrier Oils",
    inci: "Persea Gratissima Oil",
    desc: "Kenyan-sourced vitamin-dense carrier oil high in oleic acid for deep skin and hair nourishment.",
    packs: [
      { label: "250ml", price: 550 },
      { label: "1L", price: 2200 }
    ]
  }
];

const INCI_DATA = [
  { common: "Shea Butter (Ghanaian / Nilotica)", inci: "Butyrospermum Parkii Butter", fn: "Rich emollient & skin barrier occlusive sourced from West & East Africa.", usage: "2% – 100%" },
  { common: "Mango Butter", inci: "Mangifera Indica Seed Butter", fn: "Lightweight botanical butter high in antioxidants & fatty acids for skin elasticity.", usage: "2% – 80%" },
  { common: "Cocoa Butter", inci: "Theobroma Cacao Seed Butter", fn: "Firm protective lipid fat from roasted cocoa beans; ideal for bars and rich balms.", usage: "2% – 50%" },
  { common: "Polawax Emulsifying Wax", inci: "Cetearyl Alcohol, Polysorbate 60", fn: "Self-emulsifying non-ionic wax for stable commercial lotions and creams.", usage: "3% – 8%" },
  { common: "Olivem 1000", inci: "Cetearyl Olivate, Sorbitan Olivate", fn: "Natural olive-derived PEG-free emulsifier with biomimetic skin feel.", usage: "3% – 8%" },
  { common: "BTMS-50", inci: "Behentrimonium Methosulfate, Cetyl Alcohol, Butylene Glycol", fn: "Cationic hair conditioning emulsifier for detangling masks & leave-ins.", usage: "2% – 10%" },
  { common: "Xanthan Gum (Cosmetic Grade)", inci: "Xanthan Gum", fn: "Natural polysaccharide thickener, rheology modifier, and emulsion stabilizer.", usage: "0.2% – 1.0%" },
  { common: "Kaolin Clay", inci: "Kaolin", fn: "Gentle white mineral clay (china clay) for sensitive skin facial masks & soaps.", usage: "5% – 40%" },
  { common: "Bentonite Clay", inci: "Bentonite", fn: "Absorbent volcanic montmorillonite clay for deep-cleansing detox masks.", usage: "5% – 30%" },
  { common: "Preservative ECO (Geogard ECT)", inci: "Benzyl Alcohol, Salicylic Acid, Glycerin, Sorbic Acid", fn: "Broad-spectrum natural preservative effective across pH 3.0 – 8.0.", usage: "0.6% – 1.0%" }
];

let activeCategory = "All";
let cart = [];

const productsGrid = document.getElementById("productsGrid");
const productSearch = document.getElementById("productSearch");
const categoryFilters = document.getElementById("categoryFilters");
const inciBody = document.getElementById("inciBody");
const inciSearch = document.getElementById("inciSearch");
const inciCount = document.getElementById("inciCount");
const cartCount = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartDrawer = document.getElementById("cartDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const toastEl = document.getElementById("toast");

function formatKES(num) {
  return "KES " + Number(num).toLocaleString("en-KE");
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toastEl.classList.remove("show"), 3200);
}

function renderProducts() {
  const q = (productSearch.value || "").trim().toLowerCase();
  const list = PRODUCTS.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.inci.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  if (!list.length) {
    productsGrid.innerHTML = `<p style="grid-column:1/-1;color:var(--muted);padding:1.5rem 0;">No ingredients matched "<strong>${q}</strong>". Contact us on +254 790 559 934 to check our full 79-SKU warehouse stock.</p>`;
    return;
  }

  productsGrid.innerHTML = list
    .map((p) => {
      const options = p.packs
        .map((pk, i) => `<option value="${i}">${pk.label}</option>`)
        .join("");
      return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-visual">
          <span class="product-cat-tag">${p.category}</span>
          <span class="product-inci">INCI: ${p.inci}</span>
        </div>
        <div class="product-body">
          <h3>${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="pack-row">
            <select class="pack-select" aria-label="Select pack size for ${p.name}">
              ${options}
            </select>
            <span class="product-price">${formatKES(p.packs[0].price)}</span>
          </div>
          <div class="product-actions">
            <button type="button" class="btn btn-primary add-to-cart-btn">Add to Order Bag</button>
          </div>
        </div>
      </article>`;
    })
    .join("");

  productsGrid.querySelectorAll(".product-card").forEach((card) => {
    const id = card.dataset.id;
    const product = PRODUCTS.find((x) => x.id === id);
    const select = card.querySelector(".pack-select");
    const priceEl = card.querySelector(".product-price");
    const addBtn = card.querySelector(".add-to-cart-btn");

    select.addEventListener("change", () => {
      const pack = product.packs[Number(select.value)];
      priceEl.textContent = formatKES(pack.price);
    });

    addBtn.addEventListener("click", () => {
      const pack = product.packs[Number(select.value)];
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
      renderCart();
      showToast(`Added ${product.name} (${pack.label}) to bag`);
    });
  });
}

function renderCart() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartCount.textContent = totalQty;
  cartTotalEl.textContent = formatKES(totalAmount);

  if (!cart.length) {
    cartItemsEl.innerHTML = `<p style="color:var(--muted);font-size:0.9rem;margin:0;">Your order bag is empty. Add cosmetic ingredients from the catalog to build a WhatsApp or M-Pesa order inquiry.</p>`;
    return;
  }

  cartItemsEl.innerHTML = cart
    .map(
      (item, idx) => `
      <div class="cart-item">
        <div>
          <strong style="display:block;font-size:0.9rem;color:var(--forest-deep);">${item.name}</strong>
          <span style="font-size:0.8rem;color:var(--muted);">${item.pack} · ${formatKES(item.price)} × ${item.qty}</span>
        </div>
        <div style="display:flex;align-items:center;gap:0.45rem;">
          <strong style="font-size:0.88rem;color:var(--forest);">${formatKES(item.price * item.qty)}</strong>
          <button type="button" class="filter-btn remove-item" data-idx="${idx}" style="padding:0.2rem 0.55rem;font-size:0.76rem;">×</button>
        </div>
      </div>`
    )
    .join("");

  cartItemsEl.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      cart.splice(Number(btn.dataset.idx), 1);
      renderCart();
    });
  });
}

function renderInci() {
  const q = (inciSearch.value || "").trim().toLowerCase();
  const rows = INCI_DATA.filter(
    (r) =>
      !q ||
      r.common.toLowerCase().includes(q) ||
      r.inci.toLowerCase().includes(q) ||
      r.fn.toLowerCase().includes(q)
  );
  inciCount.textContent = `Showing ${rows.length} of ${INCI_DATA.length} core cosmetic ingredients`;
  inciBody.innerHTML = rows
    .map(
      (r) => `
      <tr>
        <td><strong>${r.common}</strong></td>
        <td><span class="inci-code">${r.inci}</span></td>
        <td>${r.fn}</td>
        <td><strong>${r.usage}</strong></td>
      </tr>`
    )
    .join("");
}

function openDrawer() {
  cartDrawer.classList.add("open");
  drawerBackdrop.classList.add("open");
}

function closeDrawer() {
  cartDrawer.classList.remove("open");
  drawerBackdrop.classList.remove("open");
}

categoryFilters.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  categoryFilters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  activeCategory = btn.dataset.cat;
  renderProducts();
});

productSearch.addEventListener("input", renderProducts);
inciSearch.addEventListener("input", renderInci);

document.getElementById("openCartBtn").addEventListener("click", openDrawer);
document.getElementById("closeCartBtn").addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);

document.getElementById("checkoutWhatsappBtn").addEventListener("click", () => {
  if (!cart.length) {
    showToast("Add at least one ingredient to send an order.");
    return;
  }
  const lines = cart.map((i) => `- ${i.name} (${i.pack}) x${i.qty} = ${formatKES(i.price * i.qty)}`);
  const total = formatKES(cart.reduce((s, i) => s + i.price * i.qty, 0));
  const text = encodeURIComponent(
    `Hello Terra Naturals (Loise), I would like to order these raw materials:\n${lines.join("\n")}\nEstimated Total: ${total}\nPreferred payment: M-Pesa / Cash on Delivery.`
  );
  window.open(`https://wa.me/254790559934?text=${text}`, "_blank", "noopener");
});

document.querySelectorAll(".enroll-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const course = btn.dataset.course;
    document.getElementById("cNotes").value = `I would like to reserve a seat for the 1-Day Workshop: ${course}. Please share the next available Nairobi dates.`;
    document.getElementById("consultancy").scrollIntoView({ behavior: "smooth" });
    showToast(`Selected "${course}" — complete your details below.`);
  });
});

document.getElementById("consultForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("cName").value.trim();
  const service = document.getElementById("cService").value;
  showToast(`Thank you, ${name}! Booking brief prepared for ${service}.`);
  e.target.reset();
});

renderProducts();
renderCart();
renderInci();
