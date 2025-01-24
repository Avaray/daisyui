import fs from 'node:fs';
import path from 'node:path';

// Path to the directory containing the JSON files
// This will work with Bun, not with Deno and Node
const directory = __dirname;

// Helper function to check if a value is a single word
const isSingleWord = (value: string): boolean => value.trim().split(/\s+/).length === 1;

// Check if the -s flag is provided (summary)
// Summary prints the summary that looks like this:
// AR 88%, BN 92%, DE 92%, ES 85%, FA 85%, FR 85%, ...
const isSummaryMode = process.argv.includes('-s');

try {
  // Load the base English file
  const baseFile = path.join(directory, 'en.json');
  const baseData = JSON.parse(fs.readFileSync(baseFile, 'utf-8'));

  // Object to store summary data
  const summary: { [key: string]: string } = {};

  // Iterate over all files in the directory
  fs.readdirSync(directory).forEach((filename) => {
    if (filename.endsWith('.json') && filename !== 'en.json') {
      const filePath = path.join(directory, filename);

      // Load the translation file
      const translationData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      // Calculate the number of keys that are different from the base file
      let totalKeys = 0, differentKeys = 0;

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
      const percentageTranslated = 100 - Math.floor(percentageDifferent);

      // Store the summary data
      const languageCode = filename.split('.')[0].toUpperCase();
      summary[languageCode] = `${percentageTranslated}%`;

      // If not in summary mode, update the __status field in the translation file
      if (!isSummaryMode) {
        translationData['__status'] = `${percentageTranslated}%`;

        // Save the updated translation file with LF line endings and an empty line at the end
        const updatedContent = JSON.stringify(translationData, null, 2) + '\n';
        fs.writeFileSync(filePath, updatedContent, { encoding: 'utf-8' });
      }
    }
  });

  if (isSummaryMode) {
    // Print the summary in the desired format
    const summaryString = Object.entries(summary)
      .map(([lang, percent]) => `${lang} ${percent}`)
      .join(', ');
    console.log(summaryString);
  } else {
    console.log('All files have been updated.');
  }
} catch (error) {
  console.error('An error occurred:', error);
  // Exit with a non-zero status code to indicate an error
  // This should stop GitHub Actions from taking next steps
  process.exit(1);
}
