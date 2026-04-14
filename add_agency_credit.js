const fs = require('fs');
const path = require('path');

const directory = 'c:/ROAD TO 1L/clinic';
const files = ['index.html', 'about.html', 'contact.html', 'services.html', 'timings.html', 'reviews.html', 'book.html', 'privacy.html'];

const oldText = `<p>Designed with ❤️ for better healthcare</p>`;
const newText = `<p>Designed with ❤️ for better healthcare &nbsp;·&nbsp; <a href="https://biz-list.vercel.app/" target="_blank" rel="noopener" style="color:#9ca3af;font-size:12px;text-decoration:none;">Designed by <strong style="color:#60a5fa;">Bizlist</strong></a></p>`;

let updated = 0;
files.forEach(file => {
    const filePath = path.join(directory, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');
    if (html.includes(oldText)) {
        html = html.replace(oldText, newText);
        fs.writeFileSync(filePath, html);
        console.log('Updated: ' + file);
        updated++;
    } else {
        console.log('Pattern not found in: ' + file);
    }
});
console.log(`\nDone. ${updated}/${files.length} files updated.`);
