const pickProps = (obj, props) => {
    let newObj = {},
        key;
    for (let key in obj) {
        if (key.includes(props)) {
            newObj[key] = obj[key];
        }
    }

    return newObj;
};

const obj1 = { a: 1, b: 2, c: 3 };
const props1 = ['a', 'c', 'd', 'hex'];

console.log(pickProps(obj1, props1));