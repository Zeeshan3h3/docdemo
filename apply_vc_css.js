const fs = require('fs');

const cssPath = 'c:/ROAD TO 1L/clinic/css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const businessCardCSS = `
/* ============================================
   BUSINESS CARD COMPONENT 
   ============================================ */
.visiting-card-wrapper {
  padding: 60px 20px;
  background: var(--off-white);
  display: flex;
  justify-content: center;
}

.visiting-card {
  position: relative;
  width: 100%;
  max-width: 650px;
  background: #fdfdfd;
  margin: 0 auto;
  aspect-ratio: 1.75;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  color: #1a1a1a;
  border-radius: 2px;
}

@media (max-width: 640px) {
  .visiting-card { 
    aspect-ratio: auto; 
    min-height: 480px; 
    max-width: 400px;
  }
}

.vc-top-shape {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 23%;
  background: #2e3e81; /* Deep blue from card */
  clip-path: polygon(0 0, 100% 0, 60% 100%, 0 100%);
  z-index: 1;
}

@media (max-width: 640px) {
  .vc-top-shape { height: 18%; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
}

.vc-bottom-shape-black {
  position: absolute;
  bottom: 0; right: 0;
  width: 45%; height: 35%;
  background: #111;
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0 100%);
  z-index: 1;
}

.vc-bottom-shape-blue {
  position: absolute;
  bottom: 0; right: 0;
  width: 50%; height: 45%;
  background: #2e3e81;
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  z-index: 2;
}

@media (max-width: 640px) {
  .vc-bottom-shape-black { width: 100%; height: 15%; clip-path: polygon(0 0, 100% 100%, 100% 100%, 0 100%); }
  .vc-bottom-shape-blue { width: 100%; height: 12%; clip-path: polygon(0 100%, 100% 0, 100% 100%, 0 100%); }
}

.vc-content {
  position: relative;
  z-index: 3;
  padding: 4% 6%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.vc-header {
  height: 15%;
  display: flex;
  align-items: center;
}

.vc-name {
  color: white;
  font-size: clamp(1.2rem, 3.5vw, 1.8rem);
  font-weight: 800;
  margin: 0;
  letter-spacing: 0.5px;
  /* Anaglyph edge effect from the photo */
  text-shadow: -1px 0px 0px #ff6b6b, 1px 0px 0px #4d88ff; 
}

.vc-body {
  display: flex;
  margin-top: 5%;
  flex: 1;
}

@media (max-width: 640px) {
  .vc-body { flex-direction: column; margin-top: 15%; }
}

.vc-left {
  flex: 0 0 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.vc-qual {
  font-size: clamp(0.7rem, 2vw, 0.95rem);
  font-weight: 700;
  font-style: italic;
  margin-bottom: 2px;
  color: #222;
}

.vc-title {
  font-size: clamp(0.65rem, 1.8vw, 0.85rem);
  font-style: italic;
  font-weight: 600;
  color: #222;
  margin-bottom: 16px;
  line-height: 1.35;
}

.vc-contact {
  margin-bottom: 12px;
}

.vc-contact p {
  font-size: clamp(0.75rem, 2vw, 0.95rem);
  font-weight: 700;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #111;
}

.vc-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background: #2e3e81;
  color: white;
  border-radius: 50%;
  font-size: 8px;
  box-shadow: inset -1px -1px 2px rgba(0,0,0,0.3);
}

.vc-email p {
  font-size: clamp(0.7rem, 2vw, 0.95rem);
  font-weight: 700;
  font-style: italic;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #111;
}

.vc-email span {
  font-size: 12px;
  color: #d32f2f;
}

.vc-address p {
  font-size: clamp(0.65rem, 1.8vw, 0.85rem);
  font-weight: 600;
  font-style: italic;
  line-height: 1.4;
  margin: 0;
  color: #222;
}

.vc-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5px;
}

@media (max-width: 640px) {
  .vc-right { 
    order: -1; 
    margin-top: -30px; 
    margin-bottom: 20px; 
    align-items: center;
  }
}

.vc-caduceus {
  width: 85%;
  max-width: 140px;
  filter: drop-shadow(2px 3px 2px rgba(0,0,0,0.25));
}
`;

fs.writeFileSync(cssPath, css + businessCardCSS);
console.log('Appended Business Card CSS');
