// i18n Data Dictionary
const translations = {
  ko: {
    "nav.intro": "소개",
    "nav.rokid": "Rokid App",
    "nav.android": "Android App",
    "nav.books": "서적",
    "nav.story": "Dev Story",
    "nav.lang": "English",
    "footer.privacy": "개인정보 처리방침",
    "footer.terms": "이용약관",
    "footer.rights": "모든 권리 보유.",
    "hero.title": "CODE, BOOKS & LIFE",
    "hero.subtitle": "사용자의 니즈를 생각하는 실용적인 소프트웨어를 만듭니다. 광고가 없습니다. 무료입니다. EUNG SOFT는 창작을 좋아하는 개발자의 개인 창작 공간입니다. 다소 미흡하더라도 저의 창작물을 여러 사람과 공유하고 싶은 마음입니다. 관심과 응원 부탁드립니다.",
    "hero.desc": "로키드 글래스 최적화 앱, 안드로이드 유틸리티, 그리고 제가 쓴 개인 서적을 소개합니다.",
    "btn.download": "다운로드",
    "btn.details": "자세히 보기",
    "app.version": "버전",
    "app.release": "출시일",
    "app.downloads": "다운로드",
    "about.site": "사이트 소개",
    "about.site.desc": "EUNG SOFT의 공식 홈페이지입니다. 개발 중인 앱들의 정보를 확인하고 다운로드 할 수 있습니다. 여기는 제가 만든 것들을 모아두는 작은 공간입니다. 앱을 만들고, 글을 쓰고, 이것저것 만드는 걸 좋아하다 보니 여기저기 흩어져 있던 것들을 한 곳에 정리하고 싶었어요. 대단한 목적이 있는 건 아닙니다. 그냥 작은 공방 같은 곳이에요. 여기 올려진 앱들이 누군가에게 조금이라도 쓸모가 있다면, 그걸로 충분합니다.",
    "about.dev": "개발자 소개",
    "about.dev.desc": "첫 직장부터 개발자였습니다. 서버 개발을 시작으로, 학원에서 JAVA와 모바일 게임 개발을 가르치기도 했고, LG 피쳐폰 시절에는 단말기에 내장되는 프로그램을 8년 가까이 개발했습니다. 30개가 넘는 모델을 거쳤네요. Adobe의 기술 에반젤리스트로 활동하던 시절이 특히 기억에 남습니다. Adobe 이름으로 세미나를 발표하고, 글로벌 사이트에 기술 문서를 기고하기도 했습니다. Adobe Flash Lite 국제공인강사 자격도 취득했습니다. 그때는 참 재미있었어요. 오래된 이야기이기는 하지만, 여전히 현업에서 개발을 하고 있습니다. 틈틈이 책도 쓰고, 앱도 만들고, 뭐 그렇게 살고 있습니다.",
    "about.link": "Media & Blog",
    "error.fetch": "데이터를 불러오는 데 실패했습니다.",
    "books.subtitle": "글 쓰는 것을 좋아해서, 틈틈이 책을 출간하였습니다. 제가 쓴 IT 서적과 에세이 그리고 소설 등을 소개합니다."
  },
  en: {
    "nav.intro": "Intro",
    "nav.rokid": "Rokid App",
    "nav.android": "Android App",
    "nav.books": "Books",
    "nav.story": "Dev Story",
    "nav.lang": "한국어",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "All rights reserved.",
    "hero.title": "CODE, BOOKS & LIFE",
    "hero.subtitle": "Building practical software focused on user needs. Ad-free. Free of charge. EUNG SOFT is a personal creative space for a developer who loves creating. Although it may be somewhat lacking, I want to share my creations with many people. Your interest and support are greatly appreciated.",
    "hero.desc": "Providing optimized apps for Rokid Glasses, Android utilities, and personal books i wrote.",
    "btn.download": "Download",
    "btn.details": "View Details",
    "app.version": "Version",
    "app.release": "Released",
    "app.downloads": "Downloads",
    "about.site": "About Site",
    "about.site.desc": "The official EUNG SOFT homepage. Check out information about our apps and download them directly. This is a small space where I keep the things I've made. I just enjoy building — apps, writing, all sorts of things. I wanted one place to gather it all, nothing more than that. Think of it as a tiny workshop. If something here turns out to be useful to someone, that's more than enough for me.",
    "about.dev": "About Developer",
    "about.dev.desc": "I've been a developer since my very first job. I started with server-side development, then spent time teaching Java and mobile game development at a private institute. During the feature phone era, I spent nearly eight years building software embedded in LG handsets — working across more than thirty models in total. One period that stands out in my memory is when I was active as an Adobe technology evangelist. I gave seminars under the Adobe name, contributed technical articles to the Adobe Global site, and earned certification as an Adobe Flash Lite Authorized Instructor. Those were genuinely fun times. It's all a bit of old history now, but I'm still writing code in the field every day. Writing the occasional book, building apps when I get the chance — that's just how I live.",
    "about.link": "Media & Blog",
    "error.fetch": "Failed to fetch data.",
    "books.subtitle": "Since I enjoy writing, I publish books in my spare time. Here are the IT books, essays, and novels I have written."
  }
};

// State
let currentLang = localStorage.getItem('eungsoft_lang') || 'ko';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavbar();
  initGSAPEffects();
  initCommonUI();

  // Custom event so page-specific scripts know when core is ready
  document.dispatchEvent(new Event('appReady'));
});

// Theme Handling
let currentTheme = localStorage.getItem('eungsoft_theme') || 'light';

function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('eungsoft_theme', currentTheme);
  
  // Update theme toggle icon
  const themeIcon = document.querySelector('.theme-toggle .material-symbols-rounded');
  if (themeIcon) {
    themeIcon.textContent = currentTheme === 'light' ? 'dark_mode' : 'light_mode';
  }
}

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

// Common UI Elements (TOP button, theme toggle injection)
function initCommonUI() {
  // 1. Inject Theme Toggle in Navbar
  const navActions = document.querySelector('.nav-container div[style*="display: flex"]');
  if (navActions) {
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.setAttribute('aria-label', 'Toggle Theme');
    themeBtn.innerHTML = `<span class="material-symbols-rounded">${currentTheme === 'light' ? 'dark_mode' : 'light_mode'}</span>`;
    themeBtn.onclick = toggleTheme;
    navActions.prepend(themeBtn);
  }

  // 2. Inject TOP Button
  const topBtn = document.createElement('button');
  topBtn.className = 'top-btn';
  topBtn.innerHTML = '<span class="material-symbols-rounded">arrow_upward</span>';
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(topBtn);

  // 3. Scroll tracking for TOP button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
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
