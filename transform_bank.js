const fs = require('fs');

const file = 'd:\\Metopen\\metopen_isian.html';
let content = fs.readFileSync(file, 'utf8');

// Use regex to locate the bank array
const bankRegex = /const bank = (\[[\s\S]*?\]);/m;
const match = content.match(bankRegex);

if (match) {
    const bankStr = match[1];
    // Evaluate the bank string to an actual array (since it's a JS object)
    const bank = eval(bankStr);

    const newBank = bank.map(q => {
        // Find the correct option text
        const correctText = q.options[q.correct].toLowerCase();

        // Generate some simplistic keywords from the correct option
        // Remove punctuation
        const clean = correctText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
        const words = clean.split(/\s+/).filter(w => w.length > 2); // get words longer than 2 chars

        let keywords = [...words];

        // Add the whole answer as a keyword phrase
        if (clean.length > 2 && !keywords.includes(clean)) {
            keywords.push(clean);
        }

        // Additional custom keywords to make it fuzzy
        if (q.id === "q14") keywords.push("sekunder", "bps", "jurnal");

        return {
            id: q.id,
            cat: q.cat,
            text: q.text,
            accepted_keywords: keywords,
            hint: q.hint,
            explanation: q.explanation
        };
    });

    const newBankStr = "const bank = " + JSON.stringify(newBank, null, 4) + ";";
    content = content.replace(bankRegex, newBankStr);

    fs.writeFileSync(file, content);
    console.log("Successfully replaced bank array.");
} else {
    console.log("Could not find bank array.");
}
