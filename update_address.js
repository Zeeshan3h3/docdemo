const fs = require('fs');
const path = require('path');

const directory = 'c:/ROAD TO 1L/clinic';

fs.readdirSync(directory).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(directory, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        let originalContent = content;

        // Replace general address strings
        content = content.replace(/📍 6, Picnic Garden 3rd Lane, Kolkata - 700039/g, '📍 147A, 1B, Picnic Garden Rd, Tiljala, Kolkata, West Bengal 700039');

        // JSON-LD schema
        content = content.replace(/"streetAddress":\s*"6, Picnic Garden 3rd Lane"/g, '"streetAddress": "147A, 1B, Picnic Garden Rd, Tiljala"');

        // contact.html multi-line address
        content = content.replace(/6, Picnic Garden 3rd Lane,<br>\s*Kolkata - 700039,<br>\s*West Bengal, India/g, '147A, 1B, Picnic Garden Rd,<br>Tiljala, Kolkata 700039,<br>West Bengal, India');

        // about.html inline address
        content = content.replace(/6, Picnic Garden 3rd Lane, Kolkata - 700039/g, '147A, 1B, Picnic Garden Rd, Tiljala, Kolkata, West Bengal 700039');

        // index.html visiting card address
        content = content.replace(/<strong>Residence :<\/strong> 6, Picnic Garden 3rd lane,<br>Kolkata-700039/g, '<strong>Address :<\/strong> 147A, 1B, Picnic Garden Rd,<br>Tiljala, Kolkata 700039');

        // index.html inner body 
        content = content.replace(/📍 6, Picnic Garden 3rd Lane, Kolkata - 700039/gi, '📍 147A, 1B, Picnic Garden Rd, Tiljala, Kolkata 700039');

        // contact.html other mis-matched addresses
        content = content.replace(/149, Picnic Garden 2nd Lane/g, '147A, 1B, Picnic Garden Rd');

        // any remaining 6, Picnic Garden 3rd Lane
        content = content.replace(/6, Picnic Garden 3rd Lane/gi, '147A, 1B, Picnic Garden Rd');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log('Updated ' + file);
        }
    }
});
