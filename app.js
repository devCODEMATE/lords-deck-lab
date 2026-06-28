
// API KEY

const API_KEY = '9990c70a-8afb-4e89-979a-d6b10faee93f';

document.addEventListener('DOMContentLoaded', () => {


  // NAVIGATION

  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.section');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.section;
      document.getElementById(target).classList.add('active');
    });
  });


  // LOGO RESET

  document.querySelector('.logo').addEventListener('click', () => {
    deck = [];
    renderDeck();
    updateDeckStats();
    searchInput.value = '';
    cardGrid.innerHTML = '';
    handDisplay.innerHTML = '';
    document.getElementById('baseDmg').value = '120';
    document.getElementById('weakness').value = '2';
    document.getElementById('resistance').value = '0';
    document.getElementById('coinBonus').value = '0';
    document.getElementById('extraDmg').value = '0';
    document.getElementById('opponentHp').value = '200';
    document.getElementById('damageResult').style.display = 'none';
    navButtons.forEach(b => b.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    document.querySelector('[data-section="search"]').classList.add('active');
    document.getElementById('search').classList.add('active');
  });
=
  // SKETCH CARD GENERATOR

  function generateSketchCard(card, width, height) {
    const W = width || 130;
    const H = height || 182;
    const cx = W / 2;

    const name = card.name || '';
    const lname = name.toLowerCase();
    const supertype = card.supertype || 'Pokémon';
    const subtype = card.subtypes ? card.subtypes[0] : (card.subtype || '');
    const hp = card.hp || '';
    const setCode = card.set ? card.set.ptcgoCode : (card.setCode || '??');
    const number = card.number || '?';

    // Short name for header
    const shortName = name.length > 17 ? name.slice(0, 16) + '…' : name;
    const rightText = supertype === 'Pokémon' ? 'HP ' + hp : subtype || supertype;
    const subLine = supertype === 'Pokémon' ? (subtype || '') + ' type' : '';

    // ── POKEMON SKETCHES ──────────────────────────────────────
    function pokemon_lucario() {
      return `<g transform="translate(${cx},${H*0.54})">
        <path d="M-14,10 Q-18,-4 -12,-18 Q0,-28 12,-18 Q18,-4 14,10 Q8,20 0,22 Q-8,20 -14,10Z" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M-12,-18 Q-14,-32 -6,-40 Q0,-44 6,-40 Q14,-32 12,-18 Q6,-14 0,-12 Q-6,-14 -12,-18Z" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M-10,-36 Q-18,-50 -12,-58 Q-6,-52 -8,-40Z" fill="none" stroke="#111" stroke-width="1.1"/>
        <path d="M10,-36 Q18,-50 12,-58 Q6,-52 8,-40Z" fill="none" stroke="#111" stroke-width="1.1"/>
        <path d="M-9,-40 Q-13,-50 -10,-54 Q-7,-48 -8,-43Z" fill="none" stroke="#333" stroke-width="0.7"/>
        <path d="M9,-40 Q13,-50 10,-54 Q7,-48 8,-43Z" fill="none" stroke="#333" stroke-width="0.7"/>
        <ellipse cx="-5" cy="-26" rx="2.5" ry="3" fill="#111"/>
        <ellipse cx="5" cy="-26" rx="2.5" ry="3" fill="#111"/>
        <path d="M-2,-20 Q0,-17 2,-20" fill="none" stroke="#111" stroke-width="0.9"/>
        <path d="M-5,-22 Q0,-18 5,-22 Q5,-15 0,-14 Q-5,-15 -5,-22Z" fill="none" stroke="#111" stroke-width="0.9"/>
        <path d="M-5,-4 Q0,-8 5,-4 Q4,2 0,4 Q-4,2 -5,-4Z" fill="none" stroke="#333" stroke-width="0.8"/>
        <path d="M-14,2 Q-28,-2 -32,10 Q-28,18 -22,14" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M-32,10 Q-38,6 -36,14 Q-34,20 -28,18 Q-22,16 -22,14Z" fill="none" stroke="#111" stroke-width="1.1"/>
        <line x1="-36" y1="10" x2="-34" y2="18" stroke="#333" stroke-width="0.7"/>
        <line x1="-33" y1="8" x2="-30" y2="18" stroke="#333" stroke-width="0.7"/>
        <path d="M14,2 Q28,-8 34,-2 Q36,6 30,10" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M34,-2 Q42,-6 40,4 Q38,12 32,10 Q28,8 30,6Z" fill="none" stroke="#111" stroke-width="1.1"/>
        <circle cx="-30" cy="13" r="5" fill="none" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>
        <circle cx="36" cy="2" r="5" fill="none" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>
        <ellipse cx="${cx}" cy="${H*0.54+18}" rx="13" ry="16" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M-8,22 Q-10,36 -12,48 Q-8,52 -4,50" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M8,22 Q10,36 12,48 Q8,52 4,50" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M-12,48 Q-18,52 -14,58 Q-8,60 -4,56 Q-2,52 -4,50Z" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M12,48 Q18,52 14,58 Q8,60 4,56 Q2,52 4,50Z" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M0,22 Q-16,32 -18,46 Q-14,52 -10,46" fill="none" stroke="#111" stroke-width="1.1"/>
        <path d="M-40,0 Q-44,-4 -42,-10" fill="none" stroke="#333" stroke-width="0.7"/>
        <path d="M44,0 Q48,-4 46,-10" fill="none" stroke="#333" stroke-width="0.7"/>
        <text x="0" y="66" font-family="Caveat,cursive" font-size="8" fill="#777" text-anchor="middle">(Lucario)</text>
      </g>`;
    }

    function pokemon_chienpao() {
      return `<g transform="translate(${cx},${H*0.52})">
        <path d="M-22,8 Q-26,-10 -18,-24 Q-8,-34 0,-36 Q8,-34 18,-24 Q26,-10 22,8 Q14,22 0,26 Q-14,22 -22,8Z" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M-10,-34 Q-12,-44 -8,-52 Q0,-58 8,-52 Q12,-44 10,-34" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M-14,-44 Q-18,-58 -10,-66 Q0,-72 10,-66 Q18,-58 14,-44 Q8,-38 0,-36 Q-8,-38 -14,-44Z" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M-12,-62 Q-18,-74 -8,-78 Q-4,-70 -8,-64Z" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M12,-62 Q18,-74 8,-78 Q4,-70 8,-64Z" fill="none" stroke="#111" stroke-width="1"/>
        <ellipse cx="-5" cy="-54" rx="3" ry="3.5" fill="#111"/>
        <ellipse cx="5" cy="-54" rx="3" ry="3.5" fill="#111"/>
        <path d="M-2,-48 Q0,-46 2,-48 Q2,-44 0,-43 Q-2,-44 -2,-48Z" fill="#111"/>
        <path d="M-6,-44 Q-8,-36 -7,-28 Q-5,-26 -4,-30 Q-4,-38 -5,-44Z" fill="none" stroke="#111" stroke-width="1.4"/>
        <path d="M6,-44 Q8,-36 7,-28 Q5,-26 4,-30 Q4,-38 5,-44Z" fill="none" stroke="#111" stroke-width="1.4"/>
        <line x1="-14" y1="-46" x2="-28" y2="-44" stroke="#111" stroke-width="0.9"/>
        <line x1="-14" y1="-48" x2="-28" y2="-50" stroke="#111" stroke-width="0.9"/>
        <line x1="14" y1="-46" x2="28" y2="-44" stroke="#111" stroke-width="0.9"/>
        <line x1="14" y1="-48" x2="28" y2="-50" stroke="#111" stroke-width="0.9"/>
        <path d="M22,8 Q38,4 42,16 Q44,28 36,32 Q30,30 32,22 Q34,14 28,12" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M-18,8 Q-22,24 -20,40" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M-20,40 Q-26,44 -22,50 Q-16,52 -12,48 Q-10,44 -12,40Z" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M18,8 Q22,24 20,40" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M20,40 Q26,44 22,50 Q16,52 12,48 Q10,44 12,40Z" fill="none" stroke="#111" stroke-width="1"/>
        <circle cx="-32" cy="-20" r="2" fill="none" stroke="#444" stroke-width="0.7"/>
        <circle cx="34" cy="-24" r="2" fill="none" stroke="#444" stroke-width="0.7"/>
        <path d="M-40,-10 L-36,-6 M-40,-6 L-36,-10" stroke="#444" stroke-width="0.7"/>
        <text x="0" y="66" font-family="Caveat,cursive" font-size="8" fill="#777" text-anchor="middle">(Chien-Pao)</text>
      </g>`;
    }

    function pokemon_riolu() {
      return `<g transform="translate(${cx},${H*0.56})">
        <path d="M-12,14 Q-16,2 -10,-10 Q0,-18 10,-10 Q16,2 12,14 Q6,22 0,24 Q-6,22 -12,14Z" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M-10,-10 Q-12,-22 -6,-30 Q0,-34 6,-30 Q12,-22 10,-10 Q5,-6 0,-4 Q-5,-6 -10,-10Z" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M-8,-26 Q-14,-40 -6,-46 Q-2,-38 -6,-28Z" fill="none" stroke="#111" stroke-width="1.1"/>
        <path d="M8,-26 Q14,-40 6,-46 Q2,-38 6,-28Z" fill="none" stroke="#111" stroke-width="1.1"/>
        <ellipse cx="-4" cy="-18" rx="3" ry="3.5" fill="#111"/>
        <ellipse cx="4" cy="-18" rx="3" ry="3.5" fill="#111"/>
        <circle cx="-3" cy="-19" r="1" fill="#fff"/>
        <circle cx="5" cy="-19" r="1" fill="#fff"/>
        <ellipse cx="0" cy="-13" rx="2" ry="1.5" fill="#111"/>
        <path d="M-3,-11 Q0,-8 3,-11" fill="none" stroke="#111" stroke-width="0.9"/>
        <path d="M-8,-14 Q-12,-12 -10,-8" fill="none" stroke="#333" stroke-width="0.7"/>
        <path d="M8,-14 Q12,-12 10,-8" fill="none" stroke="#333" stroke-width="0.7"/>
        <path d="M-12,4 Q-22,0 -24,10 Q-20,18 -16,14" fill="none" stroke="#111" stroke-width="1.1"/>
        <path d="M12,4 Q22,0 24,10 Q20,18 16,14" fill="none" stroke="#111" stroke-width="1.1"/>
        <ellipse cx="-22" cy="12" rx="5" ry="4" fill="none" stroke="#111" stroke-width="1"/>
        <ellipse cx="22" cy="12" rx="5" ry="4" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M-6,24 Q-8,36 -6,44" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M6,24 Q8,36 6,44" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M-6,44 Q-12,46 -10,52 Q-4,54 0,50 Q2,46 0,44Z" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M6,44 Q12,46 10,52 Q4,54 0,50 Q-2,46 0,44Z" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M0,24 Q-10,30 -12,42 Q-8,46 -6,42" fill="none" stroke="#111" stroke-width="1"/>
        <text x="0" y="58" font-family="Caveat,cursive" font-size="8" fill="#777" text-anchor="middle">(Riolu)</text>
      </g>`;
    }

    function pokemon_generic(label) {
      return `<g transform="translate(${cx},${H*0.54})">
        <ellipse cx="0" cy="-4" rx="16" ry="18" fill="none" stroke="#111" stroke-width="1.3"/>
        <ellipse cx="-7" cy="-19" rx="5" ry="7" fill="none" stroke="#111" stroke-width="1.1"/>
        <ellipse cx="7" cy="-19" rx="5" ry="7" fill="none" stroke="#111" stroke-width="1.1"/>
        <circle cx="-5" cy="-6" r="2" fill="#111"/>
        <circle cx="5" cy="-6" r="2" fill="#111"/>
        <path d="M-3,2 Q0,6 3,2" fill="none" stroke="#111" stroke-width="0.9"/>
        <ellipse cx="0" cy="18" rx="13" ry="15" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M-13,8 Q-25,20 -22,36" fill="none" stroke="#111" stroke-width="1.1"/>
        <path d="M13,8 Q25,20 22,36" fill="none" stroke="#111" stroke-width="1.1"/>
        <line x1="-6" y1="33" x2="-8" y2="52" stroke="#111" stroke-width="1.1"/>
        <line x1="6" y1="33" x2="8" y2="52" stroke="#111" stroke-width="1.1"/>
        <path d="M-10,52 Q0,56 10,52" fill="none" stroke="#111" stroke-width="0.9"/>
        <text x="0" y="64" font-family="Caveat,cursive" font-size="8" fill="#777" text-anchor="middle">(${label})</text>
      </g>`;
    }

    // ── TRAINER ITEM SKETCHES ─────────────────────────────────
    function item_gong() {
      return `<g transform="translate(${cx},${H*0.52})">
        <rect x="-38" y="-48" width="76" height="8" rx="3" fill="none" stroke="#111" stroke-width="1.4"/>
        <rect x="-38" y="-44" width="8" height="80" rx="3" fill="none" stroke="#111" stroke-width="1.3"/>
        <rect x="30" y="-44" width="8" height="80" rx="3" fill="none" stroke="#111" stroke-width="1.3"/>
        <line x1="-34" y1="-20" x2="-34" y2="-10" stroke="#333" stroke-width="0.7"/>
        <line x1="34" y1="-20" x2="34" y2="-10" stroke="#333" stroke-width="0.7"/>
        <path d="M-42,36 Q-38,44 -30,44" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M42,36 Q38,44 30,44" fill="none" stroke="#111" stroke-width="1.3"/>
        <line x1="-16" y1="-40" x2="-20" y2="-10" stroke="#111" stroke-width="1"/>
        <line x1="16" y1="-40" x2="20" y2="-10" stroke="#111" stroke-width="1"/>
        <circle cx="0" cy="10" r="28" fill="none" stroke="#111" stroke-width="2"/>
        <circle cx="0" cy="10" r="22" fill="none" stroke="#333" stroke-width="0.8"/>
        <circle cx="0" cy="10" r="14" fill="none" stroke="#333" stroke-width="0.8"/>
        <circle cx="0" cy="10" r="7" fill="none" stroke="#333" stroke-width="0.8"/>
        <circle cx="0" cy="10" r="3" fill="#333"/>
        <line x1="26" y1="-14" x2="14" y2="4" stroke="#111" stroke-width="1.4"/>
        <ellipse cx="12" cy="6" rx="6" ry="5" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M-4,4 Q-8,2 -10,-2" fill="none" stroke="#333" stroke-width="0.8"/>
        <path d="M-6,14 Q-10,14 -12,10" fill="none" stroke="#333" stroke-width="0.8"/>
      </g>`;
    }

    function item_belt() {
      return `<g transform="translate(${cx},${H*0.5})">
        <path d="M-60,-12 Q-62,-4 -60,8 L-18,12 L-18,-12Z" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M60,-12 Q62,-4 60,8 L18,12 L18,-12Z" fill="none" stroke="#111" stroke-width="1.3"/>
        <rect x="-20" y="-22" width="40" height="44" rx="4" fill="none" stroke="#111" stroke-width="1.8"/>
        <rect x="-16" y="-18" width="32" height="36" rx="3" fill="none" stroke="#333" stroke-width="0.9"/>
        <polygon points="0,-14 3,-5 13,-5 5,2 8,12 0,6 -8,12 -5,2 -13,-5 -3,-5" fill="none" stroke="#111" stroke-width="1.3"/>
        <text x="0" y="26" font-family="Caveat,cursive" font-size="9" font-weight="700" fill="#111" text-anchor="middle">MAX</text>
        <line x1="-50" y1="-6" x2="-50" y2="2" stroke="#333" stroke-width="0.8"/>
        <line x1="-44" y1="-6" x2="-44" y2="2" stroke="#333" stroke-width="0.8"/>
        <line x1="-38" y1="-6" x2="-38" y2="2" stroke="#333" stroke-width="0.8"/>
        <line x1="50" y1="-6" x2="50" y2="2" stroke="#333" stroke-width="0.8"/>
        <line x1="44" y1="-6" x2="44" y2="2" stroke="#333" stroke-width="0.8"/>
        <line x1="38" y1="-6" x2="38" y2="2" stroke="#333" stroke-width="0.8"/>
        <rect x="-60" y="-6" width="12" height="12" rx="2" fill="none" stroke="#333" stroke-width="0.9"/>
        <rect x="48" y="-6" width="12" height="12" rx="2" fill="none" stroke="#333" stroke-width="0.9"/>
      </g>`;
    }

    function item_poffin() {
      return `<g transform="translate(${cx},${H*0.52})">
        <rect x="-32" y="8" width="64" height="36" rx="4" fill="none" stroke="#111" stroke-width="1.4"/>
        <rect x="-34" y="4" width="68" height="10" rx="3" fill="none" stroke="#111" stroke-width="1.3"/>
        <ellipse cx="-12" cy="28" rx="16" ry="12" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M-24,24 Q-18,10 -12,8 Q-6,10 0,24" fill="none" stroke="#111" stroke-width="1.1"/>
        <path d="M-18,22 Q-12,14 -6,22" fill="none" stroke="#333" stroke-width="0.8"/>
        <path d="M-16,12 Q-12,6 -8,12 Q-6,8 -4,12" fill="none" stroke="#333" stroke-width="0.9"/>
        <ellipse cx="14" cy="28" rx="14" ry="11" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M0,24 Q6,12 14,10 Q22,12 28,24" fill="none" stroke="#111" stroke-width="1.1"/>
        <path d="M4,22 Q14,14 24,22" fill="none" stroke="#333" stroke-width="0.8"/>
        <circle cx="-14" cy="26" r="1.5" fill="#333"/>
        <circle cx="-8" cy="30" r="1.5" fill="#333"/>
        <circle cx="-18" cy="32" r="1.5" fill="#333"/>
        <circle cx="12" cy="26" r="1.5" fill="#333"/>
        <circle cx="18" cy="30" r="1.5" fill="#333"/>
        <line x1="0" y1="4" x2="0" y2="44" stroke="#333" stroke-width="1"/>
        <line x1="-34" y1="14" x2="34" y2="14" stroke="#333" stroke-width="0.7"/>
        <path d="M-6,4 Q0,-4 6,4 Q2,8 0,6 Q-2,8 -6,4Z" fill="none" stroke="#333" stroke-width="0.9"/>
      </g>`;
    }

    function item_ball() {
      return `<g transform="translate(${cx},${H*0.52})">
        <circle cx="0" cy="4" r="28" fill="none" stroke="#111" stroke-width="1.5"/>
        <path d="M-28,4 Q-14,-8 0,-8 Q14,-8 28,4" fill="none" stroke="#111" stroke-width="1.2"/>
        <line x1="-28" y1="4" x2="28" y2="4" stroke="#111" stroke-width="1.3"/>
        <circle cx="0" cy="4" r="8" fill="none" stroke="#111" stroke-width="1.2"/>
        <circle cx="0" cy="4" r="3" fill="#111"/>
        <text x="0" y="44" font-family="Caveat,cursive" font-size="8" fill="#777" text-anchor="middle">(Poke Ball)</text>
      </g>`;
    }

    function item_generic_sketch(label) {
      return `<g transform="translate(${cx},${H*0.52})">
        <rect x="-22" y="-22" width="44" height="50" rx="5" fill="none" stroke="#111" stroke-width="1.4"/>
        <rect x="-8" y="-30" width="16" height="10" rx="3" fill="none" stroke="#111" stroke-width="1.2"/>
        <line x1="0" y1="-12" x2="0" y2="10" stroke="#111" stroke-width="2.2"/>
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#111" stroke-width="2.2"/>
        <circle cx="-8" cy="20" r="3" fill="none" stroke="#333" stroke-width="0.8"/>
        <circle cx="8" cy="20" r="3" fill="none" stroke="#333" stroke-width="0.8"/>
        <text x="0" y="40" font-family="Caveat,cursive" font-size="8" fill="#777" text-anchor="middle">(${label})</text>
      </g>`;
    }

    // ── SUPPORTER SKETCH ──────────────────────────────────────
    function sketch_supporter(label) {
      return `<g transform="translate(${cx},${H*0.54})">
        <ellipse cx="0" cy="-26" rx="13" ry="14" fill="none" stroke="#111" stroke-width="1.3"/>
        <circle cx="-4" cy="-28" r="2" fill="#111"/>
        <circle cx="4" cy="-28" r="2" fill="#111"/>
        <path d="M-4,-20 Q0,-16 4,-20" fill="none" stroke="#111" stroke-width="0.9"/>
        <path d="M-6,-36 Q-4,-44 0,-46 Q4,-44 6,-36" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M-16,-12 Q-18,8 -14,36" fill="none" stroke="#111" stroke-width="1.4"/>
        <path d="M16,-12 Q18,8 14,36" fill="none" stroke="#111" stroke-width="1.4"/>
        <path d="M-14,36 Q0,40 14,36" fill="none" stroke="#111" stroke-width="1.1"/>
        <path d="M-16,-4 Q-30,6 -26,24" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M-26,24 Q-28,30 -24,34" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M16,-4 Q30,6 26,24" fill="none" stroke="#111" stroke-width="1.2"/>
        <rect x="-46" y="-4" width="14" height="18" rx="2" fill="none" stroke="#111" stroke-width="1.1"/>
        <line x1="-39" y1="-4" x2="-39" y2="14" stroke="#333" stroke-width="0.7"/>
        <line x1="-44" y1="2" x2="-34" y2="2" stroke="#333" stroke-width="0.6"/>
        <line x1="-44" y1="6" x2="-34" y2="6" stroke="#333" stroke-width="0.6"/>
        <line x1="-8" y1="36" x2="-10" y2="58" stroke="#111" stroke-width="1.2"/>
        <line x1="8" y1="36" x2="10" y2="58" stroke="#111" stroke-width="1.2"/>
        <path d="M-14,58 Q0,62 14,58" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M26,-20 L28,-28 L30,-20 L22,-18 L30,-16 L28,-8 L26,-16 L18,-18Z" fill="none" stroke="#333" stroke-width="0.8"/>
        <text x="0" y="72" font-family="Caveat,cursive" font-size="8" fill="#777" text-anchor="middle">(${label})</text>
      </g>`;
    }

    // ── STADIUM SKETCH ────────────────────────────────────────
    function sketch_stadium() {
      return `<g transform="translate(${cx},${H*0.54})">
        <path d="M-55,40 L-30,-30 L0,-50 L30,-30 L55,40Z" fill="none" stroke="#333" stroke-width="0.9"/>
        <path d="M-8,-38 Q0,-52 8,-38 Q4,-34 0,-36 Q-4,-34 -8,-38Z" fill="none" stroke="#111" stroke-width="1.1"/>
        <ellipse cx="0" cy="24" rx="50" ry="18" fill="none" stroke="#111" stroke-width="1.6"/>
        <ellipse cx="0" cy="24" rx="36" ry="12" fill="none" stroke="#333" stroke-width="0.9"/>
        <line x1="-36" y1="24" x2="36" y2="24" stroke="#333" stroke-width="0.8"/>
        <ellipse cx="0" cy="24" rx="16" ry="8" fill="none" stroke="#333" stroke-width="0.8"/>
        <path d="M-50,6 L-50,24" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M-50,6 Q-42,-6 -30,-8" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M50,6 L50,24" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M50,6 Q42,-6 30,-8" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M-36,-14 Q-30,-20 -24,-14 Q-24,-8 -30,-6 Q-36,-8 -36,-14Z" fill="none" stroke="#111" stroke-width="1"/>
        <path d="M28,-18 Q34,-24 40,-16 Q40,-10 34,-8 Q28,-10 28,-18Z" fill="none" stroke="#111" stroke-width="1"/>
        <ellipse cx="-44" cy="-4" rx="5" ry="4" fill="none" stroke="#333" stroke-width="0.8"/>
        <ellipse cx="44" cy="-6" rx="4" ry="3" fill="none" stroke="#333" stroke-width="0.8"/>
        <path d="M-30,-4 L-30,2 L-32,0 M-30,2 L-28,0" fill="none" stroke="#444" stroke-width="0.8"/>
        <path d="M34,-6 L34,0 L32,-2 M34,0 L36,-2" fill="none" stroke="#444" stroke-width="0.8"/>
      </g>`;
    }

    // ── ENERGY SKETCHES ───────────────────────────────────────
    function energy_fighting() {
      return `<g transform="translate(${cx},${H*0.52})">
        <circle cx="0" cy="0" r="38" fill="none" stroke="#111" stroke-width="1.8"/>
        <circle cx="0" cy="0" r="30" fill="none" stroke="#222" stroke-width="1"/>
        <circle cx="0" cy="0" r="22" fill="none" stroke="#333" stroke-width="0.7"/>
        <path d="M-14,-18 Q-18,-8 -16,4 Q-12,12 -4,14 Q4,14 10,10 Q16,4 14,-4 Q10,-14 4,-18Z" fill="none" stroke="#111" stroke-width="1.5"/>
        <path d="M-10,-18 Q-8,-28 -4,-28 Q0,-28 0,-18" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M0,-18 Q2,-28 6,-28 Q10,-26 8,-18" fill="none" stroke="#111" stroke-width="1.3"/>
        <path d="M8,-18 Q12,-26 14,-22 Q16,-16 12,-12" fill="none" stroke="#111" stroke-width="1.2"/>
        <line x1="-8" y1="-12" x2="-6" y2="-8" stroke="#333" stroke-width="0.8"/>
        <line x1="0" y1="-12" x2="2" y2="-8" stroke="#333" stroke-width="0.8"/>
        <path d="M-14,-4 Q-22,-6 -22,2 Q-20,8 -14,6" fill="none" stroke="#111" stroke-width="1.2"/>
        <path d="M16,-22 L20,-28 L18,-22 L24,-20 L18,-18 L20,-12 L16,-18 L10,-16Z" fill="none" stroke="#333" stroke-width="0.9"/>
        <text x="0" y="50" font-family="Caveat,cursive" font-size="8" fill="#777" text-anchor="middle">(Fighting)</text>
      </g>`;
    }

    function energy_special() {
      return `<g transform="translate(${cx},${H*0.52})">
        <circle cx="0" cy="0" r="38" fill="none" stroke="#111" stroke-width="1.8"/>
        <circle cx="0" cy="0" r="30" fill="none" stroke="#222" stroke-width="1"/>
        <path d="M0,-28 L24,-8 L14,22 L-14,22 L-24,-8Z" fill="none" stroke="#111" stroke-width="1.6"/>
        <path d="M0,-28 L0,22" fill="none" stroke="#333" stroke-width="0.8"/>
        <path d="M-24,-8 L14,22" fill="none" stroke="#333" stroke-width="0.8"/>
        <path d="M24,-8 L-14,22" fill="none" stroke="#333" stroke-width="0.8"/>
        <path d="M-24,-8 L24,-8" fill="none" stroke="#333" stroke-width="0.8"/>
        <path d="M-16,-18 L16,-18 L24,-8" fill="none" stroke="#333" stroke-width="0.7"/>
        <path d="M-16,-18 L-24,-8" fill="none" stroke="#333" stroke-width="0.7"/>
        <path d="M0,-36 L2,-30 L6,-28 L2,-26 L0,-20" fill="none" stroke="#222" stroke-width="1"/>
        <path d="M28,28 L30,22 L32,28 L26,30 L32,32 L30,38 L28,32 L22,30Z" fill="none" stroke="#333" stroke-width="0.8"/>
        <text x="0" y="50" font-family="Caveat,cursive" font-size="8" fill="#777" text-anchor="middle">(Special ★)</text>
      </g>`;
    }

    function energy_basic(type) {
      const syms = { Fire:'🔥', Water:'💧', Grass:'🌿', Lightning:'⚡', Psychic:'🔮', Darkness:'🌑', Metal:'⚙', Dragon:'🐉', Fairy:'✨', Colorless:'◇' };
      return `<g transform="translate(${cx},${H*0.52})">
        <circle cx="0" cy="0" r="38" fill="none" stroke="#111" stroke-width="1.8"/>
        <circle cx="0" cy="0" r="28" fill="none" stroke="#222" stroke-width="1"/>
        <text x="0" y="12" font-family="Caveat,cursive" font-size="28" text-anchor="middle" fill="#111">${syms[type] || '◆'}</text>
        <text x="0" y="50" font-family="Caveat,cursive" font-size="8" fill="#777" text-anchor="middle">(${type || 'Basic'} Energy)</text>
      </g>`;
    }

    // ── PICK THE RIGHT SKETCH ─────────────────────────────────
    let sketchSVG = '';
    let footLeft = '';
    let footRight = `${setCode} ${number}`;

    if (supertype === 'Pokémon') {
      footLeft = `Weak: ${card.weaknesses ? card.weaknesses[0].type : '?'}`;
      if (lname.includes('lucario')) sketchSVG = pokemon_lucario();
      else if (lname.includes('chien') || lname.includes('pao')) sketchSVG = pokemon_chienpao();
      else if (lname.includes('riolu')) sketchSVG = pokemon_riolu();
      else sketchSVG = pokemon_generic(name.split(' ')[0]);
    } else if (supertype === 'Trainer') {
      footLeft = `[${subtype || 'Trainer'}]`;
      const sub = subtype.toLowerCase();
      if (sub === 'stadium') sketchSVG = sketch_stadium();
      else if (sub === 'supporter') sketchSVG = sketch_supporter(name.split(' ')[0]);
      else if (lname.includes('gong')) sketchSVG = item_gong();
      else if (lname.includes('belt') || lname.includes('band')) sketchSVG = item_belt();
      else if (lname.includes('poffin')) sketchSVG = item_poffin();
      else if (lname.includes('ball')) sketchSVG = item_ball();
      else sketchSVG = item_generic_sketch(subtype || 'Item');
    } else {
      footLeft = `[${subtype || 'Basic'} Energy]`;
      if (subtype === 'Special' || lname.includes('rocky') || lname.includes('rainbow') || lname.includes('double')) {
        sketchSVG = energy_special();
      } else if (lname.includes('fight') || subtype === 'Fighting') {
        sketchSVG = energy_fighting();
      } else {
        sketchSVG = energy_basic(subtype || name.replace(' Energy', ''));
      }
    }

    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <style>@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&amp;display=swap');</style>
      <rect x="1" y="1" width="${W-2}" height="${H-2}" rx="9" fill="#fefefe" stroke="#111" stroke-width="1.8"/>
      <rect x="5" y="5" width="${W-10}" height="${H-10}" rx="6" fill="none" stroke="#444" stroke-width="0.5"/>
      <text x="9" y="18" font-family="Caveat,cursive" font-size="12" font-weight="700" fill="#111">${shortName}</text>
      <text x="${W-9}" y="18" font-family="Caveat,cursive" font-size="10" fill="#333" text-anchor="end">${rightText}</text>
      <line x1="7" y1="23" x2="${W-7}" y2="23" stroke="#222" stroke-width="0.9"/>
      ${subLine ? `<text x="9" y="32" font-family="Caveat,cursive" font-size="9" fill="#666">${subLine}</text>` : ''}
      ${sketchSVG}
      <line x1="7" y1="${H-36}" x2="${W-7}" y2="${H-36}" stroke="#444" stroke-width="0.6" stroke-dasharray="3,2"/>
      <text x="9" y="${H-22}" font-family="Caveat,cursive" font-size="9" fill="#555">${footLeft}</text>
      <text x="${W-9}" y="${H-10}" font-family="Caveat,cursive" font-size="8" fill="#999" text-anchor="end">${footRight}</text>
    </svg>`;
  }

  // =====================
  // CARD SEARCH
  // =====================
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const cardGrid = document.getElementById('cardGrid');

  searchBtn.addEventListener('click', () => searchCards());
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchCards();
  });

  const standardSets = ['TEF','TWM','SFA','SCR','SSP','PRE','JTG','DRI','MEG','CRI'];

  async function searchCards() {
    const query = searchInput.value.trim();
    const format = document.getElementById('formatFilter').value;
    if (!query) {
      cardGrid.innerHTML = '<p style="color:#7A9BB5;padding:16px">Please enter a card name.</p>';
      return;
    }
    cardGrid.innerHTML = '<p style="color:#7A9BB5;padding:16px">Searching cards...</p>';
    try {
      const url = `https://api.pokemontcg.io/v2/cards?q=name:${query}*&pageSize=60&orderBy=-set.releaseDate`;
      const response = await fetch(url, { headers: { 'X-Api-Key': API_KEY } });
      const data = await response.json();
      let cards = data.data;
      if (!cards || cards.length === 0) {
        cardGrid.innerHTML = '<p style="color:#7A9BB5;padding:16px">No cards found. Try another name.</p>';
        return;
      }
      if (format === 'standard') {
        cards = cards.filter(card => standardSets.includes(card.set?.ptcgoCode));
        if (cards.length === 0) {
          cardGrid.innerHTML = '<p style="color:#7A9BB5;padding:16px">No Standard legal cards found. Try "All Sets".</p>';
          return;
        }
      }
      renderCards(cards);
    } catch (error) {
      cardGrid.innerHTML = `<p style="color:#E63946;padding:16px">Error: ${error.message}</p>`;
    }
  }

  function renderCards(cards) {
    cardGrid.innerHTML = '';
    cards.forEach(card => {
      const image = card.images?.small || '';
      const hp = card.hp ? `HP: ${card.hp}` : card.supertype;
      const cardEl = document.createElement('div');
      cardEl.className = 'card-item';
      cardEl.innerHTML = `
        <img src="${image}" alt="${card.name}" loading="lazy">
        <div class="card-name">${card.name}</div>
        <div class="card-hp">${hp}</div>
        <button class="add-btn">+ Add to Deck</button>
      `;
      cardEl.querySelector('.add-btn').addEventListener('click', () => addToDeck(card));
      cardGrid.appendChild(cardEl);
    });
  }

  // DECK BUILDER

  let deck = [];

  function addToDeck(card) {
    if (deck.reduce((sum, c) => sum + c.quantity, 0) >= 60) {
      alert('Your deck already has 60 cards!');
      return;
    }
    const existing = deck.find(c => c.id === card.id);
    const isBasicEnergy = card.supertype === 'Energy' && card.subtypes?.includes('Basic');
    if (existing) {
      if (!isBasicEnergy && existing.quantity >= 4) {
        alert(`You can only have 4 copies of ${card.name}!`);
        return;
      }
      existing.quantity++;
    } else {
      deck.push({ ...card, quantity: 1 });
    }
    renderDeck();
    updateDeckStats();
  }

  function removeFromDeck(cardId) {
    const existing = deck.find(c => c.id === cardId);
    if (!existing) return;
    if (existing.quantity > 1) existing.quantity--;
    else deck = deck.filter(c => c.id !== cardId);
    renderDeck();
    updateDeckStats();
  }

  function removeFully(cardId) {
    deck = deck.filter(c => c.id !== cardId);
    renderDeck();
    updateDeckStats();
  }

  window.removeFromDeck = removeFromDeck;
  window.removeFully = removeFully;
  window.addToDeckById = function(cardId) {
    const card = deck.find(c => c.id === cardId);
    if (card) addToDeck(card);
  };

  function getCardImage(card) {
    if (card.images?.small) return `<img src="${card.images.small}" alt="${card.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><div style="display:none;width:40px;height:56px;flex-shrink:0">${generateSketchCard(card, 40, 56)}</div>`;
    return `<div style="width:40px;height:56px;flex-shrink:0">${generateSketchCard(card, 40, 56)}</div>`;
  }

  function renderDeck() {
    const deckList = document.getElementById('deckList');
    if (deck.length === 0) {
      deckList.innerHTML = '<p style="color:#7A9BB5;text-align:center;padding:32px">Your deck is empty. Search for cards and add them!</p>';
      return;
    }
    const order = ['Pokémon', 'Trainer', 'Energy'];
    const sorted = [...deck].sort((a, b) => order.indexOf(a.supertype) - order.indexOf(b.supertype));
    deckList.innerHTML = sorted.map(card => `
      <div class="deck-card-row">
        ${getCardImage(card)}
        <div class="deck-card-name">${card.name}</div>
        <div class="deck-card-type">${card.supertype}</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="removeFromDeck('${card.id}')">−</button>
          <span class="qty-number">${card.quantity}</span>
          <button class="qty-btn" onclick="addToDeckById('${card.id}')">+</button>
        </div>
        <button class="remove-btn" onclick="removeFully('${card.id}')">✕</button>
      </div>
    `).join('');
  }

  function updateDeckStats() {
    const total = deck.reduce((sum, c) => sum + c.quantity, 0);
    const pokemon = deck.filter(c => c.supertype === 'Pokémon').reduce((sum, c) => sum + c.quantity, 0);
    const trainers = deck.filter(c => c.supertype === 'Trainer').reduce((sum, c) => sum + c.quantity, 0);
    const energy = deck.filter(c => c.supertype === 'Energy').reduce((sum, c) => sum + c.quantity, 0);
    document.getElementById('cardCount').textContent = total;
    document.getElementById('pokemonCount').textContent = pokemon;
    document.getElementById('trainerCount').textContent = trainers;
    document.getElementById('energyCount').textContent = energy;
    const countEl = document.getElementById('cardCount');
    countEl.style.color = total === 60 ? '#00C9A7' : total > 60 ? '#E63946' : '#FFD600';
  }


  // DECK IMPORT

  const importBtn = document.getElementById('importBtn');
  const clearDeckBtn = document.getElementById('clearDeckBtn');

  importBtn.addEventListener('click', () => importDeck());
  clearDeckBtn.addEventListener('click', () => {
    deck = [];
    renderDeck();
    updateDeckStats();
    document.getElementById('deckImport').value = '';
  });

  function guessType(name) {
    const n = name.toLowerCase();
    if (n.includes('energy')) return 'Energy';
    const trainerWords = ['professor','research','ball','potion','catcher','switch','nest','ultra','boss','arven','iono','hilda','lillie','belt','pad','gong','balloon','poffin','petrel','mountain','card','power','gravity','determination','premium','poké','special','rocket','team','air','buddy','maximum','orders','pal','great','quick','level'];
    if (trainerWords.some(w => n.includes(w))) return 'Trainer';
    return 'Pokémon';
  }

  function cleanCardName(rawName) {
    return rawName.replace(/\{[A-Z]\}/g, '').replace(/Basic\s+/gi, '').replace(/\s+/g, ' ').trim();
  }

  function isSkipLine(line) {
    if (/^(Pokémon|Pokemon|Trainer|Energy|Trainers):\s*\d+$/i.test(line)) return true;
    if (/^Total\s+Cards?:\s*\d+$/i.test(line)) return true;
    if (line.trim() === '') return true;
    return false;
  }

  async function importDeck() {
    const text = document.getElementById('deckImport').value.trim();
    if (!text) { alert('Please paste a decklist first!'); return; }
    const lines = text.split('\n').map(l => l.trim());
    const cardLines = lines.filter(line => {
      if (isSkipLine(line)) return false;
      return /^\d+\s+\S/.test(line);
    });
    if (cardLines.length === 0) {
      alert('No valid cards found. Make sure you copied the full decklist from Pokémon TCG Live.');
      return;
    }
    importBtn.textContent = '⏳ Importing...';
    importBtn.disabled = true;
    deck = [];
    let imported = 0, withImage = 0, withSketch = 0;

    for (const line of cardLines) {
      const match = line.match(/^(\d+)\s+(.+?)\s+([A-Z]{2,4})\s+(\d+[a-z]?)$/);
      if (!match) {
        const simpleMatch = line.match(/^(\d+)\s+(.+)$/);
        if (simpleMatch) {
          const quantity = parseInt(simpleMatch[1]);
          const name = cleanCardName(simpleMatch[2]);
          if (name) {
            deck.push({ id: `manual-${name}-${Date.now()}-${Math.random()}`, name, supertype: guessType(name), subtypes: [], quantity, images: { small: '' } });
            imported += quantity;
            withSketch += quantity;
          }
        }
        continue;
      }
      const quantity = parseInt(match[1]);
      const cardName = cleanCardName(match[2].trim());
      const setCode = match[3];
      const cardNumber = match[4];
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        const response = await fetch(
          `https://api.pokemontcg.io/v2/cards?q=name:${cardName}*&pageSize=10`,
          { headers: { 'X-Api-Key': API_KEY }, signal: controller.signal }
        );
        clearTimeout(timeoutId);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          const exactMatch = data.data.find(c => c.set?.ptcgoCode === setCode && c.number === cardNumber);
          const setMatch = data.data.find(c => c.set?.ptcgoCode === setCode);
          const bestCard = exactMatch || setMatch || data.data[0];
          const existing = deck.find(c => c.id === bestCard.id);
          if (existing) existing.quantity += quantity;
          else deck.push({ ...bestCard, quantity });
          imported += quantity;
          withImage += quantity;
        } else {
          deck.push({ id: `sketch-${cardName}-${setCode}-${cardNumber}`, name: cardName, supertype: guessType(cardName), subtypes: [guessType(cardName) === 'Trainer' ? 'Item' : ''], set: { ptcgoCode: setCode }, number: cardNumber, quantity, images: { small: '' } });
          imported += quantity;
          withSketch += quantity;
        }
      } catch (e) {
        deck.push({ id: `sketch-${cardName}-${setCode}-${cardNumber}-${Date.now()}`, name: cardName, supertype: guessType(cardName), subtypes: [guessType(cardName) === 'Trainer' ? 'Item' : ''], set: { ptcgoCode: setCode }, number: cardNumber, quantity, images: { small: '' } });
        imported += quantity;
        withSketch += quantity;
      }
    }
    renderDeck();
    updateDeckStats();
    importBtn.textContent = '⚡ Import Deck';
    importBtn.disabled = false;
    const total = deck.reduce((sum, c) => sum + c.quantity, 0);
    alert(`✅ Import complete!\n\n📦 ${total}/60 cards loaded\n🖼️ ${withImage} cards with real image\n✏️ ${withSketch} cards with sketch`);
  }


  // HAND SIMULATOR

  const drawBtn = document.getElementById('drawBtn');
  const handDisplay = document.getElementById('handDisplay');

  drawBtn.addEventListener('click', () => drawOpeningHand());

  function drawOpeningHand() {
    if (deck.length === 0) {
      handDisplay.innerHTML = '<p style="color:#E63946;padding:16px">Your deck is empty! Add cards in Deck Builder first.</p>';
      return;
    }
    const totalCards = deck.reduce((sum, c) => sum + c.quantity, 0);
    if (totalCards < 7) {
      handDisplay.innerHTML = `<p style="color:#E63946;padding:16px">You need at least 7 cards. You have ${totalCards}.</p>`;
      return;
    }
    let fullDeck = [];
    deck.forEach(card => { for (let i = 0; i < card.quantity; i++) fullDeck.push(card); });
    for (let i = fullDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fullDeck[i], fullDeck[j]] = [fullDeck[j], fullDeck[i]];
    }
    const hand = fullDeck.slice(0, 7);
    const hasBasic = hand.some(c => c.supertype === 'Pokémon' && c.subtypes?.includes('Basic'));
    handDisplay.innerHTML = '';
    if (!hasBasic) {
      handDisplay.innerHTML = `<div style="width:100%;margin-bottom:16px;padding:12px 16px;background:rgba(230,57,70,0.1);border:1px solid #E63946;border-radius:8px;color:#ff6b74;font-size:13px;">⚠️ <strong>Mulligan!</strong> No Basic Pokémon in hand. You would redraw in a real game.</div>`;
    }
    hand.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'hand-card';
      cardEl.style.animationDelay = `${index * 0.08}s`;
      const isBasic = card.supertype === 'Pokémon' && card.subtypes?.includes('Basic');
      if (card.images?.small) {
        cardEl.innerHTML = `<img src="${card.images.small}" alt="${card.name}" loading="lazy" onerror="this.outerHTML='<div style=width:100%;height:100px>${generateSketchCard(card,110,154)}</div>'">\n<div class="hand-card-name">${card.name}</div>${isBasic ? '<div style="font-size:10px;color:#00C9A7;margin-top:3px">✓ Basic</div>' : ''}`;
      } else {
        cardEl.innerHTML = `<div style="width:100%;height:100px">${generateSketchCard(card, 110, 154)}</div><div class="hand-card-name">${card.name}</div>${isBasic ? '<div style="font-size:10px;color:#00C9A7;margin-top:3px">✓ Basic</div>' : ''}`;
      }
      handDisplay.appendChild(cardEl);
    });
    const basics = hand.filter(c => c.supertype === 'Pokémon' && c.subtypes?.includes('Basic')).length;
    const trainers = hand.filter(c => c.supertype === 'Trainer').length;
    const energies = hand.filter(c => c.supertype === 'Energy').length;
    const statsEl = document.createElement('div');
    statsEl.style.cssText = 'width:100%;margin-top:20px;display:flex;gap:12px;flex-wrap:wrap;';
    statsEl.innerHTML = `
      <div style="background:#162233;border:1px solid #1E3A50;border-radius:8px;padding:12px 20px;text-align:center;min-width:80px"><div style="font-size:22px;font-weight:700;color:#00C9A7">${basics}</div><div style="font-size:11px;color:#7A9BB5;text-transform:uppercase;letter-spacing:1px">Basic Pokémon</div></div>
      <div style="background:#162233;border:1px solid #1E3A50;border-radius:8px;padding:12px 20px;text-align:center;min-width:80px"><div style="font-size:22px;font-weight:700;color:#FFD600">${trainers}</div><div style="font-size:11px;color:#7A9BB5;text-transform:uppercase;letter-spacing:1px">Trainers</div></div>
      <div style="background:#162233;border:1px solid #1E3A50;border-radius:8px;padding:12px 20px;text-align:center;min-width:80px"><div style="font-size:22px;font-weight:700;color:#E63946">${energies}</div><div style="font-size:11px;color:#7A9BB5;text-transform:uppercase;letter-spacing:1px">Energies</div></div>
      <div style="background:#162233;border:1px solid #1E3A50;border-radius:8px;padding:12px 20px;text-align:center;min-width:80px"><div style="font-size:22px;font-weight:700;color:#F0F4FF">${hasBasic ? '✓ Ready' : '✗ Mulligan'}</div><div style="font-size:11px;color:#7A9BB5;text-transform:uppercase;letter-spacing:1px">Hand Status</div></div>
    `;
    handDisplay.appendChild(statsEl);
  }

  // DAMAGE CALCULATOR

  const calcBtn = document.getElementById('calcBtn');
  calcBtn.addEventListener('click', () => calculateDamage());

  function calculateDamage() {
    const base = parseInt(document.getElementById('baseDmg').value) || 0;
    const coin = parseInt(document.getElementById('coinBonus').value) || 0;
    const extra = parseInt(document.getElementById('extraDmg').value) || 0;
    const opponentHp = parseInt(document.getElementById('opponentHp').value) || 0;
    const weaknessVal = parseFloat(document.getElementById('weakness').value);
    const resistanceVal = parseInt(document.getElementById('resistance').value) || 0;
    let total = base + coin + extra;
    if (weaknessVal === 2 || weaknessVal === 1.5) total = Math.floor(total * weaknessVal);
    else if (weaknessVal === 30) total = total + 30;
    total = Math.max(0, total - resistanceVal);
    const resultEl = document.getElementById('damageResult');
    const numberEl = document.getElementById('damageNumber');
    const knockoutEl = document.getElementById('knockoutMsg');
    const tagsEl = document.getElementById('damageTags');
    numberEl.textContent = total;
    resultEl.style.display = 'block';
    if (opponentHp > 0 && total >= opponentHp) knockoutEl.innerHTML = '💥 <span style="color:#00C9A7;font-size:18px;font-weight:700">KNOCK OUT!</span>';
    else if (opponentHp > 0) knockoutEl.innerHTML = `<span style="color:#7A9BB5">${opponentHp - total} HP remaining — not a KO</span>`;
    else knockoutEl.innerHTML = '';
    let tags = '';
    if (weaknessVal === 2)   tags += '<span style="background:rgba(230,57,70,0.15);color:#ff6b74;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">×2 Weakness</span>';
    if (weaknessVal === 1.5) tags += '<span style="background:rgba(230,57,70,0.15);color:#ff6b74;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">×1.5 Weakness</span>';
    if (weaknessVal === 30)  tags += '<span style="background:rgba(230,57,70,0.15);color:#ff6b74;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">+30 Weakness</span>';
    if (resistanceVal > 0)   tags += `<span style="background:rgba(0,201,167,0.15);color:#00C9A7;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">-${resistanceVal} Resistance</span>`;
    if (coin > 0)            tags += `<span style="background:rgba(255,214,0,0.15);color:#FFD600;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">+${coin} Coin Flip</span>`;
    if (extra > 0)           tags += `<span style="background:rgba(255,214,0,0.15);color:#FFD600;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">+${extra} Tool/Stadium</span>`;
    tagsEl.innerHTML = tags;
  }

  renderDeck();

}); // closes DOMContentLoaded