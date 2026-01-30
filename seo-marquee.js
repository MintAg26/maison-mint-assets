class SeoMarquee extends HTMLElement {
  connectedCallback() {
    // Shadow DOM for encapsulated styling
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Keywords array - easy to edit
    const keywords = [
      'Turundusagentuur Tallinn',
      'Digiturunduse Agentuur',
      'Google Ads Haldus',
      'Meta Reklaamid',
      'Facebook Turundus',
      'Instagram Turundus',
      'Sotsiaalmeedia Haldus',
      'SEO Optimeerimine',
      'E-poe Haldus',
      'Sisuloome',
      'E-maili Turundus',
      'Performance Marketing',
      'Digiagentuur Eesti',
      'Bränding',
      'Reklaamikampaaniad',
      'Turunduse Juhtimine',
      'Shopify E-poe Haldus',
      'Google Reklaamid',
      'PPC Haldus',
      'Sotsiaalmeedia Sisuloome'
    ];
    
    // Generate keyword HTML
    const keywordHTML = keywords.map(kw => 
      `<span class="kw">${kw}</span><span class="sep">//</span>`
    ).join('');
    
    // Create the component
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .marquee-section {
          background: #FF0044;
          overflow: hidden;
          padding: 18px 0;
          position: relative;
          width: 100%;
        }
        
        .marquee-wrapper {
          display: flex;
          width: max-content;
          animation: marquee 45s linear infinite;
        }
        
        .marquee-section:hover .marquee-wrapper {
          animation-play-state: paused;
        }
        
        .marquee-content {
          display: flex;
          align-items: center;
        }
        
        .kw {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          white-space: nowrap;
          padding: 0 0.4em;
        }
        
        .sep {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.7);
          padding: 0 0.2em;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee-wrapper {
            animation: none;
          }
        }
      </style>
      
      <section class="marquee-section" aria-label="Maison Mint digiturunduse teenused">
        <h2 class="sr-only">Maison Mint Digiturunduse Agentuur Teenused: Turundusagentuur Tallinn, Google Ads Haldus, Meta Reklaamid, Facebook Turundus, Instagram Turundus, Sotsiaalmeedia Haldus, SEO Optimeerimine, E-poe Haldus, Sisuloome, E-maili Turundus, Performance Marketing, Digiagentuur Eesti, Bränding, Reklaamikampaaniad, PPC Haldus</h2>
        <div class="marquee-wrapper">
          <div class="marquee-content">${keywordHTML}</div>
          <div class="marquee-content" aria-hidden="true">${keywordHTML}</div>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('seo-marquee', SeoMarquee);
