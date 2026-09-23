# Implementation Plan: Icon-Only Brand Logos, Compact Reels & Complete TVC/Reel Library

A systematic plan to refine the visual presentation of brand logos (pure icon marks, zero sub-labels), reduce vertical reel cards to an elegant compact size, and ingest the entire media vault (20 TVCs and 71 vertical reels) into Charan Golkonda's portfolio.

---

## 🎯 Objectives & Scope

1. **Pure Icon-Only Brand Logos**:
   - Strip all text labels (`.brand-name-sub`) beneath brand logos in both `index.html` and `about.html`.
   - Center and scale the clean transparent logo icon marks inside compact, refined sliding cards.
2. **Compact Vertical Reel Sizing**:
   - Re-proportion the 9:16 vertical reel cards to a sleek, compact size (`max-width: 210px–240px`, 5–6 columns on desktop), eliminating bulky oversized blocks and creating a high-density, modern social cinema gallery.
3. **Comprehensive TVC & Reel Library Integration**:
   - Ingest all **20 TVC commercial videos** from `TVC/` into `assets/tvc/` with clean URL-safe slugs and 1080p poster thumbnails.
   - Ingest all **71 vertical reels** from `REELS 2/` into `assets/shorts/` with clean slugs and 9:16 poster thumbnails.
   - Expand `FEATURED_PROJECTS` and `SHORTS` arrays in `js/main.js` to index the complete portfolio.
   - Update `films.html` and `verticals.html` to display the full archives with responsive filtering and smooth video hover-to-play.

---

## 📋 Task Breakdown

### Phase 1: Full Vault Media Ingestion & Poster Generation
- **Target Folders:** `TVC/` (20 files), `REELS 2/` (71 files)
- **Actions:**
  - Create Python ingestion script (`scratch/ingest_full_vault.py`):
    - Use `os.link` (hardlinks) into `assets/tvc/` and `assets/shorts/` (zero duplicate disk space).
    - Map clean, readable filenames (e.g., `tvc-chicory.mp4`, `reel-greenbird-sausage.mp4`).
    - Use native macOS `qlmanage -t -s 1080` to generate instant high-resolution `.jpg` poster covers for each video.
- **Output:**
  - `assets/tvc/`: 20 `.mp4` / `.mov` files + 20 `.jpg` posters
  - `assets/shorts/`: 71 `.mp4` / `.mov` files + 71 `.jpg` posters

### Phase 2: Brand Logos Polish (Icon-Only, No Text)
- **Target Files:** `css/style.css`, `js/main.js`
- **Actions:**
  - Update `renderBrandSliders()` in `js/main.js` to remove `<span class="brand-name-sub">` entirely.
  - Render strictly:
    ```html
    <div class="brand-slide-card" title="${c.name}">
      <img src="${c.logo}" alt="${c.name}" class="brand-logo-img" loading="lazy">
    </div>
    ```
  - Refine `.brand-slide-card` CSS in `css/style.css`:
    - Width adjusted to compact `170px–190px` (more logos visible on screen simultaneously).
    - Enhanced center alignment and subtle hover glow (`box-shadow: 0 8px 24px rgba(234, 160, 54, 0.15)`).

### Phase 3: Compact Vertical Reel Cards Architecture
- **Target Files:** `css/style.css`, `verticals.html`, `index.html`
- **Actions:**
  - Update `.verticals-grid` in `css/style.css`:
    - Change grid from 4 large columns to a compact 5-to-6 column grid:
      `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));`
    - Cap max card width at `240px` with tight gutters (`14px–18px`).
  - Scale down metadata fonts:
    - Reel title: `1.05rem` (condensed, legible, 1-2 lines).
    - Tag badge: `0.62rem` micro-pill.
    - Play button: `36px` compact circle.
  - On `index.html`: Showcase a curated 5-reel compact row with instant hover video playback and a badge linking to the full 70+ vault on `verticals.html`.

### Phase 4: Full Library Cataloging in `js/main.js`
- **Target Files:** `js/main.js`
- **Actions:**
  - Populate `FEATURED_PROJECTS` with all 20 TVCs categorized across:
    - *Commercial Food & Beverage* (Zomoz 1, 2, 3, Chicory, Nune Oils, etc.)
    - *Sports & Athletics* (Avon Cycles Klaasen, Cricketers Speed, Champions Anthem, etc.)
    - *Real Estate & Corporate Architecture* (Trident Spaces, Vrindavan Luxury, ST Main, etc.)
    - *Luxury Jewelry & Fashion* (Royal Heritage Jewel J10, Daughter D1, Alludu D1, etc.)
  - Populate `SHORTS` with all 71 vertical reels categorized across:
    - *Fashion & Couture* (Villionaire, Karani Atelier, Bridal Lookbooks)
    - *Culinary & Hospitality* (Karafa Artisanal Kitchen, Egg Burgers, Toast, Desserts)
    - *Hero Spices Commercials* (Chilli, Turmeric, Coriander)
    - *Greenbird Plant Protein* (Nuggets, Keema Pulao, Seekh Kebabs, Sausages)
    - *Brand Campaigns & Testimonials* (Bustterz, Founders Reels, Site Visits)
  - Ensure every entry connects its respective video path and poster path with instant video hover preview support.

### Phase 5: Multi-Page Display & Filter Synchronization
- **Target Files:** `films.html`, `verticals.html`, `index.html`, `about.html`
- **Actions:**
  - `films.html`:
    - Category tabs: `ALL (20)`, `FOOD & BEVERAGE`, `SPORTS & ACTION`, `ARCHITECTURE`, `JEWELRY & FASHION`.
    - Total count counter: "20 COMMERCIAL FILMS".
  - `verticals.html`:
    - Category tabs: `ALL (71)`, `FASHION`, `CULINARY`, `SPICES & FMCG`, `GREENBIRD`, `CAMPAIGN`.
    - Compact grid layout rendering all 71 reels smoothly with lazy-loading and hover preview.
  - `index.html`:
    - Curated highlights from the top TVCs and reels.
    - Icon-only dual-track sliding marquee.

---

## 🔍 Verification & Quality Assurance

1. **Media Ingestion Verification**:
   - Python check ensuring all 20 TVCs and 71 reels have valid poster images and non-zero byte sizes.
2. **Server & Route Verification**:
   - Automated HTTP `HEAD` test verifying that every single video and image in `assets/tvc/` and `assets/shorts/` returns `HTTP 200 OK` on `http://localhost:8080/`.
3. **Visual & Interaction Check**:
   - Verify brand logo sliders display pure icon marks without any text underneath.
   - Verify vertical reel cards render compactly in a 5-6 column grid.
   - Verify hover-to-play preview triggers instantly on mouse enter and resets on mouse leave across both TVCs and vertical reels.
