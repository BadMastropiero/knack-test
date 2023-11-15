function getArrayItemKey(item, id_field) {
    // Create a hash based on a specific field (e.g., "id" or "name") within each array element
    return item[id_field] || JSON.stringify(item);
}

/**
 *
 * @param obj Object to remove duplicates from
 * @param id_field Field to use as a hash for each array element, fallbacks to JSON.stringify
 * @returns {*|*[]|{}} Object without duplicates
 */
function removeDuplicates(obj, id_field) {
    if (!Array.isArray(obj) && typeof obj !== 'object') return obj;

    const nobj = Array.isArray(obj) ? [] : {};

    // Iterate over each key in the object
    for (const ikey in obj) {
        if (!obj.hasOwnProperty(ikey)) continue

        const value = obj[ikey];

        const key = Array.isArray(obj) ? getArrayItemKey(value, id_field) : ikey;

        // If the value is an array or an object, call the function recursively
        if (Array.isArray(obj)) {
            const index =
                nobj.findIndex(item =>
                    getArrayItemKey(item, id_field) === getArrayItemKey(value, id_field)
                );
            if (index !== -1) {
                nobj[index] = removeDuplicates(value, id_field);
                continue;
            }

            nobj.push(removeDuplicates(value, id_field));
            continue;
        }

        nobj[ikey] = removeDuplicates(value, id_field);
    }

    return nobj;
}

module.exports = removeDuplicates;