const fs = require('fs');
const file = process.argv[2];
let content = fs.readFileSync(file, 'utf8');

const regex = /<script>([\s\S]*?)<\/script>/;
const match = content.match(regex);
if (!match) { console.log("No script tag found!"); process.exit(1); }

const newScript = `<script>
let _globalInit = false;
let _animId = null;
let _cardsLoopId = null;
let _wtInterval = null;

document.addEventListener('astro:page-load', () => {
  // ── Navbar scroll ──────────────────────────────
  if (!_globalInit) {
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      const _sp = document.getElementById('scroll-progress');
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
      if (_sp) _sp.style.width = (window.scrollY / (Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight) * 100) + '%';
    });
  }

  // ── Mobile menu ────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => { 
      hamburger.classList.toggle('open'); 
      mobileMenu.classList.toggle('open'); 
    });
  }

  // ── Reveal on scroll ───────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { 
      if (e.isIntersecting) { 
        e.target.classList.add('visible'); 
        obs.unobserve(e.target); 
      } 
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => obs.observe(el));

  // ── Particles ─────────────────────────────────
  const canvas = document.getElementById('particles');
  if (_animId) cancelAnimationFrame(_animId); // cleanup old loop
  
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
    if (!_globalInit) window.addEventListener('resize', () => { if(document.getElementById('particles')) resize(); }); 
    resize();
    function rand(a,b) { return Math.random()*(b-a)+a; }
    for (let i = 0; i < 70; i++) particles.push({
      x: rand(0,W||window.innerWidth), y: rand(0,H||window.innerHeight),
      r: rand(1,2.5), dx: rand(-0.2,0.2), dy: rand(-0.2,0.2),
      alpha: rand(0.06,0.3), color: Math.random() > 0.9 ? '#D92B4B' : '#ffffff'
    });
    function draw() {
      // stop if canvas is gone
      if (!document.getElementById('particles')) return;
      ctx.clearRect(0,0,W,H);
      particles.forEach(p => {
        ctx.globalAlpha = p.alpha; ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if(p.x < 0) p.x = W; if(p.x > W) p.x = 0;
        if(p.y < 0) p.y = H; if(p.y > H) p.y = 0;
      });
      ctx.globalAlpha = 1;
      _animId = requestAnimationFrame(draw);
    }
    draw();
    if (!_globalInit) {
      document.addEventListener('visibilitychange', () => {
        if (!document.getElementById('particles')) return;
        if (document.hidden) { cancelAnimationFrame(_animId); _animId = null; }
        else if (!_animId) draw();
      });
    }
  }

  // ── Cards stage parallax ───────────────────────
  if (_cardsLoopId) cancelAnimationFrame(_cardsLoopId);
  
  const cardsRow = document.getElementById('cards-row');
  let mx = 0, my = 0, cx = 0, cy = 0;
  if (!_globalInit) {
    window.addEventListener('mousemove', e => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
      const _spotlight = document.getElementById('cursor-spotlight');
      if (_spotlight) { 
        _spotlight.style.left = e.clientX + 'px'; 
        _spotlight.style.top = e.clientY + 'px'; 
        _spotlight.classList.add('active'); 
      }
    });
  }
  
  function loopCards() {
    if (!document.getElementById('cards-row')) return;
    cx += (mx - cx) * 0.07; cy += (my - cy) * 0.07;
    const cr = document.getElementById('cards-row');
    if (cr) cr.style.transform = 'rotateX(' + (22 + cy * -4) + 'deg) rotateY(' + (cx * 4) + 'deg)';
    _cardsLoopId = requestAnimationFrame(loopCards);
  }
  if (cardsRow) loopCards();

  // ── Walkthrough ────────────────────────────────
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
  }

  // ── Counter animation ──────────────────────────
  const statObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const targetStr = e.target.dataset.target || e.target.getAttribute('data-target');
        if (!targetStr) return;
        const target = parseInt(targetStr, 10);
        let start = 0;
        const inc = target / (1200 / 16);
        const timer = setInterval(() => {
          start = Math.min(start + inc, target);
          e.target.textContent = Math.floor(start);
          if (start >= target) clearInterval(timer);
        }, 16);
        statObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number-val').forEach(el => statObs.observe(el));

  _globalInit = true;
});
</script>`;

content = content.replace(regex, newScript);
fs.writeFileSync(file, content);
console.log("Updated Layout.astro successfully!");
