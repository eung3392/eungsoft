// i18n Data Dictionary
const translations = {
  ko: {
    "nav.intro": "소개",
    "nav.web_install": "Web Install",
    "nav.rokid": "Rokid App",
    "nav.android": "Android App",
    "nav.books": "서적",
    "nav.story": "Dev Story",
    "nav.layer_edit": "Layer Edit",
    "nav.lang": "English",
    "footer.privacy": "개인정보 처리방침",
    "footer.terms": "이용약관",
    "footer.rights": "모든 권리 보유.",
    "hero.title": "CODE, BOOKS & LIFE",
    "hero.subtitle": "사용자의 니즈를 생각하는 실용적인 소프트웨어를 만듭니다. 광고가 없는 앱을 만들고 있습니다. EUNG SOFT는 창작을 좋아하는 개발자의 개인 창작 공간입니다. 다소 미흡하더라도 저의 창작물을 여러 사람과 공유하고 싶은 마음입니다. 관심과 응원 부탁드립니다.",
    "hero.desc": "로키드 글래스 최적화 앱, 안드로이드 유틸리티, 그리고 제가 쓴 개인 서적을 소개합니다.",
    "rokid.desc": "로키드 글래스를 위한 전용 애플리케이션 모음입니다.",
    "android.desc": "안드로이드 스마트폰을 위한 유틸리티 애플리케이션입니다.",
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
    "books.subtitle": "글 쓰는 것을 좋아해서, 틈틈이 책을 출간하였습니다. 제가 쓴 IT 서적과 에세이 그리고 소설 등을 소개합니다.",
    "webinstall.title": "Web Install (APK)",
    "webinstall.subtitle": "별도의 프로그램 설치 없이, 브라우저에서 바로 APK를 장치에 설치합니다.",
    "webinstall.count": "Web Install Count",
    "webinstall.browser_warning_title": "브라우저 제한 안내",
    "webinstall.browser_warning_desc": "WebUSB API는 Chrome, Edge, Opera 등 Chromium 기반 브라우저에서만 작동합니다. Safari나 Firefox에서는 이 기능을 이용할 수 없습니다.",
    "webinstall.status_not_connected": "기기 연결 안 됨",
    "webinstall.btn_connect": "기기 연결하기",
    "webinstall.btn_select_apk": "APK 파일 선택 및 설치",
    "webinstall.guide_title": "사용법 및 준비사항",
    "webinstall.guide_1": "안드로이드 기기의 개발자 옵션에서 USB 디버깅을 활성화합니다.",
    "webinstall.guide_2": "USB 케이블로 기기와 PC를 연결합니다. (데이터 통신 가능 케이블 필수)",
    "webinstall.guide_3": "\"기기 연결하기\" 버튼을 클릭하고, 브라우저 팝업에서 기기를 선택합니다.",
    "webinstall.guide_4": "기기 화면에 \"USB 디버깅을 허용하시겠습니까?\" 팝업이 뜨면 허용을 누릅니다.",
    "webinstall.guide_5": "연결 성공 후 APK 파일 선택 및 설치 버튼으로 원하는 APK를 선택합니다.",
    "webinstall.troubleshoot_title": "점검 사항 (문제가 발생할 경우)",
    "webinstall.troubleshoot_1": "브라우저 확인: Chrome(크롬)이나 Edge(엣지)를 사용 중이신가요? (Safari, Firefox는 지원 안 함)",
    "webinstall.troubleshoot_2": "USB 디버깅: 기기(안드로이드/로키드 등) 설정에서 USB 디버깅이 켜져 있나요?",
    "webinstall.troubleshoot_3": "케이블 연결: 기기가 PC와 USB로 직접 연결되어 있나요? (데이터 통신용 필수)",
    "webinstall.troubleshoot_4": "ADB 서버 충돌: 터미널에서 adb kill-server를 실행한 후 다시 연결하세요.",
    "webinstall.not_supported": "WebUSB를 지원하지 않습니다. Chrome 또는 Edge를 사용해 주세요.",
    "webinstall.log_select_device": "USB 기기를 선택해 주세요...",
    "webinstall.log_device_selected": "기기 선택됨: {serial} — 인증 중...",
    "webinstall.log_auth_success": "인증 성공: {serial}",
    "webinstall.log_auth_failed": "연결 실패: {error}",
    "webinstall.status_connected": "연결됨: {serial}",
    "webinstall.status_error": "연결 오류",
    "webinstall.log_install_start": "설치 시작: {name}",
    "webinstall.progress_preparing": "파일 준비 중...",
    "webinstall.log_transferring": "파일 전송 중...",
    "webinstall.log_transfer_done": "파일 전송 완료.",
    "webinstall.progress_installing": "설치 중...",
    "webinstall.log_installing": "설치 명령 실행...",
    "webinstall.log_success": "설치 성공!",
    "webinstall.log_failed": "설치 실패.",
    "webinstall.alert_done": "설치가 성공적으로 완료되었습니다. 🎉",
    "webinstall.alert_error": "설치 중 오류가 발생했습니다.",
    "webinstall.btn_upload_ebook": "EK Reader 용 txt, epub 업로드",
    "webinstall.log_upload_start": "파일 전송 시작: {name}",
    "webinstall.btn_photo_list": "사진 목록",
    "webinstall.btn_photo_get": "사진 가져오기 (최대 50)",
    "story.webinstall.title": "별도 프로그램 없이 브라우저에서 바로! Web Install 기능 구현기",
    "story.webinstall.intro": "안녕하세요! EUNG SOFT입니다. 그동안 안드로이드 기기나 로키드 글래스에 APK를 설치할 때마다 별도의 프로그램을 설치하거나 복잡한 ADB 명령어를 입력해야 하는 번거로움이 있었습니다.",
    "story.webinstall.desc": "이러한 불편함을 해결하기 위해, WebUSB API와 WebADB 기술을 활용하여 브라우저에서 직접 기기를 제어할 수 있는 Web Install 메뉴를 새롭게 런칭하게 되었습니다.",
    "story.webinstall.features": "주요 특징 및 기능",
    "story.webinstall.f1": "무설치 환경: 크롬(Chrome)이나 엣지(Edge) 브라우저만 있다면, 별도의 전용 프로그램 없이 즉시 이용 가능합니다.",
    "story.webinstall.f2": "간편한 APK 설치: 연결된 기기에 APK 파일을 선택하는 것만으로 자동으로 전송 및 설치가 완료됩니다.",
    "story.webinstall.f3": "미디어 관리 (Photo/Video): 기기의 DCIM 폴더에 있는 최신 사진과 MP4 동영상 파일(최대 50개)을 날짜순으로 확인하고, 원하는 파일만 골라 내 컴퓨터로 바로 다운로드할 수 있는 편리한 기능을 추가했습니다.",
    "story.webinstall.f4": "실시간 진행 알림: 파일 전송 및 설치 과정을 로그 영역과 프로그레스 바를 통해 실시간으로 확인할 수 있습니다.",
    "story.webinstall.closing1": "이번 Web Install 기능 개발을 통해 로키드 글래스 사용자분들과 안드로이드 개발자분들이 좀 더 쾌적한 환경에서 작업하실 수 있기를 바랍니다.",
    "story.webinstall.closing2": "앞으로도 더욱 유용한 기능을 꾸준히 업데이트해 나가겠습니다. 감사합니다!"
  },
  en: {
    "nav.intro": "Intro",
    "nav.web_install": "Web Install",
    "nav.rokid": "Rokid App",
    "nav.android": "Android App",
    "nav.books": "Books",
    "nav.story": "Dev Story",
    "nav.layer_edit": "Layer Edit",
    "nav.lang": "한국어",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "All rights reserved.",
    "hero.title": "CODE, BOOKS & LIFE",
    "hero.subtitle": "Building practical software focused on user needs. Ad-free. EUNG SOFT is a personal creative space for a developer who loves creating. Although it may be somewhat lacking, I want to share my creations with many people. Your interest and support are greatly appreciated.",
    "hero.desc": "Providing optimized apps for Rokid Glasses, Android utilities, and personal books i wrote.",
    "rokid.desc": "A collection of dedicated applications for Rokid Glasses.",
    "android.desc": "Utility applications for Android smartphones.",
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
    "books.subtitle": "Since I enjoy writing, I publish books in my spare time. Here are the IT books, essays, and novels I have written.",
    "webinstall.title": "Web Install (APK)",
    "webinstall.subtitle": "Install APKs directly to your device from the browser, no extra software needed.",
    "webinstall.count": "Web Install Count",
    "webinstall.browser_warning_title": "Browser Compatibility",
    "webinstall.browser_warning_desc": "WebUSB API only works on Chromium-based browsers like Chrome, Edge, and Opera. Safari and Firefox are not supported.",
    "webinstall.status_not_connected": "Device not connected",
    "webinstall.btn_connect": "Connect Device",
    "webinstall.btn_select_apk": "Select APK & Install",
    "webinstall.guide_title": "Usage & Requirements",
    "webinstall.guide_1": "Enable USB Debugging in Developer Options on your Android device.",
    "webinstall.guide_2": "Connect the device to your PC via USB cable. (Data cable required)",
    "webinstall.guide_3": "Click \"Connect Device\" and select your device from the browser popup.",
    "webinstall.guide_4": "When the \"Allow USB Debugging?\" popup appears on your device, tap Allow.",
    "webinstall.guide_5": "After connection, click Select APK & Install to choose your APK file.",
    "webinstall.troubleshoot_title": "Troubleshooting",
    "webinstall.troubleshoot_1": "Browser: Are you using Chrome or Edge? (Safari and Firefox are not supported)",
    "webinstall.troubleshoot_2": "USB Debugging: Is it enabled in your device settings?",
    "webinstall.troubleshoot_3": "Cable: Is the device connected directly via a data-capable USB cable?",
    "webinstall.troubleshoot_4": "ADB Conflict: If it fails, run adb kill-server in your terminal first.",
    "webinstall.not_supported": "WebUSB not supported. Please use Chrome or Edge.",
    "webinstall.log_select_device": "Please select a USB device...",
    "webinstall.log_device_selected": "Device selected: {serial} — Authenticating...",
    "webinstall.log_auth_success": "Authentication successful: {serial}",
    "webinstall.log_auth_failed": "Connection failed: {error}",
    "webinstall.status_connected": "Connected: {serial}",
    "webinstall.status_error": "Connection Error",
    "webinstall.log_install_start": "Starting install: {name}",
    "webinstall.progress_preparing": "Preparing file...",
    "webinstall.log_transferring": "Transferring file...",
    "webinstall.log_transfer_done": "File transfer complete.",
    "webinstall.progress_installing": "Installing...",
    "webinstall.log_installing": "Executing install command...",
    "webinstall.log_success": "Installation Successful!",
    "webinstall.log_failed": "Installation failed.",
    "webinstall.alert_done": "Installation completed successfully. 🎉",
    "webinstall.alert_error": "An error occurred during installation.",
    "webinstall.btn_upload_ebook": "Upload txt/epub for EK Reader",
    "webinstall.log_upload_start": "Starting upload: {name}",
    "webinstall.btn_photo_list": "Photo List",
    "webinstall.btn_photo_get": "Get Photos (Max 50)",
    "story.webinstall.title": "No extra software needed! Web Install Feature Launch",
    "story.webinstall.intro": "Hello from EUNG SOFT! Previously, installing APKs on Android devices or Rokid Glasses required separate software or complex ADB commands, which was quite a hassle.",
    "story.webinstall.desc": "To solve this, we launched the new Web Install menu using WebUSB API and WebADB, allowing direct device control right from your browser.",
    "story.webinstall.features": "Key Features & Highlights",
    "story.webinstall.f1": "Zero Installation: Access immediately via Chrome or Edge without any dedicated software.",
    "story.webinstall.f2": "Easy APK Installation: Simply select an APK file and it will be transferred and installed automatically.",
    "story.webinstall.f3": "Media Management (Photo/Video): Check the latest 50 photos/videos in the DCIM folder and download them directly to your PC.",
    "story.webinstall.f4": "Real-time Progress: Monitor transfer and installation status in real-time through the logs and progress bar.",
    "story.webinstall.closing1": "We hope this new feature provides a more seamless experience for Rokid Glasses users and Android developers.",
    "story.webinstall.closing2": "We will continue to improve. Thank you!"
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
