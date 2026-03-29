const fs = require('fs');

let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

// remove WT animation block completely.
const scriptStart = `// Walkthrough Auto-Play & Progress Logic`;
const scriptEnd = `});`; // End of event listener

// we need to be careful with string replacement or just remove the lines using a regex.
// Walkthrough logic uses variables like autoPlayWT, currentIndex, etc.
const wtRegex = /\/\/ Walkthrough Auto-Play & Progress Logic[\s\S]*?(?=\/\/ Initial animation setup|\/\/ PREMIUM HERO)/;
layout = layout.replace(wtRegex, "");

fs.writeFileSync('src/layouts/Layout.astro', layout);
console.log("Walkthrough logic removed from Layout.astro");
