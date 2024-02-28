const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src/'); // Cambia esto a la ruta de tu proyecto

function simplifyText(text) {
    const prepositions = ["de", "a", "en", "y", "o", "la", "el", "los", "las"];
    let simplifiedText = text.toLowerCase().replace(/\s*\n\s*/g, ' ').replace(/-->/g, '').replace(/&nbsp;/g, ' ').split(' ').filter(word => !prepositions.includes(word));
    simplifiedText = simplifiedText.slice(0, 5).join('-'); // solo toma las primeras 5 palabras
    simplifiedText = simplifiedText.replace(/[^a-z0-9-]/g, ''); // quita los símbolos que no sean letras o números básicos
    simplifiedText = simplifiedText.replace(/-+/g, '-'); // reemplaza múltiples guiones seguidos por un solo guión
    simplifiedText = simplifiedText.endsWith('-') ? simplifiedText.slice(0, -1) : simplifiedText; // quita el guión al final si lo hay
    return simplifiedText;
}

function extractAndReplaceTexts(directoryPath) {
    let texts = {};

    fs.readdirSync(directoryPath).forEach((file) => {
        let fullPath = path.join(directoryPath, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            texts = {...texts, ...extractAndReplaceTexts(fullPath)};
        } else if (path.extname(fullPath) === '.html') {
            let data = fs.readFileSync(fullPath, 'utf8');
            const regex = />([^<]+)</g;
            let match;
            while ((match = regex.exec(data)) !== null) {
                let text = match[1].trim();
                if (text && !text.includes('{{') && !text.includes('}}') && !text.includes('-->') && !text.includes('&nbsp;') && !text.includes('&&') && !text.includes('==')) { // descarta los textos que contengan etiquetas como {{}}, -->, &nbsp;, && y ==
                    text = text.replace(/\s*\n\s*/g, ' ').replace(/\s+/g, ' '); // reemplaza los saltos de línea y espacios consecutivos por un solo espacio
                    let simplifiedText = simplifyText(text);
                    texts[simplifiedText] = text;
                    data = data.replace(text, `{{ "${simplifiedText}" | i18n }}`);
                }
            }
            fs.writeFileSync(fullPath, data);
        }
    });

    return texts;
}

const texts = extractAndReplaceTexts(directoryPath);
fs.writeFileSync('../src/i18n/es.json', JSON.stringify(texts, null, 2));