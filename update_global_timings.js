const fs = require('fs');
const path = require('path');

const directory = 'c:/ROAD TO 1L/clinic';

// 1. Update utils.js structure
const utilsPath = path.join(directory, 'js', 'utils.js');
let utilsCode = fs.readFileSync(utilsPath, 'utf8');
utilsCode = utilsCode.replace(
    /const CLINIC_SCHEDULE = {[^}]+};/s,
    `const CLINIC_SCHEDULE = {
  0: [], // Sunday
  1: [[9, 0, 13, 0], [17, 0, 21, 0]],   // Monday
  2: [[9, 0, 13, 0], [17, 0, 21, 0]],   // Tuesday
  3: [],                                // Wednesday
  4: [[9, 0, 13, 0], [17, 0, 21, 0]],   // Thursday
  5: [[9, 0, 13, 0], [17, 0, 21, 0]],   // Friday
  6: [[10, 0, 14, 0], [18, 0, 21, 0]],  // Saturday
};`);
fs.writeFileSync(utilsPath, utilsCode);
console.log('Updated utils.js');

// 2. Format Table for timings.html and index.html
const updatedTableRows = `
            <tr data-day="1">
              <td>Monday</td>
              <td><span class="time-slot">🕘 9:00 AM – 1:00 PM</span></td>
              <td><span class="time-slot">🕔 5:00 PM – 9:00 PM</span></td>
            </tr>
            <tr data-day="2">
              <td>Tuesday</td>
              <td><span class="time-slot">🕘 9:00 AM – 1:00 PM</span></td>
              <td><span class="time-slot">🕔 5:00 PM – 9:00 PM</span></td>
            </tr>
            <tr data-day="3">
              <td>Wednesday</td>
              <td colspan="2" class="text-center"><span class="badge" style="background:#fee2e2;color:#991b1b;">Closed</span></td>
            </tr>
            <tr data-day="4">
              <td>Thursday</td>
              <td><span class="time-slot">🕘 9:00 AM – 1:00 PM</span></td>
              <td><span class="time-slot">🕔 5:00 PM – 9:00 PM</span></td>
            </tr>
            <tr data-day="5">
              <td>Friday</td>
              <td><span class="time-slot">🕘 9:00 AM – 1:00 PM</span></td>
              <td><span class="time-slot">🕔 5:00 PM – 9:00 PM</span></td>
            </tr>
            <tr data-day="6">
              <td>Saturday</td>
              <td><span class="time-slot">🕙 10:00 AM – 2:00 PM</span></td>
              <td><span class="time-slot">🕕 6:00 PM – 9:00 PM</span></td>
            </tr>
            <tr data-day="0">
              <td>Sunday</td>
              <td colspan="2" class="text-center"><span class="badge" style="background:#fef3c7;color:#92400e;">Emergency Only</span></td>
            </tr>`;

['timings.html', 'index.html'].forEach(file => {
    const filePath = path.join(directory, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // Replace the old table body content
    const tbodyRegex = /<tbody id="timings-body">.*?<\/tbody>/s;
    html = html.replace(tbodyRegex, `<tbody id="timings-body">${updatedTableRows}\n          </tbody>`);

    fs.writeFileSync(filePath, html);
    console.log('Updated table in ' + file);
});

// Update index.html Quick Info Strip
let indexHtml = fs.readFileSync(path.join(directory, 'index.html'), 'utf8');
indexHtml = indexHtml.replace(/<h4>OPD Hours<\/h4>\s*<p>Mon-Fri: 9 AM – 9 PM<\/p>/, `<h4>OPD Hours</h4>
            <p style="font-size:14px; line-height:1.4;">Mon-Fri: 9 AM-1 PM, 5-9 PM<br>Sat: 10 AM-2 PM, 6-9 PM</p>`);
fs.writeFileSync(path.join(directory, 'index.html'), indexHtml);

// 3. Update book.html labels and options
const bookPath = path.join(directory, 'book.html');
let bookHtml = fs.readFileSync(bookPath, 'utf8');
bookHtml = bookHtml.replace(/<optgroup label="🌅 Morning Session \(9 AM – 1 PM\)">/, `<optgroup label="🌅 Morning Session (Starts 9 AM / Sat 10 AM)">`);
// Add 1:00 PM and 1:30 PM
bookHtml = bookHtml.replace(/<option value="12:30 PM">12:30 PM<\/option>/, `<option value="12:30 PM">12:30 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="1:30 PM">1:30 PM</option>`);
fs.writeFileSync(bookPath, bookHtml);
console.log('Updated book.html');

console.log('Timings global update complete.');
