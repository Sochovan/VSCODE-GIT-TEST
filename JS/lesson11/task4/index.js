const countOccurrences = (text = '', str) => {
    if (str.length === 0) {
        return null;
    }
    let a = text.toLocaleUpperCase();
    let b = str.toLocaleUpperCase();
    let resArray = [];

    for (let i = 0; i < a.length; i++) {

        let index = a.indexOf(b, i);
        if (index !== -1) {
            resArray.push(index);
            i = index;
        }
    }
    return resArray.length;
};



// const text = 'I am afraid of i am because i am';
// const str = 'I am'
// let arr = [];
// console.log(text.toLocaleUpperCase().match(/str.toLocaleUpperCase()/g));

console.log(countOccurrences('I am afraid of i am because i am', 'I am'))

// console.log(("str1,str2,str3,str4".match(/,/g) || []).length); //logs 3