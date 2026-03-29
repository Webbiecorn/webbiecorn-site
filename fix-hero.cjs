const fs = require('fs');

let index = fs.readFileSync('src/pages/index.astro', 'utf8');

// 1. REWRITE HERO HTML
const heroHtmlOld = `<section id="hero">
  <canvas id="particles"></canvas>
  <div class="hero-inner">
    <div class="avail-badge reveal"><span class="avail-dot"></span>Beschikbaar voor nieuwe projecten</div>
    <div class="hero-eyebrow">PWA's, AI & Beheer</div>
    <h1 class="hero-title reveal reveal-delay-1" style="min-height: 2.8em; display: inline-block;">
      <span id="typing-text"></span><span class="blinking-cursor">_</span>
    </h1>
    <p class="hero-sub reveal reveal-delay-2">
      Een gedreven team van experts. Eén focus. Wij combineren feilloze techniek met scherp design — voor organisaties die durven doorpakken.
    </p>
    <div class="hero-ctas reveal reveal-delay-3">
      <a href="diensten.html" class="btn-primary">Bekijk onze diensten</a>
      <a href="cases.html" class="btn-ghost">Bekijk het lab</a>
    </div>

    <div class="cards-stage reveal reveal-delay-4">
      <div class="cards-row" id="cards-row">
        <a href="apps.html" class="stage-card">
          <div class="card-icon">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M8 8 L2 13 L8 18" stroke="#D92B4B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18 8 L24 13 L18 18" stroke="#D92B4B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.5 5 L10.5 21" stroke="#D92B4B" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </div>
          <h3>PWA's &amp; Apps</h3>
          <p>Razendsnelle maatwerk portalen en web-apps. Zonder bloatware.</p>
          <div class="card-bar"></div>
        </a>
        <a href="automatisering.html" class="stage-card">
          <div class="card-icon">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M13 3 C7.477 3 3 7.477 3 13 S7.477 23 13 23 S23 18.523 23 13 S18.523 3 13 3Z" stroke="#D92B4B" stroke-width="1.8"/>
              <path d="M13 8 L13 13 L16.5 16.5" stroke="#D92B4B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="19" cy="6" r="2.5" fill="#D92B4B" opacity="0.7"/>
            </svg>
          </div>
          <h3>Automatisering</h3>
          <p>Slimme AI &amp; n8n workflows die processen stroomlijnen.</p>
          <div class="card-bar"></div>
        </a>
        <a href="design.html" class="stage-card">
          <div class="card-icon">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <rect x="2" y="2" width="9" height="9" rx="2" stroke="#D92B4B" stroke-width="1.8"/>
              <rect x="15" y="2" width="9" height="9" rx="2" stroke="#D92B4B" stroke-width="1.8"/>
              <rect x="2" y="15" width="9" height="9" rx="2" stroke="#D92B4B" stroke-width="1.8"/>
              <rect x="15" y="15" width="9" height="9" rx="2" stroke="#D92B4B" stroke-width="1.8" opacity="0.35"/>
            </svg>
          </div>
          <h3>Design</h3>
          <p>Intuïtieve interfaces en robuuste branding. Pixel-perfect.</p>
          <div class="card-bar"></div>
        </a>
        <a href="onderhoud.html" class="stage-card">
          <div class="card-icon">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M13 2 L15.5 9H23L17 13.5L19.5 20.5L13 16L6.5 20.5L9 13.5L3 9H10.5Z" stroke="#D92B4B" stroke-width="1.8" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Onderhoud</h3>
          <p>Managed hosting, actieve monitoring en SLA-responstijden.</p>
          <div class="card-bar"></div>
        </a>
      </div>
    </div>
  </div>
</section>`;

const heroHtmlNew = `<section id="hero-premium">
  <div class="aurora-bg">
    <div class="aurora-glow aurora-1"></div>
    <div class="aurora-glow aurora-2"></div>
    <div class="grid-overlay"></div>
  </div>
  
  <div class="hero-inner">
    <div class="avail-badge reveal">
      <span class="pulsing-dot"></span>
      <span>Direct beschikbaar voor nieuwe projecten</span>
    </div>
    
    <h1 class="hero-title">
      <div class="text-line reveal-slide">Webbiecorn bouwt</div>
      <div class="text-line reveal-slide delay-1">digitale platformen met</div>
      <div class="text-line reveal-slide delay-2 hero-gradient-text">Ongekende Slagkracht.</div>
    </h1>
    
    <p class="hero-sub reveal reveal-delay-2">
      Een gedreven team van technische experts. Wij combineren <span class="highlight">feilloze architectuur</span> met <span class="highlight">premium design</span> — voor organisaties die sneller en slimmer willen opereren.
    </p>
    
    <div class="hero-ctas reveal reveal-delay-3">
      <a href="diensten.html" class="btn-primary magnetic-btn">
        <span class="btn-text">Start je project</span>
        <span class="btn-arrow">→</span>
      </a>
      <a href="cases.html" class="btn-ghost magnetic-btn">Bekijk het lab</a>
    </div>

    <div class="cards-stage reveal reveal-delay-4">
      <div class="cards-row spotlight-group" id="premium-cards-row">
        
        <a href="apps.html" class="premium-card">
          <div class="spotlight"></div>
          <div class="card-content">
            <div class="card-icon">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M8 8 L2 13 L8 18" stroke="#D92B4B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 8 L24 13 L18 18" stroke="#D92B4B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 5 L10.5 21" stroke="#D92B4B" stroke-width="1.8" stroke-linecap="round"/></svg>
            </div>
            <h3>PWA's &amp; Apps</h3>
            <p>Razendsnelle maatwerk portals en web-apps. Zero bloatware, 100% performance.</p>
          </div>
        </a>

        <a href="automatisering.html" class="premium-card">
          <div class="spotlight"></div>
          <div class="card-content">
            <div class="card-icon">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 3 C7.477 3 3 7.477 3 13 S7.477 23 13 23 S23 18.523 23 13 S18.523 3 13 3Z" stroke="#D92B4B" stroke-width="1.8"/><path d="M13 8 L13 13 L16.5 16.5" stroke="#D92B4B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19" cy="6" r="2.5" fill="#D92B4B" opacity="0.7"/></svg>
            </div>
            <h3>AI Workflows</h3>
            <p>Slimme AI & n8n automatisering die handmatige processen overbodig maakt.</p>
          </div>
        </a>

        <a href="design.html" class="premium-card">
          <div class="spotlight"></div>
          <div class="card-content">
            <div class="card-icon">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="2" y="2" width="9" height="9" rx="2" stroke="#D92B4B" stroke-width="1.8"/><rect x="15" y="2" width="9" height="9" rx="2" stroke="#D92B4B" stroke-width="1.8"/><rect x="2" y="15" width="9" height="9" rx="2" stroke="#D92B4B" stroke-width="1.8"/><rect x="15" y="15" width="9" height="9" rx="2" stroke="#D92B4B" stroke-width="1.8" opacity="0.35"/></svg>
            </div>
            <h3>UX/UI Design</h3>
            <p>Datagedreven interfaces en robuuste branding. Pixel-perfect ontworpen voor conversie.</p>
          </div>
        </a>

        <a href="onderhoud.html" class="premium-card">
          <div class="spotlight"></div>
          <div class="card-content">
            <div class="card-icon">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 2 L15.5 9H23L17 13.5L19.5 20.5L13 16L6.5 20.5L9 13.5L3 9H10.5Z" stroke="#D92B4B" stroke-width="1.8" stroke-linejoin="round"/></svg>
            </div>
            <h3>Managed Hosting</h3>
            <p>Actieve monitoring, dedicated infrastructuur en scherpe SLA-responstijden.</p>
          </div>
        </a>

      </div>
    </div>
  </div>
</section>`;

index = index.replace(heroHtmlOld, heroHtmlNew);

// 2. REWRITE CSS IN index.astro
const cssOldStart = `/* ── HERO ─────────────────────────────────── */`;
const cssOldEnd = `/* ── MARQUEE ──────────────────────────────── */`;

const regexCss = /\/\* ── HERO ────────────[\s\S]*?\/\* ── MARQUEE ────────────/;

const newCss = `/* ── PREMIUM HERO ─────────────────────────── */
    #hero-premium {
      position: relative; width: 100%; min-height: 100vh;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 180px 2rem 6rem; overflow: hidden; background: #050505;
    }
    
    /* Live Aurora & Grid */
    .aurora-bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
    .grid-overlay {
      position: absolute; inset: 0;
      background-image: 
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      mask-image: radial-gradient(ellipse at 50% 30%, black 10%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at 50% 30%, black 10%, transparent 70%);
    }
    .aurora-glow {
      position: absolute; border-radius: 50%; filter: blur(90px);
      animation: floatAurora 20s infinite alternate ease-in-out; opacity: 0.15;
    }
    .aurora-1 { width: 60vw; height: 60vh; background: #D92B4B; top: -10%; left: -10%; }
    .aurora-2 { width: 50vw; height: 50vh; background: #85162a; bottom: 10%; right: -10%; animation-delay: -10s; }
    @keyframes floatAurora {
      0% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(10%, 15%) scale(1.1); }
      66% { transform: translate(-10%, -5%) scale(0.9); }
      100% { transform: translate(0, 0) scale(1); }
    }

    .hero-inner { position: relative; z-index: 1; max-width: 1200px; width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center; }

    /* Badge */
    .avail-badge {
      display: inline-flex; align-items: center; gap: 0.6rem;
      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
      padding: 0.45rem 1rem; border-radius: 100px;
      font-size: 0.75rem; font-weight: 600; color: rgba(255,255,255,0.8);
      margin-bottom: 2rem; backdrop-filter: blur(10px);
    }
    .pulsing-dot {
      width: 8px; height: 8px; border-radius: 50%; background: #4ade80;
      box-shadow: 0 0 10px rgba(74,222,128,0.6);
      animation: pulseDot 2s infinite;
    }
    @keyframes pulseDot {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.5); opacity: 0.5; }
      100% { transform: scale(1); opacity: 1; }
    }

    /* Typography */
    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 800;
      line-height: 1.05; letter-spacing: -1px; margin-bottom: 1.5rem;
      display: flex; flex-direction: column; gap: 0.2rem;
    }
    .text-line { overflow: hidden; }
    .hero-gradient-text {
      background: linear-gradient(to right, #ffffff, #D92B4B, #ff7b94, #ffffff);
      background-size: 300% auto;
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      animation: textShine 6s linear infinite;
    }
    @keyframes textShine { to { background-position: 300% center; } }

    .hero-sub {
      font-size: 1.2rem; line-height: 1.6; color: rgba(255,255,255,0.5);
      max-width: 680px; margin-bottom: 2.5rem;
    }
    .hero-sub .highlight { color: #fff; font-weight: 600; }

    /* Magnetic CTA */
    .hero-ctas { display: flex; gap: 1rem; align-items: center; margin-bottom: 5rem; }
    .magnetic-btn {
      position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
      padding: 0.9rem 2rem; border-radius: 100px; font-weight: 700; font-size: 0.95rem;
      transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
      overflow: hidden;
    }
    .btn-primary.magnetic-btn {
      background: #D92B4B; color: #fff; border: 1px solid #ff4266;
      box-shadow: 0 10px 30px rgba(217, 43, 75, 0.3);
    }
    .btn-primary.magnetic-btn:hover { background: #e83255; box-shadow: 0 15px 40px rgba(217, 43, 75, 0.5); }
    .btn-arrow { transition: transform 0.3s ease; display: inline-block; }
    .btn-primary.magnetic-btn:hover .btn-arrow { transform: translateX(5px); }

    /* Premium Spotlight Cards */
    .cards-stage { perspective: 1500px; max-width: 1100px; width: 100%; }
    .cards-row {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem;
      transform-style: preserve-3d; transition: transform 0.1s ease-out;
    }
    .premium-card {
      position: relative; background: rgba(20,20,20,0.5); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px; text-decoration: none; color: #fff; text-align: left;
      overflow: hidden; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      transition: transform 0.3s ease, border-color 0.3s ease;
    }
    .premium-card:hover { transform: translateY(-5px); border-color: rgba(217, 43, 75, 0.4); }
    
    .card-content { position: relative; padding: 2rem 1.5rem; z-index: 2; height: 100%; display: flex; flex-direction: column; background: linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(10,10,10,0.8) 100%); }
    .premium-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.6rem; color: #fff;}
    .premium-card p { font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.6; flex-grow: 1; }
    .card-icon { margin-bottom: 1.5rem; display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; border-radius: 14px; background: rgba(217, 43, 75, 0.1); border: 1px solid rgba(217, 43, 75, 0.2); }
    
    /* The Magical Spotlight */
    .premium-card::before {
      content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
      background: radial-gradient(800px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(217,43,75,0.4), transparent 40%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;
      z-index: 3; pointer-events: none; opacity: 0; transition: opacity 0.3s ease;
    }
    .premium-card .spotlight {
      position: absolute; inset: 0; background: radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(217,43,75,0.06), transparent 40%);
      z-index: 1; pointer-events: none; opacity: 0; transition: opacity 0.3s ease;
    }
    .spotlight-group:hover .premium-card::before, .spotlight-group:hover .premium-card .spotlight { opacity: 1; }

    /* Responsive */
    @media (max-width: 1024px) { .cards-row { grid-template-columns: repeat(2, 1fr); transform: none !important; } }
    @media (max-width: 600px) { .cards-row { grid-template-columns: 1fr; } .hero-ctas { flex-direction: column; width: 100%; } .magnetic-btn { width: 100%; } }
    
    /* ── MARQUEE ────────────`;

index = index.replace(regexCss, newCss);

// Remove typing text JS script block
const typingScript = `<script>
  // Terminal typing animation for Hero Title
  document.addEventListener('astro:page-load', () => {
    const textTarget = document.getElementById('typing-text');
    if (!textTarget) return;

    // The text content with emphasis encoded as a special token
    const phrases = [
      { text: "Digitale producten", isEm: false },
      { text: "<br/>", isBreak: true },
      { text: "die écht werken.", isEm: true }
    ];

    let currentPhrase = 0;
    let currentChar = 0;

    function typeWriter() {
      if (currentPhrase >= phrases.length) return;

      const phrase = phrases[currentPhrase];

      if (phrase.isBreak) {
        textTarget.innerHTML += "<br/>";
        currentPhrase++;
        setTimeout(typeWriter, 100);
        return;
      }

      if (currentChar < phrase.text.length) {
        const char = phrase.text.charAt(currentChar);
        
        if (phrase.isEm && currentChar === 0) {
           textTarget.innerHTML += "<em>";
        }
        
        textTarget.innerHTML += char;
        
        if (phrase.isEm && currentChar === phrase.text.length - 1) {
           textTarget.innerHTML += "</em>";
        }

        currentChar++;
        setTimeout(typeWriter, 40 + Math.random() * 50);
      } else {
        currentPhrase++;
        currentChar = 0;
        setTimeout(typeWriter, 100);
      }
    }

    // Start with empty
    textTarget.innerHTML = "";
    setTimeout(typeWriter, 400); // initial delay
  });
</script>`;

index = index.replace(typingScript, "");

fs.writeFileSync('src/pages/index.astro', index);
console.log("index.astro rewritten for premium hero.");
