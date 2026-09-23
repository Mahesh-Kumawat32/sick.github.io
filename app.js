/**
 * SICK // HAUTE STREETWEAR & AESTHETIC BEAUTY
 * Core Interactive Frontend Engine
 */

// ---------------------------------------------------------------------------
// 1. Product Catalog Data
// ---------------------------------------------------------------------------
const productsData = [
  // --- T-SHIRTS ---
  {
    id: 'tshirt-1',
    name: 'Acid Acid Overdrive Oversized Tee',
    category: 't-shirts',
    price: 49.00,
    oldPrice: 85.00,
    discount: '-42%',
    badge: 'SALE 42%',
    rating: 4.9,
    reviews: 128,
    isSale: true,
    stockLeft: 4,
    images: {
      primary: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Constructed from 280GSM heavy combed cotton with signature acid-wash wash-down treatment, ribbed collar, and dropped shoulders for a relaxed editorial silhouette.'
  },
  {
    id: 'tshirt-2',
    name: 'Heavyweight Boxy Blank Tee // Noir',
    category: 't-shirts',
    price: 38.00,
    oldPrice: null,
    discount: null,
    badge: 'BESTSELLER',
    rating: 4.8,
    reviews: 240,
    isSale: false,
    stockLeft: 19,
    images: {
      primary: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'The definitive daily tee. Custom heavyweight 310GSM organic cotton, pre-shrunk, with clean double-needle seam stitching.'
  },
  {
    id: 'tshirt-3',
    name: 'Cybernetic Monogram Graphic Tee',
    category: 't-shirts',
    price: 42.00,
    oldPrice: 70.00,
    discount: '-40%',
    badge: 'FLASH DROP',
    rating: 5.0,
    reviews: 89,
    isSale: true,
    stockLeft: 2,
    images: {
      primary: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'High-density puff ink typography on distressed charcoal vintage-washed jersey. Ultra comfortable with a modern streetwear attitude.'
  },

  // --- SHIRTS ---
  {
    id: 'shirt-1',
    name: 'Cuban Collar Textured Rayon Shirt',
    category: 'shirts',
    price: 64.00,
    oldPrice: 110.00,
    discount: '-42%',
    badge: 'HOT DEAL',
    rating: 4.9,
    reviews: 95,
    isSale: true,
    stockLeft: 5,
    images: {
      primary: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Breezy luxury rayon with an open camp collar, mother-of-pearl buttons, and fluid relaxed drape ideal for day-to-night styling.'
  },
  {
    id: 'shirt-2',
    name: 'Raw Hem Heavy Utility Overshirt',
    category: 'shirts',
    price: 89.00,
    oldPrice: 145.00,
    discount: '-39%',
    badge: 'SALE 39%',
    rating: 4.7,
    reviews: 62,
    isSale: true,
    stockLeft: 7,
    images: {
      primary: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Military-inspired twin gusset pockets, reinforced elbow patches, and textured brushed twill cotton built for layering.'
  },
  {
    id: 'shirt-3',
    name: 'Bespoke Relaxed Poplin Shirt // Onyx',
    category: 'shirts',
    price: 75.00,
    oldPrice: null,
    discount: null,
    badge: 'NEW DROP',
    rating: 4.8,
    reviews: 43,
    isSale: false,
    stockLeft: 15,
    images: {
      primary: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Minimalist high-thread count Egyptian cotton poplin with concealed placket and curved tailored hemline.'
  },

  // --- OUTERWEAR & WEARING APPAREL ---
  {
    id: 'outer-1',
    name: 'Sub-Zero Avant Puffer Jacket',
    category: 'outerwear',
    price: 139.00,
    oldPrice: 280.00,
    discount: '-50%',
    badge: '50% OFF FLASH',
    rating: 5.0,
    reviews: 184,
    isSale: true,
    stockLeft: 3,
    images: {
      primary: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'High thermal down-alternative fill encased in waterproof matte micro-ripstop nylon with high architectural funnel collar and magnetic closure.'
  },
  {
    id: 'outer-2',
    name: 'Distressed Moto Leather Biker',
    category: 'outerwear',
    price: 210.00,
    oldPrice: 350.00,
    discount: '-40%',
    badge: 'LIMITED RUN',
    rating: 4.9,
    reviews: 77,
    isSale: true,
    stockLeft: 6,
    images: {
      primary: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Hand-burnished full-grain heavyweight leather jacket featuring custom matte hardware, asymmetric zip, and satin cupro lining.'
  },
  {
    id: 'outer-3',
    name: 'Tactical Multi-Pocket Cargo Trouser',
    category: 'outerwear',
    price: 88.00,
    oldPrice: 120.00,
    discount: '-26%',
    badge: 'TRENDING',
    rating: 4.8,
    reviews: 112,
    isSale: true,
    stockLeft: 12,
    images: {
      primary: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Engineered ergonomic knee articulation, 8 modular utility compartments, and adjustable bungee toggle cuffs.'
  },

  // --- BEAUTY & COSMETICS ---
  {
    id: 'beauty-1',
    name: 'SICK Nocturne Unisex Eau De Parfum (100ml)',
    category: 'beauty',
    price: 78.00,
    oldPrice: 130.00,
    discount: '-40%',
    badge: 'SIGNATURE SCENT',
    rating: 5.0,
    reviews: 215,
    isSale: true,
    stockLeft: 8,
    images: {
      primary: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Dark smoked amber, pink peppercorn, Haitian vetiver, and cold metallic ozone. An intoxicating, magnetic unisex statement fragrance.'
  },
  {
    id: 'beauty-2',
    name: 'Bio-Glow Botanical Face Elixir & Serum',
    category: 'beauty',
    price: 44.00,
    oldPrice: 65.00,
    discount: '-32%',
    badge: 'CLEAN BEAUTY',
    rating: 4.9,
    reviews: 167,
    isSale: true,
    stockLeft: 14,
    images: {
      primary: 'https://images.unsplash.com/photo-1608248597359-00994f71fb13?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Infused with cold-pressed squalane, niacinamide, and multi-molecular hyaluronic acid for an instant dewy glass-skin aesthetic.'
  },
  {
    id: 'beauty-3',
    name: 'Hydra-Glaze Peptide Lip Treatment',
    category: 'beauty',
    price: 22.00,
    oldPrice: 32.00,
    discount: '-31%',
    badge: 'TIKTOK VIRAL',
    rating: 4.9,
    reviews: 310,
    isSale: true,
    stockLeft: 9,
    images: {
      primary: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Plumping restorative peptide balm with shea butter, plant squalane, and a subtle high-shine glassy mirror gloss.'
  },
  {
    id: 'beauty-4',
    name: 'Mineral Mattifying Charcoal Clay Mask',
    category: 'beauty',
    price: 34.00,
    oldPrice: null,
    discount: null,
    badge: 'NEW ARRIVAL',
    rating: 4.7,
    reviews: 58,
    isSale: false,
    stockLeft: 22,
    images: {
      primary: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      alt: 'https://images.unsplash.com/photo-1608248597359-00994f71fb13?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Detoxifying volcanic ash and French kaolin clay formulated to unclog pores and balance complexion without overdrying.'
  }
];

// ---------------------------------------------------------------------------
// 2. Shopping Cart & Wishlist State
// ---------------------------------------------------------------------------
let cartState = [
  {
    id: 'tshirt-1',
    size: 'L',
    qty: 1
  }
];

let wishlistState = new Set(['beauty-1', 'outer-1']);

// Active discount applied (e.g., promo coupon)
let appliedDiscount = 0; // percentage, e.g. 0.20 for 20%

// ---------------------------------------------------------------------------
// 3. Hero Carousel Engine (Changes every 3.5s with Animation)
// ---------------------------------------------------------------------------
let currentSlideIndex = 0;
let slideIntervalId = null;
const SLIDE_DURATION = 3500; // 3.5 seconds

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  if (!slides.length) return;

  function goToSlide(index) {
    slides[currentSlideIndex].classList.remove('active');
    if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.remove('active');

    currentSlideIndex = (index + slides.length) % slides.length;

    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');
    resetSlideTimer();
  }

  function nextSlide() {
    goToSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentSlideIndex - 1);
  }

  function startSlideTimer() {
    clearInterval(slideIntervalId);
    slideIntervalId = setInterval(nextSlide, SLIDE_DURATION);
  }

  function resetSlideTimer() {
    clearInterval(slideIntervalId);
    startSlideTimer();
  }

  // Bind controls
  const nextBtn = document.getElementById('heroNextBtn');
  const prevBtn = document.getElementById('heroPrevBtn');
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => goToSlide(idx));
  });

  // Pause on hover
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => clearInterval(slideIntervalId));
    heroSection.addEventListener('mouseleave', startSlideTimer);
  }

  startSlideTimer();
}

// ---------------------------------------------------------------------------
// 4. Live Flash Sale Countdown Timer
// ---------------------------------------------------------------------------
function initCountdownTimer() {
  // Target time: 8 hours, 45 minutes from initial session
  let totalSeconds = (8 * 3600) + (45 * 60) + 18;

  const hoursEl = document.getElementById('timerHours');
  const minsEl = document.getElementById('timerMins');
  const secsEl = document.getElementById('timerSecs');
  const msEl = document.getElementById('timerMs');

  if (!hoursEl || !minsEl || !secsEl || !msEl) return;

  let msCounter = 99;

  setInterval(() => {
    msCounter--;
    if (msCounter < 0) {
      msCounter = 99;
      totalSeconds--;
      if (totalSeconds < 0) totalSeconds = 24 * 3600; // Reset loop
    }

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
    msEl.textContent = String(msCounter).padStart(2, '0');
  }, 10);
}

// ---------------------------------------------------------------------------
// 5. Render Product Cards & Grid
// ---------------------------------------------------------------------------
function createProductCardHTML(product) {
  const isWish = wishlistState.has(product.id);
  const primaryImg = product.images.primary;
  const altImg = product.images.alt;

  let badgeHTML = '';
  if (product.badge) {
    const isSaleBadge = product.badge.includes('SALE') || product.badge.includes('OFF') || product.badge.includes('FLASH');
    badgeHTML = `<span class="${isSaleBadge ? 'badge-sale' : 'badge-new'}">${product.badge}</span>`;
  }

  const oldPriceHTML = product.oldPrice 
    ? `<span class="original-price">$${product.oldPrice.toFixed(2)}</span>` 
    : '';

  const discountHTML = product.discount 
    ? `<span class="discount-save-tag">${product.discount}</span>` 
    : '';

  // Stock urgency bar if <= 6 left
  let stockBarHTML = '';
  if (product.stockLeft && product.stockLeft <= 6) {
    const percent = Math.min(100, Math.round((product.stockLeft / 15) * 100));
    stockBarHTML = `
      <div class="stock-bar-container">
        <div class="stock-text">
          <span>🔥 Limited Stock Available</span>
          <span>Only ${product.stockLeft} left</span>
        </div>
        <div class="stock-progress-track">
          <div class="stock-progress-fill" style="width: ${percent}%;"></div>
        </div>
      </div>
    `;
  }

  return `
    <article class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="card-media-wrap">
        <img class="product-img primary-img" src="${primaryImg}" alt="${product.name}" loading="lazy">
        <img class="product-img alt-img" src="${altImg}" alt="${product.name} alternate angle" loading="lazy">
        
        <div class="card-badges">
          ${badgeHTML}
        </div>

        <div class="card-actions-overlay">
          <button class="action-btn-circle wishlist-toggle-btn ${isWish ? 'wishlisted' : ''}" data-id="${product.id}" title="Wishlist">
            <svg width="18" height="18" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
          <button class="action-btn-circle quick-view-btn" data-id="${product.id}" title="Quick View">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </button>
        </div>

        <!-- Quick Size Selector on Hover -->
        <div class="quick-add-bar">
          <button class="size-pill quick-add-size" data-id="${product.id}" data-size="S">S</button>
          <button class="size-pill quick-add-size" data-id="${product.id}" data-size="M">M</button>
          <button class="size-pill quick-add-size" data-id="${product.id}" data-size="L">L</button>
          <button class="size-pill quick-add-size" data-id="${product.id}" data-size="XL">XL</button>
        </div>
      </div>

      <div class="card-content">
        <div class="card-category">${product.category}</div>
        <h3 class="card-title">${product.name}</h3>

        <div class="card-meta">
          <div class="rating-stars">
            ★ ★ ★ ★ ★
          </div>
          <span class="review-count">(${product.reviews})</span>
        </div>

        ${stockBarHTML}

        <div class="card-price-row">
          <div class="price-wrap">
            <span class="current-price">$${product.price.toFixed(2)}</span>
            ${oldPriceHTML}
            ${discountHTML}
          </div>

          <button class="btn-card-add quick-add-btn" data-id="${product.id}" title="Add to Bag">
            +
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderCatalog(filter = 'all') {
  const catalogGrid = document.getElementById('catalogGrid');
  if (!catalogGrid) return;

  let filtered = productsData;
  if (filter === 'sale') {
    filtered = productsData.filter(p => p.isSale);
  } else if (filter !== 'all') {
    filtered = productsData.filter(p => p.category === filter);
  }

  catalogGrid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
  attachProductCardEvents();
}

function renderSaleSection() {
  const saleGrid = document.getElementById('saleGrid');
  if (!saleGrid) return;

  // Show items on sale
  const saleProducts = productsData.filter(p => p.isSale).slice(0, 4);
  saleGrid.innerHTML = saleProducts.map(p => createProductCardHTML(p)).join('');
  attachProductCardEvents();
}

function renderBeautySpotlight() {
  const beautyGrid = document.getElementById('beautyGrid');
  if (!beautyGrid) return;

  const beautyItems = productsData.filter(p => p.category === 'beauty');
  beautyGrid.innerHTML = beautyItems.map(p => createProductCardHTML(p)).join('');
  attachProductCardEvents();
}

// ---------------------------------------------------------------------------
// 6. Interactive Filter Tabs
// ---------------------------------------------------------------------------
function initFilters() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderCatalog(filter);
    });
  });
}

// ---------------------------------------------------------------------------
// 7. Cart Drawer Management
// ---------------------------------------------------------------------------
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartBtnTrigger = document.getElementById('cartBtnTrigger');
const cartCloseBtn = document.getElementById('cartCloseBtn');

function openCart() {
  if (cartOverlay && cartDrawer) {
    cartOverlay.classList.add('open');
    cartDrawer.classList.add('open');
  }
}

function closeCart() {
  if (cartOverlay && cartDrawer) {
    cartOverlay.classList.remove('open');
    cartDrawer.classList.remove('open');
  }
}

function updateCartUI() {
  const cartBody = document.getElementById('cartBody');
  const cartBadge = document.getElementById('cartBadge');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  const shippingBarFill = document.getElementById('shippingBarFill');
  const shippingMsg = document.getElementById('shippingMsg');

  // Compute total item count and price
  let totalCount = 0;
  let rawSubtotal = 0;

  cartState.forEach(item => {
    const prod = productsData.find(p => p.id === item.id);
    if (prod) {
      totalCount += item.qty;
      rawSubtotal += prod.price * item.qty;
    }
  });

  if (cartBadge) {
    cartBadge.textContent = totalCount;
    cartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  // Free shipping threshold ($120)
  const FREE_SHIPPING_THRESHOLD = 120;
  if (shippingBarFill && shippingMsg) {
    const progress = Math.min(100, Math.round((rawSubtotal / FREE_SHIPPING_THRESHOLD) * 100));
    shippingBarFill.style.width = `${progress}%`;

    if (rawSubtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingMsg.innerHTML = '🎉 <span>Congratulations!</span> You unlocked Free Worldwide Shipping!';
    } else {
      const remaining = (FREE_SHIPPING_THRESHOLD - rawSubtotal).toFixed(2);
      shippingMsg.innerHTML = `Add <span>$${remaining}</span> more to unlock <strong>Free Express Shipping</strong>`;
    }
  }

  // Discount calculation
  const discountAmount = rawSubtotal * appliedDiscount;
  const finalTotal = rawSubtotal - discountAmount;

  if (subtotalEl) subtotalEl.textContent = `$${rawSubtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;

  // Render items
  if (!cartBody) return;

  if (cartState.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛒</div>
        <h3>Your Bag is Empty</h3>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-top: 6px;">
          Find your aesthetic in our latest drops.
        </p>
      </div>
    `;
    return;
  }

  cartBody.innerHTML = cartState.map((item, index) => {
    const prod = productsData.find(p => p.id === item.id);
    if (!prod) return '';

    return `
      <div class="cart-item" data-index="${index}">
        <img class="cart-item-img" src="${prod.images.primary}" alt="${prod.name}">
        <div class="cart-item-details">
          <div>
            <h4 class="cart-item-title">${prod.name}</h4>
            <div class="cart-item-variant">Size: <strong>${item.size || 'M'}</strong></div>
          </div>
          <div class="cart-item-price">$${(prod.price * item.qty).toFixed(2)}</div>
          
          <div class="qty-control">
            <button class="qty-btn cart-qty-minus" data-index="${index}">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn cart-qty-plus" data-index="${index}">+</button>
          </div>
        </div>

        <button class="cart-item-remove" data-index="${index}" title="Remove item">
          ✕
        </button>
      </div>
    `;
  }).join('');

  attachCartItemListeners();
}

function addToCart(productId, size = 'M', qty = 1) {
  const existingIndex = cartState.findIndex(item => item.id === productId && item.size === size);
  if (existingIndex > -1) {
    cartState[existingIndex].qty += qty;
  } else {
    cartState.push({ id: productId, size: size, qty: qty });
  }

  updateCartUI();
  openCart();

  const prod = productsData.find(p => p.id === productId);
  if (prod) {
    showToast(`Added <strong>${prod.name}</strong> (${size}) to your bag!`, 'lime');
  }
}

function attachCartItemListeners() {
  document.querySelectorAll('.cart-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      cartState[idx].qty += 1;
      updateCartUI();
    });
  });

  document.querySelectorAll('.cart-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (cartState[idx].qty > 1) {
        cartState[idx].qty -= 1;
      } else {
        cartState.splice(idx, 1);
      }
      updateCartUI();
    });
  });

  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      cartState.splice(idx, 1);
      updateCartUI();
      showToast('Item removed from your bag.', 'pink');
    });
  });
}

// ---------------------------------------------------------------------------
// 8. Quick View Modal
// ---------------------------------------------------------------------------
const quickViewModal = document.getElementById('quickViewModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
let selectedModalSize = 'M';
let currentModalProductId = null;

function openQuickView(productId) {
  const prod = productsData.find(p => p.id === productId);
  if (!prod || !quickViewModal) return;

  currentModalProductId = productId;
  selectedModalSize = 'M';

  document.getElementById('modalImg').src = prod.images.primary;
  document.getElementById('modalCategory').textContent = prod.category;
  document.getElementById('modalTitle').textContent = prod.name;
  document.getElementById('modalPrice').textContent = `$${prod.price.toFixed(2)}`;
  
  const oldPriceEl = document.getElementById('modalOldPrice');
  if (prod.oldPrice) {
    oldPriceEl.textContent = `$${prod.oldPrice.toFixed(2)}`;
    oldPriceEl.style.display = 'inline';
  } else {
    oldPriceEl.style.display = 'none';
  }

  document.getElementById('modalDesc').textContent = prod.description;

  // Reset active size button
  document.querySelectorAll('.modal-size-btn').forEach(b => {
    b.classList.remove('active');
    if (b.getAttribute('data-size') === 'M') b.classList.add('active');
  });

  quickViewModal.classList.add('open');
}

function closeQuickView() {
  if (quickViewModal) {
    quickViewModal.classList.remove('open');
  }
}

// ---------------------------------------------------------------------------
// 9. Toast Notifications
// ---------------------------------------------------------------------------
function showToast(message, type = 'lime') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span style="font-size: 1.1rem;">${type === 'lime' ? '⚡' : '🔥'}</span>
    <span style="font-size: 0.88rem; line-height: 1.3;">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ---------------------------------------------------------------------------
// 10. Event Delegation & Product Interactions
// ---------------------------------------------------------------------------
function attachProductCardEvents() {
  // Wishlist toggle
  document.querySelectorAll('.wishlist-toggle-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      if (wishlistState.has(id)) {
        wishlistState.delete(id);
        btn.classList.remove('wishlisted');
        btn.querySelector('svg').setAttribute('fill', 'none');
        showToast('Removed from your wishlist.', 'pink');
      } else {
        wishlistState.add(id);
        btn.classList.add('wishlisted');
        btn.querySelector('svg').setAttribute('fill', 'currentColor');
        showToast('Saved to your aesthetic wishlist! ❤️', 'lime');
      }
    };
  });

  // Quick View click
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openQuickView(id);
    };
  });

  // Quick Add with Size Pills on Hover
  document.querySelectorAll('.quick-add-size').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const size = btn.getAttribute('data-size');
      addToCart(id, size, 1);
    };
  });

  // Default Quick Add button
  document.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      addToCart(id, 'M', 1);
    };
  });
}

// ---------------------------------------------------------------------------
// 11. Initializer on DOM Ready
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Initialize dynamic components
  initHeroSlider();
  initCountdownTimer();
  renderCatalog('all');
  renderSaleSection();
  renderBeautySpotlight();
  initFilters();
  updateCartUI();

  // Cart Drawer open/close
  if (cartBtnTrigger) cartBtnTrigger.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Quick View Modal
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickView);
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) closeQuickView();
    });
  }

  // Size buttons inside modal
  document.querySelectorAll('.modal-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedModalSize = btn.getAttribute('data-size');
    });
  });

  // Add to Bag inside modal
  const modalAddBtn = document.getElementById('modalAddBtn');
  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
      if (currentModalProductId) {
        addToCart(currentModalProductId, selectedModalSize, 1);
        closeQuickView();
      }
    });
  }

  // Coupon copy handler
  const couponBadge = document.getElementById('couponBadge');
  if (couponBadge) {
    couponBadge.addEventListener('click', () => {
      appliedDiscount = 0.40; // 40% off
      updateCartUI();
      showToast('⚡ Coupon <strong>SICK40</strong> applied! 40% OFF discount activated.', 'lime');
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input && input.value) {
        showToast(`Welcome to the inner circle! 15% VIP discount sent to <strong>${input.value}</strong>`, 'lime');
        input.value = '';
      }
    });
  }

  // Smooth scroll for nav anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
