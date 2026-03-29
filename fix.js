const fs = require('fs');
let content = fs.readFileSync('src/layouts/Layout.astro', 'utf-8');
content = content.replace(/  \}\n\}\);\n<\/script>/, '</script>');
fs.writeFileSync('src/layouts/Layout.astro', content);
