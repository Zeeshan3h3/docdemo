const fs = require('fs');

const cssPath = 'c:/ROAD TO 1L/clinic/css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Remove Doctor Profile Card Section
const startMarker = '/* -------- Doctor Profile Card Section -------- */';
const endMarker = '/* ============================================\n   RESPONSIVE FIXES — Dr S.C. Santra Clinic\n   ============================================ */';

const startIndex = css.indexOf(startMarker);
const endIndex = css.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    css = css.slice(0, startIndex) + css.slice(endIndex);
    console.log('Removed Doctor Profile Card CSS');
}

// 2. Remove Touch Targets CSS
const touchTargetRegex = /\/\* FIX C: Touch targets \*\/\s*a,\s*button,\s*\.btn\s*\{\s*min-height:\s*44px;\s*min-width:\s*44px;\s*\}/g;
css = css.replace(touchTargetRegex, '');
console.log('Removed Touch Targets CSS');

// 3. Fix btn-outline border-radius
css = css.replace('border-radius: var(--radius-full) !important;', 'border-radius: var(--radius-md) !important;');
console.log('Fixed btn-outline border-radius');

fs.writeFileSync(cssPath, css);
console.log('CSS Cleanup Complete');
