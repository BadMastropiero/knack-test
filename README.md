## Remove Duplicates From Mock Knack Application Schema

This bundles a script to remove duplicates from a Knack application schema.

The utility function `removeDuplicates` used, will remove duplicate fields and objects from the given application
object, and output a new sanitized version.

On arrays the duplication decision is based on a selected key.
The preferred item will be the last one,
similar to the js way of parsing json files
(the last key is the one that gets to decide the value in object).

### Usage

```bash
npm install
```

```bash
npm run start "your_path_to_input_app.json" "your_path_to_output_app.json"
```
