const fs = require('fs');
let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

// Insert the spotlight & reveal logic into the astro:page-load event.
const spotlightScript = `    /* PREVIOUSLY ADDED LOGIC FOR WALKTHROUGH */
    
    // PREMIUM HERO: Staggered Fade Up
    const reveals = document.querySelectorAll('.reveal-slide');
    reveals.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 100 + (index * 200));
    });

    // PREMIUM HERO: 3D Mouse Tracking for Spotlight Cards
    const cardsRow = document.getElementById('premium-cards-row');
    if (cardsRow) {
      cardsRow.addEventListener('mousemove', e => {
        // Spotlight calculation
        const cards = document.querySelectorAll('.premium-card');
        for(const card of cards) {
          const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', \`\${x}px\`);
          card.style.setProperty('--mouse-y', \`\${y}px\`);
        }
        
        // 3D Tilt calculation (subtle)
        const rect = cardsRow.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        const yPos = e.clientY - rect.top;
        const xC = rect.width / 2;
        const yC = rect.height / 2;
        
        const tiltX = ((yPos - yC) / yC) * -5;
        const tiltY = ((xPos - xC) / xC) * 5;
        
        cardsRow.style.transform = \`perspective(1500px) rotateX(\${tiltX}deg) rotateY(\${tiltY}deg)\`;
      });
      
      cardsRow.addEventListener('mouseleave', () => {
        cardsRow.style.transform = \`perspective(1500px) rotateX(0deg) rotateY(0deg)\`;
      });
    }`;

// Inject before particle script if it exists, or at the start of the logic block
if (!layout.includes('PREMIUM HERO: Staggered Fade Up')) {
  layout = layout.replace(/\/\/ Initial animation setup/, spotlightScript + '\n\n    // Initial animation setup');
}

fs.writeFileSync('src/layouts/Layout.astro', layout);

// Add global styles for the reveal in index.astro
let indexAstro = fs.readFileSync('src/pages/index.astro', 'utf8');
if (!indexAstro.includes('.reveal-slide.visible')) {
  const newStyle = `/* Reveal Slide Global Support */
    .reveal-slide { opacity: 0; transform: translateY(30px) translateZ(0); transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
    .reveal-slide.visible { opacity: 1; transform: translateY(0) translateZ(0); }
    `;
  
  indexAstro = indexAstro.replace('/* ── PREMIUM HERO', newStyle + '\n/* ── PREMIUM HERO');
  fs.writeFileSync('src/pages/index.astro', indexAstro);
}

console.log("Layout.astro and index.astro updated with JS logic.");
