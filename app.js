
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


  // CARD SEARCH

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

      const response = await fetch(url, {
        headers: { 'X-Api-Key': API_KEY }
      });

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
      console.error(error);
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
      cardEl.querySelector('.add-btn').addEventListener('click', () => {
        addToDeck(card);
      });
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
    if (existing.quantity > 1) {
      existing.quantity--;
    } else {
      deck = deck.filter(c => c.id !== cardId);
    }
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

  function renderDeck() {
    const deckList = document.getElementById('deckList');
    if (deck.length === 0) {
      deckList.innerHTML = '<p style="color:#7A9BB5;text-align:center;padding:32px">Your deck is empty. Search for cards and add them!</p>';
      return;
    }
    const order = ['Pokémon', 'Trainer', 'Energy'];
    const sorted = [...deck].sort((a, b) =>
      order.indexOf(a.supertype) - order.indexOf(b.supertype)
    );
    deckList.innerHTML = sorted.map(card => `
      <div class="deck-card-row">
        ${card.images?.small
          ? `<img src="${card.images.small}" alt="${card.name}">`
          : `<div style="width:40px;height:56px;background:#0D1B2A;border-radius:4px;border:1px solid #1E3A50;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:9px;color:#7A9BB5;text-align:center;padding:2px">?</div>`
        }
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

  // Guess card type from name when API doesn't find it
  function guessType(name) {
    const cleanName = name.toLowerCase();

    // Energy keywords
    const energyWords = ['energy'];
    if (energyWords.some(w => cleanName.includes(w))) return 'Energy';

    // Trainer keywords
    const trainerWords = [
      'professor', 'research', 'ball', 'potion', 'catcher', 'switch',
      'nest', 'ultra', 'boss', 'arven', 'iono', 'hilda', 'lillie',
      'belt', 'pad', 'gong', 'balloon', 'poffin', 'petrel', 'mountain',
      'card', 'power', 'gravity', 'determination', 'premium', 'poké',
      'special', 'rocket', 'team', 'air', 'buddy', 'maximum', 'orders'
    ];
    if (trainerWords.some(w => cleanName.includes(w))) return 'Trainer';

    // Default to Pokémon
    return 'Pokémon';
  }

  // Clean card name from TCG Live export format
  function cleanCardName(rawName) {
    return rawName
      .replace(/\{[A-Z]\}/g, '')     // remove energy symbols: {F}, {W}, {R}, {L}, {P}, {C}, {D}, {M}, {G}
      .replace(/Basic\s+/gi, '')     // remove "Basic " prefix from energy names
      .replace(/\s+/g, ' ')          // collapse multiple spaces
      .trim();
  }

  // Check if line is a header/footer line to skip
  function isSkipLine(line) {
    // Skip category headers: "Pokémon: 10", "Trainer: 14", "Energy: 2"
    if (/^(Pokémon|Pokemon|Trainer|Energy|Trainers):\s*\d+$/i.test(line)) return true;
    // Skip total line: "Total Cards: 60"
    if (/^Total\s+Cards?:\s*\d+$/i.test(line)) return true;
    // Skip empty lines
    if (line.trim() === '') return true;
    return false;
  }

  async function importDeck() {
    const text = document.getElementById('deckImport').value.trim();

    if (!text) {
      alert('Please paste a decklist first!');
      return;
    }

    const lines = text.split('\n').map(l => l.trim());

    // Filter: only lines that start with a number AND are not headers
    const cardLines = lines.filter(line => {
      if (isSkipLine(line)) return false;
      return /^\d+\s+\S/.test(line); // starts with number + space + non-space
    });

    if (cardLines.length === 0) {
      alert('No valid cards found. Make sure you copied the full decklist from Pokémon TCG Live.');
      return;
    }

    // Show loading
    importBtn.textContent = '⏳ Importing...';
    importBtn.disabled = true;

    deck = [];
    let imported = 0;
    let withImage = 0;
    let withoutImage = 0;

    for (const line of cardLines) {
      // Parse format: "4 Dragapult ex TWM 130"
      // Also handles: "9 Basic {F} Energy GEN 80" and "1 Rocky {F} Energy POR 87"
      const match = line.match(/^(\d+)\s+(.+?)\s+([A-Z]{2,4})\s+(\d+[a-z]?)$/);

      if (!match) {
        // Fallback: simple format without set code "4 Fire Energy"
        const simpleMatch = line.match(/^(\d+)\s+(.+)$/);
        if (simpleMatch) {
          const quantity = parseInt(simpleMatch[1]);
          const name = cleanCardName(simpleMatch[2]);
          if (name) {
            deck.push({
              id: `manual-${name}-${Date.now()}-${Math.random()}`,
              name: name,
              supertype: guessType(name),
              quantity: quantity,
              images: { small: '' }
            });
            imported += quantity;
            withoutImage += quantity;
          }
        }
        continue;
      }

      const quantity = parseInt(match[1]);
      const rawName = match[2].trim();
      const setCode = match[3];
      const cardNumber = match[4];
      const cardName = cleanCardName(rawName);

      try {
        // Timeout: 5 seconds per card
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(
          `https://api.pokemontcg.io/v2/cards?q=name:"${cardName}"&pageSize=10`,
          {
            headers: { 'X-Api-Key': API_KEY },
            signal: controller.signal
          }
        );

        clearTimeout(timeoutId);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
          // Priority: exact set + number match → same set → first result
          const exactMatch = data.data.find(c =>
            c.set?.ptcgoCode === setCode && c.number === cardNumber
          );
          const setMatch = data.data.find(c => c.set?.ptcgoCode === setCode);
          const bestCard = exactMatch || setMatch || data.data[0];

          const existing = deck.find(c => c.id === bestCard.id);
          if (existing) {
            existing.quantity += quantity;
          } else {
            deck.push({ ...bestCard, quantity });
          }
          imported += quantity;
          withImage += quantity;

        } else {
          // Not found in API — add without image
          deck.push({
            id: `manual-${cardName}-${setCode}-${cardNumber}`,
            name: cardName,
            supertype: guessType(cardName),
            quantity: quantity,
            images: { small: '' }
          });
          imported += quantity;
          withoutImage += quantity;
        }

      } catch (e) {
        // Timeout or network error — add without image
        deck.push({
          id: `manual-${cardName}-${setCode}-${cardNumber}-${Date.now()}`,
          name: cardName,
          supertype: guessType(cardName),
          quantity: quantity,
          images: { small: '' }
        });
        imported += quantity;
        withoutImage += quantity;
      }
    }

    renderDeck();
    updateDeckStats();

    importBtn.textContent = '⚡ Import Deck';
    importBtn.disabled = false;

    // Success message
    const total = deck.reduce((sum, c) => sum + c.quantity, 0);
    let msg = `✅ Import complete!\n\n`;
    msg += `📦 ${total}/60 cards loaded\n`;
    msg += `🖼️ ${withImage} cards with image\n`;
    if (withoutImage > 0) {
      msg += `❓ ${withoutImage} cards added without image (not found in API)`;
    }
    alert(msg);
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

    // Build full deck array with duplicates
    let fullDeck = [];
    deck.forEach(card => {
      for (let i = 0; i < card.quantity; i++) fullDeck.push(card);
    });

    // Fisher-Yates shuffle
    for (let i = fullDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fullDeck[i], fullDeck[j]] = [fullDeck[j], fullDeck[i]];
    }

    const hand = fullDeck.slice(0, 7);
    const hasBasic = hand.some(c =>
      c.supertype === 'Pokémon' && c.subtypes?.includes('Basic')
    );

    handDisplay.innerHTML = '';

    // Mulligan warning
    if (!hasBasic) {
      handDisplay.innerHTML = `
        <div style="width:100%;margin-bottom:16px;padding:12px 16px;background:rgba(230,57,70,0.1);border:1px solid #E63946;border-radius:8px;color:#ff6b74;font-size:13px;">
          ⚠️ <strong>Mulligan!</strong> No Basic Pokémon in hand. You would redraw in a real game.
        </div>
      `;
    }

    // Render each card
    hand.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'hand-card';
      cardEl.style.animationDelay = `${index * 0.08}s`;
      const isBasic = card.supertype === 'Pokémon' && card.subtypes?.includes('Basic');

      cardEl.innerHTML = `
        ${card.images?.small
          ? `<img src="${card.images.small}" alt="${card.name}">`
          : `<div style="width:100%;height:80px;background:#0D1B2A;border-radius:6px;margin-bottom:6px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#7A9BB5;border:1px solid #1E3A50;padding:4px;text-align:center">${card.name}</div>`
        }
        <div class="hand-card-name">${card.name}</div>
        ${isBasic ? '<div style="font-size:10px;color:#00C9A7;margin-top:3px">✓ Basic</div>' : ''}
      `;
      handDisplay.appendChild(cardEl);
    });

    // Hand stats
    const basics = hand.filter(c => c.supertype === 'Pokémon' && c.subtypes?.includes('Basic')).length;
    const trainers = hand.filter(c => c.supertype === 'Trainer').length;
    const energies = hand.filter(c => c.supertype === 'Energy').length;

    const statsEl = document.createElement('div');
    statsEl.style.cssText = 'width:100%;margin-top:20px;display:flex;gap:12px;flex-wrap:wrap;';
    statsEl.innerHTML = `
      <div style="background:#162233;border:1px solid #1E3A50;border-radius:8px;padding:12px 20px;text-align:center;min-width:80px">
        <div style="font-size:22px;font-weight:700;color:#00C9A7">${basics}</div>
        <div style="font-size:11px;color:#7A9BB5;text-transform:uppercase;letter-spacing:1px">Basic Pokémon</div>
      </div>
      <div style="background:#162233;border:1px solid #1E3A50;border-radius:8px;padding:12px 20px;text-align:center;min-width:80px">
        <div style="font-size:22px;font-weight:700;color:#FFD600">${trainers}</div>
        <div style="font-size:11px;color:#7A9BB5;text-transform:uppercase;letter-spacing:1px">Trainers</div>
      </div>
      <div style="background:#162233;border:1px solid #1E3A50;border-radius:8px;padding:12px 20px;text-align:center;min-width:80px">
        <div style="font-size:22px;font-weight:700;color:#E63946">${energies}</div>
        <div style="font-size:11px;color:#7A9BB5;text-transform:uppercase;letter-spacing:1px">Energies</div>
      </div>
      <div style="background:#162233;border:1px solid #1E3A50;border-radius:8px;padding:12px 20px;text-align:center;min-width:80px">
        <div style="font-size:22px;font-weight:700;color:#F0F4FF">${hasBasic ? '✓ Ready' : '✗ Mulligan'}</div>
        <div style="font-size:11px;color:#7A9BB5;text-transform:uppercase;letter-spacing:1px">Hand Status</div>
      </div>
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

    if (weaknessVal === 2 || weaknessVal === 1.5) {
      total = Math.floor(total * weaknessVal);
    } else if (weaknessVal === 30) {
      total = total + 30;
    }

    total = Math.max(0, total - resistanceVal);

    const resultEl = document.getElementById('damageResult');
    const numberEl = document.getElementById('damageNumber');
    const knockoutEl = document.getElementById('knockoutMsg');
    const tagsEl = document.getElementById('damageTags');

    numberEl.textContent = total;
    resultEl.style.display = 'block';

    if (opponentHp > 0 && total >= opponentHp) {
      knockoutEl.innerHTML = '💥 <span style="color:#00C9A7;font-size:18px;font-weight:700">KNOCK OUT!</span>';
    } else if (opponentHp > 0) {
      const remaining = opponentHp - total;
      knockoutEl.innerHTML = `<span style="color:#7A9BB5">${remaining} HP remaining — not a KO</span>`;
    } else {
      knockoutEl.innerHTML = '';
    }

    let tags = '';
    if (weaknessVal === 2)   tags += '<span style="background:rgba(230,57,70,0.15);color:#ff6b74;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">×2 Weakness</span>';
    if (weaknessVal === 1.5) tags += '<span style="background:rgba(230,57,70,0.15);color:#ff6b74;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">×1.5 Weakness</span>';
    if (weaknessVal === 30)  tags += '<span style="background:rgba(230,57,70,0.15);color:#ff6b74;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">+30 Weakness</span>';
    if (resistanceVal > 0)   tags += `<span style="background:rgba(0,201,167,0.15);color:#00C9A7;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">-${resistanceVal} Resistance</span>`;
    if (coin > 0)            tags += `<span style="background:rgba(255,214,0,0.15);color:#FFD600;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">+${coin} Coin Flip</span>`;
    if (extra > 0)           tags += `<span style="background:rgba(255,214,0,0.15);color:#FFD600;padding:4px 10px;border-radius:4px;font-size:12px;margin:2px">+${extra} Tool/Stadium</span>`;
    tagsEl.innerHTML = tags;
  }

  // Init
  renderDeck();

}); // closes DOMContentLoaded