const fs = require('fs');

// 1. ASTRO FILE UPDATE
let index = fs.readFileSync('src/pages/index.astro', 'utf8');

const oldMarquee = `<div class="marquee-wrap">
  <div class="marquee-content">
    <span>PWA's <span class="star">✦</span> AI Automatisering <span class="star">✦</span> UX/UI Design <span class="star">✦</span> Managed Hosting <span class="star">✦</span> n8n Workflows <span class="star">✦</span> React <span class="star">✦</span></span>
    <span>PWA's <span class="star">✦</span> AI Automatisering <span class="star">✦</span> UX/UI Design <span class="star">✦</span> Managed Hosting <span class="star">✦</span> n8n Workflows <span class="star">✦</span> React <span class="star">✦</span></span>
  </div>
</div>`;

const newCoolTicker = `<!-- TECH STACK TICKER -->
<section id="tech-ticker">
  <div class="ticker-fade ticker-fade-left"></div>
  <div class="ticker-fade ticker-fade-right"></div>
  <div class="ticker-scroll">
    <div class="ticker-inner">
      <div class="ticker-item"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="20"/> React</div>
      <div class="ticker-item"><span class="dot pwa"></span> PWA's & Web Apps</div>
      <div class="ticker-item"><span class="dot n8n"></span> n8n AI Automatisering</div>
      <div class="ticker-item"><img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" alt="Firebase" width="20"/> Firebase</div>
      <div class="ticker-item"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" width="20"/> Tailwind CSS</div>
      <div class="ticker-item"><span class="dot astro"></span> Astro Component Framework</div>
      <div class="ticker-item"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node" width="40"/></div>
      
      <!-- Duplicate for seamless scrolling -->
      <div class="ticker-item"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="20"/> React</div>
      <div class="ticker-item"><span class="dot pwa"></span> PWA's & Web Apps</div>
      <div class="ticker-item"><span class="dot n8n"></span> n8n AI Automatisering</div>
      <div class="ticker-item"><img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" alt="Firebase" width="20"/> Firebase</div>
      <div class="ticker-item"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" width="20"/> Tailwind CSS</div>
      <div class="ticker-item"><span class="dot astro"></span> Astro Component Framework</div>
      <div class="ticker-item"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node" width="40"/></div>
    </div>
  </div>
</section>`;

index = index.replace(oldMarquee, newCoolTicker);

const tickerCss = `
    /* ── TECH TICKER ───────────────────────────────── */
    #tech-ticker {
      position: relative;
      width: 100%;
      padding: 3rem 0;
      background: var(--bg);
      overflow: hidden;
      display: flex;
      align-items: center;
      border-top: 1px solid rgba(255,255,255,0.03);
      border-bottom: 1px solid rgba(255,255,255,0.03);
    }
    .ticker-fade {
      position: absolute;
      top: 0; bottom: 0;
      width: 15vh;
      z-index: 2;
      pointer-events: none;
    }
    .ticker-fade-left { left: 0; background: linear-gradient(90deg, var(--bg) 0%, transparent 100%); }
    .ticker-fade-right { right: 0; background: linear-gradient(-90deg, var(--bg) 0%, transparent 100%); }
    
    .ticker-scroll {
      display: flex;
      width: 200%;
      animation: ticker-scroll 25s linear infinite;
    }
    .ticker-scroll:hover {
      animation-play-state: paused;
    }
    .ticker-inner {
      display: flex;
      gap: 2rem;
      align-items: center;
      padding: 0 1rem;
    }
    .ticker-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.06);
      padding: 0.6rem 1.2rem;
      border-radius: 100px;
      font-size: 0.9rem;
      font-weight: 600;
      color: rgba(255,255,255,0.7);
      white-space: nowrap;
      transition: background 0.3s, color 0.3s;
      cursor: default;
    }
    .ticker-item:hover {
      background: rgba(217,43,75,0.08); /* slight red tint */
      color: #fff;
      border-color: rgba(217,43,75,0.2);
    }
    .ticker-item img { filter: grayscale(100%) opacity(0.7); transition: filter 0.3s; }
    .ticker-item:hover img { filter: grayscale(0%) opacity(1); }
    .dot { width: 8px; height: 8px; border-radius: 50%; }
    .dot.pwa { background: #0078D7; }
    .dot.n8n { background: #FF6D5A; }
    .dot.astro { background: #FF5D01; }

    @keyframes ticker-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
`;

index = index.replace('/* ── STATS ───────────────────────────────── */', tickerCss + '\n/* ── STATS ───────────────────────────────── */');

fs.writeFileSync('src/pages/index.astro', index);

// 2. CSS FILE UPDATE
let cssFile = fs.readFileSync('public/style.css', 'utf8');
const regexOldCss = /\.marquee-wrap[\s\S]*?@keyframes marquee {[\s\S]*?}/;
cssFile = cssFile.replace(regexOldCss, '');
fs.writeFileSync('public/style.css', cssFile);


console.log("Marquee replaced.");
