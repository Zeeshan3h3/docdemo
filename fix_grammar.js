const fs = require('fs');
const path = require('path');

const directory = 'c:/ROAD TO 1L/clinic';
const files = ['index.html', 'about.html', 'contact.html', 'services.html', 'timings.html', 'reviews.html', 'book.html', 'privacy.html'];

let totalCount = 0;

files.forEach(file => {
    const filePath = path.join(directory, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');
    const original = html;

    // 1. "Dr S.C. Santra Clinic" → "Dr S.C. Santra's Clinic" (but not inside JSON-LD "name" field)
    html = html.replace(/Dr S\.C\. Santra Clinic/g, "Dr S.C. Santra's Clinic");

    // 2. "Dr S C Santra Clinic" → "Dr S.C. Santra's Clinic"
    html = html.replace(/Dr S C Santra Clinic/g, "Dr S.C. Santra's Clinic");

    // 3. Fix JSON-LD name — should stay without apostrophe for structured data
    html = html.replace(/"name": "Dr S\.C\. Santra's Clinic"/g, '"name": "Dr S.C. Santra Clinic"');

    if (html !== original) {
        fs.writeFileSync(filePath, html);
        const count = (original.length - html.length === 0) ? 'updated' : 'updated';
        console.log('Fixed: ' + file);
        totalCount++;
    }
});

console.log(`\nDone. ${totalCount} files updated.`);
