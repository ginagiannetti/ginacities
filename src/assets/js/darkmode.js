(() => {
  const root  = document.documentElement;
  const btn   = document.getElementById('mode-toggle');
  const label = document.getElementById('modeLabel');
  const dogIframe = document.getElementById('dogIframe');

  const LIGHT_DOG_URL = 'https://ginacities.com/doggy/?embed=1&dog=Corgi&variant=0&room=cute';
  const DARK_DOG_URL  = 'https://ginacities.com/doggy/?embed=1&dog=corgi&variant=3&room=goth';

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      label.textContent = 'light mode';
      btn.setAttribute('aria-label', 'switch to light mode');
      if (dogIframe) dogIframe.src = DARK_DOG_URL;
    } else {
      root.removeAttribute('data-theme');
      label.textContent = 'dark mode';
      btn.setAttribute('aria-label', 'switch to dark mode');
      if (dogIframe) dogIframe.src = LIGHT_DOG_URL;
    }
  }

  const saved = localStorage.getItem('ginacities-theme');
  applyTheme(saved || 'light');

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('ginacities-theme', next);
  });
})();