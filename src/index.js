// Removes duplicated fields in json object
// Usage: node src/index.js <input_file> <output_file>
// Example: node src/index.js ./input.json ./output.json
const fs = require('fs');
const removeDuplicates = require('./remove_duplicates');

const input = process.argv[2];

const output = process.argv[3];

const data = JSON.parse(fs.readFileSync(input, 'utf8'));

fs.writeFileSync(output, JSON.stringify(removeDuplicates(data, 'name'), null, 2));

console.log('Done!');