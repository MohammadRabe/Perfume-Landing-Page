// بيانات كتالوج تجريبية مؤقتة. المنتجات الحقيقية ستأتي من نقطة API عند تجهيزها.
const MOCK_PRODUCTS = [
  {
    id: "azhar-001",
    name: "همس الورد",
    size: "50 مل",
    type: "Eau de Parfum",
    price: 799,
    oldPrice: 999,
    currency: "ج.م",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1100&q=82",
    storyImage: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1100&q=82",
    description: "حضور ناعم يبدأ من أول رشة. تركيبة زهرية أنثوية ترافقكِ في يومكِ وتترك لمسة تشبهكِ."
  },
  {
    id: "azhar-002",
    name: "ورد المساء",
    size: "50 مل",
    type: "Eau de Parfum",
    price: 849,
    oldPrice: 1049,
    currency: "ج.م",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1100&q=82",
    storyImage: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1100&q=82",
    description: "عطر وردي دافئ بلمسات ناعمة، مناسب لأمسياتكِ ولحظاتكِ الخاصة."
  },
  {
    id: "azhar-003",
    name: "نسمة ياسمين",
    size: "30 مل",
    type: "Eau de Parfum",
    price: 599,
    oldPrice: null,
    currency: "ج.م",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1100&q=82",
    storyImage: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1100&q=82",
    description: "نفحات ياسمين منعشة وخفيفة، ترافق يومكِ بلمسة أنثوية بسيطة."
  }
];

// ضعي رابط API هنا عند توفره. اتركيه فارغًا لاستخدام MOCK_PRODUCTS.
// الشكل المتوقع: { products: [{ id, name_ar, size, type, price, old_price,
// currency, image_url, story_image_url, description_ar }] }
// لا تضعي مفاتيح سرية في JavaScript يعمل داخل المتصفح.
const CATALOG_API = {
  endpoint: "",
  selectedProductId: "azhar-001",
  timeoutMs: 6000
};

// عدّلي بيانات الهوية والعرض والنصوص العامة من هذا الكائن.
const STORE = {
  brand: "أزهار",
  product: null,
  products: [],
  // غيّري درجات الهوية هنا وقت ما تحبي.
  colors: {
    rose: "#c59aa2",
    roseDeep: "#71404b",
    rosePale: "#efe2e3",
    ink: "#251a1f",
    paper: "#f8f4f1"
  },
  offer: {
    announcement: "هدية صغيرة مع كل طلب · التوصيل مجاني لفترة محدودة"
  },
  ticker: ["توصيل لبابكِ", "دفع عند الاستلام", "تغليف مناسب للهدايا", "عناية في كل تفصيلة"],
  // أمثلة الرسائل والصور مؤقتة ويمكن استبدالها بآراء العميلات.
  reviews: [
    {
      name: "رانيا", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
      messages: [
        { from: "brand", text: "مساء الخير يا رانيا، حابين نطمن إن طلبك وصلك 🤍", time: "٨:٣٨ م" },
        { from: "customer", text: "أيوة وصلني النهارده، ريحته جميلة أوي والتغليف شيك جدًا 🌸 شكرًا بجد", time: "٨:٤١ م" },
        { from: "brand", text: "تتهني بيه يا قمر، سعداء إنه عجبكِ 🤍", time: "٨:٤٣ م" }
      ]
    },
    {
      name: "مريم", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
      messages: [
        { from: "brand", text: "أهلًا يا مريم، نتمنى يكون عطر همس الورد عجبكِ 🌷", time: "١:١٢ م" },
        { from: "customer", text: "استلمته، ريحته ناعمة وثابتة معايا طول اليوم. هطلبه تاني إن شاء الله ✨", time: "١:١٦ م" },
        { from: "brand", text: "يسعدنا رأيك يا مريم، شكرًا لاختيارك أزهار 💗", time: "١:١٨ م" }
      ]
    }
  ],
  faq: [
    { question: "ما هي مدة التوصيل؟", answer: "يتم تأكيد موعد التوصيل معكِ هاتفيًا بعد تسجيل الطلب. أضيفي هنا المدة الفعلية حسب شركة الشحن والمحافظة." },
    { question: "هل يمكنني الدفع عند الاستلام؟", answer: "نعم، اختاري الدفع عند الاستلام. سيتواصل معكِ فريقنا لتأكيد تفاصيل الطلب قبل الشحن." },
    { question: "هل يمكن استبدال العطر؟", answer: "نعم، يمكن طلب استبدال العطر بعد توضيح السبب لفريق أزهار. تواصلي معنا قبل إرسال المنتج لنرتب معكِ خطوات الاستبدال." },
    { question: "كيف أحافظ على جودة العطر؟", answer: "احتفظي بالزجاجة بعيدًا عن أشعة الشمس والحرارة المباشرة، وأغلقي الغطاء بعد كل استخدام." }
  ],
  // اربطي النموذج برقم واتساب أو خدمة طلبات لإرسال الطلبات فعليًا.
  order: {
    button: "اطلبي عطر يدوم",
    confirmation: "شكرًا لطلبكِ! تم استلام بياناتكِ في هذه النسخة التجريبية. اربطي النموذج برقم واتساب أو خدمة الطلبات لتصلك الطلبات فعليًا."
  }
};

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));
const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

function formatPrice(value, currency = "ج.م") {
  if (value === null || value === undefined || value === "") return "";
  if (typeof value === "string" && /[^\d.,\s]/.test(value)) return value;
  const number = Number(String(value).replace(/,/g, ""));
  if (!Number.isFinite(number)) return String(value);
  return `${new Intl.NumberFormat("ar-EG", { maximumFractionDigits: 2 }).format(number)} ${currency}`;
}

function numericPrice(value) {
  if (value === null || value === undefined || value === "") return null;
  const westernDigits = String(value)
    .replace(/[٠-٩]/g, digit => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/[٬,]/g, "")
    .replace(/٫/g, ".")
    .replace(/[^\d.]/g, "");
  const amount = Number(westernDigits);
  return Number.isFinite(amount) ? amount : null;
}

// طبقة تحويل واحدة حتى لا يعتمد تصميم الصفحة على أسماء حقول الـ API.
function normalizeProduct(raw, isMock = false) {
  if (!raw || typeof raw !== "object") return null;
  const price = raw.price ?? raw.price_amount ?? raw.sale_price;
  const oldPrice = raw.oldPrice ?? raw.old_price ?? raw.compare_at_price ?? raw.original_price;
  const priceAmount = numericPrice(price);
  const oldPriceAmount = numericPrice(oldPrice);
  const fallbackProduct = MOCK_PRODUCTS[0];
  return {
    id: String(raw.id ?? raw.slug ?? ""),
    name: raw.name_ar ?? raw.name ?? raw.title ?? "عطر جديد",
    size: raw.size ?? (raw.volume ? `${raw.volume} مل` : ""),
    type: raw.type ?? raw.concentration ?? "Eau de Parfum",
    price: formatPrice(price, raw.currency ?? "ج.م"),
    oldPrice: formatPrice(oldPrice, raw.currency ?? "ج.م"),
    discountPercent: priceAmount > 0 && oldPriceAmount > priceAmount ? Math.round((1 - priceAmount / oldPriceAmount) * 100) : 0,
    image: raw.image ?? raw.image_url ?? raw.main_image ?? fallbackProduct.image,
    storyImage: raw.storyImage ?? raw.story_image_url ?? raw.image ?? raw.image_url ?? fallbackProduct.storyImage,
    description: raw.description_ar ?? raw.description ?? "اكتشفي عطركِ الجديد من أزهار.",
    isMock
  };
}

async function fetchCatalog() {
  if (!CATALOG_API.endpoint) {
    const products = MOCK_PRODUCTS.map(item => normalizeProduct(item, true));
    return {
      products,
      featuredProduct: products.find(item => item.id === CATALOG_API.selectedProductId) || products[0]
    };
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), CATALOG_API.timeoutMs);
  try {
    const response = await fetch(CATALOG_API.endpoint, {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: controller.signal
    });
    if (!response.ok) throw new Error(`Catalog API returned ${response.status}`);
    const payload = await response.json();
    const products = Array.isArray(payload) ? payload
      : Array.isArray(payload.products) ? payload.products
      : Array.isArray(payload.data) ? payload.data
      : Array.isArray(payload.data?.products) ? payload.data.products
      : payload.data && typeof payload.data === "object" ? [payload.data]
      : [payload];
    const normalizedProducts = products.map(item => normalizeProduct(item)).filter(item => item && item.name);
    if (!normalizedProducts.length) throw new Error("Catalog API returned no usable products");
    const featuredProduct = normalizedProducts.find(item => item.id === CATALOG_API.selectedProductId) || normalizedProducts[0];
    return { products: normalizedProducts, featuredProduct };
  } catch (error) {
    console.warn("تعذر تحميل كتالوج العطور؛ سيتم استخدام البيانات التجريبية مؤقتًا.", error);
    const products = MOCK_PRODUCTS.map(item => normalizeProduct(item, true));
    return {
      products,
      featuredProduct: products.find(item => item.id === CATALOG_API.selectedProductId) || products[0]
    };
  } finally {
    window.clearTimeout(timeout);
  }
}

function applyStore() {
  for (const [name, value] of Object.entries(STORE.colors)) {
    const cssName = name.replace(/[A-Z]/g, char => `-${char.toLowerCase()}`);
    document.documentElement.style.setProperty(`--${cssName}`, value);
  }
  document.querySelectorAll("[data-brand]").forEach(element => element.textContent = STORE.brand);
  setText("#announcement", STORE.offer.announcement);
  document.querySelector("#heroTitle").innerHTML = `${escapeHTML(STORE.product.name)}<em>، عطر يترك أثرًا.</em>`;
  setText("#heroCopy", STORE.product.description);
  setText("#heroCta", `اطلبي ${STORE.product.name} الآن`);
  document.querySelector("#heroImage").src = STORE.product.image;
  document.querySelector("#storyImage").src = STORE.product.storyImage;
  document.querySelector("#productGrid").innerHTML = STORE.products.map(product => `
    <article class="catalog-card${product.id === STORE.product.id ? " is-featured" : ""}" data-select-product="${escapeHTML(product.id)}">
      <div class="catalog-card-media"><img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy"><span class="product-tag">${product.id === STORE.product.id ? "اختيارنا لكِ" : "عطر أزهار"}</span>${product.id === STORE.product.id && product.discountPercent ? `<span class="discount-badge"><b>${product.discountPercent}%</b><small>OFF</small></span>` : ""}</div>
      <div class="catalog-card-info"><h3>${escapeHTML(product.name)}</h3><small>${escapeHTML(product.size)} · ${escapeHTML(product.type)}</small>
        <p>${escapeHTML(product.description)}</p><div class="catalog-card-buy"><div><b>${escapeHTML(product.price)}</b>${product.oldPrice ? `<del>${escapeHTML(product.oldPrice)}</del>` : ""}</div>
          <a href="#order" data-select-product="${escapeHTML(product.id)}" aria-label="اطلبي ${escapeHTML(product.name)}">اطلبيه <span>↙</span></a></div>
      </div>
    </article>`).join("");
  document.querySelector("#productDots").innerHTML = STORE.products.map((product, index) =>
    `<button type="button" data-product-slide="${index}" aria-label="العطر ${index + 1}: ${escapeHTML(product.name)}" aria-pressed="${index === 0}"></button>`
  ).join("");
  updateProductCarousel(Math.max(0, STORE.products.findIndex(product => product.id === STORE.product.id)));
  setText("#storyTitle", "رائحة تحكي عنكِ، بهدوء.");
  setText("#storyCopy", `أزهار مزيج زهري دافئ يفتتح يومكِ بإشراقة، ثم يترك على بشرتكِ لمسة أنثوية هادئة. اختاري ${STORE.product.name} لنفسكِ، أو قدّميه هدية لمن تحبين.`);
  setText("#orderProductName", STORE.product.name);
  setText("#orderProductDetail", `${STORE.product.size} · ${STORE.product.type}`);
  setText("#orderProductPrice", STORE.product.price);
  setText("#submitCta", STORE.order.button);
  setText("#footerLine", `© ${new Date().getFullYear()} ${STORE.brand} · جميع الحقوق محفوظة`);
  setText("#mobilePriceLabel", STORE.product.name);
  setText("#mobilePrice", STORE.product.price);
  const mobileProductImage = document.querySelector("#mobileProductImage");
  mobileProductImage.src = STORE.product.image;
  const orderImage = document.querySelector("#orderImage");
  orderImage.src = STORE.product.image;
  orderImage.loading = "lazy";

  const tickerItems = [...STORE.ticker, ...STORE.ticker];
  document.querySelector("#tickerTrack").innerHTML = tickerItems.map(text => `<span class="ticker-item"><i>✳</i>${escapeHTML(text)}</span>`).join("");
  document.querySelector("#reviewPeople").innerHTML = STORE.reviews.map((item, index) => `
    <button class="review-person${index === 0 ? " active" : ""}" type="button" data-review-select="${index}" aria-pressed="${index === 0}">
      <img src="${escapeHTML(item.photo)}" alt="" loading="lazy"><span><b>${escapeHTML(item.name)}</b><small>رسائل واتساب</small></span><i class="person-wa" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3.1A12.7 12.7 0 0 0 5.1 22.4L3.4 28.7l6.5-1.7A12.8 12.8 0 1 0 16 3.1Zm0 22.8c-2 0-4-.5-5.7-1.6l-.4-.2-3.8 1 .9-3.7-.2-.4A10.4 10.4 0 1 1 16 25.9Zm5.7-7.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z"/></svg></i>
    </button>`).join("");
  showReview(0);
  document.querySelector("#faqGrid").innerHTML = STORE.faq.map(item => `
    <details><summary>${escapeHTML(item.question)}</summary><p>${escapeHTML(item.answer)}</p></details>`).join("");
}

function setupMenu() {
  const toggle = document.querySelector("#menuToggle");
  const nav = document.querySelector("#navLinks");
  const close = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "فتح القائمة");
  };
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
    nav.classList.toggle("open", open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", close));
  document.addEventListener("keydown", event => { if (event.key === "Escape") close(); });
  document.addEventListener("click", event => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) close();
  });
}

let revealObserver;
function observeRevealItems(root = document) {
  const revealItems = root.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -28px 0px" });
    }
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }
}

function setupScrollEffects() {
  observeRevealItems();

  const progress = document.querySelector("#scrollProgress");
  let queued = false;
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, amount))}%`;
    queued = false;
  };
  window.addEventListener("scroll", () => {
    if (!queued) { window.requestAnimationFrame(updateProgress); queued = true; }
  }, { passive: true });
  updateProgress();
}

function setupOrderForm() {
  const form = document.querySelector("#orderForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const message = document.querySelector("#formMessage");
    message.textContent = STORE.order.confirmation;
    message.style.display = "block";
    message.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

let activeReviewIndex = 0;
function showReview(index) {
  const review = STORE.reviews[index];
  if (!review) return;
  activeReviewIndex = index;
  document.querySelectorAll("[data-review-select]").forEach(button => {
    const active = Number(button.dataset.reviewSelect) === index;
    button.classList.toggle("active", active);
    if (button.hasAttribute("aria-pressed")) button.setAttribute("aria-pressed", String(active));
  });
  const avatar = document.querySelector("#waAvatar");
  avatar.src = review.photo;
  avatar.alt = `صورة ${review.name}`;
  setText("#waName", review.name);
  document.querySelector("#reviewMessages").innerHTML = review.messages.map(message => `
    <div class="wa-message ${message.from === "brand" ? "wa-outgoing" : "wa-incoming"}">
      <p>${escapeHTML(message.text)}</p><small>${escapeHTML(message.time)}${message.from === "brand" ? '<i aria-label="تمت القراءة">✓✓</i>' : ""}</small>
    </div>`).join("");
}

function setupReviewInteractions() {
  const section = document.querySelector("#reviews");
  const reviewPeople = document.querySelector("#reviewPeople");
  const conversation = document.querySelector(".whatsapp-screen");
  let reviewTimer;
  let resumeTimer;
  let sectionVisible = false;
  let interacting = false;
  const stopAutoplay = () => window.clearInterval(reviewTimer);
  const startAutoplay = () => {
    stopAutoplay();
    const reviewInUse = reviewPeople.matches(":hover") || conversation.matches(":hover") || reviewPeople.contains(document.activeElement) || conversation.contains(document.activeElement);
    if (!sectionVisible || interacting || reviewInUse || document.hidden || STORE.reviews.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    reviewTimer = window.setInterval(() => {
      showReview((activeReviewIndex + 1) % STORE.reviews.length);
    }, 5000);
  };
  const pauseForInteraction = () => {
    interacting = true;
    stopAutoplay();
    window.clearTimeout(resumeTimer);
  };
  const resumeAfterInteraction = () => {
    window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => {
      interacting = false;
      startAutoplay();
    }, 6000);
  };

  document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-review-select]");
    if (!trigger) return;
    const selectedIndex = Number(trigger.dataset.reviewSelect);
    showReview(selectedIndex);
    pauseForInteraction();
    resumeAfterInteraction();
  });

  [reviewPeople, conversation].forEach(element => {
    element.addEventListener("pointerenter", event => {
      if (event.pointerType === "mouse") pauseForInteraction();
    });
    element.addEventListener("pointerleave", event => {
      if (event.pointerType === "mouse") {
        interacting = false;
        startAutoplay();
      }
    });
    element.addEventListener("pointerdown", pauseForInteraction);
    element.addEventListener("pointerup", resumeAfterInteraction);
    element.addEventListener("pointercancel", resumeAfterInteraction);
    element.addEventListener("focusin", pauseForInteraction);
    element.addEventListener("focusout", event => {
      if (!element.contains(event.relatedTarget)) resumeAfterInteraction();
    });
  });

  document.addEventListener("visibilitychange", startAutoplay);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      sectionVisible = entry.isIntersecting && entry.intersectionRatio >= .25;
      if (sectionVisible) startAutoplay();
      else stopAutoplay();
    }, { threshold: [.25] });
    observer.observe(section);
  } else {
    sectionVisible = true;
    startAutoplay();
  }
}

function setupProductSelection() {
  document.querySelector("#productGrid").addEventListener("click", event => {
    const link = event.target.closest("[data-select-product]");
    if (!link) return;
    event.preventDefault();
    const product = STORE.products.find(item => item.id === link.dataset.selectProduct);
    if (!product) return;
    STORE.product = product;
    applyStore();
    document.querySelector("#order").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

let activeProductSlide = 0;
function updateProductCarousel(index) {
  const cards = [...document.querySelectorAll("#productGrid .catalog-card")];
  const dots = [...document.querySelectorAll("#productDots [data-product-slide]")];
  if (!cards.length) return;
  activeProductSlide = Math.max(0, Math.min(index, cards.length - 1));
  dots.forEach((dot, dotIndex) => {
    const active = dotIndex === activeProductSlide;
    dot.classList.toggle("active", active);
    dot.setAttribute("aria-pressed", String(active));
  });
}

function setupProductCarousel() {
  const track = document.querySelector("#productGrid");
  const section = document.querySelector("#products");
  const dots = document.querySelector("#productDots");
  const moveTo = index => {
    const cards = track.querySelectorAll(".catalog-card");
    const nextIndex = Math.max(0, Math.min(index, cards.length - 1));
    const card = cards[nextIndex];
    if (card) {
      const trackBounds = track.getBoundingClientRect();
      const cardBounds = card.getBoundingClientRect();
      const delta = getComputedStyle(track).direction === "rtl"
        ? cardBounds.right - trackBounds.right
        : cardBounds.left - trackBounds.left;
      track.scrollBy({ left: delta, behavior: "smooth" });
    }
    updateProductCarousel(nextIndex);
  };
  let autoplayTimer;
  let resumeTimer;
  let sectionVisible = false;
  let interacting = false;
  const stopAutoplay = () => window.clearInterval(autoplayTimer);
  const startAutoplay = () => {
    stopAutoplay();
    const hoveredOrFocused = track.matches(":hover") || dots.matches(":hover") || track.contains(document.activeElement) || dots.contains(document.activeElement);
    if (!sectionVisible || interacting || hoveredOrFocused || document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    autoplayTimer = window.setInterval(() => {
      const cards = track.querySelectorAll(".catalog-card");
      if (cards.length > 1) moveTo(activeProductSlide === cards.length - 1 ? 0 : activeProductSlide + 1);
    }, 2200);
  };
  const pauseForInteraction = () => {
    interacting = true;
    stopAutoplay();
    window.clearTimeout(resumeTimer);
  };
  const resumeAfterInteraction = () => {
    window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => {
      interacting = false;
      startAutoplay();
    }, 4000);
  };
  dots.addEventListener("click", event => {
    const dot = event.target.closest("[data-product-slide]");
    if (dot) moveTo(Number(dot.dataset.productSlide));
  });
  [track, dots].forEach(element => {
    element.addEventListener("pointerenter", event => {
      if (event.pointerType === "mouse") pauseForInteraction();
    });
    element.addEventListener("pointerleave", event => {
      if (event.pointerType === "mouse") {
        interacting = false;
        startAutoplay();
      }
    });
    element.addEventListener("pointerdown", pauseForInteraction);
    element.addEventListener("pointerup", resumeAfterInteraction);
    element.addEventListener("pointercancel", resumeAfterInteraction);
    element.addEventListener("focusin", pauseForInteraction);
    element.addEventListener("focusout", event => {
      if (!element.contains(event.relatedTarget)) resumeAfterInteraction();
    });
  });
  document.addEventListener("visibilitychange", startAutoplay);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      sectionVisible = entry.isIntersecting && entry.intersectionRatio >= .25;
      if (sectionVisible) startAutoplay();
      else stopAutoplay();
    }, { threshold: [.25] });
    observer.observe(section);
  } else {
    sectionVisible = true;
    startAutoplay();
  }
  let queued = false;
  track.addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(() => {
      const trackRight = track.getBoundingClientRect().right;
      const cards = [...track.querySelectorAll(".catalog-card")];
      const nearest = cards.reduce((bestIndex, card, index) =>
        Math.abs(card.getBoundingClientRect().right - trackRight) < Math.abs(cards[bestIndex].getBoundingClientRect().right - trackRight) ? index : bestIndex, 0);
      updateProductCarousel(nearest);
      queued = false;
    });
  }, { passive: true });
}

STORE.products = MOCK_PRODUCTS.map(item => normalizeProduct(item, true));
STORE.product = STORE.products.find(item => item.id === CATALOG_API.selectedProductId) || STORE.products[0];
applyStore();
fetchCatalog().then(catalog => {
  if (catalog?.featuredProduct) {
    STORE.products = catalog.products;
    STORE.product = catalog.featuredProduct;
    applyStore();
  }
});
setupMenu();
setupScrollEffects();
setupOrderForm();
setupReviewInteractions();
setupProductSelection();
setupProductCarousel();
