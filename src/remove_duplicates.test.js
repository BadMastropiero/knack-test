const fs = require("fs");
const removeDuplicates = require('./remove_duplicates');

const invalid = "src/tests_assets/mock_application.json";
const valid = "src/tests_assets/clean_application.json";

const valid_data = JSON.parse(fs.readFileSync(valid, 'utf8'));
const invalid_data = JSON.parse(fs.readFileSync(invalid, 'utf8'));

test('remove duplicates should remove items with same name in arrays', () => {
    expect(JSON.stringify(removeDuplicates(invalid_data, "name")).trim()).toBe(JSON.stringify(valid_data));
});