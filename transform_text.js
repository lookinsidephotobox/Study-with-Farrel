const fs = require('fs');

const file = 'd:\\Metopen\\metopen_isian.html';
let content = fs.readFileSync(file, 'utf8');

const bankRegex = /const bank = (\[[\s\S]*?\]);/m;
const match = content.match(bankRegex);

if (match) {
    const bankStr = match[1];
    let bank = eval(bankStr);

    bank = bank.map(q => {
        // Fix "adalah..." to "adalah..." -> "adalah " or similar
        // Or "bentuk..." to "bentuk ... ?"

        let newText = q.text.replace(/\.\.\.$/, "..."); // If it just ends with ..., let's make it a question.

        if (newText.endsWith("...")) {
            // Replace ... with " ___."
            newText = newText.substring(0, newText.length - 3) + " ...";
        }

        return {
            ...q,
            text: newText
        };
    });

    const newBankStr = "const bank = " + JSON.stringify(bank, null, 4) + ";";
    content = content.replace(bankRegex, newBankStr);

    fs.writeFileSync(file, content);
    console.log("Successfully replaced bank array.");
} else {
    console.log("Could not find bank array.");
}
