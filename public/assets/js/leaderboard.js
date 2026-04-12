const _lbCache = {};

function _lbEsc(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function _lbDate(iso) {
  try { return new Date(iso).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}); }
  catch(e) { return iso.slice(0,10); }
}
function _lbRender(data) {
  if (!data || !data.length) return '<p class="lb-message">no scores yet — be the first!</p>';
  const medals = ['🥇','🥈','🥉'];
  const sorted = [...data].sort((a,b) => b.score - a.score);
  const rows = sorted.map((e,i) => `<tr class="lb-row ${i%2===1?'lb-row-alt':''}">
    <td class="lb-cell">${i<3 ? medals[i] : '<span class="lb-rank">#'+(i+1)+'</span>'}</td>
    <td class="lb-cell lb-name">${_lbEsc(e.name)}</td>
    <td class="lb-cell lb-score">${e.score.toLocaleString()}</td>
    <td class="lb-cell lb-date">${_lbDate(e.date)}</td>
  </tr>`).join('');
  return `<div class="lb-scroll">
    <table class="lb-table">
      <thead><tr class="lb-head">
        <th class="lb-cell">#</th>
        <th class="lb-cell">mage</th>
        <th class="lb-cell">score</th>
        <th class="lb-cell">date</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}
async function loadTab(diff, btn) {
  document.querySelectorAll('#lb-tabs .pill').forEach(p => p.classList.remove('lb-pill-active'));
  btn.classList.add('lb-pill-active');
  const body = document.getElementById('lb-body');
  const footer = document.getElementById('lb-footer');
  if (_lbCache[diff]) { body.innerHTML = _lbRender(_lbCache[diff]); footer.textContent=`${_lbCache[diff].length} scores on record`; return; }
  body.innerHTML = '<p class="lb-message">loading scores...</p>';
  footer.textContent = '';
  try {
    const res = await fetch(`https://api.ginacities.com/leaderboard/${diff}`);
    const data = await res.json();
    _lbCache[diff] = data;
    body.innerHTML = _lbRender(data);
    footer.textContent = `${data.length} score${data.length!==1?'s':''} on record`;
  } catch(e) {
    body.innerHTML = '<p class="lb-message">couldn\'t load scores — try again later</p>';
  }
}
loadTab('medium', document.querySelectorAll('#lb-tabs .pill')[1]);