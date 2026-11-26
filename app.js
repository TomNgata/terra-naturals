const CART_STORAGE_KEY = "tn_order_bag_v2";
const DELIVERY_STORAGE_KEY = "tn_delivery_zone_v1";
const FREE_NAIROBI_THRESHOLD = 10000;
const WP_BASE = "https://terra.co.ke/wp-content/uploads/";

const DELIVERY_ZONES = {
  pickup: { label: "Kiambu Road Studio Pickup", fee: 0 },
  nairobi: { label: "Nairobi Metro Courier", fee: 350 },
  county: { label: "47-County Overnight Parcel", fee: 600 }
};

const PRODUCTS = [
  /* 1. BUTTERS (4) */
  {
    id: "shea-butter-ghanian",
    sku: "TN-BTR-01",
    name: "Shea Butter (Ghanaian)",
    category: "Butters",
    inciGroup: "Butters & Oils",
    tone: "tone-butters",
    image: WP_BASE + "2022/01/Butters-Shea-Butter-500g-1kg-5kg.jpg",
    inci: "Butyrospermum Parkii Butter",
    desc: "Ivory West African shea rich in oleic and stearic fatty acids for balms and body butters.",
    grade: "Unrefined",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Oil Phase (32–40°C)",
    usage: "2% – 100%",
    badge: "Bestseller",
    featured: true,
    packs: [
      { label: "250g", price: 1000 },
      { label: "500g", price: 1850 },
      { label: "1kg", price: 3000 }
    ]
  },
  {
    id: "shea-butter-nilotica",
    sku: "TN-BTR-02",
    name: "Shea Butter (Nilotica)",
    category: "Butters",
    inciGroup: "Butters & Oils",
    tone: "tone-butters",
    image: WP_BASE + "2022/01/Butters-Shea-Butter-500g-1kg-5kg.jpg",
    inci: "Vitellaria Nilotica Seed Butter",
    desc: "Soft-melting East African Ugandan shea butter suited for facial creams and whipped balms.",
    grade: "Unrefined",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Oil Phase (25–30°C)",
    usage: "2% – 100%",
    badge: "East African",
    packs: [
      { label: "250g", price: 800 },
      { label: "500g", price: 1450 },
      { label: "1kg", price: 2250 }
    ]
  },
  {
    id: "mango-butter",
    sku: "TN-BTR-03",
    name: "Mango Butter",
    category: "Butters",
    inciGroup: "Butters & Oils",
    tone: "tone-butters",
    image: WP_BASE + "2022/01/Butters-Mango-Butter-500g-1kg-5kg-300x400.jpg",
    inci: "Mangifera Indica Seed Butter",
    desc: "Lightweight, fast-absorbing kernel butter supporting skin elasticity and barrier softness.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Oil Phase (30–36°C)",
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
    name: "Cocoa Butter",
    category: "Butters",
    inciGroup: "Butters & Oils",
    tone: "tone-butters",
    image: WP_BASE + "2021/12/Cocoa-butter-300x354.jpg",
    inci: "Theobroma Cacao Seed Butter",
    desc: "Firm natural cacao fat with 2–5 year shelf life for body bars, lotions, and lip balms.",
    grade: "Unrefined",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Oil Phase (34–38°C)",
    usage: "2% – 50%",
    packs: [
      { label: "500g", price: 1750 },
      { label: "1kg", price: 3250 }
    ]
  },

  /* 2. CARRIER OILS (10) */
  {
    id: "avocado-oil",
    sku: "TN-OIL-01",
    name: "Avocado Oil",
    category: "Carrier Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-oils",
    inci: "Persea Gratissima Oil",
    desc: "Vitamin-rich carrier oil nourishing dry skin, scalp blends, and rich body lotions.",
    grade: "Unrefined",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil / Cool-Down",
    usage: "1% – 100%",
    badge: "Kenyan Sourced",
    packs: [
      { label: "100ml", price: 550 },
      { label: "500ml", price: 1350 },
      { label: "1 Litre", price: 2200 }
    ]
  },
  {
    id: "black-castor-oil",
    sku: "TN-OIL-02",
    name: "Black Castor Oil",
    category: "Carrier Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-oils",
    inci: "Ricinus Communis Seed Oil",
    desc: "Rich roasted castor oil prized for scalp oils, lash serums, and textured haircare.",
    grade: "Unrefined",
    useFor: ["Haircare", "Skincare"],
    phase: "Oil Phase",
    usage: "2% – 100%",
    packs: [
      { label: "100ml", price: 600 },
      { label: "500ml", price: 1750 },
      { label: "1 Litre", price: 2950 }
    ]
  },
  {
    id: "castor-oil",
    sku: "TN-OIL-03",
    name: "Castor Oil",
    category: "Carrier Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-oils",
    inci: "Ricinus Communis Seed Oil",
    desc: "High-viscosity glossy carrier oil adding shine to lip balms, soaps, and hair oils.",
    grade: "ECOCERT / Natural",
    useFor: ["Haircare", "Balms & Butters"],
    phase: "Oil Phase",
    usage: "2% – 50%",
    packs: [
      { label: "100ml", price: 450 },
      { label: "500ml", price: 1050 },
      { label: "1 Litre", price: 1750 }
    ]
  },
  {
    id: "coconut-oil",
    sku: "TN-OIL-04",
    name: "Coconut Oil",
    category: "Carrier Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-oils",
    inci: "Cocos Nucifera Oil",
    desc: "Classic emollient oil for hair pre-poos, body scrubs, soaps, and solid balms.",
    grade: "Unrefined",
    useFor: ["Skincare", "Haircare", "Balms & Butters"],
    phase: "Oil Phase (24°C)",
    usage: "2% – 100%",
    packs: [
      { label: "500ml", price: 750 },
      { label: "1 Litre", price: 1200 }
    ]
  },
  {
    id: "grapeseed-oil",
    sku: "TN-OIL-05",
    name: "Grapeseed Oil",
    category: "Carrier Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-oils",
    inci: "Vitis Vinifera Seed Oil",
    desc: "Feather-light, non-comedogenic carrier oil ideal for facial serums and oily skin.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil / Cool-Down",
    usage: "1% – 100%",
    packs: [
      { label: "100ml", price: 750 },
      { label: "500ml", price: 1650 },
      { label: "1 Litre", price: 2500 }
    ]
  },
  {
    id: "jojoba-oil-yellow",
    sku: "TN-OIL-06",
    name: "Jojoba Oil (Yellow)",
    category: "Carrier Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-oils",
    inci: "Simmondsia Chinensis Seed Oil",
    desc: "Golden sebum-mimicking liquid wax ester offering high oxidative stability in serums.",
    grade: "Unrefined",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil / Cool-Down",
    usage: "1% – 100%",
    packs: [
      { label: "100ml", price: 900 },
      { label: "500ml", price: 3600 },
      { label: "1 Litre", price: 6500 }
    ]
  },
  {
    id: "olive-oil",
    sku: "TN-OIL-07",
    name: "Olive Oil",
    category: "Carrier Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-oils",
    inci: "Olea Europaea Fruit Oil",
    desc: "Nourishing oleic-rich botanical oil suited for castile soaps, salves, and hair masks.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil Phase",
    usage: "2% – 100%",
    packs: [
      { label: "100ml", price: 750 },
      { label: "500ml", price: 1650 },
      { label: "1 Litre", price: 2500 }
    ]
  },
  {
    id: "olive-pomace-oil",
    sku: "TN-OIL-08",
    name: "Olive Pomace Oil",
    category: "Carrier Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-oils",
    inci: "Olea Europaea Husk Oil",
    desc: "Cost-effective olive grade favored for cold-process soapmaking and herbal infusions.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Oil Phase",
    usage: "5% – 80%",
    packs: [
      { label: "500ml", price: 800 },
      { label: "1 Litre", price: 1450 }
    ]
  },
  {
    id: "sunflower-oil",
    sku: "TN-OIL-09",
    name: "Sunflower Oil",
    category: "Carrier Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-oils",
    inci: "Helianthus Annuus Seed Oil",
    desc: "Vitamin E and linoleic-rich light oil for everyday lotions, massage blends, and macerates.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil Phase",
    usage: "2% – 100%",
    packs: [
      { label: "500ml", price: 900 },
      { label: "1 Litre", price: 1750 }
    ]
  },
  {
    id: "sweet-almond-oil",
    sku: "TN-OIL-10",
    name: "Sweet Almond Oil",
    category: "Carrier Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-oils",
    inci: "Prunus Amygdalus Dulcis Oil",
    desc: "Silky, gentle emollient oil trusted for baby lotions, body oils, and facial cleansers.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil Phase",
    usage: "1% – 100%",
    packs: [
      { label: "100ml", price: 750 },
      { label: "500ml", price: 1650 },
      { label: "1 Litre", price: 2500 }
    ]
  },

  /* 3. ESSENTIAL OILS (7) */
  {
    id: "frankincense-nigella-eo",
    sku: "TN-ESS-01",
    name: "Frankincense (Nigella) Essential Oil",
    category: "Essential Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-essential",
    image: WP_BASE + "2022/01/Essential-Oils-Frankincense-300x400.jpg",
    inci: "Boswellia Neglecta Oil",
    desc: "Kenyan-origin resinous essential oil prized in rejuvenating facial oils and balms.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Cool-Down (<40°C)",
    usage: "0.2% – 1.0%",
    badge: "Kenyan Origin",
    packs: [{ label: "100ml", price: 2400 }]
  },
  {
    id: "frankincense-white-eo",
    sku: "TN-ESS-02",
    name: "Frankincense (White) Essential Oil",
    category: "Essential Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-essential",
    image: WP_BASE + "2022/02/EO-White-Frankincense.jpg",
    inci: "Boswellia Carterii Oil",
    desc: "Refined aromatic frankincense oil for anti-ageing serums, creams, and luxury blends.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Cool-Down (<40°C)",
    usage: "0.2% – 1.0%",
    packs: [{ label: "100ml", price: 2400 }]
  },
  {
    id: "geranium-eo",
    sku: "TN-ESS-03",
    name: "Geranium Essential Oil",
    category: "Essential Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-essential",
    image: WP_BASE + "2022/01/Essential-Oils-Geranium-300x400.jpg",
    inci: "Pelargonium Graveolens Flower Oil",
    desc: "Balancing rose-floral essential oil supporting sebum harmony in lotions and toners.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare"],
    phase: "Cool-Down (<40°C)",
    usage: "0.2% – 1.0%",
    packs: [{ label: "100ml", price: 1750 }]
  },
  {
    id: "lavender-eo",
    sku: "TN-ESS-04",
    name: "Lavender Essential Oil",
    category: "Essential Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-essential",
    image: WP_BASE + "2022/01/Essential-Oils-Lavender-300x400.jpg",
    inci: "Lavandula Angustifolia Oil",
    desc: "Calming steam-distilled lavender suited for soothing creams, soaps, and body butters.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Cool-Down (<40°C)",
    usage: "0.2% – 1.0%",
    packs: [{ label: "100ml", price: 1500 }]
  },
  {
    id: "lemongrass-eo",
    sku: "TN-ESS-05",
    name: "Lemongrass Essential Oil",
    category: "Essential Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-essential",
    image: WP_BASE + "2022/01/Essential-Oils-Lemongrass-300x400.jpg",
    inci: "Cymbopogon Flexuosus Oil",
    desc: "Crisp citrus-herbal essential oil ideal for purifying soaps, washes, and deodorants.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Cool-Down (<40°C)",
    usage: "0.1% – 0.6%",
    packs: [{ label: "100ml", price: 1000 }]
  },
  {
    id: "peppermint-eo",
    sku: "TN-ESS-06",
    name: "Peppermint Essential Oil",
    category: "Essential Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-essential",
    image: WP_BASE + "2022/02/EO-Peppermint-300x400.jpg",
    inci: "Mentha Piperita Oil",
    desc: "Invigorating menthol-rich oil popular in scalp serums, shampoos, and foot balms.",
    grade: "ECOCERT / Natural",
    useFor: ["Haircare", "Balms & Butters"],
    phase: "Cool-Down (<40°C)",
    usage: "0.1% – 0.8%",
    packs: [{ label: "100ml", price: 1500 }]
  },
  {
    id: "ylang-ylang-eo",
    sku: "TN-ESS-07",
    name: "Ylang Ylang Essential Oil",
    category: "Essential Oils",
    inciGroup: "Butters & Oils",
    tone: "tone-essential",
    image: WP_BASE + "2022/02/EO-YlangYlang-300x400.jpg",
    inci: "Cananga Odorata Flower Oil",
    desc: "Sweet exotic floral essential oil for luxury body oils, hair mists, and creams.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Cool-Down (<40°C)",
    usage: "0.1% – 0.8%",
    packs: [{ label: "100ml", price: 1500 }]
  },

  /* 4. EMULSIFIERS (5) */
  {
    id: "olivem-1000",
    sku: "TN-EMU-01",
    name: "Olivem 1000",
    category: "Emulsifiers",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2021/12/Olivem-1000-300x379.jpg",
    inci: "Cetearyl Olivate, Sorbitan Olivate",
    desc: "Natural olive-derived PEG-free O/W emulsifier creating silky liquid-crystal emulsions.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare"],
    phase: "Oil / Water (pH 3–12)",
    usage: "3% – 8%",
    badge: "Bestseller",
    featured: true,
    packs: [{ label: "100g", price: 1250 }]
  },
  {
    id: "arlacel-lotionpro-165",
    sku: "TN-EMU-02",
    name: "Arlacel / Lotionpro 165",
    category: "Emulsifiers",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2021/12/Arlacel-165-300x400.jpg",
    inci: "Glyceryl Stearate, PEG-100 Stearate",
    desc: "Electrolyte-tolerant non-ionic O/W emulsifier for active facial creams and lotions.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare"],
    phase: "Oil Phase (pH 4–9)",
    usage: "2% – 6%",
    packs: [
      { label: "100g", price: 750 },
      { label: "500g", price: 2500 }
    ]
  },
  {
    id: "emulsifying-wax",
    sku: "TN-EMU-03",
    name: "Emulsifying Wax",
    category: "Emulsifiers",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2021/12/Emulsifying-wax-terra-naturals-kenya-300x400.jpg",
    inci: "Cetearyl Alcohol, Polysorbate 60",
    desc: "Versatile complete emulsifying wax for dependable body lotions, creams, and scrubs.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil Phase (70°C)",
    usage: "3% – 8%",
    packs: [
      { label: "100g", price: 750 },
      { label: "500g", price: 2000 }
    ]
  },
  {
    id: "polawax",
    sku: "TN-EMU-04",
    name: "Polawax",
    category: "Emulsifiers",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2021/12/Palowax-Naturals-Kenya-300x400.jpg",
    inci: "Emulsifying Wax NF",
    desc: "Self-emulsifying cosmetic wax forming stable O/W emulsions across wide pH ranges.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil Phase (70°C)",
    usage: "3% – 8%",
    packs: [
      { label: "100g", price: 625 },
      { label: "500g", price: 2300 }
    ]
  },
  {
    id: "ritamulse",
    sku: "TN-EMU-05",
    name: "Ritamulse",
    category: "Emulsifiers",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2021/12/Ritamulse-1-300x400.jpg",
    inci: "Glyceryl Stearate, Cetearyl Alcohol, Sodium Stearoyl Lactylate",
    desc: "Also known as ECOMulse; natural ECOCERT emulsifier giving light matte-finish creams.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare"],
    phase: "Oil Phase (70°C)",
    usage: "3% – 8%",
    packs: [
      { label: "100g", price: 1000 },
      { label: "500g", price: 3400 },
      { label: "1kg", price: 6000 }
    ]
  },

  /* 5. CO-EMULSIFIERS (3) */
  {
    id: "cetearyl-alcohol",
    sku: "TN-COE-01",
    name: "Cetearyl Alcohol",
    category: "Co-Emulsifiers",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2021/12/Cetearyl-Alcohol-terra-naturals-kenya-300x400.jpg",
    inci: "Cetearyl Alcohol",
    desc: "Vegetable fatty alcohol thickening and stabilizing creams, body lotions, and conditioners.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil Phase (55°C)",
    usage: "1% – 6%",
    packs: [
      { label: "100g", price: 650 },
      { label: "500g", price: 2000 }
    ]
  },
  {
    id: "cetyl-alcohol",
    sku: "TN-COE-02",
    name: "Cetyl Alcohol",
    category: "Co-Emulsifiers",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2021/12/Cetyl-Alcohol-Terra-Naturals-kenya-300x400.jpg",
    inci: "Cetyl Alcohol",
    desc: "Creamy viscosity builder adding velvety slip to facial moisturisers and hair masks.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil Phase (50°C)",
    usage: "1% – 5%",
    packs: [
      { label: "100g", price: 650 },
      { label: "500g", price: 2000 }
    ]
  },
  {
    id: "stearic-acid",
    sku: "TN-COE-03",
    name: "Stearic Acid",
    category: "Co-Emulsifiers",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2021/12/Stearic-acid-terra-naturals-kenya-300x400.jpg",
    inci: "Stearic Acid",
    desc: "Vegetable fatty acid building rich structure in heavy creams, shaving soaps, and bars.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Oil Phase (70°C)",
    usage: "1% – 5%",
    packs: [
      { label: "100g", price: 650 },
      { label: "500g", price: 2000 }
    ]
  },

  /* 6. CONDITIONING EMULSIFIERS (3) */
  {
    id: "btms-50",
    sku: "TN-CND-01",
    name: "BTMS-50",
    category: "Conditioning Emulsifiers",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2021/12/BTMS-50.jpg",
    inci: "Behentrimonium Methosulfate, Cetyl Alcohol, Butylene Glycol",
    desc: "High-slip cationic conditioning emulsifier for detangling hair masks and leave-ins.",
    grade: "Cosmetic Grade",
    useFor: ["Haircare"],
    phase: "Oil Phase (75°C)",
    usage: "2% – 10%",
    badge: "Haircare Pro",
    featured: true,
    packs: [
      { label: "100g", price: 1300 },
      { label: "500g", price: 4450 }
    ]
  },
  {
    id: "crodazoquat-mcc",
    sku: "TN-CND-02",
    name: "Crodazoquat MCC",
    category: "Conditioning Emulsifiers",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2021/12/Crodazoq-MCc-300x400.jpg",
    inci: "Cetearyl Alcohol, Behentrimonium Methosulfate, Quaternium-87",
    desc: "Multi-cultural hair conditioning system engineered for coily, curly, and treated hair.",
    grade: "Cosmetic Grade",
    useFor: ["Haircare"],
    phase: "Oil Phase (75°C)",
    usage: "3% – 8%",
    packs: [
      { label: "100g", price: 1300 },
      { label: "500g", price: 4450 }
    ]
  },
  {
    id: "varisoft-eq-65",
    sku: "TN-CND-03",
    name: "Varisoft EQ 65",
    category: "Conditioning Emulsifiers",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2022/02/Hair-emulsifier-Varisoft.jpg",
    inci: "Distearoylethyl Dimonium Chloride, Cetearyl Alcohol",
    desc: "Natural-origin biodegradable esterquat delivering soft combability without buildup.",
    grade: "ECOCERT / Natural",
    useFor: ["Haircare"],
    phase: "Oil Phase (75°C)",
    usage: "2% – 8%",
    packs: [
      { label: "100g", price: 1250 },
      { label: "500g", price: 3800 },
      { label: "1kg", price: 6500 }
    ]
  },

  /* 7. WAXES (4) */
  {
    id: "beeswax-local",
    sku: "TN-WAX-01",
    name: "Beeswax (Local)",
    category: "Waxes",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-waxes",
    image: WP_BASE + "2021/12/Beeswax-local-300x329.jpg",
    inci: "Cera Alba",
    desc: "Kenyan natural beeswax blocks offering warm honey aroma for salves, balms, and candles.",
    grade: "Unrefined",
    useFor: ["Balms & Butters", "Skincare"],
    phase: "Oil Phase (62–65°C)",
    usage: "2% – 25%",
    packs: [
      { label: "250g", price: 850 },
      { label: "500g", price: 1500 },
      { label: "1kg", price: 2600 }
    ]
  },
  {
    id: "beeswax-pellets-white",
    sku: "TN-WAX-02",
    name: "Beeswax Pellets (White)",
    category: "Waxes",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-waxes",
    image: WP_BASE + "2022/01/Waxes-White-Beeswax-100g-250g-500g-1kg.jpg",
    inci: "Cera Alba",
    desc: "Refined odour-neutral pastilles melting quickly for bright white creams and lip balms.",
    grade: "ECOCERT / Natural",
    useFor: ["Balms & Butters", "Skincare"],
    phase: "Oil Phase (62–65°C)",
    usage: "2% – 25%",
    packs: [
      { label: "100g", price: 600 },
      { label: "250g", price: 1350 },
      { label: "500g", price: 2500 }
    ]
  },
  {
    id: "beeswax-pellets-yellow",
    sku: "TN-WAX-03",
    name: "Beeswax Pellets (Yellow)",
    category: "Waxes",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-waxes",
    image: WP_BASE + "2022/01/Waxes-Yellow-Beeswax-100g-250g-500g-1kg.jpg",
    inci: "Cera Alba",
    desc: "Filtered golden beeswax pellets for easy weighing in lip balms, salves, and body bars.",
    grade: "Unrefined",
    useFor: ["Balms & Butters", "Skincare"],
    phase: "Oil Phase (62–65°C)",
    usage: "2% – 25%",
    packs: [
      { label: "100g", price: 500 },
      { label: "250g", price: 1100 },
      { label: "500g", price: 2000 }
    ]
  },
  {
    id: "cera-bellina",
    sku: "TN-WAX-04",
    name: "Cera Bellina",
    category: "Waxes",
    inciGroup: "Emulsifiers & Waxes",
    tone: "tone-waxes",
    image: WP_BASE + "2021/12/Cera-Bellina-300x357.jpg",
    inci: "Polyglyceryl-3 Beeswax",
    desc: "Hydrophilic beeswax derivative preventing graininess in shea balms and forming oleogels.",
    grade: "ECOCERT / Natural",
    useFor: ["Balms & Butters", "Skincare"],
    phase: "Oil Phase (65–70°C)",
    usage: "3% – 20%",
    packs: [
      { label: "100g", price: 1350 },
      { label: "500g", price: 4850 }
    ]
  },

  /* 8. THICKENERS (5) */
  {
    id: "carbomer-940",
    sku: "TN-THK-01",
    name: "Carbomer 940",
    category: "Thickeners",
    inciGroup: "Thickeners & Surfactants",
    tone: "tone-waxes",
    image: WP_BASE + "2022/01/Thickeners-Carbomer-940.jpg",
    inci: "Carbomer",
    desc: "High-clarity polymer thickener creating crystal-clear gels, serums, and styling gels.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase (Neutralize)",
    usage: "0.2% – 1.0%",
    packs: [
      { label: "100g", price: 700 },
      { label: "250g", price: 2600 },
      { label: "500g", price: 5500 }
    ]
  },
  {
    id: "guar-gum",
    sku: "TN-THK-02",
    name: "Guar Gum",
    category: "Thickeners",
    inciGroup: "Thickeners & Surfactants",
    tone: "tone-waxes",
    image: WP_BASE + "2021/12/Guar-gum-terra-naturals-kenya-300x400.jpg",
    inci: "Cyamopsis Tetragonoloba Gum",
    desc: "Plant-derived polysaccharide thickening natural washes, lotions, and conditioning gels.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase",
    usage: "0.2% – 1.5%",
    packs: [
      { label: "100g", price: 700 },
      { label: "250g", price: 2600 },
      { label: "500g", price: 5500 }
    ]
  },
  {
    id: "hec",
    sku: "TN-THK-03",
    name: "Hydroxyethylcellulose (HEC)",
    category: "Thickeners",
    inciGroup: "Thickeners & Surfactants",
    tone: "tone-waxes",
    image: WP_BASE + "2021/12/HEC-300x400.jpg",
    inci: "Hydroxyethylcellulose",
    desc: "Non-ionic cellulose gelling agent yielding silky, non-tacky serums and surfactant washes.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase",
    usage: "0.5% – 2.0%",
    packs: [
      { label: "100g", price: 700 },
      { label: "250g", price: 2600 },
      { label: "500g", price: 5500 }
    ]
  },
  {
    id: "liquid-crothix",
    sku: "TN-THK-04",
    name: "Liquid Crothix",
    category: "Thickeners",
    inciGroup: "Thickeners & Surfactants",
    tone: "tone-waxes",
    image: WP_BASE + "2022/02/Thickner-Crothix.jpg",
    inci: "PEG-150 Pentaerythrityl Tetrastearate, PEG-6 Caprylic/Capric Glycerides",
    desc: "Easy-to-pour liquid thickener built specifically for sulfate-free shampoos and body washes.",
    grade: "Cosmetic Grade",
    useFor: ["Haircare", "Skincare"],
    phase: "Surfactant Phase",
    usage: "0.5% – 4.0%",
    packs: [
      { label: "100ml", price: 850 },
      { label: "500ml", price: 3850 }
    ]
  },
  {
    id: "xanthan-gum-powder",
    sku: "TN-THK-05",
    name: "Xanthan Gum Powder",
    category: "Thickeners",
    inciGroup: "Thickeners & Surfactants",
    tone: "tone-waxes",
    image: WP_BASE + "2021/12/Xanthan-gum-terra-naturals-kenya-300x400.jpg",
    inci: "Xanthan Gum",
    desc: "High-purity cosmetic stabilizer (opaque & clear grades) for gels starting from 0.3%.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Glycerin Slurry → Water",
    usage: "0.3% – 1.0%",
    packs: [
      { label: "100g", price: 700 },
      { label: "250g", price: 2600 },
      { label: "500g", price: 5500 }
    ]
  },

  /* 9. PRESERVATIVES (6) */
  {
    id: "germall-plus",
    sku: "TN-PRS-01",
    name: "Germall Plus",
    category: "Preservatives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    image: WP_BASE + "2022/01/Germall-Plus.jpg",
    inci: "Propylene Glycol, Diazolidinyl Urea, Iodopropynyl Butylcarbamate",
    desc: "Broad-spectrum water-soluble preservative effective across pH 3–8 in emulsions and gels.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Cool-Down (<40°C)",
    usage: "0.1% – 0.5%",
    packs: [
      { label: "100ml", price: 850 },
      { label: "500ml", price: 2350 }
    ]
  },
  {
    id: "optiphen-plus",
    sku: "TN-PRS-02",
    name: "Optiphen Plus",
    category: "Preservatives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    inci: "Phenoxyethanol, Caprylyl Glycol, Sorbic Acid",
    desc: "Paraben-free liquid preservative offering broad antimicrobial protection below pH 6.0.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Cool-Down (<60°C · pH <6)",
    usage: "0.75% – 1.5%",
    packs: [
      { label: "100ml", price: 1020 },
      { label: "500ml", price: 2500 }
    ]
  },
  {
    id: "phenonip",
    sku: "TN-PRS-03",
    name: "Phenonip",
    category: "Preservatives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    image: WP_BASE + "2022/01/Preservative-phenonip.jpg",
    inci: "Phenoxyethanol, Methylparaben, Ethylparaben, Butylparaben, Propylparaben",
    desc: "Heat-tolerant broad-spectrum preservative compatible with oil-rich scrubs and lotions.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil / Cool-Down (pH 3–8)",
    usage: "0.5% – 1.0%",
    packs: [
      { label: "100ml", price: 1000 },
      { label: "500ml", price: 1850 }
    ]
  },
  {
    id: "potassium-sorbate",
    sku: "TN-PRS-04",
    name: "Potassium Sorbate",
    category: "Preservatives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    image: WP_BASE + "2022/01/Preservative-P-Sorbate.jpg",
    inci: "Potassium Sorbate",
    desc: "ECOCERT yeast and mould inhibitor paired with antibacterial co-preservatives below pH 5.5.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase (pH <5.5)",
    usage: "0.1% – 0.3%",
    packs: [{ label: "100g", price: 450 }]
  },
  {
    id: "preservative-eco-geogard",
    sku: "TN-PRS-05",
    name: "Preservative ECO (Geogard ECT)",
    category: "Preservatives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    inci: "Benzyl Alcohol, Salicylic Acid, Glycerin, Sorbic Acid",
    desc: "ECOCERT and COSMOS-accepted broad-spectrum natural preservative for aqueous skincare.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Cool-Down (<40°C · pH 3–8)",
    usage: "0.6% – 1.0%",
    badge: "ECOCERT",
    packs: [
      { label: "100ml", price: 850 },
      { label: "500ml", price: 2350 }
    ]
  },
  {
    id: "sodium-benzoate",
    sku: "TN-PRS-06",
    name: "Sodium Benzoate",
    category: "Preservatives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    inci: "Sodium Benzoate",
    desc: "Organic-accepted antifungal booster paired with potassium sorbate in low-pH washes.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase (pH <5.0)",
    usage: "0.2% – 0.5%",
    packs: [{ label: "100g", price: 450 }]
  },

  /* 10. ANTIOXIDANTS (2) */
  {
    id: "rosemary-oleoresin",
    sku: "TN-AOX-01",
    name: "Rosemary Oleoresin",
    category: "Antioxidants",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    image: WP_BASE + "2022/01/Rosemary-Oleoresin-300x392.jpg",
    inci: "Rosmarinus Officinalis Leaf Extract",
    desc: "Oil-soluble natural rosemary leaf extract retarding rancidity in carrier oils and balms.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Cool-Down (<40°C)",
    usage: "0.02% – 0.1%",
    packs: [
      { label: "50ml", price: 950 },
      { label: "100ml", price: 1750 }
    ]
  },
  {
    id: "vitamin-e-tocopherol",
    sku: "TN-AOX-02",
    name: "Vitamin E (Tocopherol)",
    category: "Antioxidants",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    image: WP_BASE + "2022/01/VIT-E-3-300x400.jpg",
    inci: "Tocopherol",
    desc: "Oil-soluble antioxidant shielding lipid formulas from oxidation and conditioning skin.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Balms & Butters"],
    phase: "Cool-Down (<40°C)",
    usage: "0.2% – 1.0%",
    packs: [
      { label: "50ml", price: 650 },
      { label: "100ml", price: 1500 }
    ]
  },

  /* 11. CLAYS (8) */
  {
    id: "bentonite-clay",
    sku: "TN-CLY-01",
    name: "Bentonite Clay",
    category: "Clays",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/Clay-Bentonite.jpg",
    inci: "Bentonite",
    desc: "Volcanic Montmorillonite healing clay drawing out impurities and excess sebum. Mix non-metallic.",
    grade: "Unrefined",
    useFor: ["Skincare", "Haircare"],
    phase: "Powder Phase",
    usage: "5% – 30%",
    badge: "Popular",
    packs: [
      { label: "250g", price: 700 },
      { label: "1kg", price: 2450 }
    ]
  },
  {
    id: "french-green-clay",
    sku: "TN-CLY-02",
    name: "French Green Clay",
    category: "Clays",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/Clay-Green-Clay-300x400.jpg",
    inci: "Montmorillonite, Illite",
    desc: "Mineral-rich absorbent green clay tailored for oily, blemish-prone detox facial masks.",
    grade: "Unrefined",
    useFor: ["Skincare"],
    phase: "Powder Phase",
    usage: "5% – 30%",
    packs: [{ label: "250g", price: 850 }]
  },
  {
    id: "french-pink-clay",
    sku: "TN-CLY-03",
    name: "French Pink Clay",
    category: "Clays",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/clay-pink.jpg",
    inci: "Kaolin, Illite",
    desc: "Mild rose-tinted clay gently polishing sensitive, dry, and mature skin without stripping.",
    grade: "Unrefined",
    useFor: ["Skincare"],
    phase: "Powder Phase",
    usage: "5% – 40%",
    packs: [{ label: "250g", price: 850 }]
  },
  {
    id: "french-yellow-clay",
    sku: "TN-CLY-04",
    name: "French Yellow Clay",
    category: "Clays",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/clay-yellow-300x400.jpg",
    inci: "Illite, Kaolin",
    desc: "Gentle toning clay revitalizing dull combination skin in facial masks and artisan soaps.",
    grade: "Unrefined",
    useFor: ["Skincare"],
    phase: "Powder Phase",
    usage: "5% – 35%",
    packs: [{ label: "250g", price: 850 }]
  },
  {
    id: "fullers-earth-clay",
    sku: "TN-CLY-05",
    name: "Fullers Earth Clay",
    category: "Clays",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/Clay-Fullers-3.jpg",
    inci: "Solum Fullonum",
    desc: "High oil-absorbing Multani Mitti clay ideal for clarifying masks and oily-skin cleansers.",
    grade: "Unrefined",
    useFor: ["Skincare"],
    phase: "Powder Phase",
    usage: "5% – 30%",
    packs: [
      { label: "250g", price: 700 },
      { label: "1kg", price: 2400 }
    ]
  },
  {
    id: "kaolin-clay",
    sku: "TN-CLY-06",
    name: "Kaolin Clay",
    category: "Clays",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/Clay-Kaolin-2.jpg",
    inci: "Kaolin",
    desc: "Ultra-gentle white china clay for sensitive masks, daily cleansers, deodorants, and soaps.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Powder Phase",
    usage: "5% – 40%",
    packs: [{ label: "250g", price: 700 }]
  },
  {
    id: "moroccan-ghassoul-clay",
    sku: "TN-CLY-07",
    name: "Moroccan Ghassoul (Rhassoul) Clay",
    category: "Clays",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/Clay-Rhassoul-2.jpg",
    inci: "Moroccan Lava Clay",
    desc: "Atlas Mountain mineral clay famous for clarifying scalp washes and spa body masks.",
    grade: "Unrefined",
    useFor: ["Skincare", "Haircare"],
    phase: "Powder Phase",
    usage: "5% – 35%",
    packs: [{ label: "250g", price: 750 }]
  },
  {
    id: "red-clay",
    sku: "TN-CLY-08",
    name: "Red Clay",
    category: "Clays",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/Clay-Red-2.jpg",
    inci: "Illite, Kaolin",
    desc: "Iron-oxide rich clay adding warm terracotta hue and gentle detox to masks and soaps.",
    grade: "Unrefined",
    useFor: ["Skincare"],
    phase: "Powder Phase",
    usage: "5% – 30%",
    packs: [{ label: "250g", price: 850 }]
  },

  /* 12. EXFOLIANTS (6) */
  {
    id: "liquid-salicylic-acid",
    sku: "TN-EXF-01",
    name: "Liquid Salicylic Acid",
    category: "Exfoliants",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-actives",
    image: WP_BASE + "2022/01/Additives-Salicylic-Acid-30ml-50ml-100ml.jpg",
    inci: "Salicylic Acid, Cocamidopropyl Dimethylamine",
    desc: "Ready-to-use 40% BHA solution with lower irritation for anti-acne peels and scalp washes.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Water / Cool-Down",
    usage: "1.0% – 7.5% solution",
    outOfStock: true,
    packs: [{ label: "30ml", price: 0 }]
  },
  {
    id: "liwa-sandalwood-powder",
    sku: "TN-EXF-02",
    name: "Liwa / Sandalwood Powder",
    category: "Exfoliants",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/Exfoliant-Sandalwood-2-300x400.jpg",
    inci: "Santalum Album Wood Powder",
    desc: "Aromatic finely milled botanical wood powder for coastal-inspired masks and scrubs.",
    grade: "Unrefined",
    useFor: ["Skincare"],
    phase: "Powder / Scrub Base",
    usage: "1% – 10%",
    packs: [
      { label: "100g", price: 700 },
      { label: "500g", price: 3100 }
    ]
  },
  {
    id: "orange-peel-exfoliant",
    sku: "TN-EXF-03",
    name: "Orange Peel Exfoliant",
    category: "Exfoliants",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/Exfoliant-Orange-Peel-2.jpg",
    inci: "Citrus Aurantium Dulcis Peel Powder",
    desc: "Brightening dried citrus peel granules for natural body polishes and cleansing masks.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare"],
    phase: "Cool-Down / Scrub Base",
    usage: "1% – 8%",
    packs: [
      { label: "100g", price: 700 },
      { label: "500g", price: 3100 }
    ]
  },
  {
    id: "red-sandalwood-powder",
    sku: "TN-EXF-04",
    name: "Red Sandalwood Powder (Coarse)",
    category: "Exfoliants",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/Exfoliant-Red-Sandalwood.jpg",
    inci: "Pterocarpus Santalinus Wood Powder",
    desc: "Coarse crimson botanical scrub particle for body bars, exfoliating soaps, and polishes.",
    grade: "Unrefined",
    useFor: ["Skincare"],
    phase: "Scrub / Soap Base",
    usage: "1% – 8%",
    packs: [
      { label: "100g", price: 700 },
      { label: "500g", price: 3100 }
    ]
  },
  {
    id: "volcanic-ash-exfoliant",
    sku: "TN-EXF-05",
    name: "Volcanic Ash Exfoliant",
    category: "Exfoliants",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/Clay-Bentonite-3.jpg",
    inci: "Volcanic Ash",
    desc: "Fine mineral pumice-ash granules delivering deep mechanical polishing in scrubs.",
    grade: "Unrefined",
    useFor: ["Skincare"],
    phase: "Scrub Base",
    usage: "1% – 6%",
    packs: [
      { label: "100g", price: 700 },
      { label: "500g", price: 3100 }
    ]
  },
  {
    id: "walnut-shells-exfoliant",
    sku: "TN-EXF-06",
    name: "Walnut Rounded Shells Exfoliant",
    category: "Exfoliants",
    inciGroup: "Clays & Exfoliants",
    tone: "tone-clays",
    image: WP_BASE + "2022/02/Exfoliant-walnut-shell-powder-300x400.jpeg",
    inci: "Juglans Regia Shell Powder",
    desc: "Smoothly rounded biodegradable walnut granules for body scrubs and foot polishes.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare"],
    phase: "Scrub Base",
    usage: "1% – 6%",
    packs: [
      { label: "100g", price: 800 },
      { label: "500g", price: 3100 }
    ]
  },

  /* 13. ADDITIVES (5) */
  {
    id: "allantoin",
    sku: "TN-ADD-01",
    name: "Allantoin",
    category: "Additives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    image: WP_BASE + "2022/01/Additives-Allantoin.jpg",
    inci: "Allantoin",
    desc: "Calming anti-irritant powder accelerating skin barrier recovery in creams and serums.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare"],
    phase: "Water Phase (Warm)",
    usage: "0.1% – 0.5%",
    packs: [{ label: "100g", price: 1350 }]
  },
  {
    id: "colloidal-oatmeal",
    sku: "TN-ADD-02",
    name: "Colloidal Oatmeal",
    category: "Additives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    image: WP_BASE + "2022/01/Additives-Colloidal-Oatmeal.jpg",
    inci: "Avena Sativa Kernel Flour",
    desc: "Ultra-fine skin-protectant oat flour soothing eczema-prone, dry, and reactive skin.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare"],
    phase: "Cool-Down / Mask Base",
    usage: "1% – 5%",
    packs: [{ label: "100g", price: 1350 }]
  },
  {
    id: "lactic-acid",
    sku: "TN-ADD-03",
    name: "Lactic Acid",
    category: "Additives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    image: WP_BASE + "2022/02/Lactic-Acid-300x400.jpg",
    inci: "Lactic Acid",
    desc: "Gentle alpha-hydroxy acid (AHA) used for pH adjustment, hydration, and brightening toners.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Cool-Down / pH Adjust",
    usage: "0.2% – 5.0%",
    packs: [{ label: "100ml", price: 850 }]
  },
  {
    id: "slick-fix-powder",
    sku: "TN-ADD-04",
    name: "Slick Fix (Oil Locking Powder)",
    category: "Additives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    inci: "Tapioca Starch, Silica",
    desc: "Dry-touch sensory modifier cutting greasiness in whipped body butters and oil balms.",
    grade: "Cosmetic Grade",
    useFor: ["Balms & Butters", "Skincare"],
    phase: "Cool-Down",
    usage: "1% – 5%",
    packs: [{ label: "100g", price: 1250 }]
  },
  {
    id: "sunflower-lecithin",
    sku: "TN-ADD-05",
    name: "Sunflower Lecithin (2oz)",
    category: "Additives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    image: WP_BASE + "2022/02/sunflower-lecithin-300x162.jpg",
    inci: "Lecithin",
    desc: "Soy-free natural phospholipid co-emulsifier delivering cushiony skin feel to emulsions.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Oil / Water Phase",
    usage: "1% – 5%",
    packs: [{ label: "2oz (60ml)", price: 1200 }]
  },

  /* 14. HAIR ADDITIVES (1) */
  {
    id: "cetrimonium-chloride",
    sku: "TN-HAD-01",
    name: "Cetrimonium Chloride",
    category: "Hair Additives",
    inciGroup: "Preservatives & Actives",
    tone: "tone-emulsifiers",
    image: WP_BASE + "2022/04/Centrimonium-Chloride-300x400.jpg",
    inci: "Cetrimonium Chloride",
    desc: "Liquid cationic detangler reducing static and boosting wet-combing slip in conditioners.",
    grade: "Cosmetic Grade",
    useFor: ["Haircare"],
    phase: "Water / Cool-Down",
    usage: "0.5% – 2.0%",
    packs: [
      { label: "100ml", price: 650 },
      { label: "500ml", price: 2250 }
    ]
  },

  /* 15. SURFACTANTS (6) */
  {
    id: "cocamidopropyl-betaine",
    sku: "TN-SRF-01",
    name: "Cocamidopropyl Betaine (CAPB)",
    category: "Surfactants",
    inciGroup: "Thickeners & Surfactants",
    tone: "tone-packaging",
    inci: "Cocamidopropyl Betaine",
    desc: "Mild amphoteric secondary surfactant boosting foam creaminess and viscosity in washes.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase (pH 4.5–6.5)",
    usage: "5% – 20%",
    packs: [
      { label: "250ml", price: 750 },
      { label: "1 Litre", price: 2200 },
      { label: "5 Litres", price: 5500 }
    ]
  },
  {
    id: "coco-glucoside",
    sku: "TN-SRF-02",
    name: "Coco Glucoside",
    category: "Surfactants",
    inciGroup: "Thickeners & Surfactants",
    tone: "tone-packaging",
    inci: "Coco-Glucoside",
    desc: "Plant-derived sulfate-free non-ionic surfactant for gentle facial cleansers and shampoos.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase (pH 4.5–6.5)",
    usage: "5% – 25%",
    packs: [
      { label: "250ml", price: 500 },
      { label: "1 Litre", price: 1500 }
    ]
  },
  {
    id: "decyl-glucoside",
    sku: "TN-SRF-03",
    name: "Decyl Glucoside",
    category: "Surfactants",
    inciGroup: "Thickeners & Surfactants",
    tone: "tone-packaging",
    inci: "Decyl Glucoside",
    desc: "Extra-mild corn and coconut cleanser ideal for sensitive baby washes and foaming cleansers.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase",
    usage: "5% – 25%",
    packs: [
      { label: "500ml", price: 1250 },
      { label: "1 Litre", price: 2150 }
    ]
  },
  {
    id: "hydrogenated-castor-oil",
    sku: "TN-SRF-04",
    name: "Hydrogenated Castor Oil",
    category: "Surfactants",
    inciGroup: "Thickeners & Surfactants",
    tone: "tone-packaging",
    image: WP_BASE + "2022/02/Surfactants-Hydrogenated-Castor-2.jpg",
    inci: "PEG-40 Hydrogenated Castor Oil",
    desc: "Reliable solubilizer dispersing essential oils and fragrances cleanly into watery toners.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Pre-mix with Essential Oil",
    usage: "1% – 10%",
    packs: [
      { label: "250ml", price: 950 },
      { label: "500ml", price: 1800 }
    ]
  },
  {
    id: "miranol",
    sku: "TN-SRF-05",
    name: "Miranol (Disodium Cocoamphodiacetate)",
    category: "Surfactants",
    inciGroup: "Thickeners & Surfactants",
    tone: "tone-packaging",
    image: WP_BASE + "2022/02/Surfactants-Miranol.jpg",
    inci: "Disodium Cocoamphodiacetate",
    desc: "Ultra-mild no-tears amphoteric surfactant softening baby shampoos and facial washes.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase",
    usage: "4% – 15%",
    packs: [
      { label: "250ml", price: 500 },
      { label: "1 Litre", price: 1800 }
    ]
  },
  {
    id: "sodium-lauroyl-sarcosinate",
    sku: "TN-SRF-06",
    name: "Sodium Lauroyl Sarcosinate",
    category: "Surfactants",
    inciGroup: "Thickeners & Surfactants",
    tone: "tone-packaging",
    inci: "Sodium Lauroyl Sarcosinate",
    desc: "Sulfate-free amino acid surfactant creating dense, silky lather in shampoos and face washes.",
    grade: "Cosmetic Grade",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase (pH 5.0–6.5)",
    usage: "5% – 25%",
    packs: [
      { label: "250ml", price: 750 },
      { label: "1 Litre", price: 2400 },
      { label: "5 Litres", price: 5500 }
    ]
  },

  /* 16. HUMECTANTS (2) */
  {
    id: "sodium-lactate-60",
    sku: "TN-HUM-01",
    name: "Sodium Lactate, 60%",
    category: "Humectants",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    image: WP_BASE + "2022/02/Humectant-Sodium-Lactate.jpg",
    inci: "Sodium Lactate",
    desc: "Superior liquid humectant boosting moisture retention in lotions and hardening cold-process soaps.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Water / Cool-Down",
    usage: "1% – 3%",
    packs: [
      { label: "100ml", price: 650 },
      { label: "500ml", price: 1850 },
      { label: "1 Litre", price: 3250 }
    ]
  },
  {
    id: "vegetable-glycerine",
    sku: "TN-HUM-02",
    name: "Vegetable Glycerine",
    category: "Humectants",
    inciGroup: "Preservatives & Actives",
    tone: "tone-actives",
    image: WP_BASE + "2022/02/Humectant-Glycerin.jpg",
    inci: "Glycerin",
    desc: "Pure plant-derived humectant drawing moisture into skin, hydrating hair, and slurrying gums.",
    grade: "ECOCERT / Natural",
    useFor: ["Skincare", "Haircare"],
    phase: "Water Phase",
    usage: "1% – 5%",
    packs: [
      { label: "250ml", price: 400 },
      { label: "500ml", price: 650 },
      { label: "1 Litre", price: 1050 }
    ]
  },

  /* 17. PACKAGING (2) */
  {
    id: "glass-bottle-with-dropper",
    sku: "TN-PKG-01",
    name: "Glass Bottle With Dropper",
    category: "Packaging",
    tone: "tone-packaging",
    inci: "Cosmetic Glass & Pipette",
    desc: "Refillable cosmetic glass serum bottles with dropper pipettes for facial oils and actives.",
    grade: "Cosmetic Grade",
    useFor: ["Packaging"],
    phase: "Finished Packaging",
    usage: "Serums & Oils",
    packs: [
      { label: "30ml Single", price: 75 },
      { label: "50ml Single", price: 110 },
      { label: "100ml Single", price: 150 }
    ]
  },
  {
    id: "glass-jars",
    sku: "TN-PKG-02",
    name: "Glass Jars",
    category: "Packaging",
    tone: "tone-packaging",
    inci: "Cosmetic Glass Jar",
    desc: "Heavyweight retail cosmetic glass jars suited for body butters, balms, and facial creams.",
    grade: "Cosmetic Grade",
    useFor: ["Packaging"],
    phase: "Finished Packaging",
    usage: "Butters & Creams",
    packs: [
      { label: "30g Jar", price: 50 },
      { label: "100g Jar", price: 150 },
      { label: "250g Jar", price: 250 }
    ]
  }
];

/* Serve locally optimised, uniformly framed 800x800 product photos (sourced from terra.co.ke) */
PRODUCTS.forEach((p) => {
  if (p.image) p.image = `assets/products/${p.id}.jpg`;
});

/* Order catalog so all SKUs with product photos appear first while preserving relative order */
PRODUCTS.sort((a, b) => Number(Boolean(b.image)) - Number(Boolean(a.image)));

/* Derive full 77-ingredient INCI Reference Library directly from stocked cosmetic SKUs */
const INCI_DATA = PRODUCTS.filter((p) => p.category !== "Packaging").map((p) => ({
  common: p.name,
  inci: p.inci,
  group: p.inciGroup || "Preservatives & Actives",
  category: p.category,
  fn: p.desc,
  phase: p.phase,
  usage: p.usage,
  shopSearch: p.name
}));

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
  if (product.outOfStock) {
    showToast(`${product.name} is currently out of stock.`);
    return;
  }
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
  if (cartTotalEl) cartTotalEl.textContent = formatKES(cartSubEl ? total : subtotal);

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
      const photoHtml = product.image
        ? `<div class="qv-photo-box"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy"></div>`
        : "";
      const restockWa = encodeURIComponent(
        `Hello Terra Naturals, please notify me when ${product.name} (${product.sku}) is back in stock.`
      );

      contentEl.innerHTML = `
        ${photoHtml}
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

        ${
          product.outOfStock
            ? `<div class="qv-buy-row">
                <a href="https://wa.me/254790559934?text=${restockWa}" target="_blank" rel="noopener" class="btn btn-outline" style="width:100%;">
                  Request Restock Alert via WhatsApp
                </a>
              </div>`
            : `
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
              </div>`
        }
      `;

      const qvImg = contentEl.querySelector(".qv-photo-box img");
      if (qvImg) {
        qvImg.addEventListener("error", () => {
          const box = qvImg.closest(".qv-photo-box");
          if (box) box.remove();
        });
      }

      if (!product.outOfStock) {
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
    }

    renderQv();
    backdrop.classList.add("open");
  };
}

/* Reusable Product Card Renderer (Real Photos + Graceful Botanical Fallback) */
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
      const visualClass = p.image ? `product-visual has-photo ${p.tone || ""}` : `product-visual ${p.tone || ""}`;
      const imgHtml = p.image
        ? `<img class="product-photo" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy">`
        : "";
      const stockHtml = p.outOfStock
        ? `<span class="stock-dot out">Out of Stock</span>`
        : `<span class="stock-dot">In Stock</span>`;
      const restockWa = encodeURIComponent(
        `Hello Terra Naturals, please notify me when ${p.name} (${p.sku}) is restocked.`
      );

      return `
      <article class="product-card" data-id="${p.id}">
        <div class="${visualClass}">
          ${imgHtml}
          <div class="product-visual-overlay">
            <div class="product-visual-top">
              <span class="product-cat-tag">${escapeHtml(p.category)}</span>
              ${badgeHtml}
            </div>
            <span class="product-inci">${escapeHtml(p.inci)}</span>
          </div>
        </div>
        <div class="product-body">
          <div class="product-meta-row">
            <span>${escapeHtml(p.grade)}</span>
            ${stockHtml}
          </div>
          ${
            allowQuickView
              ? `<button type="button" class="product-title-btn js-quick-view">${escapeHtml(p.name)}</button>`
              : `<h3>${escapeHtml(p.name)}</h3>`
          }
          ${p.image ? `<span class="product-inci-body">${escapeHtml(p.inci)}</span>` : ""}
          <p class="product-desc">${escapeHtml(p.desc)}</p>
          ${
            p.outOfStock
              ? `<div class="pack-row">
                  <span style="font-size:0.8rem;color:var(--muted);">30ml / 50ml / 100ml</span>
                  <span class="product-price" style="color:var(--muted);">Restocking</span>
                </div>
                <div class="product-card-actions">
                  <a href="https://wa.me/254790559934?text=${restockWa}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="flex:1;">Notify Me</a>
                  ${allowQuickView ? `<button type="button" class="btn btn-soft js-quick-view">Details</button>` : ""}
                </div>`
              : `<div class="pack-row">
                  <select class="pack-select" aria-label="Select pack size for ${escapeHtml(p.name)}">
                    ${options}
                  </select>
                  <span class="product-price">${formatKES(p.packs[0].price)}</span>
                </div>
                <div class="product-card-actions">
                  <button type="button" class="btn btn-primary add-to-cart-btn">Add to Bag</button>
                  ${allowQuickView ? `<button type="button" class="btn btn-soft js-quick-view">Details</button>` : ""}
                </div>`
          }
        </div>
      </article>`;
    })
    .join("");

  container.querySelectorAll(".product-card").forEach((card) => {
    const product = PRODUCTS.find((x) => x.id === card.dataset.id);
    const imgEl = card.querySelector(".product-photo");
    if (imgEl) {
      imgEl.addEventListener("error", () => {
        const stage = imgEl.closest(".product-visual");
        imgEl.remove();
        if (stage) stage.classList.remove("has-photo");
      });
    }

    const select = card.querySelector(".pack-select");
    const priceEl = card.querySelector(".product-price");
    const addBtn = card.querySelector(".add-to-cart-btn");

    if (select && priceEl) {
      select.addEventListener("change", () => {
        priceEl.textContent = formatKES(product.packs[Number(select.value)].price);
      });
    }

    if (addBtn && select) {
      addBtn.addEventListener("click", () => {
        addToCart(product, product.packs[Number(select.value)], 1);
      });
    }

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

  const MAX_PRICE_CEIL = 2500;
  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

  const filterState = {
    category: "All",
    search: "",
    maxPrice: MAX_PRICE_CEIL,
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
    filterState.maxPrice = MAX_PRICE_CEIL;
    filterState.uses = [];
    filterState.grades = [];
    filterState.bulkOnly = false;
    filterState.sort = "featured";

    if (searchInput) searchInput.value = "";
    if (priceRangeInput) priceRangeInput.value = MAX_PRICE_CEIL;
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
    if (filterState.maxPrice < MAX_PRICE_CEIL) {
      chips.push({ label: `Up to ${formatKES(filterState.maxPrice)}`, clear: () => { filterState.maxPrice = MAX_PRICE_CEIL; if (priceRangeInput) priceRangeInput.value = MAX_PRICE_CEIL; } });
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
      chips.push({ label: "1kg / 1L+ Bulk", clear: () => { filterState.bulkOnly = false; if (bulkOnlyCheckbox) bulkOnlyCheckbox.checked = false; } });
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
      maxPriceLabel.textContent = filterState.maxPrice >= MAX_PRICE_CEIL ? "All Prices" : `Up to ${formatKES(filterState.maxPrice)}`;
    }

    const q = filterState.search.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => {
      const catOk = filterState.category === "All" || p.category === filterState.category;
      const basePrice = p.packs[0].price;
      const priceOk = filterState.maxPrice >= MAX_PRICE_CEIL || (basePrice > 0 && basePrice <= filterState.maxPrice);
      const useOk = !filterState.uses.length || filterState.uses.some((u) => p.useFor.includes(u));
      const gradeOk = !filterState.grades.length || filterState.grades.includes(p.grade);
      const bulkOk = !filterState.bulkOnly || p.packs.some((pk) => /1kg|5kg|1 Litre|5 Litres/i.test(pk.label));
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
      list = [...list].sort((a, b) => (a.packs[0].price || 999999) - (b.packs[0].price || 999999));
    } else if (filterState.sort === "price-desc") {
      list = [...list].sort((a, b) => b.packs[0].price - a.packs[0].price);
    } else if (filterState.sort === "name-asc") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (countLabel) {
      countLabel.textContent = `Showing ${list.length} of ${PRODUCTS.length} SKUs`;
    }

    renderActiveChips();
    renderProductCardsInto(grid, list, true);

    const inlineReset = document.getElementById("inlineResetFiltersBtn");
    if (inlineReset) inlineReset.addEventListener("click", resetAllFilters);
  }

  /* Interactive 17-Category Directory Cloud */
  document.querySelectorAll(".js-cat-jump").forEach((chip) => {
    chip.addEventListener("click", () => {
      const targetCat = chip.dataset.cat;
      if (targetCat && categories.includes(targetCat)) {
        filterState.category = targetCat;
        renderCategoryList();
        applyAndRender();
        const topEl = document.getElementById("shopCatalogTop");
        if (topEl) topEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

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
        r.category.toLowerCase().includes(q) ||
        r.fn.toLowerCase().includes(q) ||
        r.phase.toLowerCase().includes(q);
      return groupOk && qOk;
    });

    if (countEl) countEl.textContent = `${rows.length} of ${INCI_DATA.length} cosmetic ingredients`;

    tbody.innerHTML = rows
      .map(
        (r) => `
        <tr>
          <td>
            <strong>${escapeHtml(r.common)}</strong>
            <div style="font-size:0.74rem;color:var(--muted);margin-top:0.15rem;">${escapeHtml(r.category)}</div>
          </td>
          <td><span class="inci-code">${escapeHtml(r.inci)}</span></td>
          <td>
            <div>${escapeHtml(r.fn)}</div>
            <div style="font-size:0.75rem;color:var(--forest-soft);margin-top:0.2rem;font-weight:600;">${escapeHtml(r.phase)}</div>
          </td>
          <td><strong>${escapeHtml(r.usage)}</strong></td>
          <td>
            <a href="shop.html?search=${encodeURIComponent(r.shopSearch)}" class="btn btn-soft btn-sm">Shop →</a>
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
