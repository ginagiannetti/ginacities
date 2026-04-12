const playlist = [
  { title: "Cozy Evening Coffee Time", src: "/assets/music/Cozy-Evening-Coffee-Time_AdobeStock_881792350.wav", cover: "/assets/music/covers/blue_moon.jpeg" },
  { title: "Coffee Lofi",              src: "/assets/music/Coffee-Lo-Fi_AdobeStock_462873317.wav",             cover: "/assets/music/covers/coffee.jpeg" },
  { title: "Cool Chill Summer",        src: "/assets/music/Cool-Chill-Summer-Lo-Fi-Hip-Hop_AdobeStock_626142598.wav", cover: "/assets/music/covers/sun.jpeg" },
  { title: "Lofi Hip Hop Memories",    src: "/assets/music/Lo-Fi-Hip-Hop-Memories-Full_AdobeStock_501349166.wav",     cover: "/assets/music/covers/moon_face.jpeg" },
  { title: "Luxury Lounge Lofi",       src: "/assets/music/Luxury-Lounge-Lofi_AdobeStock_1196748025.wav",            cover: "/assets/music/covers/moon_star.jpeg" },
  { title: "Summer Fashion Lofi Chill",src: "/assets/music/Summer-Fashion-Lo-Fi-Chill-Hip-Hop_AdobeStock_1614197361.wav", cover: "/assets/music/covers/fairy.jpeg" }
];

const audio    = document.getElementById('audio');
const titleEl  = document.getElementById('trackTitle');
const coverEl  = document.getElementById('cover');
const playBtn  = document.getElementById('playBtn');
const prevBtn  = document.getElementById('prevBtn');
const nextBtn  = document.getElementById('nextBtn');
const loopBtn  = document.getElementById('loopBtn');
const vol      = document.getElementById('vol');
const progress = document.getElementById('progress');
const bar      = document.getElementById('bar');
const curEl    = document.getElementById('cur');
const durEl    = document.getElementById('dur');

let index = 0;
let isPlaying = false;

function mmss(s){
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s/60);
  const sec = Math.floor(s%60).toString().padStart(2,'0');
  return `${m}:${sec}`;
}
function load(i){
  index = (i + playlist.length) % playlist.length;
  const t = playlist[index];
  audio.src = t.src;
  titleEl.textContent = t.title;
  if (t.cover) coverEl.style.backgroundImage = `url('${t.cover}')`;
  bar.style.width = '0%';
  curEl.textContent = "0:00";
  durEl.textContent = "0:00";
}
function play(){
  audio.play().then(()=>{
    isPlaying = true;
    playBtn.textContent = '⏸';
    playBtn.setAttribute('aria-label','pause');
  }).catch(()=>{});
}
function pause(){
  audio.pause();
  isPlaying = false;
  playBtn.textContent = '▶';
  playBtn.setAttribute('aria-label','play');
}
function togglePlay(){ isPlaying ? pause() : play(); }
function prev(){ load(index-1); play(); }
function next(){ load(index+1); play(); }
function toggleLoop(){
  audio.loop = !audio.loop;
  loopBtn.style.background = audio.loop ? 'var(--pink-2)' : 'var(--lav-2)';
  loopBtn.ariaLabel = audio.loop ? 'loop on' : 'loop off';
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
loopBtn.addEventListener('click', toggleLoop);
vol.addEventListener('input', () => audio.volume = +vol.value);

audio.addEventListener('loadedmetadata', () => { durEl.textContent = mmss(audio.duration); });
audio.addEventListener('timeupdate', () => {
  curEl.textContent = mmss(audio.currentTime);
  const pct = (audio.currentTime / (audio.duration || 1)) * 100;
  bar.style.width = pct + '%';
  progress.setAttribute('aria-valuenow', Math.floor(pct));
});
audio.addEventListener('ended', () => { if (!audio.loop) next(); });

function seekAt(clientX){
  const rect = progress.getBoundingClientRect();
  const pct = Math.min(Math.max((clientX - rect.left)/rect.width, 0), 1);
  audio.currentTime = pct * (audio.duration || 0);
}
progress.addEventListener('click', e => seekAt(e.clientX));
progress.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  audio.currentTime = Math.max(0, audio.currentTime - 5);
  if (e.key === 'ArrowRight') audio.currentTime = Math.min(audio.duration||0, audio.currentTime + 5);
});

audio.volume = +vol.value;
load(0);