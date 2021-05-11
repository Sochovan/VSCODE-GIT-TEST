//put your code here
function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let uniq = [...new Set(array)]
    return uniq;
}
removeDuplicates([1, 4, 1, 8, 8, 4, 5, 9, 0]);