(() => {
const box = document.getElementById('stars');
for(let i=0;i<40;i++){
  const s = document.createElement('div');
  const size = Math.random()*3 + 2;
  s.className='star';
  s.style.width = s.style.height = size + 'px';
  s.style.top = (Math.random()*100) + '%';
  s.style.left = (Math.random()*100) + '%';
  s.style.animationDuration = (2 + Math.random()*3) + 's';
  box.appendChild(s);
}

const rain = document.querySelector('.rain');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce) {
  const GLYPHS = ['✦','❀','✿','✧','✺','✶'];
  function spawnPetal(){
    const s = document.createElement('span');
    s.className = 'petal';
    s.textContent = GLYPHS[Math.floor(Math.random()*GLYPHS.length)];
    const left = Math.random()*100;
    const dur = 6 + Math.random()*8;
    const delay = Math.random()*-8;
    const size = 12 + Math.random()*14;
    s.style.left = left + 'vw';
    s.style.animationDuration = dur + 's';
    s.style.animationDelay = delay + 's';
    s.style.fontSize = size + 'px';
    s.style.color = Math.random() < .5 ? 'var(--violet)' : 'var(--win-pink-light)';
    rain.appendChild(s);
    setTimeout(() => s.remove(), (dur + Math.abs(delay))*1000 + 100);
  }
  for (let i=0;i<24;i++) spawnPetal();
  setInterval(() => { for (let i=0;i<4;i++) spawnPetal(); }, 1200);
}
})();