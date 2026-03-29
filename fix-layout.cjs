const fs = require('fs');

let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

const spotlightScript = `
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
    }

    /* PREVIOUSLY ADDED LOGIC FOR WALKTHROUGH */`;

if (!layout.includes('PREMIUM HERO: Staggered Fade Up')) {
  layout = layout.replace(/\/\* PREVIOUSLY ADDED LOGIC FOR WALKTHROUGH \*\//, spotlightScript);
  fs.writeFileSync('src/layouts/Layout.astro', layout);
  console.log("Layout.astro updated.");
} else {
  console.log("Layout.astro already contains script.");
}
