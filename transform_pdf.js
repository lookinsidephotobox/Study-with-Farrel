const fs = require('fs');
let content = fs.readFileSync('d:/Metopen/metopen_isian.html', 'utf8');

// Replace the dotted line with a large box
content = content.replace(
    '<div style="padding-left: 1.5rem; border-bottom: 1px dotted #ccc; height: 1.5rem; width: 90%;"></div>',
    '<div style="border: 1px solid #aaa; border-radius: 4px; height: 6rem; width: 100%; background: #fdfdfd; margin-top: 0.5rem;"></div>'
);

content = content.replace(
    '<p style="font-weight: bold; margin-bottom: 0.5rem;">${i + 1}. ${q.text}</p>',
    '<p style="font-weight: bold; margin-bottom: 0.5rem; line-height: 1.4; font-size: 1.05rem;">${i + 1}. ${q.text}</p>'
);

fs.writeFileSync('d:/Metopen/metopen_isian.html', content);
console.log('PDF box replaced!');
