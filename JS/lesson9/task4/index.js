const obj = {
    'John Doe': 19,
    'Bob': 18,
}
const key = 'Ann';
const value = 37;

const obj1 = {};


/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {
    obj[key] = value;
    return obj;
}

// put your code here
function addPropertyV2(obj, key, value) {
    const copyObj = Object.assign({}, obj);
    copyObj[key] = value;
    return copyObj;
}
// put your code here
function addPropertyV3(obj, key, value) {
    const copyObj = Object.assign({}, obj);
    copyObj[key] = value;
    return copyObj;
}
// put your code here
function addPropertyV4(obj, key, value) {
    const copyObj = {...obj };
    copyObj[key] = value;
    return copyObj;
}
// examples
const transaction = {
    value: 170,
};
addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }


console.log(addPropertyV1(obj, key, value));
console.log(addPropertyV2(obj, key, value));
console.log(addPropertyV3(obj, key, value));
console.log(addPropertyV4(obj, key, value));