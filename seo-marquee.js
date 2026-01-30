class SeoMarquee extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Row 1 keywords
    const keywords1 = [
      'Turundusagentuur Tallinn',
      'Digiturunduse Agentuur',
      'Google Ads Haldus',
      'Meta Reklaamid',
      'Facebook Turundus',
      'Instagram Turundus',
      'Sotsiaalmeedia Haldus',
      'SEO Optimeerimine',
      'E-poe Haldus',
      'Sisuloome'
    ];
    
    // Row 2 keywords
    const keywords2 = [
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
    
    const keywordHTML1 = keywords1.map(kw => 
      `<span class="kw">${kw}</span><span class="sep">//</span>`
    ).join('');
    
    const keywordHTML2 = keywords2.map(kw => 
      `<span class="kw">${kw}</span><span class="sep">//</span>`
    ).join('');
    
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
          padding: 12px 0;
          position: relative;
          width: 100%;
        }
        
        .row {
          overflow: hidden;
          margin: 6px 0;
        }
        
        .marquee-wrapper {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        
        .marquee-wrapper-reverse {
          display: flex;
          width: max-content;
          animation: marqueeReverse 40s linear infinite;
        }
        
        .marquee-section:hover .marquee-wrapper,
        .marquee-section:hover .marquee-wrapper-reverse {
          animation-play-state: paused;
        }
        
        .marquee-content {
          display: flex;
          align-items: center;
        }
        
        .kw {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          white-space: nowrap;
          padding: 0 0.4em;
        }
        
        .sep {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.5);
          padding: 0 0.2em;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee-wrapper,
          .marquee-wrapper-reverse {
            animation: none;
          }
        }
      </style>
      
      <section class="marquee-section" aria-label="Maison Mint digiturunduse teenused">
        <h2 class="sr-only">Maison Mint Digiturunduse Agentuur Teenused: Turundusagentuur Tallinn, Google Ads Haldus, Meta Reklaamid, Facebook Turundus, Instagram Turundus, Sotsiaalmeedia Haldus, SEO Optimeerimine, E-poe Haldus, Sisuloome, E-maili Turundus, Performance Marketing, Digiagentuur Eesti, Bränding, Reklaamikampaaniad, PPC Haldus</h2>
        
        <div class="row">
          <div class="marquee-wrapper">
            <div class="marquee-content">${keywordHTML1}</div>
            <div class="marquee-content" aria-hidden="true">${keywordHTML1}</div>
          </div>
        </div>
        
        <div class="row">
          <div class="marquee-wrapper-reverse">
            <div class="marquee-content">${keywordHTML2}</div>
            <div class="marquee-content" aria-hidden="true">${keywordHTML2}</div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('seo-marquee', SeoMarquee);
