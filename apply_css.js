const fs = require('fs');
const path = require('path');

const cssPath = 'c:/ROAD TO 1L/clinic/css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const appendedCSS = `\n/* -------- Doctor Profile Card Section -------- */
  .doctor-card-section {
    padding: var(--space-2xl) 0;
    background: linear-gradient(
      to bottom, 
      var(--primary-bg) 0%, 
      #ffffff 100%
    );
  }

  .doctor-profile-card {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: var(--shadow-xl);
    display: grid;
    grid-template-columns: 300px 1fr;
    overflow: hidden;
    max-width: 900px;
    margin: 0 auto;
    border: 1px solid rgba(27, 90, 175, 0.1);
  }

  /* Photo column */
  .dpc-photo-col {
    background: linear-gradient(
      160deg, 
      var(--primary-dark) 0%, 
      var(--primary) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 24px;
    position: relative;
  }

  .dpc-photo-wrapper {
    position: relative;
    width: 200px;
    height: 240px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  }

  .dpc-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .dpc-photo-fallback {
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.15);
    align-items: center;
    justify-content: center;
    border-radius: 16px;
  }

  .dpc-mtp-badge {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--accent);
    color: white;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 14px;
    border-radius: 50px;
    white-space: nowrap;
    letter-spacing: 0.03em;
  }

  /* Info column */
  .dpc-info-col {
    padding: 36px 36px 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .dpc-verified {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    color: var(--success);
    background: rgba(16, 185, 129, 0.08);
    padding: 4px 12px;
    border-radius: 50px;
    width: fit-content;
  }

  .dpc-name {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(1.3rem, 3vw, 1.75rem);
    font-weight: 800;
    color: var(--gray-900);
    margin: 8px 0 4px;
    line-height: 1.1;
  }

  .dpc-qual {
    font-size: 0.9rem;
    color: var(--gray-500);
    margin: 0;
  }

  .dpc-spec {
    font-size: 1rem;
    font-weight: 600;
    color: var(--primary);
    margin: 4px 0 0;
  }

  .dpc-specializations {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .dpc-spec-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.4;
  }

  .dpc-spec-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--primary);
    flex-shrink: 0;
  }

  .dpc-stats {
    display: flex;
    gap: 0;
    border: 1px solid var(--gray-100);
    border-radius: 12px;
    overflow: hidden;
  }

  .dpc-stat {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    background: var(--primary-bg);
    border-right: 1px solid var(--gray-100);
  }

  .dpc-stat:last-child {
    border-right: none;
  }

  .dpc-stat-num {
    font-family: 'Outfit', sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--primary);
    line-height: 1;
  }

  .dpc-stat-label {
    font-size: 0.7rem;
    color: var(--gray-500);
    margin-top: 4px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .dpc-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .dpc-btn {
    flex: 1;
    min-width: 140px;
    justify-content: center;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  /* ---- RESPONSIVE: Doctor Card ---- */
  @media (max-width: 768px) {
    .doctor-profile-card {
      grid-template-columns: 1fr;
    }
    .dpc-photo-col {
      padding: 28px 24px 20px;
    }
    .dpc-photo-wrapper {
      width: 150px;
      height: 180px;
    }
    .dpc-info-col {
      padding: 24px 20px 24px;
      gap: 16px;
    }
    .dpc-actions {
      flex-direction: column;
    }
    .dpc-btn {
      width: 100%;
      min-width: unset;
      flex: unset;
    }
  }

  @media (max-width: 480px) {
    .dpc-name {
      font-size: 1.25rem;
    }
    .dpc-stats {
      gap: 0;
    }
    .dpc-stat-num {
      font-size: 1.2rem;
    }
  }

/* ============================================
   RESPONSIVE FIXES — Dr S.C. Santra Clinic
   ============================================ */

/* ---------- BASE: prevent horizontal scroll ---------- */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
*, *::before, *::after {
  box-sizing: border-box;
}
img, video, svg {
  max-width: 100%;
  height: auto;
}

/* ---------- CONTAINER ---------- */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 48px);
}

/* ---------- EMERGENCY BANNER ---------- */
@media (max-width: 640px) {
  .emergency-text { display: none; }
  .emergency-banner-inner {
    justify-content: space-between;
    padding: 0 16px;
  }
}
@media (max-width: 380px) {
  .banner-call-btn span { display: none; }
  .banner-call-btn { padding: 6px 10px; }
}

/* ---------- NAVBAR ---------- */
@media (max-width: 1024px) {
  .nav-links { display: none; }
}
@media (max-width: 768px) {
  .navbar { padding: 0 16px; }
  .logo-name { font-size: 13px; }
  .logo-sub { display: none; }
  .nav-cta .btn-primary { display: none; }
}
@media (max-width: 480px) {
  .header .container,
  .navbar { padding: 0 12px; }
}

/* ---------- HERO SECTION ---------- */
.hero-section {
  padding: clamp(60px, 10vw, 120px) 0;
}

@media (max-width: 767px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-image { display: none; }
  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }
  .hero-actions .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  .mtp-badge {
    margin: 10px auto 0;
  }
}

/* Hero stat cards */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 32px;
}
@media (max-width: 480px) {
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .stat-card {
    display: flex;
    align-items: center;
    gap: 16px;
    text-align: left;
    padding: 14px 18px;
  }
  .stat-card .stat-num {
    font-size: 1.5rem;
    white-space: nowrap;
  }
}

/* ---------- QUICK INFO STRIP ---------- */
.quick-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media (max-width: 900px) {
  .quick-info { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .quick-info { grid-template-columns: 1fr; }
}

/* ---------- SERVICES GRID ---------- */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 540px) {
  .services-grid { grid-template-columns: 1fr; gap: 16px; }
}

/* Service cards: enforce consistent height + no clipping */
.service-card {
  display: flex !important;
  flex-direction: column !important;
  height: auto !important;
  overflow: visible !important;
  min-height: 220px !important;
}
.service-card h3 {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
}
.service-card p {
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  flex: 1;
}

/* ---------- DOCTOR PROFILE TEASER (existing section) ---------- */
.doctor-section .container,
.about-preview .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
@media (max-width: 768px) {
  .doctor-section .container,
  .about-preview .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .doctor-section img,
  .about-preview img {
    max-width: 280px;
    margin: 0 auto;
    display: block;
  }
}

/* ---------- TIMINGS TABLE ---------- */
.timings-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
.timings-table th,
.timings-table td {
  padding: clamp(8px, 2vw, 14px) clamp(10px, 2vw, 20px);
  font-size: clamp(0.75rem, 1.8vw, 0.9rem);
  white-space: nowrap;
}
@media (max-width: 600px) {
  .timings-preview-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 12px;
  }
  .timings-table { min-width: 480px; }
}

/* ---------- TESTIMONIAL SLIDER ---------- */
@media (max-width: 600px) {
  .review-card {
    padding: 20px 16px;
  }
  .review-text {
    font-size: 0.875rem;
  }
}

/* ---------- FAQ ---------- */
.faq-item {
  border-radius: 10px;
}
.faq-question {
  font-size: clamp(0.875rem, 2vw, 1rem);
  padding: clamp(14px, 3vw, 20px) clamp(16px, 3vw, 24px);
}
.faq-answer {
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  padding: 0 clamp(16px, 3vw, 24px) clamp(14px, 3vw, 20px);
}

/* ---------- CTA BANNER ---------- */
.cta-section .cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
@media (max-width: 480px) {
  .cta-section .cta-buttons .btn {
    width: 100%;
    max-width: 320px;
    justify-content: center;
  }
}

/* ---------- FOOTER ---------- */
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 32px;
}
@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; gap: 20px; }
  .footer-brand { text-align: center; }
  .footer-social { justify-content: center; }
}

/* ---------- FLOATING ACTION BUTTONS ---------- */
.floating-buttons {
  position: fixed;
  bottom: 24px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
}
@media (max-width: 480px) {
  .floating-buttons {
    bottom: 16px;
    right: 14px;
    gap: 10px;
  }
  .floating-btn {
    width: 48px;
    height: 48px;
  }
}

/* ---------- BACK TO TOP ---------- */
#back-to-top {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 9998;
}
@media (max-width: 480px) {
  #back-to-top { bottom: 16px; left: 14px; }
}

/* ---------- LOCAL SEO BAR ---------- */
.seo-bar {
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
  padding: 10px clamp(16px, 4vw, 48px);
  overflow-x: hidden;
  white-space: normal;
  line-height: 1.6;
}

/* ---------- SECTION HEADINGS ---------- */
.section-title {
  font-size: clamp(1.4rem, 4vw, 2.25rem);
}
.section-subtitle {
  font-size: clamp(0.875rem, 2vw, 1rem);
}

/* ---------- BUTTONS GLOBAL SAFETY ---------- */
.btn {
  white-space: nowrap;
  flex-shrink: 0;
}
@media (max-width: 360px) {
  .btn { font-size: 0.8rem; padding: 10px 18px; }
}

/* ---------- BOOKING FORM RESPONSIVENESS ---------- */
.booking-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* Full-width fields */
.booking-form .form-group:has(textarea),
.booking-form .form-group:has(select[name="reason"]),
.booking-form .form-group.full-width {
  grid-column: 1 / -1;
}

@media (max-width: 640px) {
  .booking-form {
    grid-template-columns: 1fr;
  }
  .booking-form .form-group {
    grid-column: 1;
  }
}

.form-control {
  width: 100%;
  font-size: clamp(0.875rem, 2vw, 1rem);
  padding: 12px 16px;
}

/* ---------- TYPOGRAPHY FLUID SCALING OVERRIDES ---------- */
h1 { font-size: clamp(1.8rem, 5vw, 3rem) !important; }
h2 { font-size: clamp(1.4rem, 3.5vw, 2.25rem) !important; }
h3 { font-size: clamp(1.1rem, 2.5vw, 1.5rem) !important; }
p, li { font-size: clamp(0.875rem, 2vw, 1rem) !important; }
.hero-name { font-size: clamp(2rem, 6vw, 3.5rem) !important; }

/* ---------- ADDITIONAL FIXES ---------- */

/* FIX A: Margin Bottom Fixes */
.mb-1 { margin-bottom: 0.25rem !important; margin-top: 0 !important; }
.mb-2 { margin-bottom: 0.5rem !important; margin-top: 0 !important; }
.mb-3 { margin-bottom: 1rem !important; margin-top: 0 !important; }
.mb-4 { margin-bottom: 1.5rem !important; margin-top: 0 !important; }

/* FIX C: Touch targets */
a, button, .btn {
  min-height: 44px;
  min-width: 44px;
}

/* FIX D: Smooth scrolling */
html { scroll-behavior: smooth !important; }

/* FIX 1 CSS: Services hero Banner */
.services-hero-banner {
  background: linear-gradient(135deg, #1B5AAF 0%, #4A90D9 100%);
  border-radius: 12px;
  padding: 28px 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
}
.shb-stethoscope {
  flex-shrink: 0;
  opacity: 0.6;
}
.shb-content {
  flex: 1;
  min-width: 0;
}
.shb-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 6px;
  line-height: 1.2;
}
.shb-subtitle {
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  color: rgba(255,255,255,0.88);
  margin: 0 0 14px;
  line-height: 1.5;
}
.shb-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.shb-pill {
  font-size: clamp(0.7rem, 1.8vw, 0.8rem);
  color: rgba(255,255,255,0.9);
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 50px;
  padding: 4px 12px;
  white-space: nowrap;
}

/* Mobile: hide stethoscope icon, reduce padding */
@media (max-width: 480px) {
  .services-hero-banner {
    padding: 20px 18px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .shb-stethoscope { display: none; }
  .shb-pills { gap: 6px; }
}

/* FIX 2: Service Badge */
.service-badge {
  display: inline-block;
  background: #fef3c7;
  color: #92400e;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 50px;
  margin-top: 10px;
  align-self: flex-start;
  white-space: nowrap;
}

/* FIX 3: View All Services Button Outline */
.btn-outline {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  background: transparent !important;
  border: 2px solid var(--primary) !important;
  color: var(--primary) !important;
  border-radius: var(--radius-full) !important;
  padding: 12px 32px !important;
  font-size: 0.95rem !important;
  font-weight: 600 !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
  white-space: nowrap !important;
  cursor: pointer !important;
}
.btn-outline:hover {
  background: var(--primary) !important;
  color: white !important;
}
`;

fs.writeFileSync(cssPath, css + appendedCSS);
console.log('Appended responsive CSS properly!');
