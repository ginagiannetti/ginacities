  const _lbCache = {};

  function _lbEsc(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function _lbDate(iso) {
    try { return new Date(iso).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}); }
    catch(e) { return iso.slice(0,10); }
  }
  function _lbRender(data) {
    if (!data || !data.length) return '<p style="color:var(--violet);font-family:\'Press Start 2P\',cursive;font-size:10px;text-align:center;padding:20px;">no scores yet — be the first!</p>';
    const medals = ['🥇','🥈','🥉'];
    const sorted = [...data].sort((a,b) => b.score - a.score);
    const rows = sorted.map((e,i) => `<tr style="border-bottom:1px dashed var(--lav-2);${i%2===1?'background:rgba(233,221,255,0.2)':''}">
      <td style="padding:8px 10px;">${i<3 ? medals[i] : '<span style="font-family:\'Press Start 2P\',cursive;font-size:9px;">#'+(i+1)+'</span>'}</td>
      <td style="padding:8px 10px;font-weight:600;">${_lbEsc(e.name)}</td>
      <td style="padding:8px 10px;font-weight:700;color:var(--dark);">${e.score.toLocaleString()}</td>
      <td style="padding:8px 10px;font-size:12px;color:var(--violet);">${_lbDate(e.date)}</td>
    </tr>`).join('');
    return `<div style="max-height:265px;overflow-y:auto;border:1px solid var(--lav-2);">
      <table style="width:100%;border-collapse:collapse;">
        <thead><tr style="background:#7964a7;color:#ffffff;border-bottom:2px solid var(--violet);position:sticky;top:0;">
          <th style="padding:7px 10px;text-align:left;font-size:12px;">#</th>
          <th style="padding:7px 10px;text-align:left;font-size:12px;">mage</th>
          <th style="padding:7px 10px;text-align:left;font-size:12px;">score</th>
          <th style="padding:7px 10px;text-align:left;font-size:12px;">date</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  }
  async function loadTab(diff, btn) {
    document.querySelectorAll('#lb-tabs .pill').forEach(p => { p.style.background='var(--lav)'; p.style.color='var(--ink)'; });
    btn.style.background = 'var(--dark)';
    btn.style.color = '#fff';
    const body = document.getElementById('lb-body');
    const footer = document.getElementById('lb-footer');
    if (_lbCache[diff]) { body.innerHTML = _lbRender(_lbCache[diff]); footer.textContent=`${_lbCache[diff].length} scores on record`; return; }
    body.innerHTML = '<p style="color:var(--violet);font-family:\'Press Start 2P\',cursive;font-size:10px;text-align:center;padding:20px;">loading scores...</p>';
    footer.textContent = '';
    try {
      const res = await fetch(`https://api.ginacities.com/leaderboard/${diff}`);
      const data = await res.json();
      _lbCache[diff] = data;
      body.innerHTML = _lbRender(data);
      footer.textContent = `${data.length} score${data.length!==1?'s':''} on record`;
    } catch(e) {
      body.innerHTML = '<p style="color:var(--violet);text-align:center;padding:20px;">couldn\'t load scores — try again later</p>';
    }
  }
  loadTab('medium', document.querySelectorAll('#lb-tabs .pill')[1]);