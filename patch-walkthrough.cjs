const fs = require('fs');

let index = fs.readFileSync('src/pages/index.astro', 'utf8');

const walkOldRegex = /<!-- ═══ WALKTHROUGH ══════════════ -->[\s\S]*?<!-- ═══ LAB GRID ══════════════════ -->/;

const newWalkthroughHtml = `<!-- ═══ WEBBIE GRID (Zo Werkt Het) ══════════════ -->
<section id="walkthrough-grid-section">
  <div class="container">
    <p class="section-label reveal-slide">Onze succesformule</p>
    <h2 class="section-title reveal-slide delay-1">Geen wollige trajecten.<br/><em class="hero-gradient-text">Pure executiekracht.</em></h2>
    <p class="section-sub reveal-slide delay-2">We bouwen in snelle iteraties. Vanaf de eerste schets tot aan de schaalbare live-omgeving, je hebt overal grip op.</p>

    <div class="bento-walkthrough reveal-slide delay-2">
      <!-- Stap 1 -->
      <div class="bento-card bento-large group-hover-trigger">
        <div class="bento-header">
          <div class="bento-number">01</div>
          <h3>Ontdekken &amp; Afkaderen</h3>
        </div>
        <p>Geen dikke rapporten, maar een scherpe intake. We definiëren de doelgroep en bepalen direct de MVP-scope en budget.</p>
        <div class="bento-visual">
          <div class="bento-pill">Scope bepaling</div>
          <div class="bento-pill highlight">Technische architectuur</div>
          <div class="bento-pill">Roadmap in kaart</div>
        </div>
      </div>

      <!-- Stap 2 -->
      <div class="bento-card bento-small">
        <div class="bento-header">
          <div class="bento-number">02</div>
          <h3>UX &amp; Prototype</h3>
        </div>
        <p>Je krijgt binnen no-time een interactief, klikbaar prototype in de huisstijl.</p>
        <div class="bento-visual-minimal">
          <div class="wireframe-box"></div>
          <div class="wireframe-box fill"></div>
        </div>
      </div>

      <!-- Stap 3 -->
      <div class="bento-card bento-small">
        <div class="bento-header">
          <div class="bento-number">03</div>
          <h3>Agile Development</h3>
        </div>
        <p>Transparante sprints. Korte lijntjes. Wekelijkse test-updates zonder verrassingen.</p>
        <div class="bento-visual-minimal code-style">
          <span>&lt;Code /&gt;</span>
        </div>
      </div>

      <!-- Stap 4 -->
      <div class="bento-card bento-large group-hover-trigger">
        <div class="bento-header">
          <div class="bento-number">04</div>
          <h3>Launch, Run &amp; Groei</h3>
        </div>
        <p>Live! We hosten je platform razendsnel, monitoren op uptime en blijven itereren voor groei.</p>
        <div class="bento-visual launch-visual">
          <div class="launch-graph">
            <div class="graph-bar w-1"></div>
            <div class="graph-bar w-2"></div>
            <div class="graph-bar w-3"></div>
            <div class="graph-bar w-4 highlight-bar"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ LAB GRID ══════════════════ -->`;

if (walkOldRegex.test(index)) {
    index = index.replace(walkOldRegex, newWalkthroughHtml);
    console.log("Walkthrough HTML replaced.");
} else {
    console.log("Walkthrough HTML not found with regex.");
}

// CSS Replacement
let walkCssRegex = /\/\* ── WALKTHROUGH ─────────────────────────── \*\/[\s\S]*?\/\* ── LAB SECTION ─────────────────────────── \*\//;

const bentoCss = `/* ── WEBBIE BENTO WALKTHROUGH ──────── */
#walkthrough-grid-section {
  padding: 8rem 0;
  position: relative;
}

.bento-walkthrough {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 1.5rem;
  margin-top: 4rem;
}

.bento-card {
  background: rgba(20,20,20,0.5);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, border-color 0.3s ease;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(10px);
}

.bento-card:hover {
  border-color: rgba(217, 43, 75, 0.4);
  transform: translateY(-5px);
}

.bento-large {
  grid-column: span 1;
}

.bento-small {
  grid-column: span 1;
}

.bento-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.bento-number {
  background: rgba(217,43,75,0.1);
  color: #D92B4B;
  font-family: monospace;
  font-weight: bold;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.9rem;
  border: 1px solid rgba(217,43,75,0.2);
}

.bento-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
}

.bento-card p {
  color: rgba(255,255,255,0.6);
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  flex-grow: 1;
}

/* Visuals inside Bento */
.bento-visual {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
}
.bento-pill {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.8rem;
  color: #aaa;
  transition: all 0.3s ease;
}
.bento-pill.highlight {
  background: rgba(217,43,75,0.15);
  color: #fff;
  border-color: rgba(217,43,75,0.4);
}

/* Wireframe blocks for UI card */
.bento-visual-minimal {
  display: flex;
  gap: 0.8rem;
  margin-top: auto;
  align-items: flex-end;
}
.wireframe-box {
  background: rgba(255,255,255,0.03);
  border: 1px dashed rgba(255,255,255,0.15);
  border-radius: 8px;
  height: 40px;
  width: 100%;
}
.wireframe-box.fill {
  background: rgba(217,43,75,0.1);
  border: 1px solid rgba(217,43,75,0.3);
  height: 60px;
}

/* Code visual */
.code-style {
  font-family: monospace;
  color: #D92B4B;
  font-size: 1.1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgba(0,0,0,0.4);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.04);
}

/* Launch Graph */
.launch-visual {
    width: 100%;
}
.launch-graph {
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
  height: 60px;
  width: 100%;
}
.graph-bar {
  background: rgba(255,255,255,0.1);
  border-radius: 4px 4px 0 0;
  width: 25%;
  transition: height 1s ease;
}
.w-1 { height: 30%; }
.w-2 { height: 45%; }
.w-3 { height: 60%; }
.w-4 { height: 95%; background: linear-gradient(180deg, #D92B4B 0%, rgba(217,43,75,0.2) 100%); }

/* Interactive Hover state for group */
.group-hover-trigger:hover .bento-pill {
  border-color: rgba(255,255,255,0.3); color: #fff;
}
.group-hover-trigger:hover .w-1 { height: 50%; }
.group-hover-trigger:hover .w-2 { height: 75%; }
.group-hover-trigger:hover .w-3 { height: 100%; }

@media (max-width: 900px) {
  .bento-walkthrough {
    grid-template-columns: 1fr;
  }
}

/* ── LAB SECTION ─────────────────────────── */`;

if (walkCssRegex.test(index)) {
    index = index.replace(walkCssRegex, bentoCss);
    console.log("Walkthrough CSS replaced.");
} else {
    console.log("Walkthrough CSS not found with regex.");
}

fs.writeFileSync('src/pages/index.astro', index);
