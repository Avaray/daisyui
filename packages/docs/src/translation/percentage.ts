import fs from 'node:fs';
import path from 'node:path';

// Path to the directory containing the JSON files
// This will work with Bun, not with Deno and Node
const directory = __dirname;

// Load the base English file
const baseFile = path.join(directory, 'en.json');
const baseData = JSON.parse(fs.readFileSync(baseFile, 'utf-8'));

// Helper function to check if a value is a single word
const isSingleWord = (value: string): boolean => value.trim().split(/\s+/).length === 1;

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
      if (key.startsWith('__')) continue; // Skip metadata keys

      totalKeys += 1;

      // Check if the key exists in the translation file
      if (key in translationData) {
        const translationValue = translationData[key];

        // If the value is the same as the base value and it's a single word, skip it
        if (typeof translationValue === 'string' && translationValue === value && isSingleWord(value)) continue;

        // If the value is the same as the base value, count it as different
        if (translationValue === value) differentKeys += 1;

      } else {
        // If the key is missing, count it as different
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

    console.log(`${filename.split('.')[0].toUpperCase()}: ${translationData['__status']}`);
  }
});

console.log('All files have been updated.');
