// i18n Data Dictionary
const translations = {
  ko: {
    "nav.intro": "소개",
    "nav.rokid": "Rokid App",
    "nav.android": "Android App",
    "nav.books": "서적",
    "nav.lang": "English",
    "footer.rights": "모든 권리 보유.",
    "hero.title": "EUNG SOFT",
    "hero.subtitle": "사용자의 니즈를 생각하는 실용적인 소프트웨어를 만듭니다. 광고가 없습니다. 무료입니다. EUNG SOFT는 창작을 좋아하는 개발자의 개인 창작 공간입니다. 다소 미흡하더라도 저의 창작물을 여러 사람과 공유하고 싶은 마음입니다. 관심과 응원 부탁드립니다.",
    "hero.desc": "로키드 글래스 최적화 앱, 안드로이드 유틸리티, 그리고 제가 쓴 개인 서적을 소개합니다.",
    "btn.download": "다운로드",
    "btn.details": "자세히 보기",
    "app.version": "버전",
    "app.release": "출시일",
    "app.downloads": "다운로드",
    "about.site": "사이트 소개",
    "about.site.desc": "EUNG SOFT의 공식 홈페이지입니다. 개발 중인 앱들의 정보를 확인하고 다운로드 할 수 있습니다.",
    "about.dev": "개발자 소개",
    "about.dev.desc": "주로 안드로이드, AR 글래스 연동 앱 및 다양한 사이드 프로젝트를 진행합니다.",
    "error.fetch": "데이터를 불러오는 데 실패했습니다.",
    "books.subtitle": "글 쓰는 것을 좋아해서, 틈틈이 책을 출간하였습니다. 제가 쓴 IT 서적과 에세이, 소설 등을 소개합니다."
  },
  en: {
    "nav.intro": "Intro",
    "nav.rokid": "Rokid App",
    "nav.android": "Android App",
    "nav.books": "Books",
    "nav.lang": "한국어",
    "footer.rights": "All rights reserved.",
    "hero.title": "EUNG SOFT",
    "hero.subtitle": "Building practical software focused on user needs. Ad-free. Free of charge. EUNG SOFT is a personal creative space for a developer who loves creating. Although it may be somewhat lacking, I want to share my creations with many people. Your interest and support are greatly appreciated.",
    "hero.desc": "Providing optimized apps for Rokid Glasses, Android utilities, and personal books i wrote.",
    "btn.download": "Download",
    "btn.details": "View Details",
    "app.version": "Version",
    "app.release": "Released",
    "app.downloads": "Downloads",
    "about.site": "About Site",
    "about.site.desc": "The official EUNG SOFT homepage. Check out information about our apps and download them directly.",
    "about.dev": "About Developer",
    "about.dev.desc": "Specializing in Android, AR glasses integration, and various side projects.",
    "error.fetch": "Failed to fetch data.",
    "books.subtitle": "Since I enjoy writing, I publish books in my spare time. Here are the IT books, essays, and novels I have written."
  }
};

// State
let currentLang = localStorage.getItem('eungsoft_lang') || 'ko';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavbar();
  initGSAPEffects();

  // Custom event so page-specific scripts know when core is ready
  document.dispatchEvent(new Event('appReady'));
});

// Language Handling
function initLanguage() {
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'ko' ? 'en' : 'ko';
      localStorage.setItem('eungsoft_lang', currentLang);
      applyTranslations();

      // Dispatch event to re-render dynamic content (like app listings)
      document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
    });
  }
  applyTranslations();
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  const dict = translations[currentLang];

  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      // If it's an input with placeholder
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', dict[key]);
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;

  // Update toggle button text
  const langToggleText = document.querySelector('#lang-toggle span[data-i18n]');
  if (langToggleText && dict["nav.lang"]) {
    langToggleText.textContent = dict["nav.lang"];
  }
}

// Global Getter for other scripts
window.getLang = () => currentLang;
window.t = (key) => translations[currentLang][key] || key;


// Navbar Handling (Mobile Menu)
function initNavbar() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isExpanded = navLinks.classList.toggle('active');
      const icon = hamburger.querySelector('.material-symbols-rounded');
      if (icon) {
        icon.textContent = isExpanded ? 'close' : 'menu';
      }

      // Animate dropdown with GSAP if available
      if (window.gsap && isExpanded) {
        gsap.fromTo(navLinks, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
      }
    });
  }

  // Active link highlighting based on pathname
  const path = window.location.pathname;
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href !== '/' && path.includes(href.replace('../', '').replace('./', ''))) {
      link.classList.add('active');
    } else if (path === '/' && href === '/') {
      link.classList.add('active');
    }
  });
}

// GSAP Global Effects (Hovers, Load-ins)
function initGSAPEffects() {
  if (!window.gsap) return;

  // Basic Page Load Animation
  gsap.from('main', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power3.out'
  });
}

// Helper: Fetch JSON with error handling
window.fetchJSON = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error(`Failed to fetch ${url}:`, err);
    return null;
  }
};

// Google Analytics 4 Integration
document.addEventListener('DOMContentLoaded', () => {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-LTS18DSNY0';
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag; // Make globally accessible
  gtag('js', new Date());
  gtag('config', 'G-LTS18DSNY0');
});
