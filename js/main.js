/**
 * ══════════════════════════════════════════════════════════════════
 * CHARAN GOLKONDA — DIRECTOR OF PHOTOGRAPHY
 * Charan Golkonda | Director of Photography & Commercial Photographer
 * Full Media Vault: 20 Commercial Films (TVC) & 71 Vertical Reels (9:16)
 * ══════════════════════════════════════════════════════════════════
 */

// Global Profile
const PROFILE = {
  name: "Charan Golkonda",
  title: "Director of Photography",
  location: "Hyderabad, India",
  coordinates: "17.3850° N, 78.4867° E",
  email: "charangolkonda@gmail.com",
  phone: "+91-7337597128",
  instagram: "https://www.instagram.com/charangolkonda/",
  linkedin: "https://www.linkedin.com/in/charangolkonda/",
  behance: "https://www.behance.net/gscphotographhy",
  availability: "AVAILABLE TO TRAVEL WORLDWIDE"
};

// 20 Commercial TVC Films Archive
const FEATURED_PROJECTS = [
  {
    "id": "tvc-1",
    "title": "Karani Couture \u2014 Silk & Silhouette Anthem",
    "category": "Commercial TVC",
    "discipline": "Commercial",
    "year": "2024",
    "cover": "assets/tvc/tvc-01-1.jpg",
    "video": "assets/tvc/tvc-01-1.mov",
    "desc": "High-fashion bridal commercial exploring regal silk weaves, chiaroscuro contrast, and slow-motion fabric dynamics.",
    "client": "Karani Couture",
    "agency": "Villionaire Studio",
    "camera": "ARRI Alexa Mini LF",
    "lens": "Cooke Anamorphic /i",
    "format": "2.39:1 Anamorphic",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-2",
    "title": "Karani Couture \u2014 Royal Drapes & Heritage",
    "category": "Commercial TVC",
    "discipline": "Commercial",
    "year": "2023",
    "cover": "assets/tvc/tvc-02-2.jpg",
    "video": "assets/tvc/tvc-02-2.mov",
    "desc": "Elegantly framed commercial film honoring traditional craftsmanship, golden embroidery, and bespoke tailoring.",
    "client": "Karani Couture",
    "agency": "In-house Creative",
    "camera": "Sony FX9",
    "lens": "Zeiss Supreme Primes",
    "format": "16:9 Widescreen",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-3",
    "title": "Nune Edible Oils \u2014 Pure Culinary Heritage",
    "category": "Commercial TVC",
    "discipline": "Commercial",
    "year": "2023",
    "cover": "assets/tvc/tvc-03-ad_2_nune.jpg",
    "video": "assets/tvc/tvc-03-ad_2_nune.mp4",
    "desc": "Cultural brand film celebrating culinary warmth, brass kadai cooking, golden oil pours, and festive aromas.",
    "client": "Nune Edible Oils",
    "agency": "Brand Matrix",
    "camera": "RED Gemini 5K",
    "lens": "Cooke S4/i",
    "format": "16:9 Widescreen",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-4",
    "title": "Royal Jewels \u2014 Alludu D1 Bridal Story",
    "category": "Commercial TVC",
    "discipline": "Commercial",
    "year": "2022",
    "cover": "assets/tvc/tvc-04-alludu-d1.jpg",
    "video": "assets/tvc/tvc-04-alludu-d1.mp4",
    "desc": "Intricate macro facet lighting and delicate silk drapery capturing gold craftsmanship and heartfelt wedding bonds.",
    "client": "Royal Jewels",
    "agency": "Aura Communications",
    "camera": "ARRI Alexa Mini",
    "lens": "Master Macro 100mm",
    "format": "2.39:1 Anamorphic",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-5",
    "title": "Avon Cycles \u2014 Champions Don't Wait",
    "category": "Sports TVC",
    "discipline": "Sports & Action",
    "year": "2023",
    "cover": "assets/tvc/tvc-05-champions-dont-wait.jpg",
    "video": "assets/tvc/tvc-05-champions-dont-wait.mp4",
    "desc": "Kinetic shutter speeds and high-contrast tracking capturing athlete power, explosive sprint speed, and stadium flare.",
    "client": "Avon Cycles",
    "agency": "Leo Burnett India",
    "camera": "Sony FX9 & Tracking Rig",
    "lens": "Angenieux Optimo Zoom",
    "format": "16:9 Cinema",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-6",
    "title": "Avon Cycles \u2014 Speed, Power & Style",
    "category": "Sports TVC",
    "discipline": "Sports & Action",
    "year": "2022",
    "cover": "assets/tvc/tvc-06-cricketers-ride-with-speed-power-and-style.jpg",
    "video": "assets/tvc/tvc-06-cricketers-ride-with-speed-power-and-style.mp4",
    "desc": "High-octane cycling commercial showcasing speed, precision engineering, aerodynamic frame curves, and athlete grit.",
    "client": "Avon Cycles",
    "agency": "Leo Burnett India",
    "camera": "Sony FX9 High Speed",
    "lens": "Canon K35 Primes",
    "format": "16:9 Cinema",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-7",
    "title": "Royal Jewels \u2014 Daughter D1 Heirloom Cut",
    "category": "Commercial TVC",
    "discipline": "Commercial",
    "year": "2021",
    "cover": "assets/tvc/tvc-07-daughter-d1.jpg",
    "video": "assets/tvc/tvc-07-daughter-d1.mp4",
    "desc": "Emotionally resonant heritage jewellery commercial celebrating heirloom treasures passed down across generations.",
    "client": "Royal Jewels",
    "agency": "Aura Communications",
    "camera": "ARRI Alexa Classic",
    "lens": "Zeiss Ultra Primes",
    "format": "16:9 Widescreen",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-8",
    "title": "The Royal Heritage \u2014 Fin Collection Master",
    "category": "Commercial TVC",
    "discipline": "Commercial",
    "year": "2021",
    "cover": "assets/tvc/tvc-08-fin.jpg",
    "video": "assets/tvc/tvc-08-fin.mp4",
    "desc": "Opulent visual study of rare uncut diamonds, emerald luster, and regal bridal adornment in dramatic candlelight.",
    "client": "Royal Heritage",
    "agency": "Siren Media",
    "camera": "RED Dragon 6K",
    "lens": "Leica R Primes",
    "format": "2.39:1 Anamorphic",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-9",
    "title": "Jewel June Update \u2014 Summer Diamond Sparkle",
    "category": "Commercial TVC",
    "discipline": "Commercial",
    "year": "2020",
    "cover": "assets/tvc/tvc-09-jewel-june-update-j10.jpg",
    "video": "assets/tvc/tvc-09-jewel-june-update-j10.mp4",
    "desc": "High-speed macro facets capturing prismatic refraction, diamond fire, and flawless platinum craftsmanship.",
    "client": "Jewel Collection",
    "agency": "Spark Creative",
    "camera": "Sony FS7 II",
    "lens": "Laowa Probe & Macro",
    "format": "16:9 Widescreen",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-10",
    "title": "Jyothi Chicory \u2014 Agro Plant & Architecture",
    "category": "Architecture",
    "discipline": "Architecture",
    "year": "2020",
    "cover": "assets/tvc/tvc-10-jyothi-chicory.jpg",
    "video": "assets/tvc/tvc-10-jyothi-chicory.mov",
    "desc": "Expansive industrial cinematography capturing processing facilities, modern architectural silos, and dawn light.",
    "client": "Jyothi Chicory",
    "agency": "AgroTech Media",
    "camera": "Sony FS7 II & Gimbal",
    "lens": "Sigma Cine Primes",
    "format": "16:9 Widescreen",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-11",
    "title": "Loreal Hair Care \u2014 Salon Volume & Shine",
    "category": "Fashion & Beauty",
    "discipline": "Fashion & Beauty",
    "year": "2023",
    "cover": "assets/tvc/tvc-11-loreal-hai-hair.jpg",
    "video": "assets/tvc/tvc-11-loreal-hai-hair.mp4",
    "desc": "Luminous beauty lighting, high-speed slow-motion hair toss dynamics, and specular bounce reflections.",
    "client": "L'Or\u00e9al Professional",
    "agency": "Publicis Groupe",
    "camera": "Phantom Flex 4K",
    "lens": "Cooke S4/i",
    "format": "16:9 Widescreen",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-12",
    "title": "Namishree \u2014 Walk In The Clouds Luxury",
    "category": "Architecture",
    "discipline": "Architecture",
    "year": "2022",
    "cover": "assets/tvc/tvc-12-namishree-walk-in-the-clouds.jpg",
    "video": "assets/tvc/tvc-12-namishree-walk-in-the-clouds.mov",
    "desc": "Luxury high-rise residential film moving through skydeck infinity pools, glass atriums, and sunset cloudscapes.",
    "client": "Namishree Infrastructure",
    "agency": "Urban Spaces",
    "camera": "ARRI Alexa Mini",
    "lens": "Zeiss CP.3 Primes",
    "format": "2.39:1 CinemaScope",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-13",
    "title": "Prakruti Avenues \u2014 Coastal Green Horizons",
    "category": "Architecture",
    "discipline": "Architecture",
    "year": "2019",
    "cover": "assets/tvc/tvc-13-prakruti-avenues.jpg",
    "video": "assets/tvc/tvc-13-prakruti-avenues.mp4",
    "desc": "Breathtaking landscape cinematography charting sprawling eco-townships, morning mist, and open horizons.",
    "client": "Prakruti Avenues",
    "agency": "EcoVision Studios",
    "camera": "Sony FS7",
    "lens": "Fujinon MK Zoom",
    "format": "16:9 Widescreen",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-14",
    "title": "Trident Spaces \u2014 Next-Gen Corporate Architecture",
    "category": "Architecture",
    "discipline": "Architecture",
    "year": "2021",
    "cover": "assets/tvc/tvc-14-trident-j9.jpg",
    "video": "assets/tvc/tvc-14-trident-j9.mp4",
    "desc": "Corporate film on Trident Spaces' modern tech campus: clean facades, minimalist atriums and geometric daylight.",
    "client": "Trident Spaces",
    "agency": "Studio Matrix",
    "camera": "RED V-Raptor 8K",
    "lens": "Leica Summicron-C",
    "format": "16:9 Cinema",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-15",
    "title": "Avon Cycles \u2014 Heinrich Klaasen Power Drive",
    "category": "Sports TVC",
    "discipline": "Sports & Action",
    "year": "2023",
    "cover": "assets/tvc/tvc-15-top-gear-pe-baat-ho-rahi-thi-game-ki-par-klaa.jpg",
    "video": "assets/tvc/tvc-15-top-gear-pe-baat-ho-rahi-thi-game-ki-par-klaa.mp4",
    "desc": "TVC for Avon Cycles starring cricketer Heinrich Klaasen, shot with dynamic tracking to match his power game.",
    "client": "Avon Cycles",
    "agency": "Leo Burnett India",
    "camera": "Sony FX9 High-Speed Rig",
    "lens": "Angenieux Optimo Zoom",
    "format": "16:9 Cinema",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-16",
    "title": "Vrindavan \u2014 Signature Luxury Residences",
    "category": "Architecture",
    "discipline": "Architecture",
    "year": "2022",
    "cover": "assets/tvc/tvc-16-vrindavan-j10.jpg",
    "video": "assets/tvc/tvc-16-vrindavan-j10.mp4",
    "desc": "Architectural film for Vrindavan's luxury residences, moving from twilight exteriors to open living spaces and soft natural light.",
    "client": "Vrindavan Estates",
    "agency": "Design Archetype",
    "camera": "ARRI Amira",
    "lens": "Zeiss Supreme Primes",
    "format": "2.39:1 CinemaScope",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-17",
    "title": "Zomoz \u2014 Flavors of the Steamer",
    "category": "Commercial TVC",
    "discipline": "Commercial",
    "year": "2024",
    "cover": "assets/tvc/tvc-17-zomoz-always-better-momos.jpg",
    "video": "assets/tvc/tvc-17-zomoz-always-better-momos.mp4",
    "desc": "High-energy food TVC for Zomoz Momos, built around sizzling pan-fries, rising steam and bold, colourful framing.",
    "client": "Zomoz Momos",
    "agency": "Creative Cartel",
    "camera": "ARRI Alexa Mini LF",
    "lens": "Cooke Anamorphic /i",
    "format": "16:9 Widescreen",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-18",
    "title": "Zomoz \u2014 Flavors of the Steamer Part 2",
    "category": "Commercial TVC",
    "discipline": "Commercial",
    "year": "2024",
    "cover": "assets/tvc/tvc-18-zomoz-always-better-momos-2.jpg",
    "video": "assets/tvc/tvc-18-zomoz-always-better-momos-2.mp4",
    "desc": "Dynamic tabletop food cinematography highlighting hand-rolled dumplings, aromatic dipping sauces, and slow-motion sizzle.",
    "client": "Zomoz Momos",
    "agency": "Creative Cartel",
    "camera": "ARRI Alexa Mini LF",
    "lens": "Cooke Anamorphic /i",
    "format": "16:9 Widescreen",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-19",
    "title": "Zomoz \u2014 Crispy Pan-Fry Brand Film",
    "category": "Commercial TVC",
    "discipline": "Commercial",
    "year": "2024",
    "cover": "assets/tvc/tvc-19-zomoz-always-better-momos.jpg",
    "video": "assets/tvc/tvc-19-zomoz-always-better-momos.mp4",
    "desc": "Sensory culinary showcase capturing crunch textures, dipping chili oil drizzle, and mouthwatering close-up framing.",
    "client": "Zomoz Momos",
    "agency": "Creative Cartel",
    "camera": "Sony FX6 & Macro",
    "lens": "Sony G-Master 90mm Macro",
    "format": "16:9 Widescreen",
    "role": "Director of Photography"
  },
  {
    "id": "tvc-20",
    "title": "Commercial Beauty Shots \u2014 Studio Lighting Reel",
    "category": "Commercial TVC",
    "discipline": "Commercial",
    "year": "2021",
    "cover": "assets/tvc/tvc-20-beauty-shots.jpg",
    "video": "assets/tvc/tvc-20-beauty-shots.mov",
    "desc": "Masterclass lighting reel demonstrating soft diffused wrap keys, high-gloss specular reflections, and cinematic skin tone rendering.",
    "client": "Studio Production Vault",
    "agency": "In-house Master",
    "camera": "ARRI Alexa Mini",
    "lens": "Cooke Speed Panchro",
    "format": "2.39:1 Anamorphic",
    "role": "Director of Photography"
  }
];

// 71 Native Vertical Reels Archive (9:16)
const SHORTS = [
  {
    "id": "reel-1",
    "title": "Hero Spices \u2014 Red Chilli Powder Showcase",
    "tag": "Hero Spices",
    "cover": "assets/shorts/reel-01-001_hero-spice-red-chilli-powder.jpg",
    "video": "assets/shorts/reel-01-001_hero-spice-red-chilli-powder.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-2",
    "title": "Hero Spices \u2014 Pure Golden Turmeric",
    "tag": "Hero Spices",
    "cover": "assets/shorts/reel-02-002_herospice-turmeric-powder.jpg",
    "video": "assets/shorts/reel-02-002_herospice-turmeric-powder.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-3",
    "title": "Hero Spices \u2014 Ground Coriander Aroma",
    "tag": "Hero Spices",
    "cover": "assets/shorts/reel-03-003_herospice-coriander-powder.jpg",
    "video": "assets/shorts/reel-03-003_herospice-coriander-powder.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-4",
    "title": "Karani Couture \u2014 Crimson Saree Elegance",
    "tag": "Fashion",
    "cover": "assets/shorts/reel-04-004_karani.jpg",
    "video": "assets/shorts/reel-04-004_karani.mp4",
    "duration": "22s"
  },
  {
    "id": "reel-5",
    "title": "Karani Couture \u2014 Regal Bridal Silhouette",
    "tag": "Fashion",
    "cover": "assets/shorts/reel-05-005_karani.jpg",
    "video": "assets/shorts/reel-05-005_karani.mp4",
    "duration": "24s"
  },
  {
    "id": "reel-6",
    "title": "Commercial Spotlight \u2014 30s Brand Promo",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-06-30-sec.jpg",
    "video": "assets/shorts/reel-06-30-sec.mov",
    "duration": "30s"
  },
  {
    "id": "reel-7",
    "title": "45 Days Transformation Challenge",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-07-45-days-reel-challanege.jpg",
    "video": "assets/shorts/reel-07-45-days-reel-challanege.mp4",
    "duration": "25s"
  },
  {
    "id": "reel-8",
    "title": "Dynamic Brand Energy \u2014 Vertical Anthem",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-08-574a4cdf610bb9595fe23a6288cc8b84_video_dashin.jpg",
    "video": "assets/shorts/reel-08-574a4cdf610bb9595fe23a6288cc8b84_video_dashin.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-9",
    "title": "Hero Spices \u2014 Achar Chilli Powder Final",
    "tag": "Hero Spices",
    "cover": "assets/shorts/reel-09-achar-chilli-powder-final.jpg",
    "video": "assets/shorts/reel-09-achar-chilli-powder-final.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-10",
    "title": "App Experience \u2014 Mobile Interface Promo",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-10-app.jpg",
    "video": "assets/shorts/reel-10-app.mp4",
    "duration": "15s"
  },
  {
    "id": "reel-11",
    "title": "Product Portfolio \u2014 Assorted FMCG Showcase",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-11-assorted-all-products.jpg",
    "video": "assets/shorts/reel-11-assorted-all-products.mp4",
    "duration": "24s"
  },
  {
    "id": "reel-12",
    "title": "Bachelor Gourmet Series \u2014 4K Culinary Reel",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-12-bachlore-4k_j26.jpg",
    "video": "assets/shorts/reel-12-bachlore-4k_j26.mp4",
    "duration": "30s"
  },
  {
    "id": "reel-13",
    "title": "Bustterz Brand Campaign \u2014 Episode 05",
    "tag": "Campaign",
    "cover": "assets/shorts/reel-13-bustterz-reel-5.jpg",
    "video": "assets/shorts/reel-13-bustterz-reel-5.mp4",
    "duration": "25s"
  },
  {
    "id": "reel-14",
    "title": "Bustterz Stories \u2014 Client Testimonials Vol 01",
    "tag": "Campaign",
    "cover": "assets/shorts/reel-14-bustterz-reel-3-testimonials.jpg",
    "video": "assets/shorts/reel-14-bustterz-reel-3-testimonials.mp4",
    "duration": "35s"
  },
  {
    "id": "reel-15",
    "title": "Bustterz Campaign \u2014 Kinetic Edit 04",
    "tag": "Campaign",
    "cover": "assets/shorts/reel-15-bustterz-reel-41.jpg",
    "video": "assets/shorts/reel-15-bustterz-reel-41.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-16",
    "title": "Bustterz Campaign \u2014 Brand Impact 04",
    "tag": "Campaign",
    "cover": "assets/shorts/reel-16-bustterz-reel-4.jpg",
    "video": "assets/shorts/reel-16-bustterz-reel-4.mp4",
    "duration": "22s"
  },
  {
    "id": "reel-17",
    "title": "Karafa Kitchens \u2014 The Connection Reel",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-17-connection-reel-karafa-new.jpg",
    "video": "assets/shorts/reel-17-connection-reel-karafa-new.mp4",
    "duration": "28s"
  },
  {
    "id": "reel-18",
    "title": "Greenbird Foods \u2014 Plant-Based Crispy Nuggets",
    "tag": "Greenbird",
    "cover": "assets/shorts/reel-18-continental-greenbird-s-chicken-like-nuggets-.jpg",
    "video": "assets/shorts/reel-18-continental-greenbird-s-chicken-like-nuggets-.mp4",
    "duration": "15s"
  },
  {
    "id": "reel-19",
    "title": "Hero Spices \u2014 Ground Coriander Final Cut",
    "tag": "Hero Spices",
    "cover": "assets/shorts/reel-19-coriander-final-version.jpg",
    "video": "assets/shorts/reel-19-coriander-final-version.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-20",
    "title": "Greenbird Foods \u2014 Plant-Based Keema Pulao",
    "tag": "Greenbird",
    "cover": "assets/shorts/reel-20-enjoy-all-the-flavor-and-none-of-the-guilt-wi.jpg",
    "video": "assets/shorts/reel-20-enjoy-all-the-flavor-and-none-of-the-guilt-wi.mp4",
    "duration": "28s"
  },
  {
    "id": "reel-21",
    "title": "Karafa Kitchens \u2014 Artisanal Food Preparation",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-21-food-prepkarafa.jpg",
    "video": "assets/shorts/reel-21-food-prepkarafa.mp4",
    "duration": "26s"
  },
  {
    "id": "reel-22",
    "title": "Founders Narrative \u2014 Vision & Culture Reel",
    "tag": "Campaign",
    "cover": "assets/shorts/reel-22-founders-reel-with-titles.jpg",
    "video": "assets/shorts/reel-22-founders-reel-with-titles.mp4",
    "duration": "32s"
  },
  {
    "id": "reel-23",
    "title": "Tabletop Sizzle \u2014 4K Wok Fried Rice",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-23-fried-rice-4k-rev2_j26.jpg",
    "video": "assets/shorts/reel-23-fried-rice-4k-rev2_j26.mp4",
    "duration": "25s"
  },
  {
    "id": "reel-24",
    "title": "Gourmet Breakfast \u2014 Fried-Egg Avocado Toast 4K",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-24-fried-egg-avocado-toast-reel-4k-rev.jpg",
    "video": "assets/shorts/reel-24-fried-egg-avocado-toast-reel-4k-rev.mp4",
    "duration": "22s"
  },
  {
    "id": "reel-25",
    "title": "Greenbird Foods \u2014 Plant-Based Sausage Pasta",
    "tag": "Greenbird",
    "cover": "assets/shorts/reel-25-give-this-chicken-like-sausage-pasta-recipe-a.jpg",
    "video": "assets/shorts/reel-25-give-this-chicken-like-sausage-pasta-recipe-a.mp4",
    "duration": "24s"
  },
  {
    "id": "reel-26",
    "title": "Karafa Kitchens \u2014 Artisanal Desserts & Plating",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-26-karafa-desserts-a24-rework-1.jpg",
    "video": "assets/shorts/reel-26-karafa-desserts-a24-rework-1.mp4",
    "duration": "26s"
  },
  {
    "id": "reel-27",
    "title": "Living Design \u2014 Architectural Spatial Reel",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-27-ld-main-reel-a28.jpg",
    "video": "assets/shorts/reel-27-ld-main-reel-a28.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-28",
    "title": "Greenbird Foods \u2014 Plant-Based Seekh Kebabs",
    "tag": "Greenbird",
    "cover": "assets/shorts/reel-28-nothing-beats-these-tender-melt-in-the-mouth-.jpg",
    "video": "assets/shorts/reel-28-nothing-beats-these-tender-melt-in-the-mouth-.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-29",
    "title": "Golden Fold \u2014 Fluffy 4K Omelette Tabletop",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-29-omellete-4k_j26.jpg",
    "video": "assets/shorts/reel-29-omellete-4k_j26.mp4",
    "duration": "22s"
  },
  {
    "id": "reel-30",
    "title": "Greenbird Foods \u2014 Signature Street Keema Pav",
    "tag": "Greenbird",
    "cover": "assets/shorts/reel-30-our-keema-pav-is-a-must-try.jpg",
    "video": "assets/shorts/reel-30-our-keema-pav-is-a-must-try.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-31",
    "title": "Bustterz Campaign \u2014 Community Reel 02",
    "tag": "Campaign",
    "cover": "assets/shorts/reel-31-posted-bustterz-reel-2-11-03-26.jpg",
    "video": "assets/shorts/reel-31-posted-bustterz-reel-2-11-03-26.mp4",
    "duration": "25s"
  },
  {
    "id": "reel-32",
    "title": "Editorial Runway \u2014 High-End Fashion Narrative",
    "tag": "Fashion",
    "cover": "assets/shorts/reel-32-reel-21-taking-over-isn_t-the-right-word.jpg",
    "video": "assets/shorts/reel-32-reel-21-taking-over-isn_t-the-right-word.mp4",
    "duration": "24s"
  },
  {
    "id": "reel-33",
    "title": "Cheesy Tortilla Egg Bake \u2014 4K Gourmet Series",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-33-reel-1-cheesy-tortilla-egg-bake-4k_j25.jpg",
    "video": "assets/shorts/reel-33-reel-1-cheesy-tortilla-egg-bake-4k_j25.mp4",
    "duration": "26s"
  },
  {
    "id": "reel-34",
    "title": "Creamy Fried Eggs \u2014 Micro Macro Tabletop 01",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-34-reel-3-creamy-fried-eggs-4k-1.jpg",
    "video": "assets/shorts/reel-34-reel-3-creamy-fried-eggs-4k-1.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-35",
    "title": "Creamy Fried Eggs \u2014 Sizzle & Crisp Tabletop 02",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-35-reel-3-creamy-fried-eggs-4k.jpg",
    "video": "assets/shorts/reel-35-reel-3-creamy-fried-eggs-4k.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-36",
    "title": "Gourmet Brioche Egg Burger \u2014 4K Cinematic Cut",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-36-reel-4-egg-burger_4k.jpg",
    "video": "assets/shorts/reel-36-reel-4-egg-burger_4k.mp4",
    "duration": "24s"
  },
  {
    "id": "reel-37",
    "title": "Creative Studio Series \u2014 Reel 01",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-37-reels1.jpg",
    "video": "assets/shorts/reel-37-reels1.mp4",
    "duration": "15s"
  },
  {
    "id": "reel-38",
    "title": "Creative Studio Series \u2014 Reel 10",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-38-reels10.jpg",
    "video": "assets/shorts/reel-38-reels10.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-39",
    "title": "Creative Studio Series \u2014 Reel 11",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-39-reels11.jpg",
    "video": "assets/shorts/reel-39-reels11.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-40",
    "title": "Creative Studio Series \u2014 Reel 12",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-40-reels12.jpg",
    "video": "assets/shorts/reel-40-reels12.mp4",
    "duration": "15s"
  },
  {
    "id": "reel-41",
    "title": "Creative Studio Series \u2014 Reel 02",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-41-reels2.jpg",
    "video": "assets/shorts/reel-41-reels2.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-42",
    "title": "Creative Studio Series \u2014 Reel 04",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-42-reels4.jpg",
    "video": "assets/shorts/reel-42-reels4.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-43",
    "title": "Creative Studio Series \u2014 Reel 05",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-43-reels5.jpg",
    "video": "assets/shorts/reel-43-reels5.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-44",
    "title": "Creative Studio Series \u2014 Reel 06",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-44-reels6.jpg",
    "video": "assets/shorts/reel-44-reels6.mp4",
    "duration": "22s"
  },
  {
    "id": "reel-45",
    "title": "Creative Studio Series \u2014 Reel 07",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-45-reels7.jpg",
    "video": "assets/shorts/reel-45-reels7.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-46",
    "title": "Creative Studio Series \u2014 Reel 08",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-46-reels8.jpg",
    "video": "assets/shorts/reel-46-reels8.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-47",
    "title": "Creative Studio Series \u2014 Reel 09",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-47-reels9.jpg",
    "video": "assets/shorts/reel-47-reels9.mp4",
    "duration": "22s"
  },
  {
    "id": "reel-48",
    "title": "Prajay Properties \u2014 Rohit Site Visit Experience",
    "tag": "Campaign",
    "cover": "assets/shorts/reel-48-rohit-the-site-visit-hd-m10.jpg",
    "video": "assets/shorts/reel-48-rohit-the-site-visit-hd-m10.mp4",
    "duration": "30s"
  },
  {
    "id": "reel-49",
    "title": "Prajay Living \u2014 The Sarojini Architectural Tour",
    "tag": "Campaign",
    "cover": "assets/shorts/reel-49-sarojini-the-thing-about-prajay_s-buildings_m.jpg",
    "video": "assets/shorts/reel-49-sarojini-the-thing-about-prajay_s-buildings_m.mp4",
    "duration": "35s"
  },
  {
    "id": "reel-50",
    "title": "Snack Attack Series \u2014 Crispy Bites 4K Cut",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-50-snack-attack-reel-4k_j25-rev-02.jpg",
    "video": "assets/shorts/reel-50-snack-attack-reel-4k_j25-rev-02.mp4",
    "duration": "22s"
  },
  {
    "id": "reel-51",
    "title": "Commercial TVC Showcase \u2014 High Pacing Edit",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-51-tvc-draft-2.jpg",
    "video": "assets/shorts/reel-51-tvc-draft-2.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-52",
    "title": "Karafa Kitchens \u2014 The Temperature Craft Edition",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-52-temperature-reel-karafa-m9-ai-vo.jpg",
    "video": "assets/shorts/reel-52-temperature-reel-karafa-m9-ai-vo.mp4",
    "duration": "28s"
  },
  {
    "id": "reel-53",
    "title": "Karafa Kitchens \u2014 Master Temperature Story",
    "tag": "Culinary",
    "cover": "assets/shorts/reel-53-temperature-reel-karafa-m9-revised-vo.jpg",
    "video": "assets/shorts/reel-53-temperature-reel-karafa-m9-revised-vo.mp4",
    "duration": "30s"
  },
  {
    "id": "reel-54",
    "title": "Bustterz Campaign \u2014 Founder & Client Testimonials",
    "tag": "Campaign",
    "cover": "assets/shorts/reel-54-testimonials-bustterz-rteel-3-24-03.jpg",
    "video": "assets/shorts/reel-54-testimonials-bustterz-rteel-3-24-03.mp4",
    "duration": "32s"
  },
  {
    "id": "reel-55",
    "title": "Greenbird Foods \u2014 Plant-Based Breakfast Sausages",
    "tag": "Greenbird",
    "cover": "assets/shorts/reel-55-treat-yourself-to-tasty-plant-based-chicken-l.jpg",
    "video": "assets/shorts/reel-55-treat-yourself-to-tasty-plant-based-chicken-l.mp4",
    "duration": "22s"
  },
  {
    "id": "reel-56",
    "title": "Ugly Ducklings \u2014 Organic Poultry & Farm Reel",
    "tag": "Greenbird",
    "cover": "assets/shorts/reel-56-ugly-ducklings.jpg",
    "video": "assets/shorts/reel-56-ugly-ducklings.mp4",
    "duration": "24s"
  },
  {
    "id": "reel-57",
    "title": "Villionaire Couture \u2014 Special Collection Release",
    "tag": "Fashion",
    "cover": "assets/shorts/reel-57-v-35_off-reel-m26-01.jpg",
    "video": "assets/shorts/reel-57-v-35_off-reel-m26-01.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-58",
    "title": "Villionaire Couture \u2014 Date Night Velvet Lookbook",
    "tag": "Fashion",
    "cover": "assets/shorts/reel-58-v-date-night-reel-j9-rev5.jpg",
    "video": "assets/shorts/reel-58-v-date-night-reel-j9-rev5.mp4",
    "duration": "22s"
  },
  {
    "id": "reel-59",
    "title": "Villionaire Atelier \u2014 Trending Haute Cut 03",
    "tag": "Fashion",
    "cover": "assets/shorts/reel-59-v-reel-3-trending-01.jpg",
    "video": "assets/shorts/reel-59-v-reel-3-trending-01.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-60",
    "title": "Villionaire Atelier \u2014 Autumn / Winter Capsule",
    "tag": "Fashion",
    "cover": "assets/shorts/reel-60-v-reel-m25-01-rev2.jpg",
    "video": "assets/shorts/reel-60-v-reel-m25-01-rev2.mp4",
    "duration": "24s"
  },
  {
    "id": "reel-61",
    "title": "Cinema Optics & Lighting Study \u2014 Take 32",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-61-video-32.jpg",
    "video": "assets/shorts/reel-61-video-32.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-62",
    "title": "Atmospheric Tone Reel \u2014 Take 577",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-62-video-577.jpg",
    "video": "assets/shorts/reel-62-video-577.mp4",
    "duration": "15s"
  },
  {
    "id": "reel-63",
    "title": "Villionaire Couture \u2014 15s High-Impact Brand Teaser",
    "tag": "Fashion",
    "cover": "assets/shorts/reel-63-villionaire-15sec-ad-reel.jpg",
    "video": "assets/shorts/reel-63-villionaire-15sec-ad-reel.mp4",
    "duration": "15s"
  },
  {
    "id": "reel-64",
    "title": "Villionaire Couture \u2014 Bridesmaid Collection Reel",
    "tag": "Fashion",
    "cover": "assets/shorts/reel-64-villionaire-brides-maid-m16-_girls-like-you_r.jpg",
    "video": "assets/shorts/reel-64-villionaire-brides-maid-m16-_girls-like-you_r.mp4",
    "duration": "26s"
  },
  {
    "id": "reel-65",
    "title": "Villionaire Atelier \u2014 Movement & Texture Teaser",
    "tag": "Fashion",
    "cover": "assets/shorts/reel-65-villionaire-gif-m19.jpg",
    "video": "assets/shorts/reel-65-villionaire-gif-m19.mp4",
    "duration": "15s"
  },
  {
    "id": "reel-66",
    "title": "Vrindavan Estates \u2014 Architectural Miniature Study",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-66-vrindavan-miniature-a17-rev.jpg",
    "video": "assets/shorts/reel-66-vrindavan-miniature-a17-rev.mp4",
    "duration": "20s"
  },
  {
    "id": "reel-67",
    "title": "Creative Dialogue \u2014 Behind The Lens Dialogue",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-67-what-we-argue-about-hd.jpg",
    "video": "assets/shorts/reel-67-what-we-argue-about-hd.mp4",
    "duration": "25s"
  },
  {
    "id": "reel-68",
    "title": "Hero Spices \u2014 Pure Guntur Red Chilli Final",
    "tag": "Hero Spices",
    "cover": "assets/shorts/reel-68-chilli-powder-final-1.jpg",
    "video": "assets/shorts/reel-68-chilli-powder-final-1.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-69",
    "title": "Bustterz Campaign \u2014 Launch Edition 01",
    "tag": "Campaign",
    "cover": "assets/shorts/reel-69-posted-bustterz-reel-1.jpg",
    "video": "assets/shorts/reel-69-posted-bustterz-reel-1.mp4",
    "duration": "22s"
  },
  {
    "id": "reel-70",
    "title": "Cinematic Tabletop \u2014 Product Lighting Showcase",
    "tag": "Commercial",
    "cover": "assets/shorts/reel-70-product-shot.jpg",
    "video": "assets/shorts/reel-70-product-shot.mp4",
    "duration": "18s"
  },
  {
    "id": "reel-71",
    "title": "Hero Spices \u2014 Heritage Haldi Turmeric Master",
    "tag": "Hero Spices",
    "cover": "assets/shorts/reel-71-turmeric-final-version.jpg",
    "video": "assets/shorts/reel-71-turmeric-final-version.mp4",
    "duration": "20s"
  }
];

const ARCHIVE_PHOTOS = [
  { src: "assets/photos/behance-villionaire-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e05931250388255.6a1e661d756e8.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 01", tall: false },
  { src: "assets/photos/behance-villionaire-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/c1ddd0250388255.6a1e661773a8d.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 02", tall: true },
  { src: "assets/photos/behance-villionaire-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/c1d6d8250388255.6a1e661774502.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 03", tall: true },
  { src: "assets/photos/behance-villionaire-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/241952250388255.6a1e661773fed.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 04", tall: true },
  { src: "assets/photos/behance-villionaire-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/cc516e250388255.6a1e661954b83.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 05", tall: true },
  { src: "assets/photos/behance-villionaire-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/90ceb5250388255.6a1e661954608.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 06", tall: true },
  { src: "assets/photos/behance-villionaire-07.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/a95e54250388255.6a1e66195551f.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 07", tall: true },
  { src: "assets/photos/behance-villionaire-08.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/011ce7250388255.6a1e661955006.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 08", tall: true },
  { src: "assets/photos/behance-villionaire-09.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/c69dce250388255.6a1e661af3060.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 09", tall: true },
  { src: "assets/photos/behance-villionaire-10.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/cae078250388255.6a1e661af3b15.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 10", tall: true },
  { src: "assets/photos/behance-villionaire-11.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/a482b5250388255.6a1e661af35e9.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 11", tall: true },
  { src: "assets/photos/behance-villionaire-12.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/ff81f9250388255.6a1e661c1a3ca.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 12", tall: true },
  { src: "assets/photos/behance-villionaire-13.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/c2fdb8250388255.6a1e661c19822.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 13", tall: true },
  { src: "assets/photos/behance-villionaire-14.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/6aec74250388255.6a1e661c1a7a9.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 14", tall: true },
  { src: "assets/photos/behance-villionaire-15.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/4e3924250388255.6a1e661c1abd4.jpg", category: "Fashion", project: "Villionaire | Limited Edition Party Wear", title: "Villionaire | Limited Edition Party Wear — Frame 15", tall: true },
  { src: "assets/photos/behance-roo-co-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/21e016250326991.6a1d2fce352f1.jpg", category: "Fashion", project: "Roo & Co", title: "Roo & Co — Frame 01", tall: true },
  { src: "assets/photos/behance-roo-co-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/aac711250326991.6a1d2fce35bd0.jpg", category: "Fashion", project: "Roo & Co", title: "Roo & Co — Frame 02", tall: true },
  { src: "assets/photos/behance-roo-co-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/c6aa8a250326991.6a1d2fce36486.jpg", category: "Fashion", project: "Roo & Co", title: "Roo & Co — Frame 03", tall: true },
  { src: "assets/photos/behance-roo-co-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/0f350d250326991.6a1d2fcf1316b.jpg", category: "Fashion", project: "Roo & Co", title: "Roo & Co — Frame 04", tall: true },
  { src: "assets/photos/behance-roo-co-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/037c25250326991.6a1d2fcf139b9.jpg", category: "Fashion", project: "Roo & Co", title: "Roo & Co — Frame 05", tall: true },
  { src: "assets/photos/behance-roo-co-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/db024a250326991.6a1d2fcf13595.jpg", category: "Fashion", project: "Roo & Co", title: "Roo & Co — Frame 06", tall: true },
  { src: "assets/photos/behance-roo-co-07.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/deaf40250326991.6a1d2fcfb6781.jpg", category: "Fashion", project: "Roo & Co", title: "Roo & Co — Frame 07", tall: true },
  { src: "assets/photos/behance-roo-co-08.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/831ca7250326991.6a1d2fcfb6db3.jpg", category: "Fashion", project: "Roo & Co", title: "Roo & Co — Frame 08", tall: true },
  { src: "assets/photos/behance-roo-co-09.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/10d171250326991.6a1d2fcfb7358.jpg", category: "Fashion", project: "Roo & Co", title: "Roo & Co — Frame 09", tall: true },
  { src: "assets/photos/behance-nidhi-agarwal-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/6a0a40194623583.65ff1fa465302.jpg", category: "Fashion", project: "Nidhi Agarwal", title: "Nidhi Agarwal — Frame 01", tall: true },
  { src: "assets/photos/behance-nidhi-agarwal-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/20a018194623583.65ff1fa46664d.jpg", category: "Fashion", project: "Nidhi Agarwal", title: "Nidhi Agarwal — Frame 02", tall: true },
  { src: "assets/photos/behance-nidhi-agarwal-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/0728ed194623583.65ff1fa4679c3.jpg", category: "Fashion", project: "Nidhi Agarwal", title: "Nidhi Agarwal — Frame 03", tall: true },
  { src: "assets/photos/behance-nidhi-agarwal-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/23f33a194623583.65ff1fa464615.jpg", category: "Fashion", project: "Nidhi Agarwal", title: "Nidhi Agarwal — Frame 04", tall: true },
  { src: "assets/photos/behance-nidhi-agarwal-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/83a126194623583.65ff1fa466fdf.jpg", category: "Fashion", project: "Nidhi Agarwal", title: "Nidhi Agarwal — Frame 05", tall: true },
  { src: "assets/photos/behance-nidhi-agarwal-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/733d2c194623583.65ff1fa465cdd.jpg", category: "Fashion", project: "Nidhi Agarwal", title: "Nidhi Agarwal — Frame 06", tall: true },
  { src: "assets/photos/behance-casserole-lunch-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b1f9a5250388959.6a1e6af583745.jpg", category: "Food", project: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot", title: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot — Frame 01", tall: false },
  { src: "assets/photos/behance-casserole-lunch-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/756734250388959.6a1e6af4730fe.jpg", category: "Food", project: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot", title: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot — Frame 02", tall: true },
  { src: "assets/photos/behance-casserole-lunch-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/b36a9c250388959.6a1e6af472136.jpg", category: "Food", project: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot", title: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot — Frame 03", tall: true },
  { src: "assets/photos/behance-casserole-lunch-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/884fba250388959.6a1e6af47296f.jpg", category: "Food", project: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot", title: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot — Frame 04", tall: true },
  { src: "assets/photos/behance-casserole-lunch-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/1e5880250388959.6a1e6af37325a.jpg", category: "Food", project: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot", title: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot — Frame 05", tall: true },
  { src: "assets/photos/behance-casserole-lunch-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/432196250388959.6a1e6af372a36.jpg", category: "Food", project: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot", title: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot — Frame 06", tall: true },
  { src: "assets/photos/behance-casserole-lunch-07.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/0110af250388959.6a1e6af3721d2.jpg", category: "Food", project: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot", title: "Casserole Plus | Healthy Office Lunch Lifestyle Shoot — Frame 07", tall: true },
  { src: "assets/photos/behance-soil-courtyard-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8ec1b8250324397.6a1d20753a351.jpg", category: "Architecture", project: "Soil Courtyard", title: "Soil Courtyard — Frame 01", tall: false },
  { src: "assets/photos/behance-soil-courtyard-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/f633de250324397.6a1d2073aeaa5.jpg", category: "Architecture", project: "Soil Courtyard", title: "Soil Courtyard — Frame 02", tall: false },
  { src: "assets/photos/behance-soil-courtyard-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/3fee38250324397.6a1d2073af21c.jpg", category: "Architecture", project: "Soil Courtyard", title: "Soil Courtyard — Frame 03", tall: false },
  { src: "assets/photos/behance-soil-courtyard-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/0a4a3d250324397.6a1d2073af971.jpg", category: "Architecture", project: "Soil Courtyard", title: "Soil Courtyard — Frame 04", tall: false },
  { src: "assets/photos/behance-soil-courtyard-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/f38261250324397.6a1d207489270.jpg", category: "Architecture", project: "Soil Courtyard", title: "Soil Courtyard — Frame 05", tall: false },
  { src: "assets/photos/behance-soil-courtyard-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/b797f3250324397.6a1d2074882d3.jpg", category: "Architecture", project: "Soil Courtyard", title: "Soil Courtyard — Frame 06", tall: false },
  { src: "assets/photos/behance-soil-courtyard-07.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/635e13250324397.6a1d207488ab8.jpg", category: "Architecture", project: "Soil Courtyard", title: "Soil Courtyard — Frame 07", tall: false },
  { src: "assets/photos/behance-capturing-villa-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8c5549213020367.673efc236359e.jpg", category: "Architecture", project: "Capturing Spaces Villa", title: "Capturing Spaces Villa — Frame 01", tall: false },
  { src: "assets/photos/behance-capturing-villa-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1f6b6d213020367.673efc236253a.jpg", category: "Architecture", project: "Capturing Spaces Villa", title: "Capturing Spaces Villa — Frame 02", tall: false },
  { src: "assets/photos/behance-capturing-villa-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/621ce1213020367.673efc2365111.jpg", category: "Architecture", project: "Capturing Spaces Villa", title: "Capturing Spaces Villa — Frame 03", tall: false },
  { src: "assets/photos/behance-capturing-villa-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/68fe22213020367.673efc2365ab0.jpg", category: "Architecture", project: "Capturing Spaces Villa", title: "Capturing Spaces Villa — Frame 04", tall: true },
  { src: "assets/photos/behance-capturing-villa-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4b1067213020367.673efc2363f39.jpg", category: "Architecture", project: "Capturing Spaces Villa", title: "Capturing Spaces Villa — Frame 05", tall: false },
  { src: "assets/photos/behance-capturing-villa-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/335869213020367.673efc2362dbe.jpg", category: "Architecture", project: "Capturing Spaces Villa", title: "Capturing Spaces Villa — Frame 06", tall: false },
  { src: "assets/photos/behance-capturing-villa-07.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9781b7213020367.673efc236491f.jpg", category: "Architecture", project: "Capturing Spaces Villa", title: "Capturing Spaces Villa — Frame 07", tall: false },
  { src: "assets/photos/behance-arch-grandeur-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/307f3b213030323.673f1af2c0d79.jpg", category: "Architecture", project: "Architectural Grandeur", title: "Architectural Grandeur — Frame 01", tall: false },
  { src: "assets/photos/behance-arch-grandeur-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d19d70213030323.673f1af2c2897.jpg", category: "Architecture", project: "Architectural Grandeur", title: "Architectural Grandeur — Frame 02", tall: false },
  { src: "assets/photos/behance-arch-grandeur-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f08454213030323.673f1af2c1f3a.jpg", category: "Architecture", project: "Architectural Grandeur", title: "Architectural Grandeur — Frame 03", tall: false },
  { src: "assets/photos/behance-arch-grandeur-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/855d15213030323.673f1af2c3e3c.jpg", category: "Architecture", project: "Architectural Grandeur", title: "Architectural Grandeur — Frame 04", tall: false },
  { src: "assets/photos/behance-arch-grandeur-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/230159213030323.673f1af2c4b4c.jpg", category: "Architecture", project: "Architectural Grandeur", title: "Architectural Grandeur — Frame 05", tall: false },
  { src: "assets/photos/behance-arch-grandeur-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ef44b6213030323.673f1af2c451d.jpg", category: "Architecture", project: "Architectural Grandeur", title: "Architectural Grandeur — Frame 06", tall: false },
  { src: "assets/photos/behance-arch-grandeur-07.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1c68d5213030323.673f1af2c03eb.jpg", category: "Architecture", project: "Architectural Grandeur", title: "Architectural Grandeur — Frame 07", tall: false },
  { src: "assets/photos/behance-arch-grandeur-08.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0f236c213030323.673f1af2c30ae.jpg", category: "Architecture", project: "Architectural Grandeur", title: "Architectural Grandeur — Frame 08", tall: false },
  { src: "assets/photos/behance-arch-grandeur-09.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1af7a5213030323.673f1af2c38cb.jpg", category: "Architecture", project: "Architectural Grandeur", title: "Architectural Grandeur — Frame 09", tall: false },
  { src: "assets/photos/behance-arch-grandeur-10.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cf1672213030323.673f1af2bfc36.jpg", category: "Architecture", project: "Architectural Grandeur", title: "Architectural Grandeur — Frame 10", tall: false },
  { src: "assets/photos/behance-arch-grandeur-11.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/92fe84213030323.673f1af2c1688.jpg", category: "Architecture", project: "Architectural Grandeur", title: "Architectural Grandeur — Frame 11", tall: false },
  { src: "assets/photos/behance-capturing-spaces-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/63b834213019535.673ef9253cab1.jpg", category: "Architecture", project: "Capturing Spaces", title: "Capturing Spaces — Frame 01", tall: false },
  { src: "assets/photos/behance-capturing-spaces-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1ccd9a213019535.673ef9253d079.jpg", category: "Architecture", project: "Capturing Spaces", title: "Capturing Spaces — Frame 02", tall: false },
  { src: "assets/photos/behance-capturing-spaces-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d3258f213019535.673ef9253d88f.jpg", category: "Architecture", project: "Capturing Spaces", title: "Capturing Spaces — Frame 03", tall: false },
  { src: "assets/photos/behance-capturing-spaces-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2b8cb0213019535.673ef9253e548.jpg", category: "Architecture", project: "Capturing Spaces", title: "Capturing Spaces — Frame 04", tall: false },
  { src: "assets/photos/behance-capturing-spaces-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/64a8ae213019535.673ef9253bf8e.jpg", category: "Architecture", project: "Capturing Spaces", title: "Capturing Spaces — Frame 05", tall: true },
  { src: "assets/photos/behance-capturing-spaces-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/136cd2213019535.673ef9253def9.jpg", category: "Architecture", project: "Capturing Spaces", title: "Capturing Spaces — Frame 06", tall: false },
  { src: "assets/photos/behance-asembli-drinks-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/4e3b09250326095.6a1d2ab0253e0.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 01", tall: true },
  { src: "assets/photos/behance-asembli-drinks-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/820908250326095.6a1d2ab025d1f.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 02", tall: true },
  { src: "assets/photos/behance-asembli-drinks-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/fc8c99250326095.6a1d2ab1c33fd.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 03", tall: true },
  { src: "assets/photos/behance-asembli-drinks-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/f07dba250326095.6a1d2ab1c39ef.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 04", tall: true },
  { src: "assets/photos/behance-asembli-drinks-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/78912d250326095.6a1d2ab1c2d9f.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 05", tall: true },
  { src: "assets/photos/behance-asembli-drinks-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/b571c6250326095.6a1d2ab39b80f.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 06", tall: true },
  { src: "assets/photos/behance-asembli-drinks-07.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/ec6fef250326095.6a1d2ab39b0a0.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 07", tall: true },
  { src: "assets/photos/behance-asembli-drinks-08.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/2163f9250326095.6a1d2ab39a93c.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 08", tall: true },
  { src: "assets/photos/behance-asembli-drinks-09.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/c5f6a6250326095.6a1d2ab5774c1.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 09", tall: true },
  { src: "assets/photos/behance-asembli-drinks-10.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/5c5757250326095.6a1d2ab577d33.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 10", tall: true },
  { src: "assets/photos/behance-asembli-drinks-11.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/a2b7e2250326095.6a1d2ab578524.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 11", tall: true },
  { src: "assets/photos/behance-asembli-drinks-12.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/422397250326095.6a1d2ab7747ea.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 12", tall: true },
  { src: "assets/photos/behance-asembli-drinks-13.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/8a1d00250326095.6a1d2ab774406.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 13", tall: true },
  { src: "assets/photos/behance-asembli-drinks-14.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/8e4cc7250326095.6a1d2ab774010.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 14", tall: true },
  { src: "assets/photos/behance-asembli-drinks-15.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/9f9443250326095.6a1d2ab774b8e.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 15", tall: true },
  { src: "assets/photos/behance-asembli-drinks-16.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/9924f1250326095.6a1d2ab774f41.jpg", category: "Food", project: "Asembli Drinks Photography", title: "Asembli Drinks Photography — Frame 16", tall: true },
  { src: "assets/photos/behance-asembli-food-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/d5c16f250325493.6a1d2774e11a3.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 01", tall: true },
  { src: "assets/photos/behance-asembli-food-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/f9040e250325493.6a1d2774e2235.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 02", tall: true },
  { src: "assets/photos/behance-asembli-food-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/98a599250325493.6a1d2774e1954.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 03", tall: true },
  { src: "assets/photos/behance-asembli-food-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/4ae216250325493.6a1d27771e0e1.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 04", tall: true },
  { src: "assets/photos/behance-asembli-food-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/9c289b250325493.6a1d27771ea1b.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 05", tall: true },
  { src: "assets/photos/behance-asembli-food-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/be1c44250325493.6a1d27771f325.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 06", tall: true },
  { src: "assets/photos/behance-asembli-food-07.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/73d4e8250325493.6a1d27797b749.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 07", tall: true },
  { src: "assets/photos/behance-asembli-food-08.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/fdc718250325493.6a1d27797bf65.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 08", tall: true },
  { src: "assets/photos/behance-asembli-food-09.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/ebbb20250325493.6a1d27797bb88.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 09", tall: true },
  { src: "assets/photos/behance-asembli-food-10.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/991f07250325493.6a1d277b310cf.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 10", tall: true },
  { src: "assets/photos/behance-asembli-food-11.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/36c5c5250325493.6a1d277b3096e.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 11", tall: true },
  { src: "assets/photos/behance-asembli-food-12.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/974d5e250325493.6a1d277b317e5.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 12", tall: true },
  { src: "assets/photos/behance-asembli-food-13.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/60ac9a250325493.6a1d277c93038.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 13", tall: true },
  { src: "assets/photos/behance-asembli-food-14.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/5c0499250325493.6a1d277c92941.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 14", tall: true },
  { src: "assets/photos/behance-asembli-food-15.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/934609250325493.6a1d277c921c8.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 15", tall: true },
  { src: "assets/photos/behance-asembli-food-16.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/f537bc250325493.6a1d277c9147d.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 16", tall: true },
  { src: "assets/photos/behance-asembli-food-17.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/48c7bf250325493.6a1d277c91b5e.jpg", category: "Food", project: "Asembli Food Photography", title: "Asembli Food Photography — Frame 17", tall: true },
  { src: "assets/photos/behance-casserole-product-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/1bf657249622931.6a0c0dcf763f5.jpg", category: "Product", project: "Casserole Plus", title: "Casserole Plus — Frame 01", tall: true },
  { src: "assets/photos/behance-casserole-product-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/e33d6c249622931.6a0c0dcf76ca3.jpg", category: "Product", project: "Casserole Plus", title: "Casserole Plus — Frame 02", tall: true },
  { src: "assets/photos/behance-casserole-product-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/67458e249622931.6a0c0dcf7685a.jpg", category: "Product", project: "Casserole Plus", title: "Casserole Plus — Frame 03", tall: true },
  { src: "assets/photos/behance-casserole-product-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/63fc71249622931.6a0c0dd1145ce.jpg", category: "Product", project: "Casserole Plus", title: "Casserole Plus — Frame 04", tall: true },
  { src: "assets/photos/behance-casserole-product-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/c52355249622931.6a0c0dd114c1f.jpg", category: "Product", project: "Casserole Plus", title: "Casserole Plus — Frame 05", tall: true },
  { src: "assets/photos/behance-casserole-product-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/8704fd249622931.6a0c0dd11521c.jpg", category: "Product", project: "Casserole Plus", title: "Casserole Plus — Frame 06", tall: true },
  { src: "assets/photos/behance-casserole-product-07.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/619813249622931.6a0c0dd29e4c0.jpg", category: "Product", project: "Casserole Plus", title: "Casserole Plus — Frame 07", tall: true },
  { src: "assets/photos/behance-casserole-product-08.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/4c08c8249622931.6a0c0dd29dcdf.jpg", category: "Product", project: "Casserole Plus", title: "Casserole Plus — Frame 08", tall: true },
  { src: "assets/photos/behance-casserole-product-09.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_still/e77fcd249622931.6a0c0dd29e101.jpg", category: "Product", project: "Casserole Plus", title: "Casserole Plus — Frame 09", tall: true },
  { src: "assets/photos/behance-band-merakee-01.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/dac55e227559959.6841f26595571.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 01", tall: true },
  { src: "assets/photos/behance-band-merakee-02.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/00fddd227559959.6841f26595e13.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 02", tall: false },
  { src: "assets/photos/behance-band-merakee-03.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d821b1227559959.6841f26594cc6.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 03", tall: false },
  { src: "assets/photos/behance-band-merakee-04.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/00501e227559959.6841f26599a04.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 04", tall: true },
  { src: "assets/photos/behance-band-merakee-05.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5cab41227559959.6841f2659786b.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 05", tall: true },
  { src: "assets/photos/behance-band-merakee-06.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4ac8ec227559959.6841f26596738.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 06", tall: true },
  { src: "assets/photos/behance-band-merakee-07.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/56493e227559959.6841f26594341.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 07", tall: true },
  { src: "assets/photos/behance-band-merakee-08.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b1de6d227559959.6841f26598d12.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 08", tall: true },
  { src: "assets/photos/behance-band-merakee-09.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b4d3e4227559959.6841f26596f80.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 09", tall: false },
  { src: "assets/photos/behance-band-merakee-10.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/656334227559959.6841f2659811d.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 10", tall: true },
  { src: "assets/photos/behance-band-merakee-11.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2123e3227559959.6841f26598691.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 11", tall: true },
  { src: "assets/photos/behance-band-merakee-12.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/47ed46227559959.6841f2659b665.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 12", tall: true },
  { src: "assets/photos/behance-band-merakee-13.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9d0903227559959.6841f2659a1a7.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 13", tall: true },
  { src: "assets/photos/behance-band-merakee-14.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/37b456227559959.6841f2659aeb8.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 14", tall: true },
  { src: "assets/photos/behance-band-merakee-15.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/08ad1b227559959.6841f2659be59.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 15", tall: false },
  { src: "assets/photos/behance-band-merakee-16.jpg", cdnSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a4bfd4227559959.6841f2659a6da.jpg", category: "Fashion", project: "Band Merakee", title: "Band Merakee — Frame 16", tall: false },
  { src: "assets/photos/port-fashion-001.jpg", cdnSrc: "assets/photos/port-fashion-001.jpg", category: "Fashion", project: "Curated Portrait & Stills", title: "Curated Portrait & Stills — Frame 01", tall: false },
  { src: "assets/photos/port-fashion-002.jpg", cdnSrc: "assets/photos/port-fashion-002.jpg", category: "Fashion", project: "Curated Portrait & Stills", title: "Curated Portrait & Stills — Frame 02", tall: false },
  { src: "assets/photos/port-fashion-003.jpg", cdnSrc: "assets/photos/port-fashion-003.jpg", category: "Fashion", project: "Curated Portrait & Stills", title: "Curated Portrait & Stills — Frame 03", tall: false },
  { src: "assets/photos/port-fashion-004.jpg", cdnSrc: "assets/photos/port-fashion-004.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 04", tall: true },
  { src: "assets/photos/port-fashion-005.jpg", cdnSrc: "assets/photos/port-fashion-005.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 05", tall: true },
  { src: "assets/photos/port-fashion-006.jpg", cdnSrc: "assets/photos/port-fashion-006.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 06", tall: true },
  { src: "assets/photos/port-fashion-007.jpg", cdnSrc: "assets/photos/port-fashion-007.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 07", tall: false },
  { src: "assets/photos/port-fashion-008.jpg", cdnSrc: "assets/photos/port-fashion-008.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 08", tall: true },
  { src: "assets/photos/port-fashion-009.jpg", cdnSrc: "assets/photos/port-fashion-009.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 09", tall: true },
  { src: "assets/photos/port-fashion-010.jpg", cdnSrc: "assets/photos/port-fashion-010.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 10", tall: true },
  { src: "assets/photos/port-fashion-011.jpg", cdnSrc: "assets/photos/port-fashion-011.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 11", tall: true },
  { src: "assets/photos/port-fashion-012.jpg", cdnSrc: "assets/photos/port-fashion-012.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 12", tall: true },
  { src: "assets/photos/port-fashion-013.jpg", cdnSrc: "assets/photos/port-fashion-013.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 13", tall: true },
  { src: "assets/photos/port-fashion-014.jpg", cdnSrc: "assets/photos/port-fashion-014.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 14", tall: true },
  { src: "assets/photos/port-fashion-015.jpg", cdnSrc: "assets/photos/port-fashion-015.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 15", tall: true },
  { src: "assets/photos/port-fashion-016.jpg", cdnSrc: "assets/photos/port-fashion-016.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 16", tall: true },
  { src: "assets/photos/port-fashion-017.jpg", cdnSrc: "assets/photos/port-fashion-017.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 17", tall: false },
  { src: "assets/photos/port-fashion-018.jpg", cdnSrc: "assets/photos/port-fashion-018.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 18", tall: true },
  { src: "assets/photos/port-fashion-019.jpg", cdnSrc: "assets/photos/port-fashion-019.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 19", tall: false },
  { src: "assets/photos/port-fashion-020.jpg", cdnSrc: "assets/photos/port-fashion-020.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 20", tall: true },
  { src: "assets/photos/port-fashion-021.jpg", cdnSrc: "assets/photos/port-fashion-021.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 21", tall: true },
  { src: "assets/photos/port-fashion-022.jpg", cdnSrc: "assets/photos/port-fashion-022.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 22", tall: true },
  { src: "assets/photos/port-fashion-023.jpg", cdnSrc: "assets/photos/port-fashion-023.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 23", tall: true },
  { src: "assets/photos/port-fashion-024.jpg", cdnSrc: "assets/photos/port-fashion-024.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 24", tall: true },
  { src: "assets/photos/port-fashion-025.jpg", cdnSrc: "assets/photos/port-fashion-025.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 25", tall: false },
  { src: "assets/photos/port-fashion-026.jpg", cdnSrc: "assets/photos/port-fashion-026.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 26", tall: false },
  { src: "assets/photos/port-fashion-027.jpg", cdnSrc: "assets/photos/port-fashion-027.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 27", tall: true },
  { src: "assets/photos/port-fashion-028.jpg", cdnSrc: "assets/photos/port-fashion-028.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 28", tall: false },
  { src: "assets/photos/port-fashion-029.jpg", cdnSrc: "assets/photos/port-fashion-029.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 29", tall: false },
  { src: "assets/photos/port-fashion-030.jpg", cdnSrc: "assets/photos/port-fashion-030.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 30", tall: false },
  { src: "assets/photos/port-fashion-031.jpg", cdnSrc: "assets/photos/port-fashion-031.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 31", tall: false },
  { src: "assets/photos/port-fashion-032.jpg", cdnSrc: "assets/photos/port-fashion-032.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 32", tall: true },
  { src: "assets/photos/port-fashion-033.jpg", cdnSrc: "assets/photos/port-fashion-033.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 33", tall: true },
  { src: "assets/photos/port-fashion-034.jpg", cdnSrc: "assets/photos/port-fashion-034.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 34", tall: true },
  { src: "assets/photos/port-fashion-035.jpg", cdnSrc: "assets/photos/port-fashion-035.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 35", tall: false },
  { src: "assets/photos/port-fashion-036.jpg", cdnSrc: "assets/photos/port-fashion-036.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 36", tall: true },
  { src: "assets/photos/port-fashion-037.jpg", cdnSrc: "assets/photos/port-fashion-037.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 37", tall: true },
  { src: "assets/photos/port-fashion-038.jpg", cdnSrc: "assets/photos/port-fashion-038.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 38", tall: true },
  { src: "assets/photos/port-fashion-039.jpg", cdnSrc: "assets/photos/port-fashion-039.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 39", tall: true },
  { src: "assets/photos/port-fashion-040.jpg", cdnSrc: "assets/photos/port-fashion-040.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 40", tall: true },
  { src: "assets/photos/port-fashion-041.jpg", cdnSrc: "assets/photos/port-fashion-041.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 41", tall: true },
  { src: "assets/photos/port-fashion-042.jpg", cdnSrc: "assets/photos/port-fashion-042.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 42", tall: true },
  { src: "assets/photos/port-fashion-043.jpg", cdnSrc: "assets/photos/port-fashion-043.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 43", tall: true },
  { src: "assets/photos/port-fashion-044.jpg", cdnSrc: "assets/photos/port-fashion-044.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 44", tall: true },
  { src: "assets/photos/port-fashion-045.jpg", cdnSrc: "assets/photos/port-fashion-045.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 45", tall: false },
  { src: "assets/photos/port-fashion-046.jpg", cdnSrc: "assets/photos/port-fashion-046.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 46", tall: true },
  { src: "assets/photos/port-fashion-047.jpg", cdnSrc: "assets/photos/port-fashion-047.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 47", tall: true },
  { src: "assets/photos/port-fashion-048.jpg", cdnSrc: "assets/photos/port-fashion-048.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 48", tall: true },
  { src: "assets/photos/port-fashion-049.jpg", cdnSrc: "assets/photos/port-fashion-049.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 49", tall: true },
  { src: "assets/photos/port-fashion-050.jpg", cdnSrc: "assets/photos/port-fashion-050.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 50", tall: true },
  { src: "assets/photos/port-fashion-051.jpg", cdnSrc: "assets/photos/port-fashion-051.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 51", tall: true },
  { src: "assets/photos/port-fashion-052.jpg", cdnSrc: "assets/photos/port-fashion-052.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 52", tall: true },
  { src: "assets/photos/port-fashion-053.jpg", cdnSrc: "assets/photos/port-fashion-053.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 53", tall: true },
  { src: "assets/photos/port-fashion-054.jpg", cdnSrc: "assets/photos/port-fashion-054.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 54", tall: false },
  { src: "assets/photos/port-fashion-055.jpg", cdnSrc: "assets/photos/port-fashion-055.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 55", tall: false },
  { src: "assets/photos/port-fashion-056.jpg", cdnSrc: "assets/photos/port-fashion-056.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 56", tall: true },
  { src: "assets/photos/port-fashion-057.jpg", cdnSrc: "assets/photos/port-fashion-057.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 57", tall: true },
  { src: "assets/photos/port-fashion-058.jpg", cdnSrc: "assets/photos/port-fashion-058.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 58", tall: true },
  { src: "assets/photos/port-fashion-059.jpg", cdnSrc: "assets/photos/port-fashion-059.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 59", tall: true },
  { src: "assets/photos/port-fashion-060.jpg", cdnSrc: "assets/photos/port-fashion-060.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 60", tall: true },
  { src: "assets/photos/port-fashion-061.jpg", cdnSrc: "assets/photos/port-fashion-061.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 61", tall: true },
  { src: "assets/photos/port-fashion-062.jpg", cdnSrc: "assets/photos/port-fashion-062.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 62", tall: true },
  { src: "assets/photos/port-fashion-063.jpg", cdnSrc: "assets/photos/port-fashion-063.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 63", tall: true },
  { src: "assets/photos/port-fashion-064.jpg", cdnSrc: "assets/photos/port-fashion-064.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 64", tall: true },
  { src: "assets/photos/port-fashion-065.jpg", cdnSrc: "assets/photos/port-fashion-065.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 65", tall: true },
  { src: "assets/photos/port-fashion-066.jpg", cdnSrc: "assets/photos/port-fashion-066.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 66", tall: false },
  { src: "assets/photos/port-fashion-067.jpg", cdnSrc: "assets/photos/port-fashion-067.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 67", tall: true },
  { src: "assets/photos/port-fashion-068.jpg", cdnSrc: "assets/photos/port-fashion-068.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 68", tall: false },
  { src: "assets/photos/port-fashion-069.jpg", cdnSrc: "assets/photos/port-fashion-069.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 69", tall: true },
  { src: "assets/photos/port-fashion-070.jpg", cdnSrc: "assets/photos/port-fashion-070.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 70", tall: true },
  { src: "assets/photos/port-fashion-071.jpg", cdnSrc: "assets/photos/port-fashion-071.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 71", tall: true },
  { src: "assets/photos/port-fashion-072.jpg", cdnSrc: "assets/photos/port-fashion-072.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 72", tall: true },
  { src: "assets/photos/port-fashion-073.jpg", cdnSrc: "assets/photos/port-fashion-073.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 73", tall: true },
  { src: "assets/photos/port-fashion-074.jpg", cdnSrc: "assets/photos/port-fashion-074.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 74", tall: true },
  { src: "assets/photos/port-fashion-075.jpg", cdnSrc: "assets/photos/port-fashion-075.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 75", tall: true },
  { src: "assets/photos/port-fashion-076.jpg", cdnSrc: "assets/photos/port-fashion-076.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 76", tall: true },
  { src: "assets/photos/port-fashion-077.jpg", cdnSrc: "assets/photos/port-fashion-077.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 77", tall: true },
  { src: "assets/photos/port-fashion-078.jpg", cdnSrc: "assets/photos/port-fashion-078.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 78", tall: true },
  { src: "assets/photos/port-fashion-079.jpg", cdnSrc: "assets/photos/port-fashion-079.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 79", tall: true },
  { src: "assets/photos/port-fashion-080.jpg", cdnSrc: "assets/photos/port-fashion-080.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 80", tall: false },
  { src: "assets/photos/port-fashion-081.jpg", cdnSrc: "assets/photos/port-fashion-081.jpg", category: "Fashion", project: "Fashion & Editorial Lookbook", title: "Fashion & Editorial Lookbook — Frame 81", tall: true },
  { src: "assets/photos/port-fashion-082.jpg", cdnSrc: "assets/photos/port-fashion-082.jpg", category: "Fashion", project: "Curated Portrait & Stills", title: "Curated Portrait & Stills — Frame 82", tall: true },
  { src: "assets/photos/port-fashion-083.jpg", cdnSrc: "assets/photos/port-fashion-083.jpg", category: "Fashion", project: "Curated Portrait & Stills", title: "Curated Portrait & Stills — Frame 83", tall: true },
  { src: "assets/photos/port-fashion-084.jpg", cdnSrc: "assets/photos/port-fashion-084.jpg", category: "Fashion", project: "Curated Portrait & Stills", title: "Curated Portrait & Stills — Frame 84", tall: false },
  { src: "assets/photos/port-fashion-085.jpg", cdnSrc: "assets/photos/port-fashion-085.jpg", category: "Fashion", project: "Curated Portrait & Stills", title: "Curated Portrait & Stills — Frame 85", tall: true },
  { src: "assets/photos/port-product-001.jpg", cdnSrc: "assets/photos/port-product-001.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 01", tall: false },
  { src: "assets/photos/port-product-002.jpg", cdnSrc: "assets/photos/port-product-002.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 02", tall: false },
  { src: "assets/photos/port-product-003.jpg", cdnSrc: "assets/photos/port-product-003.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 03", tall: true },
  { src: "assets/photos/port-product-004.jpg", cdnSrc: "assets/photos/port-product-004.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 04", tall: false },
  { src: "assets/photos/port-product-005.jpg", cdnSrc: "assets/photos/port-product-005.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 05", tall: true },
  { src: "assets/photos/port-product-006.jpg", cdnSrc: "assets/photos/port-product-006.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 06", tall: true },
  { src: "assets/photos/port-product-007.jpg", cdnSrc: "assets/photos/port-product-007.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 07", tall: true },
  { src: "assets/photos/port-product-008.jpg", cdnSrc: "assets/photos/port-product-008.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 08", tall: false },
  { src: "assets/photos/port-product-009.jpg", cdnSrc: "assets/photos/port-product-009.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 09", tall: true },
  { src: "assets/photos/port-product-010.jpg", cdnSrc: "assets/photos/port-product-010.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 10", tall: true },
  { src: "assets/photos/port-product-011.jpg", cdnSrc: "assets/photos/port-product-011.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 11", tall: true },
  { src: "assets/photos/port-product-012.jpg", cdnSrc: "assets/photos/port-product-012.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 12", tall: true },
  { src: "assets/photos/port-product-013.jpg", cdnSrc: "assets/photos/port-product-013.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 13", tall: true },
  { src: "assets/photos/port-product-014.jpg", cdnSrc: "assets/photos/port-product-014.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 14", tall: true },
  { src: "assets/photos/port-product-015.jpg", cdnSrc: "assets/photos/port-product-015.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 15", tall: true },
  { src: "assets/photos/port-product-016.jpg", cdnSrc: "assets/photos/port-product-016.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 16", tall: true },
  { src: "assets/photos/port-product-017.jpg", cdnSrc: "assets/photos/port-product-017.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 17", tall: true },
  { src: "assets/photos/port-product-018.jpg", cdnSrc: "assets/photos/port-product-018.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 18", tall: true },
  { src: "assets/photos/port-product-019.jpg", cdnSrc: "assets/photos/port-product-019.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 19", tall: true },
  { src: "assets/photos/port-product-020.jpg", cdnSrc: "assets/photos/port-product-020.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 20", tall: false },
  { src: "assets/photos/port-product-021.jpg", cdnSrc: "assets/photos/port-product-021.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 21", tall: false },
  { src: "assets/photos/port-product-022.jpg", cdnSrc: "assets/photos/port-product-022.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 22", tall: true },
  { src: "assets/photos/port-product-023.jpg", cdnSrc: "assets/photos/port-product-023.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 23", tall: true },
  { src: "assets/photos/port-product-024.jpg", cdnSrc: "assets/photos/port-product-024.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 24", tall: false },
  { src: "assets/photos/port-product-025.jpg", cdnSrc: "assets/photos/port-product-025.jpg", category: "Product", project: "Product Design & Packaging", title: "Product Design & Packaging — Frame 25", tall: false },
  { src: "assets/photos/port-architecture-001.jpg", cdnSrc: "assets/photos/port-architecture-001.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 01", tall: false },
  { src: "assets/photos/port-architecture-002.jpg", cdnSrc: "assets/photos/port-architecture-002.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 02", tall: false },
  { src: "assets/photos/port-architecture-003.jpg", cdnSrc: "assets/photos/port-architecture-003.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 03", tall: false },
  { src: "assets/photos/port-architecture-004.jpg", cdnSrc: "assets/photos/port-architecture-004.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 04", tall: false },
  { src: "assets/photos/port-architecture-005.jpg", cdnSrc: "assets/photos/port-architecture-005.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 05", tall: false },
  { src: "assets/photos/port-architecture-006.jpg", cdnSrc: "assets/photos/port-architecture-006.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 06", tall: false },
  { src: "assets/photos/port-architecture-007.jpg", cdnSrc: "assets/photos/port-architecture-007.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 07", tall: false },
  { src: "assets/photos/port-architecture-008.jpg", cdnSrc: "assets/photos/port-architecture-008.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 08", tall: false },
  { src: "assets/photos/port-architecture-009.jpg", cdnSrc: "assets/photos/port-architecture-009.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 09", tall: false },
  { src: "assets/photos/port-architecture-010.jpg", cdnSrc: "assets/photos/port-architecture-010.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 10", tall: false },
  { src: "assets/photos/port-architecture-011.jpg", cdnSrc: "assets/photos/port-architecture-011.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 11", tall: false },
  { src: "assets/photos/port-architecture-012.jpg", cdnSrc: "assets/photos/port-architecture-012.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 12", tall: false },
  { src: "assets/photos/port-architecture-013.jpg", cdnSrc: "assets/photos/port-architecture-013.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 13", tall: true },
  { src: "assets/photos/port-architecture-014.jpg", cdnSrc: "assets/photos/port-architecture-014.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 14", tall: false },
  { src: "assets/photos/port-architecture-015.jpg", cdnSrc: "assets/photos/port-architecture-015.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 15", tall: true },
  { src: "assets/photos/port-architecture-016.jpg", cdnSrc: "assets/photos/port-architecture-016.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 16", tall: false },
  { src: "assets/photos/port-architecture-017.jpg", cdnSrc: "assets/photos/port-architecture-017.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 17", tall: true },
  { src: "assets/photos/port-architecture-018.jpg", cdnSrc: "assets/photos/port-architecture-018.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 18", tall: true },
  { src: "assets/photos/port-architecture-019.jpg", cdnSrc: "assets/photos/port-architecture-019.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 19", tall: false },
  { src: "assets/photos/port-architecture-020.jpg", cdnSrc: "assets/photos/port-architecture-020.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 20", tall: false },
  { src: "assets/photos/port-architecture-021.jpg", cdnSrc: "assets/photos/port-architecture-021.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 21", tall: true },
  { src: "assets/photos/port-architecture-022.jpg", cdnSrc: "assets/photos/port-architecture-022.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 22", tall: false },
  { src: "assets/photos/port-architecture-023.jpg", cdnSrc: "assets/photos/port-architecture-023.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 23", tall: false },
  { src: "assets/photos/port-architecture-024.jpg", cdnSrc: "assets/photos/port-architecture-024.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 24", tall: false },
  { src: "assets/photos/port-architecture-025.jpg", cdnSrc: "assets/photos/port-architecture-025.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 25", tall: false },
  { src: "assets/photos/port-architecture-026.jpg", cdnSrc: "assets/photos/port-architecture-026.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 26", tall: true },
  { src: "assets/photos/port-architecture-027.jpg", cdnSrc: "assets/photos/port-architecture-027.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 27", tall: true },
  { src: "assets/photos/port-architecture-028.jpg", cdnSrc: "assets/photos/port-architecture-028.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 28", tall: true },
  { src: "assets/photos/port-architecture-029.jpg", cdnSrc: "assets/photos/port-architecture-029.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 29", tall: true },
  { src: "assets/photos/port-architecture-030.jpg", cdnSrc: "assets/photos/port-architecture-030.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 30", tall: true },
  { src: "assets/photos/port-architecture-031.jpg", cdnSrc: "assets/photos/port-architecture-031.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 31", tall: true },
  { src: "assets/photos/port-architecture-032.jpg", cdnSrc: "assets/photos/port-architecture-032.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 32", tall: true },
  { src: "assets/photos/port-architecture-033.jpg", cdnSrc: "assets/photos/port-architecture-033.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 33", tall: true },
  { src: "assets/photos/port-architecture-034.jpg", cdnSrc: "assets/photos/port-architecture-034.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 34", tall: false },
  { src: "assets/photos/port-architecture-035.jpg", cdnSrc: "assets/photos/port-architecture-035.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 35", tall: false },
  { src: "assets/photos/port-architecture-036.jpg", cdnSrc: "assets/photos/port-architecture-036.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 36", tall: false },
  { src: "assets/photos/port-architecture-037.jpg", cdnSrc: "assets/photos/port-architecture-037.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 37", tall: false },
  { src: "assets/photos/port-architecture-038.jpg", cdnSrc: "assets/photos/port-architecture-038.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 38", tall: false },
  { src: "assets/photos/port-architecture-039.jpg", cdnSrc: "assets/photos/port-architecture-039.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 39", tall: false },
  { src: "assets/photos/port-architecture-040.jpg", cdnSrc: "assets/photos/port-architecture-040.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 40", tall: false },
  { src: "assets/photos/port-architecture-041.jpg", cdnSrc: "assets/photos/port-architecture-041.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 41", tall: true },
  { src: "assets/photos/port-architecture-042.jpg", cdnSrc: "assets/photos/port-architecture-042.jpg", category: "Architecture", project: "Architectural & Interior Spaces", title: "Architectural & Interior Spaces — Frame 42", tall: false },
];


const CLIENTS = [
  { name: "KARANI COUTURE", logo: "assets/brands/karani-logo-clean.png" },
  { name: "VILLIONAIRE ATELIER", logo: "assets/brands/villionaire-logo-clean.png" },
  { name: "NAMISHREE GROUP", logo: "assets/brands/namishree_white.png" },
  { name: "AVON CYCLES", logo: "assets/brands/img_1019-clean.png" },
  { name: "ZOMOZ FOODS", logo: "assets/brands/img_1018.png" },
  { name: "TRIDENT SPACES", logo: "assets/brands/img_1020-clean.png" },
  { name: "HERO SPICES", logo: "assets/brands/img_1021-clean.png" },
  { name: "KARAFA KITCHENS", logo: "assets/brands/img_1022-clean.png" },
  { name: "GREENBIRD FOODS", logo: "assets/brands/img_1025-clean.png" },
  { name: "VRINDAVAN LUXURY", logo: "assets/brands/img_1026-clean.png" },
  { name: "AURIGENE PHARMA", logo: "assets/brands/img_1027-clean.png" },
  { name: "ARAGEN LIFE SCIENCES", logo: "assets/brands/img_1030-clean.png" },
  { name: "OSCILLA AUDIO", logo: "assets/brands/img_1031-clean.png" },
  { name: "THE HOUSE OF CELONA", logo: "assets/brands/logo-cream.webp" },
  { name: "ROYAL JEWELS", logo: "assets/brands/img_1032-clean.png" },
  { name: "NUNE EDIBLE OILS", logo: "assets/brands/img_1033-clean.png" },
  { name: "iNAP MEDICAL", logo: "assets/brands/img_1034-clean.png" },
  { name: "SWIGGY INDIA", logo: "assets/brands/img_1035-clean.png" }
];


function initVideoHoverPreviews() {
  const cards = document.querySelectorAll("[data-video]");
  cards.forEach(card => {
    const videoSrc = card.dataset.video;
    if (!videoSrc) return;

    let hoverVideo = null;
    const mediaContainer = card.querySelector(".media-target") || card;

    card.addEventListener("mouseenter", () => {
      card.classList.add("is-hovering");
      if (!hoverVideo) {
        hoverVideo = document.createElement("video");
        hoverVideo.src = videoSrc;
        hoverVideo.muted = true;
        hoverVideo.loop = true;
        hoverVideo.playsInline = true;
        hoverVideo.preload = "auto";
        hoverVideo.className = card.classList.contains("vertical-card")
          ? "vertical-hover-video"
          : "film-hover-video";
        mediaContainer.appendChild(hoverVideo);
      }

      hoverVideo.play().then(() => {
        hoverVideo.style.opacity = "1";
      }).catch(() => {});
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("is-hovering");
      if (hoverVideo) {
        hoverVideo.style.opacity = "0";
        hoverVideo.pause();
        hoverVideo.currentTime = 0;
      }
    });
  });
}

/**
 * ══════════════════════════════════════════════════════════════════
 * THEATER LIGHTBOX MODAL CONTROLLER
 * Fullscreen video and photo inspection with telemetry
 * ══════════════════════════════════════════════════════════════════
 */
const lightboxModal = document.getElementById("lightboxModal");
const lightboxMedia = document.getElementById("lightboxMedia");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxTag = document.getElementById("lightboxTag");
const lightboxYear = document.getElementById("lightboxYear");
const lightboxDesc = document.getElementById("lightboxDesc");
const specCategory = document.getElementById("specCategory");
const specFormat = document.getElementById("specFormat");
const specYear = document.getElementById("specYearNode");

function openFilmModalById(id) {
  const p = FEATURED_PROJECTS.find(item => item.id === id);
  if (!p) return;
  openVideoModal(
    p.video,
    p.cover,
    p.title,
    (p.category || "COMMERCIAL").toUpperCase(),
    p.year,
    p.desc,
    p.category,
    p.format || "16:9 Widescreen",
    false,
    p.client ? `${p.client}${p.agency ? ' · ' + p.agency : ''}` : "",
    p.camera ? `${p.camera}${p.lens ? ' · ' + p.lens : ''}` : "Cinema Package",
    p.role || "Director of Photography"
  );
}

window.openShowreelModal = function() {
  openVideoModal(
    "assets/showreel/showreel.mp4",
    "assets/showreel/showreel-poster.jpg",
    "Charan Golkonda — Director of Photography Showreel",
    "DIRECTOR OF PHOTOGRAPHY",
    "2018–2026",
    "Master cinematography showreel featuring commercials, fashion films, architectural spaces, and high-energy brand campaigns.",
    "Showreel",
    "2.39:1 CinemaScope",
    false,
    "",
    "ARRI Alexa Mini LF · Cooke Anamorphic",
    "Director of Photography"
  );
};

function openReelModalById(id) {
  const s = SHORTS.find(item => item.id === id);
  if (!s) return;
  const brandName = s.tag || (s.title.includes("—") ? s.title.split("—")[0].trim() : "");
  openVideoModal(
    s.video,
    s.cover,
    s.title,
    (s.tag || "REEL").toUpperCase(),
    s.duration,
    s.desc || `Native 9:16 vertical commercial campaign cut for ${brandName || 'digital media'}.`,
    s.tag || "Social Reel",
    "9:16 Vertical",
    true,
    brandName,
    "Sony FX3 / FX9 · G-Master",
    "Director of Photography"
  );
}

function openVideoModal(videoSrc, posterSrc, title, tag, year, desc, category, format, isVertical = false, client = "", camera = "", role = "Director of Photography") {
  if (!lightboxModal) return;

  const aspectStyle = isVertical ? "aspect-ratio: 9/16; max-height: 75vh; max-width: 420px; margin: 0 auto;" : "aspect-ratio: 16/9; max-height: 72vh; width: 100%;";

  lightboxMedia.innerHTML = `
    <div style="position: relative; ${aspectStyle} background: #000; display:flex; align-items:center; justify-content:center; border-radius: 6px; overflow:hidden;">
      <video src="${videoSrc}" poster="${posterSrc}" controls autoplay playsinline style="width:100%; height:100%; object-fit:contain;"></video>
    </div>
  `;

  const specRole = document.getElementById("specRole");
  const specCredit = document.getElementById("specCredit");
  const specCreditLbl = document.getElementById("specCreditLbl");
  const specCamera = document.getElementById("specCamera");
  const creditNode = specCredit ? (document.getElementById("specCreditNode") || specCredit.closest(".spec-node")) : null;

  if (lightboxTitle) lightboxTitle.textContent = title || "Cinematic Visual";
  if (lightboxTag) lightboxTag.textContent = (tag || category || "CINEMA").toUpperCase();
  if (lightboxYear) lightboxYear.textContent = year || "2024";
  if (lightboxDesc) lightboxDesc.textContent = desc || "Director of photography visual work.";
  if (specCategory) specCategory.textContent = category || tag || "Commercial TVC";
  if (specFormat) specFormat.textContent = format || (isVertical ? "9:16 Vertical" : "16:9 Cinema");
  if (specYear) specYear.textContent = year ? `${year}` : "2024";
  if (specRole) specRole.textContent = role;

  // Real client / brand display logic (no literal placeholders)
  const cleanClient = (client || "").trim();
  if (cleanClient && cleanClient !== "Client Credit" && cleanClient !== "Client Commission") {
    if (specCreditLbl) specCreditLbl.textContent = "CLIENT / BRAND";
    if (specCredit) specCredit.textContent = cleanClient;
    if (creditNode) creditNode.style.display = "";
  } else {
    if (creditNode) creditNode.style.display = "none";
    if (specCredit) specCredit.textContent = "";
  }

  if (specCamera) specCamera.textContent = camera || "ARRI Alexa / Cooke";

  lightboxModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function openPhotoModal(src, title, category, project, cdnSrc) {
  if (!lightboxModal) return;

  lightboxMedia.innerHTML = `<img src="${src}" alt="${title}" style="max-height: 72vh; width:auto; max-width: 92vw; object-fit:contain; border-radius: 4px; box-shadow: 0 10px 40px rgba(0,0,0,0.8);">`;
  if (lightboxTitle) lightboxTitle.textContent = title || "Still Capture";
  if (lightboxTag) lightboxTag.textContent = (category || "PHOTOGRAPHY").toUpperCase();
  if (lightboxYear) lightboxYear.textContent = project ? project.toUpperCase() : "BEHANCE STILL ARCHIVE";
  if (lightboxDesc) lightboxDesc.textContent = project ? `Curated series from "${project}". High-resolution editorial capture.` : `High-resolution still capture categorized under ${category}.`;
  if (specCategory) specCategory.textContent = category || "Editorial Still";
  if (specFormat) specFormat.textContent = "High-Res Photography";
  if (specYear) specYear.textContent = "2024 / 2025";

  const specRole = document.getElementById("specRole");
  const specCredit = document.getElementById("specCredit");
  const specCreditLbl = document.getElementById("specCreditLbl");
  const specCamera = document.getElementById("specCamera");
  const creditNode = specCredit ? (document.getElementById("specCreditNode") || specCredit.closest(".spec-node")) : null;

  if (specRole) specRole.textContent = "Director of Photography / Stills";

  // Real project / series display logic (no literal placeholders)
  const cleanProject = (project || "").trim();
  if (cleanProject && cleanProject !== "Client Credit" && cleanProject !== "Editorial Archive") {
    if (specCreditLbl) specCreditLbl.textContent = "PROJECT / SERIES";
    if (specCredit) specCredit.textContent = cleanProject;
    if (creditNode) creditNode.style.display = "";
  } else {
    if (creditNode) creditNode.style.display = "none";
    if (specCredit) specCredit.textContent = "";
  }

  if (specCamera) specCamera.textContent = "Digital / Medium Format";

  lightboxModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove("open");
  if (lightboxMedia) lightboxMedia.innerHTML = "";
  document.body.style.overflow = "";
}

// Lightbox Listeners
if (lightboxModal) {
  const closeBtn = document.getElementById("lightboxClose");
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });
}

/**
 * ══════════════════════════════════════════════════════════════════
 * INQUIRY MODAL & TOAST ALERTS
 * ══════════════════════════════════════════════════════════════════
 */
const inquiryModal = document.getElementById("inquiryModal");

function openInquiryModal() {
  if (!inquiryModal) return;
  inquiryModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeInquiryModal() {
  if (!inquiryModal) return;
  inquiryModal.classList.remove("open");
  document.body.style.overflow = "";
}

if (inquiryModal) {
  const closeBtn = document.getElementById("inquiryClose");
  if (closeBtn) closeBtn.addEventListener("click", closeInquiryModal);
  inquiryModal.addEventListener("click", (e) => {
    if (e.target === inquiryModal) closeInquiryModal();
  });
}

window.handleInquirySubmit = async function(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalBtnText = btn ? btn.innerHTML : "SEND MESSAGE &rarr;";
  
  const nameInput = form.querySelector('[name="name"]') || form.querySelector('#inquiryName');
  const emailInput = form.querySelector('[name="email"]') || form.querySelector('#inquiryEmail');
  const disciplineInput = form.querySelector('[name="discipline"]') || form.querySelector('#inquiryDiscipline');
  const messageInput = form.querySelector('[name="message"]') || form.querySelector('#inquiryMessage');
  
  const name = nameInput ? nameInput.value.trim() : "";
  const email = emailInput ? emailInput.value.trim() : "";
  const discipline = disciplineInput ? disciplineInput.value : "";
  const message = messageInput ? messageInput.value.trim() : "";
  
  if (!name || !email) {
    showToast("Please provide your name and email.");
    return;
  }
  
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = "<span>SENDING MESSAGE...</span>";
  }

  const payload = {
    name: name,
    email: email,
    discipline: discipline,
    message: message,
    _subject: `New Portfolio Inquiry: ${discipline} from ${name}`,
    _replyto: email
  };

  let sent = false;

  // 1. Try server endpoint (/api/contact - handles Netlify Functions or local server)
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json().catch(() => ({}));
      if (data.success !== false) {
        sent = true;
      }
    }
  } catch (err) {
    console.warn("Direct /api/contact endpoint unavailable, falling back to email gateway:", err);
  }

  // 2. Direct FormSubmit AJAX email gateway to charangolkonda@gmail.com
  if (!sent) {
    try {
      const res = await fetch("https://formsubmit.co/ajax/charangolkonda@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify({
          name: name,
          email: email,
          discipline: discipline,
          message: message,
          _subject: `Portfolio Inquiry: ${discipline} from ${name}`,
          _template: "table"
        })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok || data.success === "true" || data.success === true) {
        sent = true;
      }
    } catch (gatewayErr) {
      console.warn("FormSubmit gateway error:", gatewayErr);
    }
  }

  if (sent) {
    showToast("Message sent successfully! Charan will respond shortly.");
    form.reset();
    if (typeof closeInquiryModal === "function") closeInquiryModal();
  } else {
    // 3. Fallback to pre-filled mailto
    const mailtoUri = `mailto:charangolkonda@gmail.com?subject=${encodeURIComponent("Portfolio Inquiry: " + discipline + " - " + name)}&body=${encodeURIComponent("Name / Company: " + name + "\nEmail: " + email + "\nDiscipline: " + discipline + "\n\nProject Details:\n" + message)}`;
    window.location.href = mailtoUri;
    showToast("Opening your email client to deliver message to Charan...");
    form.reset();
    if (typeof closeInquiryModal === "function") closeInquiryModal();
  }

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = originalBtnText;
  }
};

function copyContact(text, msg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg || "Copied to clipboard!");
  }).catch(() => {
    showToast(text);
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
    closeInquiryModal();
  }
});

/**
 * ══════════════════════════════════════════════════════════════════
 * NAVIGATION & ACTIVE PAGE HIGHLIGHTER
 * ══════════════════════════════════════════════════════════════════
 */
function initNavigation() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Mobile menu toggle
  const toggle = document.getElementById("mobileToggle");
  const drawer = document.getElementById("mobileDrawer");
  const drawerClose = document.getElementById("mobileDrawerClose");

  if (toggle && drawer) {
    toggle.addEventListener("click", () => drawer.classList.add("open"));
  }
  if (drawerClose && drawer) {
    drawerClose.addEventListener("click", () => drawer.classList.remove("open"));
  }
}

/**
 * ══════════════════════════════════════════════════════════════════
 * ROWDY.CO ENTRY SHOWREEL BACKGROUND CONTROLLER
 * Autoplays muted background showreel video & repeats continuously.
 * ══════════════════════════════════════════════════════════════════
 */
function initHeroEntry() {
  const maskVideo = document.querySelector(".rowdy-mask-video");
  if (maskVideo) {
    maskVideo.muted = true;
    maskVideo.playsInline = true;
    maskVideo.setAttribute("muted", "");
    maskVideo.setAttribute("playsinline", "");
    maskVideo.setAttribute("loop", "");
    
    const playPromise = maskVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const startOnInteraction = () => {
          maskVideo.play().catch(() => {});
          window.removeEventListener("click", startOnInteraction);
          window.removeEventListener("touchstart", startOnInteraction);
          window.removeEventListener("scroll", startOnInteraction);
        };
        window.addEventListener("click", startOnInteraction, { once: true });
        window.addEventListener("touchstart", startOnInteraction, { once: true });
        window.addEventListener("scroll", startOnInteraction, { once: true });
      });
    }
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1) {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

function initScrollHeader() {
  const header = document.querySelector(".site-header-reveal");
  if (!header) return;

  const onScroll = () => {
    // When swiping / scrolling down past starting hero (120px), reveal the header
    if (window.scrollY > 120) {
      header.classList.add("is-visible");
    } else {
      header.classList.remove("is-visible");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function updateDynamicCounts() {
  const stillsDesc = document.getElementById("gatewayStillsDesc");
  if (stillsDesc && typeof ARCHIVE_PHOTOS !== "undefined") {
    stillsDesc.textContent = `${ARCHIVE_PHOTOS.length} curated high-resolution master stills across fashion, spaces, food & product.`;
  }
  const reelsDesc = document.getElementById("gatewayReelsDesc");
  if (reelsDesc && typeof SHORTS !== "undefined") {
    reelsDesc.textContent = `${SHORTS.length} native 9:16 vertical cuts for fashion, food and brand campaigns.`;
  }
  const filmsDesc = document.getElementById("gatewayFilmsDesc");
  if (filmsDesc && typeof FEATURED_PROJECTS !== "undefined") {
    filmsDesc.textContent = `${FEATURED_PROJECTS.length} commercial TVCs across fashion, food, sports and real estate.`;
  }
}

// Auto-run on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initHeroEntry();
  initScrollHeader();
  initCardAccessibility();
  initSmoothScroll();
  initVideoHoverPreviews();
  updateDynamicCounts();
  renderBrandSliders("homeBrandsGrid");
  renderBrandSliders("aboutBrandsGrid");
});

/**
 * ══════════════════════════════════════════════════════════════════
 * DUAL-TRACK CONTINUOUS BRAND LOGO SLIDER
 * Infinite kinetic sliding ribbons with opposite directional flow
 * ══════════════════════════════════════════════════════════════════
 */

/**
 * ══════════════════════════════════════════════════════════════════
 * DUAL-TRACK CONTINUOUS BRAND LOGO SLIDER (ICON-ONLY MARQUEE)
 * Infinite kinetic sliding ribbons with opposite directional flow
 * Clean pure icon marks without subtext
 * ══════════════════════════════════════════════════════════════════
 */
function renderBrandSliders(containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof CLIENTS === "undefined" || !CLIENTS.length) return;

  const half = Math.ceil(CLIENTS.length / 2);
  const row1 = CLIENTS.slice(0, half);
  const row2 = CLIENTS.slice(half);

  // Duplicate 3 times to ensure infinite seamless loop on any screen width
  const row1Items = [...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2];

  container.innerHTML = `
    <div class="brands-slider-container">
      <!-- Track 1: Smooth Leftward Slide -->
      <div class="brands-slider-wrap">
        <div class="brands-slider-track">
          ${row1Items.map(c => `
            <div class="brand-slide-card" title="${c.name}">
              ${c.logo ? `<img src="${c.logo}" alt="${c.name}" class="brand-logo-img" loading="lazy">` : `<span class="brand-logo-fallback">${c.name}</span>`}
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Track 2: Reverse Rightward Slide -->
      <div class="brands-slider-wrap">
        <div class="brands-slider-track reverse">
          ${row2Items.map(c => `
            <div class="brand-slide-card" title="${c.name}">
              ${c.logo ? `<img src="${c.logo}" alt="${c.name}" class="brand-logo-img" loading="lazy">` : `<span class="brand-logo-fallback">${c.name}</span>`}
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}


// Keyboard Accessibility for Cards
function initCardAccessibility() {
  document.querySelectorAll(".film-card, .vertical-card").forEach(card => {
    if (!card.hasAttribute("tabindex")) card.setAttribute("tabindex", "0");
    if (!card.hasAttribute("role")) card.setAttribute("role", "button");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });
}
