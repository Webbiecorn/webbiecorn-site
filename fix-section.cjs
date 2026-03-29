const fs = require('fs');

let content = fs.readFileSync('src/pages/index.astro', 'utf8');

const oldText = `<p class="section-label reveal">Zo werkt het</p>
    <h2 class="section-title reveal reveal-delay-1">Van idee naar<br/><em>live platform.</em></h2>
    <p class="section-sub reveal reveal-delay-2">Geen eindeloze trajecten. Ons proces is compact, transparant en gericht op resultaat.</p>
    <div class="walkthrough-grid">
      <div class="walkthrough-steps" id="wtSteps">
        <div class="wt-step active" data-panel="0">
          <div class="wt-step-nr">1</div>
          <div>
            <div class="wt-step-title">Intake &amp; strategie</div>
            <div class="wt-step-desc">We beginnen met een diepgaand gesprek over jouw doelen, gebruikers en processen. In één sessie leggen we de basis voor de gehele aanpak.</div>
          </div>
        </div>
        <div class="wt-connector"></div>
        <div class="wt-step" data-panel="1">
          <div class="wt-step-nr">2</div>
          <div>
            <div class="wt-step-title">Design &amp; prototype</div>
            <div class="wt-step-desc">We maken interactieve wireframes en een visueel prototype waarop je direct feedback kunt geven. Geen verrassingen later in het traject.</div>
          </div>
        </div>
        <div class="wt-connector"></div>
        <div class="wt-step" data-panel="2">
          <div class="wt-step-nr">3</div>
          <div>
            <div class="wt-step-title">Bouw &amp; iteraties</div>
            <div class="wt-step-desc">We bouwen in sprints. Na elke sprint is er een werkende versie die je kunt testen. Je houdt volle controle over prioriteiten en scope.</div>
          </div>
        </div>
        <div class="wt-connector"></div>
        <div class="wt-step" data-panel="3">
          <div class="wt-step-nr">4</div>
          <div>
            <div class="wt-step-title">Launch &amp; beheer</div>
            <div class="wt-step-desc">We lanceren, monitoren en zorgen voor continuïteit. Met onze managed hosting en SLA ben je nooit alleen na oplevering.</div>
          </div>
        </div>
      </div>`;

const newText = `<p class="section-label reveal">Onze werkwijze</p>
    <h2 class="section-title reveal reveal-delay-1">Jouw visie.<br/><em>Keiharde executie.</em></h2>
    <p class="section-sub reveal reveal-delay-2">Geen oeverloos gepraat of stropdassentrajecten. Wij hanteren een strak, transparant proces dat is gebouwd op snelheid en concreet resultaat.</p>
    <div class="walkthrough-grid">
      <div class="walkthrough-steps" id="wtSteps">
        <div class="wt-step active" data-panel="0">
          <div class="wt-step-nr">1</div>
          <div>
            <div class="wt-step-title">1. Ontdekken &amp; afkaderen</div>
            <div class="wt-step-desc">Geen dikke rapporten, maar een scherpe intake. We graven tot de kern van je uitdaging, definiëren de doelgroep en bepalen direct de scope.</div>
          </div>
        </div>
        <div class="wt-connector"></div>
        <div class="wt-step" data-panel="1">
          <div class="wt-step-nr">2</div>
          <div>
            <div class="wt-step-title">2. UX Design &amp; Prototype</div>
            <div class="wt-step-desc">We maken het idee direct visueel. Met wekelijkse feedbackrondes en een klikbaar prototype weet je precies wat je krijgt, vórdat we coderen.</div>
          </div>
        </div>
        <div class="wt-connector"></div>
        <div class="wt-step" data-panel="2">
          <div class="wt-step-nr">3</div>
          <div>
            <div class="wt-step-title">3. Aglie Development</div>
            <div class="wt-step-desc">We bouwen in snelle, transparante sprints. Korte lijntjes, frequente testversies en altijd 100% grip op de technische voortgang.</div>
          </div>
        </div>
        <div class="wt-connector"></div>
        <div class="wt-step" data-panel="3">
          <div class="wt-step-nr">4</div>
          <div>
            <div class="wt-step-title">4. Launch, Run &amp; Groei</div>
            <div class="wt-step-desc">Live! Maar daar stopt het niet. We monitoren prestaties, zorgen voor bliksemsnelle hosting en optimaliseren actief voor verdere groei.</div>
          </div>
        </div>
      </div>`;

if (content.includes('Van idee naar<br/><em>live platform.</em>')) {
    content = content.replace(oldText, newText);
    fs.writeFileSync('src/pages/index.astro', content);
    console.log("Updated");
} else {
    console.log("Not replaced");
}
