# >_ CodeMate Deck Lab

> A Pokémon TCG toolkit built with pure HTML, CSS and vanilla JavaScript — no frameworks, no libraries.

![CodeMate Deck Lab](https://img.shields.io/badge/Pokémon-TCG-FFD600?style=for-the-badge&logo=pokemon&logoColor=0D1B2A)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-FFD600?style=for-the-badge&logo=javascript&logoColor=0D1B2A)

---

## 🎴 Live Demo

👉 **[devCODEMATE.github.io/codemate-deck-lab](https://devCODEMATE.github.io/codemate-deck-lab/)**

---

## 📖 About the Project

CodeMate Deck Lab is a competitive Pokémon TCG toolkit built for the **Lords TCG** community. It helps players search for cards, build decks, simulate opening hands and calculate damage — all in one place, without needing to open multiple tabs or apps.

This project was built as part of a front-end development competition, with the goal of creating something genuinely useful for a real community using only fundamental web technologies. It is a fan-made, non-commercial project made for learning and for the love of the Pokémon TCG community.

---

## ✨ Features

### 🔍 Card Search
- Search any Pokémon TCG card by name using the **[Pokémon TCG API](https://pokemontcg.io/)**
- Filter by **Standard format** (only legal cards for the current competitive season)
- Partial name search — type "Draga" to find Dragapult, Dragapult ex, etc.
- Real card images loaded directly from the official API

### 🃏 Deck Builder
- Add cards from search results directly to your deck
- **Import decks** from Pokémon TCG Live — paste your exported decklist and it loads automatically
- Rule enforcement: maximum 4 copies per card (except Basic Energy)
- Maximum 60 cards per deck
- Live counter showing total cards, Pokémon, Trainers and Energy
- Counter turns green when deck reaches exactly 60 cards ✅

### 🎲 Hand Simulator
- Simulate your opening hand (7 cards) from your built deck
- **Fisher-Yates shuffle algorithm** for mathematically fair randomization
- Automatic **Mulligan detection** — warns if no Basic Pokémon in opening hand
- Hand statistics: Basic Pokémon, Trainers and Energies count
- Staggered card deal animation

### 💥 Damage Calculator
- Calculate attack damage with full modifier support:
  - Weakness (×2 Standard, ×1.5 Old format, +30 Vintage)
  - Resistance (-30, -20)
  - Coin Flip bonus damage
  - Tool card / Stadium bonus (Muscle Band, Virbank City Gym, etc.)
- **Knockout checker** — shows if the damage KOs the opponent and how much HP remains

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic page structure and sections |
| **CSS3** | Styling, Grid layout, Flexbox, animations |
| **Vanilla JavaScript** | All logic, DOM manipulation, API calls |
| **Pokémon TCG API** | Real card data and images |
| **Git & GitHub** | Version control and deployment |
| **GitHub Pages** | Free hosting and live deployment |

---

## 📚 What I Learned

This project was my first time building a complete web application from scratch. Here is what I learned along the way:

### JavaScript Concepts
- **`async/await` and `fetch()`** — calling external APIs and handling responses
- **DOM manipulation** — creating, updating and removing HTML elements with JavaScript
- **Event listeners** — responding to user clicks, key presses and input changes
- **Array methods** — `forEach`, `filter`, `find`, `reduce`, `map` for working with card data
- **Spread operator `{...card}`** — copying objects and adding new properties
- **Optional chaining `?.`** — safely accessing nested properties without errors
- **`DOMContentLoaded`** — waiting for HTML to load before running JavaScript
- **Fisher-Yates shuffle algorithm** — mathematically fair array randomization
- **`window` object** — making functions globally accessible from HTML attributes

### CSS Concepts
- **CSS Grid** — `repeat(auto-fill, minmax())` for responsive card layouts
- **CSS Flexbox** — navigation, stats bars and responsive layouts
- **CSS Variables** — consistent color system across the whole app
- **`position: sticky`** — keeping the header visible while scrolling
- **`@keyframes` animations** — card deal animation in the hand simulator
- **CSS specificity** — understanding why some styles override others

### API & Web Concepts
- **REST APIs** — making GET requests and reading JSON responses
- **API Keys** — authenticating with external services
- **Query parameters** — filtering API results (`q=name:Pikachu*&pageSize=20`)
- **`encodeURIComponent()`** — making URL strings safe for special characters
- **Client-side filtering** — filtering API results in JavaScript instead of the URL
- **`loading="lazy"`** — improving performance by loading images only when visible

### Git & Deployment
- **`git init`, `git add`, `git commit`** — basic version control workflow
- **Conventional commits** — `feat:`, `fix:`, `style:` prefixes for clear history
- **GitHub remote** — connecting local repo to GitHub
- **GitHub Pages** — deploying a static site for free from a repository

### Debugging Skills
- Reading browser console errors to find bugs
- Understanding `null` errors when elements don't exist in the DOM
- Using `F12` DevTools to inspect elements and test JavaScript
- Identifying missing HTML elements that break JavaScript selectors

---

## 🚀 Getting Started

No installation needed. This is a pure static site.

```bash
# Clone the repository
git clone https://github.com/devCODEMATE/codemate-deck-lab.git

# Open index.html in your browser
# Or use VS Code Live Server extension
```

### API Key Setup
This project uses the [Pokémon TCG API](https://pokemontcg.io/). The API key in the code is for development only.

To use your own key:
1. Register free at [dev.pokemontcg.io](https://dev.pokemontcg.io/)
2. Verify your email
3. Copy your API key
4. Replace the `API_KEY` value in `app.js`

---

## 📁 Project Structure

```
codemate-deck-lab/
│
├── index.html      # Page structure and sections
├── style.css       # All styles and responsive design
├── app.js          # All JavaScript logic and API calls
└── images/
    └── codemate-avatar.png   # CodeMate brand avatar (header + footer)
```

---

## 🎯 Future Improvements

- [ ] Automated Standard card catalog caching via GitHub Actions (same pattern as [world-cup-2026](https://github.com/devCODEMATE/world-cup-2026))
- [ ] Draw probability calculator (hypergeometric distribution)
- [ ] Save decks to localStorage
- [ ] Deck export to TCG Live format
- [ ] Card price lookup integration
- [ ] Loading state improvements

---

## 🏪 About Lords TCG

This project was built for the **Lords TCG** community — a Pokémon TCG store and competitive community.

Follow them on Instagram: [@lords.tcg](https://www.instagram.com/lords.tcg/)

---

## 👨‍💻 Author

**devCODEMATE**
- GitHub: [@devCODEMATE](https://github.com/devCODEMATE)

---

## 📄 License

This project is open source, free to use, and available under the [MIT License](LICENSE).

CodeMate Deck Lab is a fan-made project, built for learning purposes and out of love for the Pokémon TCG community. It is not affiliated with, endorsed by, or sponsored by The Pokémon Company, Nintendo, Game Freak or Creatures Inc. Card images and data are provided by the [Pokémon TCG API](https://pokemontcg.io/) and remain the property of their respective owners.