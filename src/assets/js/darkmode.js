(function () {
  const root  = document.documentElement;
  const btn   = document.getElementById('mode-toggle');
  const label = document.getElementById('modeLabel');
  const dogIframe = document.getElementById('dogIframe');

  const LIGHT_DOG_URL = 'https://ginacities.com/doggy/?embed=1&dog=Corgi&variant=0&room=cute';
  const DARK_DOG_URL  = 'https://ginacities.com/doggy/?embed=1&dog=corgi&variant=3&room=goth';
  const LIGHT_BG_SIZE = 'contain';
  const DARK_BG_SIZE  = 'cover';
  const DARK_COL      = '#7964a7';
  const LIGHT_COL     = '#dec2ee';
  const LIGHT_WINDOW_BG  = '#ffffff';
  const DARK_WINDOW_BG   = '#5a5493';
  const LIGHT_WINDOW_COL = '#000000';
  const DARK_WINDOW_COL  = '#ffffff';

  function setTitle(bg_col, font_col){
    const title = document.getElementById('logo');
    if (!title) return;
    title.style.backgroundColor = bg_col;
    title.style.color = font_col;
  }
  function setBackgroundSize(value){
  const isLinksPage = document.body.classList.contains('link-body');

  if (isLinksPage) {
    document.body.style.backgroundSize = 'cover';
  } else {
    document.body.style.backgroundSize = value;
  }
}
  function setLinks(baseColor, hoverColor) {
    if (baseColor) root.style.setProperty('--link', baseColor);
    if (hoverColor) root.style.setProperty('--link-hover', hoverColor);
  }
  function setDogUrl(url){
    if (dogIframe && url) dogIframe.src = url;
  }
  function setWindowColor(bg_col, font_col){
    document.querySelectorAll('.content').forEach(el => {
      el.style.backgroundColor = bg_col;
      el.style.color = font_col;
    });
  }
  function setInnerWindow(colour){
    document.querySelectorAll('.card').forEach(el => {
      el.style.backgroundColor = colour;
    });
  }
  function setFooterBg(colour){
    const footer = document.getElementById('badges');
    if (footer) footer.style.backgroundColor = colour;
  }

  function applyTheme(theme){
    if (theme === 'dark') {
      root.setAttribute('data-theme','dark');
      label.textContent = 'light mode';
      btn.setAttribute('aria-label','switch to light mode');
      // btn.style.backgroundColor = DARK_WINDOW_BG;
      // btn.style.color = LIGHT_WINDOW_COL;
      setLinks(LIGHT_COL, DARK_WINDOW_COL);
      setBackgroundSize(DARK_BG_SIZE);
      setDogUrl(DARK_DOG_URL);
      setWindowColor(DARK_WINDOW_BG, DARK_WINDOW_COL);
      setInnerWindow(DARK_WINDOW_BG);
      setFooterBg(DARK_WINDOW_BG);
      setTitle(DARK_WINDOW_BG, DARK_WINDOW_COL);
    } else {
      root.removeAttribute('data-theme');
      label.textContent = 'dark mode';
      btn.setAttribute('aria-label','switch to dark mode');
      // btn.style.backgroundColor = LIGHT_COL;
      // btn.style.color = LIGHT_WINDOW_COL;
      setLinks(LIGHT_WINDOW_COL, DARK_COL);
      setBackgroundSize(LIGHT_BG_SIZE);
      setDogUrl(LIGHT_DOG_URL);
      setWindowColor(LIGHT_WINDOW_BG, LIGHT_WINDOW_COL);
      setInnerWindow(LIGHT_WINDOW_BG);
      setFooterBg(LIGHT_WINDOW_BG);
      setTitle(LIGHT_WINDOW_BG, LIGHT_WINDOW_COL);
    }
  }

  applyTheme('light');

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
})();