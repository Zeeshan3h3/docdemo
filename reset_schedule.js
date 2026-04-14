const fs = require('fs');
const path = require('path');

const directory = 'c:/ROAD TO 1L/clinic';

// ============================================================
// 1. Update utils.js — all 7 days: 8-12, 18-22
// ============================================================
const utilsPath = path.join(directory, 'js', 'utils.js');
let utilsCode = fs.readFileSync(utilsPath, 'utf8');
utilsCode = utilsCode.replace(
    /const CLINIC_SCHEDULE = \{[\s\S]*?\};/,
    `const CLINIC_SCHEDULE = {
  0: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Sunday
  1: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Monday
  2: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Tuesday
  3: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Wednesday
  4: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Thursday
  5: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Friday
  6: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Saturday
};`
);
fs.writeFileSync(utilsPath, utilsCode);
console.log('Updated utils.js');

// ============================================================
// 2. Build new table rows for timings tables in HTML
// ============================================================
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayNums = [1, 2, 3, 4, 5, 6, 0];
const tableRows = days.map((day, i) => `            <tr data-day="${dayNums[i]}">
              <td>${day}</td>
              <td><span class="time-slot">🕗 8:00 AM – 12:00 PM</span></td>
              <td><span class="time-slot">🕕 6:00 PM – 10:00 PM</span></td>
            </tr>`).join('\n');

// ============================================================
// 3. Update timings HTML tables
// ============================================================
['index.html', 'timings.html'].forEach(file => {
    const filePath = path.join(directory, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // Replace tbody with id="timings-body"
    html = html.replace(/<tbody id="timings-body">[\s\S]*?<\/tbody>/, `<tbody id="timings-body">\n${tableRows}\n          </tbody>`);

    // Also replace plain tbody inside timings table if no id
    html = html.replace(/<tbody>([\s\S]*?)<\/tbody>/, `<tbody id="timings-body">\n${tableRows}\n          </tbody>`);

    fs.writeFileSync(filePath, html);
    console.log('Updated timings table in ' + file);
});

// ============================================================
// 4. Update all text references across all HTML files
// ============================================================
const htmlFiles = ['index.html', 'contact.html', 'about.html', 'services.html', 'timings.html', 'reviews.html', 'book.html', 'privacy.html'];

const textReplacements = [
    // Contact page working hours list
    [/Mon-Tue, Thu-Fri: 9 AM – 1 PM, 5 PM – 9 PM/g, 'Mon–Sun: 8 AM – 12 PM, 6 PM – 10 PM'],
    [/Saturday: 10 AM – 2 PM, 6 PM – 9 PM\s*<br>\s*Wednesday: Closed\s*<br>\s*Sunday: Emergency Only/g, '(Open all 7 days)'],
    // index.html quick info strip
    [/Mon-Fri: 9 AM-1 PM, 5-9 PM<br>Sat: 10 AM-2 PM, 6-9 PM/g, 'Mon–Sun: 8–12 AM, 6–10 PM'],
    [/Mon-Fri: 9 AM – 9 PM/g, 'Mon–Sun: 8 AM–12 PM, 6–10 PM'],
    // book.html saturday note
    [/ℹ️ Saturday morning: 10 AM – 2 PM \| Evening: 6 PM – 9 PM/g, 'ℹ️ All days: Morning 8 AM – 12 PM | Evening: 6 PM – 10 PM'],
    // book.html optgroup labels
    [/Morning Session \(Starts 9 AM \/ Sat 10 AM\)/g, 'Morning Session (8 AM – 12 PM)'],
    [/Morning Session \(9 AM – 1 PM\)/g, 'Morning Session (8 AM – 12 PM)'],
    [/Evening Session \(5 PM – 9 PM\)/g, 'Evening Session (6 PM – 10 PM)'],
    // book.html options
    [/<option value="9:00 AM">9:00 AM<\/option>/g, ''],
    [/<option value="9:30 AM">9:30 AM<\/option>/g, ''],
    [/<option value="1:00 PM">1:00 PM<\/option>\s*<option value="1:30 PM">1:30 PM<\/option>/g, ''],
    [/<option value="5:00 PM">5:00 PM<\/option>/g, ''],
    [/<option value="5:30 PM">5:30 PM<\/option>/g, ''],
];

htmlFiles.forEach(file => {
    const filePath = path.join(directory, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');
    textReplacements.forEach(([pattern, replacement]) => {
        html = html.replace(pattern, replacement);
    });
    fs.writeFileSync(filePath, html);
    console.log('Text updated in ' + file);
});

// ============================================================
// 5. Patch the book.html morning options to start at 8:00 AM
// ============================================================
const bookPath = path.join(directory, 'book.html');
let bookHtml = fs.readFileSync(bookPath, 'utf8');

// Replace the entire morning optgroup with correct 8:00 AM options
bookHtml = bookHtml.replace(
    /<optgroup label="🌅 Morning Session \(8 AM – 12 PM\)">[\s\S]*?<\/optgroup>/,
    `<optgroup label="🌅 Morning Session (8 AM – 12 PM)">
                                    <option value="8:00 AM">8:00 AM</option>
                                    <option value="8:30 AM">8:30 AM</option>
                                    <option value="9:00 AM">9:00 AM</option>
                                    <option value="9:30 AM">9:30 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="10:30 AM">10:30 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="11:30 AM">11:30 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                </optgroup>`
);

// Replace evening optgroup
bookHtml = bookHtml.replace(
    /<optgroup label="🏙 Evening Session \(6 PM – 10 PM\)">[\s\S]*?<\/optgroup>/,
    `<optgroup label="🌆 Evening Session (6 PM – 10 PM)">
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="6:30 PM">6:30 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="7:30 PM">7:30 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="8:30 PM">8:30 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                    <option value="9:30 PM">9:30 PM</option>
                                </optgroup>`
);
fs.writeFileSync(bookPath, bookHtml);
console.log('Patched book.html options');

console.log('\n✅ Schedule reset complete: Mon–Sun, 8–12 AM & 6–10 PM across all files.');
