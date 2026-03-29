const fs = require('fs');

// Fix Layout.astro JS
let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

const jsOld = `// ── Walkthrough ────────────────────────────────
  if (_wtInterval) clearInterval(_wtInterval);
  const wtSteps = document.querySelectorAll('.wt-step');
  const wtPanels = document.querySelectorAll('.wt-panel');
  const wtDots = document.querySelectorAll('.wt-progress-dot');
  if (wtSteps.length) {
    let wtCurrent = 0;
    function activateWT(idx) {
      wtSteps.forEach((s,i) => s.classList.toggle('active', i === idx));
      wtPanels.forEach((p,i) => p.classList.toggle('active', i === idx));
      wtDots.forEach((d,i) => d.classList.toggle('active', i === idx));
      wtCurrent = idx;
    }
    wtSteps.forEach((step, i) => step.addEventListener('click', () => activateWT(i)));
    wtDots.forEach((dot, i) => dot.addEventListener('click', () => activateWT(i)));
    _wtInterval = setInterval(() => activateWT((wtCurrent + 1) % wtSteps.length), 4000);
  }`;

const jsNew = `// ── Walkthrough ────────────────────────────────
  if (_wtInterval) clearInterval(_wtInterval);
  const wtSteps = document.querySelectorAll('.wt-step');
  const wtPanels = document.querySelectorAll('.wt-panel');
  const wtDots = document.querySelectorAll('.wt-progress-dot');
  const wtConnectors = document.querySelectorAll('.wt-connector');
  const wtGrid = document.querySelector('.walkthrough-grid');

  if (wtSteps.length) {
    let wtCurrent = 0;
    let autoPlay = true;

    function activateWT(idx) {
      wtSteps.forEach((s,i) => s.classList.toggle('active', i === idx));
      wtPanels.forEach((p,i) => p.classList.toggle('active', i === idx));
      wtDots.forEach((d,i) => d.classList.toggle('active', i === idx));
      wtConnectors.forEach((c,i) => c.classList.toggle('active', i < idx));
      wtCurrent = idx;
    }

    wtSteps.forEach((step, i) => step.addEventListener('click', () => { autoPlay = false; activateWT(i); }));
    wtDots.forEach((dot, i) => dot.addEventListener('click', () => { autoPlay = false; activateWT(i); }));
    
    if (wtGrid) {
      wtGrid.addEventListener('mouseenter', () => autoPlay = false);
      wtGrid.addEventListener('mouseleave', () => autoPlay = true);
      // for mobile touches
      wtGrid.addEventListener('touchstart', () => autoPlay = false, {passive: true});
    }

    _wtInterval = setInterval(() => {
      if (autoPlay) activateWT((wtCurrent + 1) % wtSteps.length);
    }, 4500); // slightly longer reading time
  }`;

layout = layout.replace(jsOld, jsNew);
fs.writeFileSync('src/layouts/Layout.astro', layout);
console.log('Layout JS updated.');

// Fix CSS in both files
const cssOld = `.wt-step.active .wt-step-desc { max-height: 200px; opacity: 1; }
    .wt-connector { width: 2px; height: 18px; background: rgba(217,43,75,0.12); margin-left: calc(1.5rem + 16px); }
    .wt-screen {
      position: relative; background: #111;
      border-radius: 24px; border: 2px solid rgba(255,255,255,0.08);
      overflow: hidden; aspect-ratio: 9/16; max-height: 540px;
      box-shadow: 0 40px 100px rgba(0,0,0,0.6), 0 0 50px rgba(217,43,75,0.07);
    }
    .wt-panel {
      position: absolute; inset: 0; padding: 2.5rem 1.25rem 1.25rem;
      opacity: 0; transform: translateX(20px);
      transition: opacity 0.4s ease, transform 0.4s ease; pointer-events: none;
    }
    .wt-panel.active { opacity: 1; transform: none; pointer-events: auto; }`;

const cssNew = `.wt-step.active .wt-step-desc { max-height: 200px; opacity: 1; }
    .wt-connector { width: 2px; height: 18px; background: rgba(217,43,75,0.12); margin-left: calc(1.5rem + 16px); transition: background 0.4s ease; }
    .wt-connector.active { background: #D92B4B; }
    .wt-screen {
      position: relative; background: #111;
      border-radius: 24px; border: 2px solid rgba(255,255,255,0.08);
      overflow: hidden; aspect-ratio: 9/16; max-height: 540px;
      box-shadow: 0 40px 100px rgba(0,0,0,0.6), 0 0 50px rgba(217,43,75,0.07);
    }
    .wt-panel {
      position: absolute; inset: 0; padding: 2.5rem 1.25rem 1.25rem;
      opacity: 0; transform: translateY(12px);
      transition: opacity 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); pointer-events: none;
    }
    .wt-panel.active { opacity: 1; transform: none; pointer-events: auto; }
    
    /* Micro-animations in panels */
    .wt-check-item, .wt-fake-input, .wt-notification {
      opacity: 0; transform: translateY(8px);
      transition: opacity 0.4s ease, transform 0.4s ease;
    }
    .wt-panel.active .wt-check-item, 
    .wt-panel.active .wt-fake-input, 
    .wt-panel.active .wt-notification {
      opacity: 1; transform: none;
    }
    .wt-panel.active .wt-check-item:nth-child(1) { transition-delay: 0.15s; }
    .wt-panel.active .wt-check-item:nth-child(2) { transition-delay: 0.25s; }
    .wt-panel.active .wt-check-item:nth-child(3) { transition-delay: 0.35s; }
    .wt-panel.active .wt-fake-input:nth-child(2) { transition-delay: 0.15s; }
    .wt-panel.active .wt-fake-input:nth-child(3) { transition-delay: 0.25s; }
    .wt-panel.active .wt-fake-input:nth-child(4) { transition-delay: 0.35s; }
    .wt-panel.active .wt-notification:nth-child(2) { transition-delay: 0.15s; }
    .wt-panel.active .wt-notification:nth-child(3) { transition-delay: 0.30s; }`;

// Update index.astro
let index = fs.readFileSync('src/pages/index.astro', 'utf8');
if (index.includes(cssOld)) {
  index = index.replace(cssOld, cssNew);
  fs.writeFileSync('src/pages/index.astro', index);
  console.log('index.astro css updated.');
}

// Update Layout.astro CSS if exists
layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');
if (layout.includes(cssOld)) {
  layout = layout.replace(cssOld, cssNew);
  fs.writeFileSync('src/layouts/Layout.astro', layout);
  console.log('Layout.astro css updated.');
}
