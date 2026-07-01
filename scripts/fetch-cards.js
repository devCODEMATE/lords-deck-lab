#!/usr/bin/env node
/**
 * scripts/fetch-cards.js
 * Fetches all Standard-legal Pokémon TCG cards (regulationMark H, I, J)
 * from api.pokemontcg.io and caches them locally as data/standard-cards.json
 *
 * Usage: node scripts/fetch-cards.js
 * Env:   POKEMONTCG_API_KEY (optional but recommended - higher rate limits)
 */

const fs = require('fs');
const path = require('path');

const API_BASE = 'https://api.pokemontcg.io/v2/cards';
const REGULATION_MARKS = ['H', 'I', 'J'];
const PAGE_SIZE = 250;
const MAX_RETRIES = 5;
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'standard-cards.json');
const MIN_EXPECTED_CARDS = 2000; // sanity floor based on H+I+J totals seen (~2827)

const apiKey = process.env.POKEMONTCG_API_KEY || '';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: apiKey ? { 'X-Api-Key': apiKey } : {},
      });

      if (res.ok) {
        return await res.json();
      }

      console.warn(`  Attempt ${attempt}/${retries} failed with status ${res.status}`);
    } catch (err) {
      console.warn(`  Attempt ${attempt}/${retries} threw: ${err.message}`);
    }

    if (attempt < retries) {
      const backoff = 1000 * attempt * attempt; // 1s, 4s, 9s, 16s, 25s
      console.warn(`  Retrying in ${backoff}ms...`);
      await sleep(backoff);
    }
  }
  throw new Error(`Failed to fetch after ${retries} attempts: ${url}`);
}

async function fetchRegulationMark(mark) {
  console.log(`\nFetching regulationMark:${mark}...`);
  const cards = [];
  let page = 1;
  let totalCount = null;

  while (true) {
    const url = `${API_BASE}?q=regulationMark:${mark}&pageSize=${PAGE_SIZE}&page=${page}`;
    const json = await fetchWithRetry(url);

    cards.push(...json.data);
    totalCount = json.totalCount;

    console.log(`  Page ${page}: +${json.data.length} cards (${cards.length}/${totalCount})`);

    if (cards.length >= totalCount || json.data.length === 0) break;
    page++;
  }

  return cards;
}

function normalizeCard(card) {
  return {
    id: card.id,
    name: card.name,
    supertype: card.supertype,
    subtypes: card.subtypes || [],
    hp: card.hp || null,
    types: card.types || [],
    regulationMark: card.regulationMark,
    rarity: card.rarity || null,
    set: {
      id: card.set?.id,
      name: card.set?.name,
      series: card.set?.series,
      releaseDate: card.set?.releaseDate,
    },
    number: card.number,
    images: {
      small: card.images?.small || null,
      large: card.images?.large || null,
    },
  };
}

async function main() {
  console.log('=== CodeMate Deck Lab — Standard Card Fetcher ===');

  if (!apiKey) {
    console.warn('WARNING: POKEMONTCG_API_KEY not set. Using unauthenticated rate limits.');
  }

  const allCards = [];

  for (const mark of REGULATION_MARKS) {
    const cards = await fetchRegulationMark(mark);
    allCards.push(...cards);
  }

  // Dedupe by id (safety net, shouldn't happen but cheap to check)
  const seen = new Set();
  const deduped = allCards.filter((c) => {
    if (seen.has(c.id)) return false;
    seen.add(c.id);
    return true;
  });

  let missingImages = 0;
  const normalized = deduped.map((card) => {
    if (!card.images?.small) missingImages++;
    return normalizeCard(card);
  });

  console.log(`\nTotal unique cards fetched: ${normalized.length}`);
  console.log(`Cards missing image: ${missingImages}`);

  // Sanity check: don't overwrite good data with a bad/partial run
  if (normalized.length < MIN_EXPECTED_CARDS) {
    console.error(
      `\nABORT: only got ${normalized.length} cards, expected at least ${MIN_EXPECTED_CARDS}.`
    );
    console.error('Not writing output file — keeping previous cached data intact.');
    process.exit(1);
  }

  const output = {
    lastUpdated: new Date().toISOString(),
    totalCards: normalized.length,
    regulationMarks: REGULATION_MARKS,
    cards: normalized,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));

  console.log(`\nSaved to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error('\nFATAL:', err.message);
  process.exit(1);
});