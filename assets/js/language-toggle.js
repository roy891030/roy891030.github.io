(function () {
  var STORAGE_KEY = 'portfolio-language';
  var supported = { en: true, zh: true };

  function getInitialLanguage() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (supported[saved]) return saved;
    return 'en';
  }

  function applyLanguage(language) {
    var lang = supported[language] ? language : 'en';
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    document.body.setAttribute('data-language', lang);
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll('[data-en][data-zh]').forEach(function (element) {
      element.textContent = element.getAttribute('data-' + lang);
    });

    document.querySelectorAll('[data-language-toggle]').forEach(function (button) {
      button.textContent = lang === 'zh' ? 'EN' : '中';
      button.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切換成中文');
      button.setAttribute('aria-pressed', lang === 'zh' ? 'true' : 'false');
    });

    window.portfolioLanguage = lang;
    document.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: { language: lang } }));
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLanguage(getInitialLanguage());

    document.querySelectorAll('[data-language-toggle]').forEach(function (button) {
      button.addEventListener('click', function () {
        applyLanguage(window.portfolioLanguage === 'zh' ? 'en' : 'zh');
      });
    });
  });

  window.setPortfolioLanguage = applyLanguage;
})();
