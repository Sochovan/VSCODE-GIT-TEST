//put your code here
const reverseString = str => {
    if (typeof str !== 'string') {
        return null;
    }
    let array = str.split('');
    let reverse = array.reverse();
    return reverse.join('');
}
console.log(reverseString('abcdefghijklmno'));