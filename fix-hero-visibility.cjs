const fs = require('fs');

let index = fs.readFileSync('src/pages/index.astro', 'utf8');

// Replace CSS
const oldCss = `/* Reveal Slide Global Support */
    .reveal-slide { opacity: 0; transform: translateY(30px) translateZ(0); transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
    .reveal-slide.visible { opacity: 1; transform: translateY(0) translateZ(0); }`;

const newCss = `/* Reveal Slide Global Support */
    .reveal-slide { 
      opacity: 0; 
      transform: translateY(30px) translateZ(0); 
      animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
    .delay-1 { animation-delay: 0.2s; }
    .delay-2 { animation-delay: 0.4s; }
    .hero-sub.reveal { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s forwards; transform: none; }
    .hero-ctas.reveal { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.8s forwards; transform: none; }
    .cards-stage.reveal { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 1s forwards; transform: none; }
    .avail-badge.reveal { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s forwards; transform: none; }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }`;

index = index.replace(oldCss, newCss);

// Remove the `reveal` class from elements that should animate immediately if they interfere
index = index.replace('class="hero-sub reveal reveal-delay-2"', 'class="hero-sub reveal-hero"');
index = index.replace('class="hero-ctas reveal reveal-delay-3"', 'class="hero-ctas reveal-hero"');
index = index.replace('class="cards-stage reveal reveal-delay-4"', 'class="cards-stage reveal-hero"');
index = index.replace('class="avail-badge reveal"', 'class="avail-badge reveal-hero"');

// Fix the CSS to match 'reveal-hero'
const newCss2 = newCss.replace(/\.reveal/g, '.reveal-hero');
index = index.replace(newCss, newCss2);


// Inject mouse moving JS for magnetic cards right into index.astro
const jsInsert = `
</Layout>

<script>
  document.addEventListener('astro:page-load', () => {
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
  });
</script>
`;

if (!index.includes('3D Mouse Tracking for Spotlight Cards')) {
  index = index.replace('</Layout>', jsInsert);
}

fs.writeFileSync('src/pages/index.astro', index);
console.log("Fixed index.astro visibility and JS injection.");
