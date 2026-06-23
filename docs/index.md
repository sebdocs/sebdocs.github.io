---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "my projects"
  # text: "welcome to my documentation"
  tagline: haha hello world
  # actions:
  #   - theme: brand
  #     text: Markdown Examples
  #     link: /markdown-examples
  #   - theme: alt
  #     text: API Examples
  #     link: /api-examples

features:
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    
  - title: hix
  details: This simple to use QR generator keeps your phone number in local session so that you don't have to type it again.
  link: https://sebastianhkx.github.com/payseb

  - icon:
    src: /icons/square.svg
    width: 48
    height: 48
  title: Dynamic PayNow QR Generator
  details: Generate PayNow QR codes dynamically
  link: /your-page
  linkText: Learn more


---

<style>
/* --- STARK CARD POP OVERRIDES --- */
:root {
  /* 1. The Canvas: Subtle, low-contrast page background */
  --vp-home-hero-name-color: var(--vp-c-brand-1);
  background-color: #f8fafc !important; /* Soft slate gray background */

  /* 2. The Pop: Crisp, high-contrast standalone cards */
  --card-bg: #ffffff !important;
  --card-border: #0f172a !important;   /* Solid dark slate borders */
  --card-text: #334155 !important;
  --card-title: #0f172a !important;
}

.dark {
  /* 1. The Canvas: Deep dark background */
  background-color: #0f172a !important; /* Soft dark slate page background */

  /* 2. The Pop: Solid pitch-black cards that cut through the background */
  --card-bg: #000000 !important;       /* Pure black card body */
  --card-border: #38bdf8 !important;   /* Vivid sky blue crisp border */
  --card-text: #cbd5e1 !important;     /* Clean light gray body text */
  --card-title: #ffffff !important;    /* Pure white titles */
}

/* Force the page container to use our canvas background color */
.VPContent, .VPHome {
  background-color: transparent !important;
}

/* Target the cards and force them to lift off the page */
.VPCard {
  background-color: var(--card-bg) !important;
  border: 2px solid var(--card-border) !important;
  
  /* High contrast hard shadow to give it a 3D physical lift */
  box-shadow: 6px 6px 0px 0px var(--card-border) !important;
  transform: translate(-2px, -2px);
  transition: transform 0.15s ease, box-shadow 0.15s ease !important;
}

/* Hover effect: Press down on the shadow */
.VPCard:hover {
  transform: translate(2px, 2px) !important;
  box-shadow: 2px 2px 0px 0px var(--card-border) !important;
}

/* Card Text Styling */
.VPCard .title, 
.VPCard .title a {
  color: var(--card-title) !important;
  font-weight: 800 !important;
  font-size: 1.25rem !important;
  text-decoration: none !important;
}

.VPCard .title a:hover {
  text-decoration: underline !important;
}

.VPCard .details {
  color: var(--card-text) !important;
  font-weight: 500 !important;
  opacity: 1 !important;
}
</style>
