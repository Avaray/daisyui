import fs from 'node:fs';
import path from 'node:path';

// Path to the directory containing the JSON files
const directory = './';

// Load the base English file
const baseFile = path.join(directory, 'en.json');
const baseData = JSON.parse(fs.readFileSync(baseFile, 'utf-8'));

// Iterate over all files in the directory
fs.readdirSync(directory).forEach((filename) => {
  if (filename.endsWith('.json') && filename !== 'en.json') {
    const filePath = path.join(directory, filename);

    // Load the translation file
    const translationData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Calculate the number of keys that are different from the base file
    let totalKeys = 0;
    let differentKeys = 0;

    for (const [key, value] of Object.entries(baseData)) {
      if (key.startsWith('__')) { // Skip metadata keys
        continue;
      }
      totalKeys += 1;
      if (!(key in translationData) || translationData[key] === value) {
        differentKeys += 1;
      }
    }

    // Calculate the percentage of keys that are different
    const percentageDifferent = totalKeys > 0 ? (differentKeys / totalKeys) * 100 : 0;

    // Update the __status field in the translation file
    translationData['__status'] = `${100 - Math.floor(percentageDifferent)}%`;

    // Save the updated translation file with LF line endings and an empty line at the end
    const updatedContent = JSON.stringify(translationData, null, 2) + '\n';
    fs.writeFileSync(filePath, updatedContent, { encoding: 'utf-8' });

    console.log(`Updated ${filename} with status: ${translationData['__status']}`);
  }
});

console.log('All files have been updated.');
