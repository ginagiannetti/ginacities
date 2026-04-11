(() => {
const GLYPHS = ['✦','❀','✿','✧','✺','✶'];
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce) {
  document.querySelectorAll('.pill').forEach(pill => {
    let interval = null;

    function spawnPetal() {
      const s = document.createElement('span');
      s.className = 'btn-petal';
      s.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      const dur = 1 + Math.random() * 1.5;
      s.style.left = (Math.random() * 100) + '%';
      s.style.animationDuration = dur + 's';
      s.style.fontSize = (8 + Math.random() * 6) + 'px';
      s.style.color = Math.random() < .5 ? 'var(--violet)' : 'var(--pink-2)';
      pill.appendChild(s);
      setTimeout(() => s.remove(), dur * 1000 + 100);
    }

    pill.addEventListener('mouseenter', () => {
      spawnPetal();
      interval = setInterval(() => spawnPetal(), 300);
    });

    pill.addEventListener('mouseleave', () => {
      clearInterval(interval);
      interval = null;
    });
  });
}
})();