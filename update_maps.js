const fs = require('fs');
const path = require('path');

const directory = 'c:/ROAD TO 1L/clinic';
const newUrl = 'https://www.google.com/maps/place/Cyber+Point/@22.5289484,88.3876756,21z/data=!4m6!3m5!1s0x3a0276b9f8d265f1:0x5fddfa31508e45bd!8m2!3d22.5290211!4d88.3877054';
const newIframe = 'https://maps.google.com/maps?q=22.5290211,88.3877054&z=18&output=embed';

['index.html', 'contact.html'].forEach(file => {
    const filePath = path.join(directory, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        let originalContent = content;

        // Replace the "dir" map links
        content = content.replace(/https:\/\/www\.google\.com\/maps\/dir\/\/6,\+Picnic\+Garden\+3rd\+Lane,\+Kolkata\+700039/g, newUrl);

        // Replace the iframe embed
        content = content.replace(/https:\/\/maps\.google\.com\/maps\?q=22\.5289616,88\.3873331&z=17&output=embed/g, newIframe);

        // Replace the search links
        content = content.replace(/https:\/\/www\.google\.com\/maps\/search\/6\+Picnic\+Garden\+3rd\+Lane\+Kolkata\+700039/g, newUrl);

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log('Updated Google Maps links in ' + file);
        }
    }
});
