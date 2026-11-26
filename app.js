const CART_STORAGE_KEY = "tn_order_bag_v2";
const DELIVERY_STORAGE_KEY = "tn_delivery_zone_v1";
const FREE_NAIROBI_THRESHOLD = 10000;

const DELIVERY_ZONES = {
  pickup: { label: "Kiambu Road Studio Pickup", fee: 0 },
  nairobi: { label: "Nairobi Metro Courier", fee: 350 },
  county: { label: "47-County Overnight Parcel", fee: 600 }
};

const PRODUCTS = [
  {
    id: "shea-ghana",
    sku: "TN-BTR-01",
    name: "Ghanaian Unrefined Shea Butter",
    category: "Butters",
    tone: "tone-butters",
    inci: "Butyrospermum Parkii Butter",
    desc: "Rich West African butter for whipped body butters and balms.",
    grade: "Unrefined",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Oil Phase (32–40°C)",
    usage: "2% – 100%",
    badge: "Bestseller",
    featured: true,
    packs: [
      { label: "500g", price: 1000 },
      { label: "1kg", price: 1850 },
      { label: "5kg", price: 8200 }
    ]
  },
  {
    id: "shea-nilotica",
    sku: "TN-BTR-02",
    name: "East African Nilotica Shea Butter",
    category: "Butters",
    tone: "tone-butters",
    inci: "Vitellaria Nilotica Seed Butter",
    desc: "Soft-melting East African shea for lightweight facial balms.",
    grade: "Unrefined",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Oil Phase (25–30°C)",
    usage: "2% – 100%",
    packs: [
      { label: "250g", price: 850 },
      { label: "500g", price: 1600 },
      { label: "1kg", price: 2950 }
    ]
  },
  {
    id: "mango-butter",
    sku: "TN-BTR-03",
    name: "Cosmetic-Grade Mango Butter",
    category: "Butters",
    tone: "tone-butters",
    inci: "Mangifera Indica Seed Butter",
    desc: "Lightweight kernel butter boosting skin elasticity cleanly.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Oil Phase",
    usage: "2% – 80%",
    featured: true,
    packs: [
      { label: "500g", price: 2350 },
      { label: "1kg", price: 4450 }
    ]
  },
  {
    id: "cocoa-butter",
    sku: "TN-BTR-04",
    name: "Natural Cocoa Butter",
    category: "Butters",
    tone: "tone-butters",
    inci: "Theobroma Cacao Seed Butter",
    desc: "Firm protective lipid adding structure to body bars and balms.",
    grade: "Unrefined",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Oil Phase",
    usage: "2% – 50%",
    packs: [
      { label: "250g", price: 1150 },
      { label: "500g", price: 2150 },
      { label: "1kg", price: 4100 }
    ]
  },
  {
    id: "avocado-oil",
    sku: "TN-OIL-01",
    name: "Cold-Pressed Avocado Oil",
    category: "Carrier Oils",
    tone: "tone-oils",
    inci: "Persea Gratissima Oil",
    desc: "Kenyan vitamin-rich carrier oil for dry skin and hair care.",
    grade: "Unrefined",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil / Cool-Down",
    usage: "1% – 100%",
    badge: "Kenyan Sourced",
    packs: [
      { label: "250ml", price: 550 },
      { label: "1L", price: 2200 },
      { label: "5L", price: 9500 }
    ]
  },
  {
    id: "sweet-almond-oil",
    sku: "TN-OIL-02",
    name: "Sweet Almond Carrier Oil",
    category: "Carrier Oils",
    tone: "tone-oils",
    inci: "Prunus Amygdalus Dulcis Oil",
    desc: "Fast-absorbing emollient oil ideal for baby lotions and massage.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil Phase",
    usage: "1% – 100%",
    packs: [
      { label: "250ml", price: 950 },
      { label: "1L", price: 3400 }
    ]
  },
  {
    id: "jojoba-oil",
    sku: "TN-OIL-03",
    name: "Golden Jojoba Oil",
    category: "Carrier Oils",
    tone: "tone-oils",
    inci: "Simmondsia Chinensis Seed Oil",
    desc: "Sebum-mimicking liquid wax ester for facial serums and scalp oils.",
    grade: "Unrefined",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil / Cool-Down",
    usage: "1% – 100%",
    packs: [
      { label: "100ml", price: 1200 },
      { label: "500ml", price: 4800 }
    ]
  },
  {
    id: "baobab-oil",
    sku: "TN-OIL-04",
    name: "Cold-Pressed Baobab Oil",
    category: "Carrier Oils",
    tone: "tone-oils",
    inci: "Adansonia Digitata Seed Oil",
    desc: "Omega-rich African botanical oil supporting barrier repair.",
    grade: "Unrefined",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil / Cool-Down",
    usage: "2% – 100%",
    packs: [
      { label: "250ml", price: 1450 },
      { label: "1L", price: 4900 }
    ]
  },
  {
    id: "tea-tree-eo",
    sku: "TN-ESS-01",
    name: "Tea Tree Essential Oil",
    category: "Essential Oils",
    tone: "tone-essential",
    inci: "Melaleuca Alternifolia Leaf Oil",
    desc: "Steam-distilled purifying oil for blemish washes and scalp care.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Cool-Down (<40°C)",
    usage: "0.2% – 1.0%",
    packs: [
      { label: "30ml", price: 750 },
      { label: "100ml", price: 1950 }
    ]
  },
  {
    id: "lavender-eo",
    sku: "TN-ESS-02",
    name: "Lavender Angustifolia Essential Oil",
    category: "Essential Oils",
    tone: "tone-essential",
    inci: "Lavandula Angustifolia Oil",
    desc: "Calming floral essential oil suited for creams, balms, and soaps.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Cool-Down (<40°C)",
    usage: "0.2% – 1.0%",
    packs: [
      { label: "30ml", price: 850 },
      { label: "100ml", price: 2250 }
    ]
  },
  {
    id: "peppermint-eo",
    sku: "TN-ESS-03",
    name: "Peppermint Essential Oil",
    category: "Essential Oils",
    tone: "tone-essential",
    inci: "Mentha Piperita Oil",
    desc: "Cooling botanical oil popular in scalp serums and foot balms.",
    grade: "ECOCERT / Natural",
    useFor: ["Haircare", "Balms & Butters"],
    phase: "Cool-Down (<40°C)",
    usage: "0.1% – 0.8%",
    packs: [
      { label: "30ml", price: 700 },
      { label: "100ml", price: 1850 }
    ]
  },
  {
    id: "olivem-1000",
    sku: "TN-EMU-01",
    name: "Olivem 1000 Emulsifier",
    category: "Emulsifiers",
    tone: "tone-emulsifiers",
    inci: "Cetearyl Olivate, Sorbitan Olivate",
    desc: "PEG-free olive emulsifier for silky liquid-crystal lotions.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare"],
    phase: "Oil / Water · pH 3–12",
    usage: "3% – 8%",
    badge: "Bestseller",
    featured: true,
    packs: [
      { label: "100g", price: 1250 },
      { label: "500g", price: 4900 }
    ]
  },
  {
    id: "btms-50",
    sku: "TN-EMU-02",
    name: "BTMS-50 Conditioning Emulsifier",
    category: "Emulsifiers",
    tone: "tone-emulsifiers",
    inci: "Behentrimonium Methosulfate, Cetyl Alcohol",
    desc: "High-slip cationic emulsifier for hair masks and leave-ins.",
    grade: "Cosmetic Grade",
    useFor: ["Haircare"],
    phase: "Oil Phase (75°C)",
    usage: "2% – 10%",
    badge: "Haircare Pro",
    packs: [
      { label: "100g", price: 1300 },
      { label: "500g", price: 4450 }
    ]
  },
  {
    id: "arlacel-165",
    sku: "TN-EMU-03",
    name: "Arlacel / Lotionpro 165",
    category: "Emulsifiers",
    tone: "tone-emulsifiers",
    inci: "Glyceryl Stearate, PEG-100 Stearate",
    desc: "Electrolyte-tolerant O/W emulsifier for active facial creams.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare"],
    phase: "Oil Phase · pH 4–9",
    usage: "2% – 6%",
    packs: [
      { label: "100g", price: 750 },
      { label: "500g", price: 2500 }
    ]
  },
  {
    id: "polawax-nf",
    sku: "TN-EMU-04",
    name: "Polawax Emulsifying Wax NF",
    category: "Emulsifiers",
    tone: "tone-emulsifiers",
    inci: "Cetearyl Alcohol, Polysorbate 60",
    desc: "Dependable self-emulsifying wax for commercial body lotions.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil Phase (70°C)",
    usage: "3% – 8%",
    packs: [
      { label: "250g", price: 900 },
      { label: "1kg", price: 3200 }
    ]
  },
  {
    id: "cetyl-alcohol",
    sku: "TN-EMU-05",
    name: "Cetyl Alcohol Co-Emulsifier",
    category: "Emulsifiers",
    tone: "tone-emulsifiers",
    inci: "Cetyl Alcohol",
    desc: "Fatty alcohol thickening and stabilizing creams and conditioners.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil Phase (50°C)",
    usage: "1% – 5%",
    packs: [
      { label: "250g", price: 650 },
      { label: "1kg", price: 2100 }
    ]
  },
  {
    id: "beeswax-yellow",
    sku: "TN-WAX-01",
    name: "Yellow Beeswax Pellets",
    category: "Waxes & Thickeners",
    tone: "tone-waxes",
    inci: "Cera Alba",
    desc: "Triple-filtered golden pastilles for lip balms and salves.",
    grade: "Unrefined",
    useFor: ["Balms & Butters", "Skincare"],
    phase: "Oil Phase (62–65°C)",
    usage: "2% – 25%",
    packs: [
      { label: "100g", price: 500 },
      { label: "500g", price: 1250 },
      { label: "1kg", price: 2000 }
    ]
  },
  {
    id: "cera-bellina",
    sku: "TN-WAX-02",
    name: "Cera Bellina Wax",
    category: "Waxes & Thickeners",
    tone: "tone-waxes",
    inci: "Polyglyceryl-3 Beeswax",
    desc: "Prevents graininess in shea balms and creates smooth oil gels.",
    grade: "ECOCERT / Natural",
    useFor: ["Balms & Butters", "Skincare"],
    phase: "Oil Phase",
    usage: "3% – 20%",
    packs: [
      { label: "100g", price: 1350 },
      { label: "500g", price: 4850 }
    ]
  },
  {
    id: "xanthan-gum",
    sku: "TN-WAX-03",
    name: "Cosmetic Xanthan Gum",
    category: "Waxes & Thickeners",
    tone: "tone-waxes",
    inci: "Xanthan Gum",
    desc: "Natural gum stabilizer preventing emulsion separation.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Glycerin Slurry → Water",
    usage: "0.2% – 1.0%",
    packs: [
      { label: "100g", price: 600 },
      { label: "500g", price: 2300 }
    ]
  },
  {
    id: "carbomer-940",
    sku: "TN-WAX-04",
    name: "Carbomer 940 Thickener",
    category: "Waxes & Thickeners",
    tone: "tone-waxes",
    inci: "Carbomer",
    desc: "High-clarity rheology modifier for crystal-clear gels and serums.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase (Neutralize)",
    usage: "0.2% – 1.0%",
    packs: [
      { label: "100g", price: 700 },
      { label: "1kg", price: 5500 }
    ]
  },
  {
    id: "bentonite-clay",
    sku: "TN-CLY-01",
    name: "Montmorillonite Bentonite Clay",
    category: "Clays & Exfoliants",
    tone: "tone-clays",
    inci: "Bentonite",
    desc: "Volcanic detox clay for clarifying masks and scalp cleansers.",
    grade: "Unrefined",
    useFor: ["Skincare", "Haircare"],
    phase: "Powder Phase",
    usage: "5% – 30%",
    packs: [
      { label: "250g", price: 700 },
      { label: "1kg", price: 2450 }
    ]
  },
  {
    id: "kaolin-clay",
    sku: "TN-CLY-02",
    name: "White Kaolin Clay",
    category: "Clays & Exfoliants",
    tone: "tone-clays",
    inci: "Kaolin",
    desc: "Ultra-fine gentle mineral clay for sensitive facial masks.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare"],
    phase: "Powder Phase",
    usage: "5% – 40%",
    packs: [
      { label: "250g", price: 650 },
      { label: "1kg", price: 2100 }
    ]
  },
  {
    id: "bamboo-exfoliant",
    sku: "TN-CLY-03",
    name: "Bamboo Stem Exfoliating Powder",
    category: "Clays & Exfoliants",
    tone: "tone-clays",
    inci: "Bambusa Arundinacea Stem Powder",
    desc: "Smooth micro-polished natural exfoliant for gentle facial scrubs.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare"],
    phase: "Cool-Down / Scrub Base",
    usage: "1% – 5%",
    packs: [
      { label: "100g", price: 850 },
      { label: "500g", price: 3100 }
    ]
  },
  {
    id: "geogard-ect",
    sku: "TN-ACT-01",
    name: "Preservative ECO (Geogard ECT)",
    category: "Preservatives & Actives",
    tone: "tone-actives",
    inci: "Benzyl Alcohol, Salicylic Acid, Glycerin, Sorbic Acid",
    desc: "ECOCERT broad-spectrum preservative for aqueous skincare.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Cool-Down (<40°C) · pH 3–8",
    usage: "0.6% – 1.0%",
    badge: "ECOCERT",
    featured: true,
    packs: [
      { label: "100ml", price: 1450 },
      { label: "500ml", price: 5200 }
    ]
  },
  {
    id: "allantoin",
    sku: "TN-ACT-02",
    name: "Allantoin Powder",
    category: "Preservatives & Actives",
    tone: "tone-actives",
    inci: "Allantoin",
    desc: "Soothing skin active supporting barrier recovery in creams.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare"],
    phase: "Water Phase (Warm)",
    usage: "0.1% – 0.5%",
    packs: [
      { label: "100g", price: 1350 }
    ]
  },
  {
    id: "vitamin-e",
    sku: "TN-ACT-03",
    name: "Vitamin E (Mixed Tocopherols)",
    category: "Preservatives & Actives",
    tone: "tone-actives",
    inci: "Tocopherol",
    desc: "Oil-soluble antioxidant extending shelf life of oils and balms.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Cool-Down (<40°C)",
    usage: "0.2% – 1.0%",
    packs: [
      { label: "50ml", price: 950 },
      { label: "250ml", price: 3600 }
    ]
  },
  {
    id: "veg-glycerin",
    sku: "TN-ACT-04",
    name: "Vegetable Glycerin (USP Grade)",
    category: "Preservatives & Actives",
    tone: "tone-actives",
    inci: "Glycerin",
    desc: "Plant-derived humectant drawing moisture into skin and hair.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase",
    usage: "1% – 5%",
    packs: [
      { label: "500ml", price: 550 },
      { label: "1L", price: 950 },
      { label: "5L", price: 3900 }
    ]
  },
  {
    id: "coco-glucoside",
    sku: "TN-PKG-01",
    name: "Coco Glucoside Mild Surfactant",
    category: "Surfactants & Packaging",
    tone: "tone-packaging",
    inci: "Coco-Glucoside",
    desc: "Plant-derived sulfate-free surfactant for gentle facial washes.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase · pH 4.5–6.5",
    usage: "5% – 25%",
    packs: [
      { label: "250ml", price: 850 },
      { label: "1L", price: 2900 }
    ]
  },
  {
    id: "amber-droppers",
    sku: "TN-PKG-02",
    name: "50ml Amber Glass Dropper Bottles",
    category: "Surfactants & Packaging",
    tone: "tone-packaging",
    inci: "UV-Protective Cosmetic Glass",
    desc: "Refillable UV-shielding serum bottles with glass pipettes.",
    grade: "Cosmetic Grade",
    useFor: ["Packaging"],
    phase: "Finished Packaging",
    usage: "Serums & Oils",
    packs: [
      { label: "12-Pack", price: 1440 },
      { label: "24-Pack", price: 2650 }
    ]
  },
  {
    id: "frosted-jars",
    sku: "TN-PKG-03",
    name: "250g Double-Wall Cream Jars",
    category: "Surfactants & Packaging",
    tone: "tone-packaging",
    inci: "BPA-Free Cosmetic PP Jar",
    desc: "Sturdy retail jars with inner shive lids for body butters.",
    grade: "Cosmetic Grade",
    useFor: ["Packaging"],
    phase: "Finished Packaging",
    usage: "Butters & Creams",
    packs: [
      { label: "12-Pack", price: 1680 },
      { label: "24-Pack", price: 3100 }
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
  { common: "Vegetable Glycerin", inci: "Glycerin", group: "Preservatives & Actives", fn: "Plant humectant drawing moisture into the epidermis.", phase: "Water Phase", usage: "1% – 5%", shopSearch: "Glycerin" },
  { common: "Vitamin E (Tocopherol)", inci: "Tocopherol", group: "Preservatives & Actives", fn: "Oil-soluble antioxidant slowing oil rancidity.", phase: "Cool-Down (<40°C)", usage: "0.2% – 1.0%", shopSearch: "Vitamin E" },
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

/* Persistent Cart & Delivery State */
function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (e) {}
}

function loadDeliveryZone() {
  try {
    const z = localStorage.getItem(DELIVERY_STORAGE_KEY);
    return DELIVERY_ZONES[z] ? z : "nairobi";
  } catch (e) {
    return "nairobi";
  }
}

let cart = loadCart();
let deliveryZone = loadDeliveryZone();

function addToCart(product, pack, qty = 1) {
  const key = `${product.id}_${pack.label}`;
  const existing = cart.find((item) => item.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      key,
      name: product.name,
      pack: pack.label,
      price: pack.price,
      qty
    });
  }
  saveCart(cart);
  renderCart();
  showToast(`Added ${product.name} (${pack.label}) to bag`);
}

function getCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const zoneInfo = DELIVERY_ZONES[deliveryZone] || DELIVERY_ZONES.nairobi;
  const freeNairobi = deliveryZone === "nairobi" && subtotal >= FREE_NAIROBI_THRESHOLD;
  const shipping = cart.length === 0 ? 0 : freeNairobi ? 0 : zoneInfo.fee;
  return { subtotal, shipping, total: subtotal + shipping, zoneLabel: zoneInfo.label, freeNairobi };
}

function renderCart() {
  const cartCountEls = document.querySelectorAll(".js-cart-count");
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");
  const cartSubEl = document.getElementById("cartSubtotal");
  const cartShipEl = document.getElementById("cartShipping");
  const freeShipNoteEl = document.getElementById("freeShipNote");

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const { subtotal, shipping, total, freeNairobi } = getCartTotals();

  cartCountEls.forEach((el) => (el.textContent = totalQty));
  if (cartSubEl) cartSubEl.textContent = formatKES(subtotal);
  if (cartShipEl) cartShipEl.textContent = shipping === 0 ? "KES 0" : formatKES(shipping);
  if (cartTotalEl) cartTotalEl.textContent = formatKES(total);

  if (freeShipNoteEl) {
    if (!cart.length) {
      freeShipNoteEl.style.display = "none";
    } else if (freeNairobi) {
      freeShipNoteEl.style.display = "block";
      freeShipNoteEl.textContent = "Unlocked: Free Nairobi Metro delivery.";
    } else if (deliveryZone === "nairobi") {
      freeShipNoteEl.style.display = "block";
      freeShipNoteEl.textContent = `Add ${formatKES(FREE_NAIROBI_THRESHOLD - subtotal)} more for free Nairobi delivery.`;
    } else {
      freeShipNoteEl.style.display = "none";
    }
  }

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
  const proceedCheckoutBtn = document.getElementById("proceedCheckoutBtn");
  const backToBagBtn = document.getElementById("backToBagBtn");
  const drawerBody = document.getElementById("cartItems");
  const drawerFoot = document.getElementById("drawerFoot");
  const checkoutPanel = document.getElementById("checkoutPanel");
  const checkoutForm = document.getElementById("checkoutForm");
  const checkoutReceipt = document.getElementById("checkoutReceipt");
  const deliverySelect = document.getElementById("deliveryZoneSelect");
  const drawerHeading = document.getElementById("drawerHeading");

  if (deliverySelect) {
    deliverySelect.value = deliveryZone;
    deliverySelect.addEventListener("change", () => {
      deliveryZone = deliverySelect.value;
      try {
        localStorage.setItem(DELIVERY_STORAGE_KEY, deliveryZone);
      } catch (e) {}
      renderCart();
    });
  }

  const showBagStep = () => {
    if (drawerBody) drawerBody.classList.remove("hidden");
    if (drawerFoot) drawerFoot.classList.remove("hidden");
    if (checkoutPanel) checkoutPanel.classList.remove("open");
    if (drawerHeading) drawerHeading.textContent = "Order Bag";
  };

  const openDrawer = () => {
    showBagStep();
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

  if (proceedCheckoutBtn && checkoutPanel) {
    proceedCheckoutBtn.addEventListener("click", () => {
      if (!cart.length) {
        showToast("Add an ingredient before checkout.");
        return;
      }
      if (drawerBody) drawerBody.classList.add("hidden");
      if (drawerFoot) drawerFoot.classList.add("hidden");
      checkoutPanel.classList.add("open");
      if (checkoutReceipt) checkoutReceipt.classList.remove("show");
      if (checkoutForm) checkoutForm.style.display = "grid";
      if (drawerHeading) drawerHeading.textContent = "Checkout";
      const coTotal = document.getElementById("checkoutSummaryLine");
      if (coTotal) {
        const { total, zoneLabel } = getCartTotals();
        coTotal.textContent = `${cart.reduce((s, i) => s + i.qty, 0)} items · ${zoneLabel} · Total ${formatKES(total)}`;
      }
    });
  }

  if (backToBagBtn) {
    backToBagBtn.addEventListener("click", showBagStep);
  }

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const orderRef = makeRef("TN-ORD");
      const name = document.getElementById("coName").value.trim();
      const phone = document.getElementById("coPhone").value.trim();
      const town = document.getElementById("coLocation").value.trim();
      const payment = document.getElementById("coPayment").value;
      const { subtotal, shipping, total, zoneLabel } = getCartTotals();

      const lines = cart.map((i) => `- ${i.name} (${i.pack}) x${i.qty} = ${formatKES(i.price * i.qty)}`);
      const waText = encodeURIComponent(
        `Hello Terra Naturals (Loise), Order ${orderRef}:\nCustomer: ${name} (${phone})\nDelivery: ${zoneLabel}, ${town}\nPayment: ${payment}\nItems:\n${lines.join("\n")}\nSubtotal: ${formatKES(subtotal)}\nDelivery: ${formatKES(shipping)}\nTotal: ${formatKES(total)}`
      );

      if (checkoutReceipt) {
        checkoutReceipt.innerHTML = `
          <strong style="display:block;font-family:var(--font-display);color:var(--forest-deep);margin-bottom:0.35rem;">✓ Order Placed (${orderRef})</strong>
          <p style="margin:0 0 0.75rem;font-size:0.84rem;color:var(--ink);">
            <strong>${escapeHtml(name)}</strong> · ${escapeHtml(payment)} · <strong>${formatKES(total)}</strong> (${escapeHtml(zoneLabel)}).
          </p>
          <div style="display:grid;gap:0.55rem;">
            <a href="https://wa.me/254790559934?text=${waText}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="width:100%;">Confirm on WhatsApp (+254 790 559 934)</a>
            <button type="button" class="btn btn-soft btn-sm" id="continueShopAfterOrder" style="width:100%;">Continue Shopping</button>
          </div>
        `;
        checkoutReceipt.classList.add("show");
        const contBtn = document.getElementById("continueShopAfterOrder");
        if (contBtn) contBtn.addEventListener("click", closeDrawer);
      }

      cart = [];
      saveCart(cart);
      renderCart();
      checkoutForm.reset();
      checkoutForm.style.display = "none";
      showToast(`Order ${orderRef} placed.`);
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (!cart.length) {
        showToast("Add an ingredient to send an order.");
        return;
      }
      const { total, zoneLabel } = getCartTotals();
      const lines = cart.map((i) => `- ${i.name} (${i.pack}) x${i.qty} = ${formatKES(i.price * i.qty)}`);
      const text = encodeURIComponent(
        `Hello Terra Naturals (Loise), I would like to order:\n${lines.join("\n")}\nDelivery: ${zoneLabel}\nEstimated Total: ${formatKES(total)}\nPayment: M-Pesa / Cash on Delivery.`
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

/* Product Quick View Modal */
let openQuickViewFn = null;

function initQuickViewModal() {
  const backdrop = document.getElementById("quickViewBackdrop");
  const closeBtn = document.getElementById("closeQuickViewBtn");
  const contentEl = document.getElementById("quickViewContent");
  const titleEl = document.getElementById("quickViewTitle");
  const metaEl = document.getElementById("quickViewMeta");
  if (!backdrop || !contentEl) return;

  const close = () => backdrop.classList.remove("open");
  if (closeBtn) closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("open")) close();
  });

  openQuickViewFn = (product) => {
    let selectedPackIdx = 0;
    let qty = 1;

    if (titleEl) titleEl.textContent = product.name;
    if (metaEl) metaEl.textContent = `${product.category} · SKU ${product.sku} · INCI: ${product.inci}`;

    function renderQv() {
      const pack = product.packs[selectedPackIdx];
      contentEl.innerHTML = `
        <p style="margin:0;font-size:0.9rem;color:var(--muted);">${escapeHtml(product.desc)}</p>

        <div class="qv-specs">
          <div class="qv-spec">
            <span>Grade</span>
            <strong>${escapeHtml(product.grade)}</strong>
          </div>
          <div class="qv-spec">
            <span>Phase</span>
            <strong>${escapeHtml(product.phase)}</strong>
          </div>
          <div class="qv-spec">
            <span>Typical Usage</span>
            <strong>${escapeHtml(product.usage)}</strong>
          </div>
        </div>

        <div>
          <div style="font-size:0.78rem;font-weight:700;color:var(--forest-deep);margin-bottom:0.5rem;">Pack Size</div>
          <div class="pack-pill-grid">
            ${product.packs
              .map(
                (pk, i) => `
              <button type="button" class="pack-pill ${i === selectedPackIdx ? "active" : ""}" data-pack-idx="${i}">
                ${escapeHtml(pk.label)} · ${formatKES(pk.price)}
              </button>`
              )
              .join("")}
          </div>
        </div>

        <div class="qv-buy-row">
          <div class="qty-stepper">
            <button type="button" class="qty-btn" id="qvDecQty" aria-label="Decrease quantity">−</button>
            <strong id="qvQtyVal" style="min-width:20px;text-align:center;font-size:0.9rem;">${qty}</strong>
            <button type="button" class="qty-btn" id="qvIncQty" aria-label="Increase quantity">+</button>
          </div>
          <button type="button" class="btn btn-primary" id="qvAddBtn" style="flex:1;">
            Add to Bag · ${formatKES(pack.price * qty)}
          </button>
        </div>
      `;

      contentEl.querySelectorAll(".pack-pill").forEach((btn) => {
        btn.addEventListener("click", () => {
          selectedPackIdx = Number(btn.dataset.packIdx);
          renderQv();
        });
      });

      document.getElementById("qvDecQty").addEventListener("click", () => {
        if (qty > 1) {
          qty -= 1;
          renderQv();
        }
      });
      document.getElementById("qvIncQty").addEventListener("click", () => {
        qty += 1;
        renderQv();
      });
      document.getElementById("qvAddBtn").addEventListener("click", () => {
        addToCart(product, product.packs[selectedPackIdx], qty);
        close();
      });
    }

    renderQv();
    backdrop.classList.add("open");
  };
}

/* Reusable Product Card Renderer */
function renderProductCardsInto(container, list, allowQuickView = false) {
  if (!list.length) {
    container.innerHTML = `<div style="grid-column:1/-1;background:var(--white);border:1px solid var(--border);border-radius:var(--radius-md);padding:2rem;text-align:center;">
      <p style="margin:0 0 0.85rem;color:var(--muted);">No ingredients match your active filters.</p>
      <button type="button" class="btn btn-outline btn-sm" id="inlineResetFiltersBtn">Clear Filters</button>
    </div>`;
    return;
  }

  container.innerHTML = list
    .map((p) => {
      const options = p.packs.map((pk, i) => `<option value="${i}">${escapeHtml(pk.label)}</option>`).join("");
      const badgeHtml = p.badge ? `<span class="product-badge-gold">${escapeHtml(p.badge)}</span>` : "";
      return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-visual ${p.tone || ""}">
          <div class="product-visual-top">
            <span class="product-cat-tag">${escapeHtml(p.category)}</span>
            ${badgeHtml}
          </div>
          <span class="product-inci">${escapeHtml(p.inci)}</span>
        </div>
        <div class="product-body">
          <div class="product-meta-row">
            <span>${escapeHtml(p.grade)}</span>
            <span class="stock-dot">In Stock</span>
          </div>
          ${
            allowQuickView
              ? `<button type="button" class="product-title-btn js-quick-view">${escapeHtml(p.name)}</button>`
              : `<h3>${escapeHtml(p.name)}</h3>`
          }
          <p class="product-desc">${escapeHtml(p.desc)}</p>
          <div class="pack-row">
            <select class="pack-select" aria-label="Select pack size for ${escapeHtml(p.name)}">
              ${options}
            </select>
            <span class="product-price">${formatKES(p.packs[0].price)}</span>
          </div>
          <div class="product-card-actions">
            <button type="button" class="btn btn-primary add-to-cart-btn">Add to Bag</button>
            ${allowQuickView ? `<button type="button" class="btn btn-soft js-quick-view">Details</button>` : ""}
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
      addToCart(product, product.packs[Number(select.value)], 1);
    });

    card.querySelectorAll(".js-quick-view").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (openQuickViewFn) openQuickViewFn(product);
      });
    });
  });
}

function initHomeFeatured() {
  const featuredEl = document.getElementById("homeFeaturedProducts");
  if (!featuredEl) return;
  renderProductCardsInto(featuredEl, PRODUCTS.filter((p) => p.featured).slice(0, 4), false);
}

/* Full E-Commerce Shop Page Controller */
function initShopPage() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  initQuickViewModal();

  const catListEl = document.getElementById("shopCategoryList");
  const searchInput = document.getElementById("productSearch");
  const sortSelect = document.getElementById("productSort");
  const priceRangeInput = document.getElementById("maxPriceRange");
  const maxPriceLabel = document.getElementById("maxPriceLabel");
  const useCheckboxes = Array.from(document.querySelectorAll(".js-use-filter"));
  const gradeCheckboxes = Array.from(document.querySelectorAll(".js-grade-filter"));
  const bulkOnlyCheckbox = document.getElementById("bulkOnlyFilter");
  const activeFiltersBar = document.getElementById("activeFiltersBar");
  const countLabel = document.getElementById("catalogCountLabel");
  const clearAllBtn = document.getElementById("clearAllFiltersBtn");
  const mobileFilterBtn = document.getElementById("openFiltersBtn");
  const closeFiltersBtn = document.getElementById("closeFiltersBtn");
  const sidebarEl = document.getElementById("shopSidebar");

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

  const filterState = {
    category: "All",
    search: "",
    maxPrice: 3000,
    uses: [],
    grades: [],
    bulkOnly: false,
    sort: "featured"
  };

  /* Hydrate URL Params (?cat=...&search=...) */
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get("cat");
  const urlSearch = params.get("search");
  if (urlCat) {
    const found = categories.find((c) => c.toLowerCase() === urlCat.toLowerCase());
    if (found) filterState.category = found;
  }
  if (urlSearch && searchInput) {
    filterState.search = urlSearch;
    searchInput.value = urlSearch;
  }

  function renderCategoryList() {
    if (!catListEl) return;
    catListEl.innerHTML = categories
      .map((cat) => {
        const count = cat === "All" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat).length;
        const active = filterState.category === cat ? "active" : "";
        return `
        <li>
          <button type="button" class="cat-filter-btn ${active}" data-cat="${escapeHtml(cat)}">
            <span>${escapeHtml(cat === "All" ? "All Ingredients" : cat)}</span>
            <span class="cat-filter-count">${count}</span>
          </button>
        </li>`;
      })
      .join("");

    catListEl.querySelectorAll(".cat-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        filterState.category = btn.dataset.cat;
        renderCategoryList();
        applyAndRender();
        if (sidebarEl) sidebarEl.classList.remove("open");
      });
    });
  }

  function resetAllFilters() {
    filterState.category = "All";
    filterState.search = "";
    filterState.maxPrice = 3000;
    filterState.uses = [];
    filterState.grades = [];
    filterState.bulkOnly = false;
    filterState.sort = "featured";

    if (searchInput) searchInput.value = "";
    if (priceRangeInput) priceRangeInput.value = 3000;
    if (sortSelect) sortSelect.value = "featured";
    useCheckboxes.forEach((cb) => (cb.checked = false));
    gradeCheckboxes.forEach((cb) => (cb.checked = false));
    if (bulkOnlyCheckbox) bulkOnlyCheckbox.checked = false;

    renderCategoryList();
    applyAndRender();
  }

  function renderActiveChips() {
    if (!activeFiltersBar) return;
    const chips = [];
    if (filterState.category !== "All") {
      chips.push({ label: filterState.category, clear: () => { filterState.category = "All"; renderCategoryList(); } });
    }
    if (filterState.search.trim()) {
      chips.push({ label: `"${filterState.search.trim()}"`, clear: () => { filterState.search = ""; if (searchInput) searchInput.value = ""; } });
    }
    if (filterState.maxPrice < 3000) {
      chips.push({ label: `Up to ${formatKES(filterState.maxPrice)}`, clear: () => { filterState.maxPrice = 3000; if (priceRangeInput) priceRangeInput.value = 3000; } });
    }
    filterState.uses.forEach((u) => {
      chips.push({
        label: u,
        clear: () => {
          filterState.uses = filterState.uses.filter((x) => x !== u);
          useCheckboxes.forEach((cb) => { if (cb.value === u) cb.checked = false; });
        }
      });
    });
    filterState.grades.forEach((g) => {
      chips.push({
        label: g,
        clear: () => {
          filterState.grades = filterState.grades.filter((x) => x !== g);
          gradeCheckboxes.forEach((cb) => { if (cb.value === g) cb.checked = false; });
        }
      });
    });
    if (filterState.bulkOnly) {
      chips.push({ label: "1kg / Bulk Packs", clear: () => { filterState.bulkOnly = false; if (bulkOnlyCheckbox) bulkOnlyCheckbox.checked = false; } });
    }

    activeFiltersBar.innerHTML = chips
      .map(
        (ch, i) => `
        <span class="active-chip">
          ${escapeHtml(ch.label)}
          <button type="button" data-chip-idx="${i}" aria-label="Remove filter">×</button>
        </span>`
      )
      .join("");

    activeFiltersBar.querySelectorAll("button[data-chip-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        chips[Number(btn.dataset.chipIdx)].clear();
        applyAndRender();
      });
    });

    if (mobileFilterBtn) {
      mobileFilterBtn.textContent = chips.length ? `Filters (${chips.length})` : "Filters";
    }
  }

  function applyAndRender() {
    if (maxPriceLabel) {
      maxPriceLabel.textContent = filterState.maxPrice >= 3000 ? "All Prices" : `Up to ${formatKES(filterState.maxPrice)}`;
    }

    const q = filterState.search.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => {
      const catOk = filterState.category === "All" || p.category === filterState.category;
      const basePrice = p.packs[0].price;
      const priceOk = filterState.maxPrice >= 3000 || basePrice <= filterState.maxPrice;
      const useOk = !filterState.uses.length || filterState.uses.some((u) => p.useFor.includes(u));
      const gradeOk = !filterState.grades.length || filterState.grades.includes(p.grade);
      const bulkOk = !filterState.bulkOnly || p.packs.some((pk) => /1kg|5kg|1L|5L|24-Pack/i.test(pk.label));
      const searchOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.inci.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q);
      return catOk && priceOk && useOk && gradeOk && bulkOk && searchOk;
    });

    if (filterState.sort === "price-asc") {
      list = [...list].sort((a, b) => a.packs[0].price - b.packs[0].price);
    } else if (filterState.sort === "price-desc") {
      list = [...list].sort((a, b) => b.packs[0].price - a.packs[0].price);
    } else if (filterState.sort === "name-asc") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (countLabel) {
      countLabel.textContent = `Showing ${list.length} of ${PRODUCTS.length} stocked items`;
    }

    renderActiveChips();
    renderProductCardsInto(grid, list, true);

    const inlineReset = document.getElementById("inlineResetFiltersBtn");
    if (inlineReset) inlineReset.addEventListener("click", resetAllFilters);
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      filterState.search = searchInput.value;
      applyAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      filterState.sort = sortSelect.value;
      applyAndRender();
    });
  }

  if (priceRangeInput) {
    priceRangeInput.addEventListener("input", () => {
      filterState.maxPrice = Number(priceRangeInput.value);
      applyAndRender();
    });
  }

  useCheckboxes.forEach((cb) => {
    cb.addEventListener("change", () => {
      filterState.uses = useCheckboxes.filter((c) => c.checked).map((c) => c.value);
      applyAndRender();
    });
  });

  gradeCheckboxes.forEach((cb) => {
    cb.addEventListener("change", () => {
      filterState.grades = gradeCheckboxes.filter((c) => c.checked).map((c) => c.value);
      applyAndRender();
    });
  });

  if (bulkOnlyCheckbox) {
    bulkOnlyCheckbox.addEventListener("change", () => {
      filterState.bulkOnly = bulkOnlyCheckbox.checked;
      applyAndRender();
    });
  }

  if (clearAllBtn) clearAllBtn.addEventListener("click", resetAllFilters);
  if (mobileFilterBtn && sidebarEl) {
    mobileFilterBtn.addEventListener("click", () => sidebarEl.classList.add("open"));
  }
  if (closeFiltersBtn && sidebarEl) {
    closeFiltersBtn.addEventListener("click", () => sidebarEl.classList.remove("open"));
  }

  renderCategoryList();
  applyAndRender();
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
