// Strings
// text template
// const text = 'message';

// const myMessage = `
// The text is ${text.toLocaleUpperCase()},
// And something else.
// `;

// console.log(myMessage); // The text is MESSAGE,
// // And something else.

// ------------------------------------------------------------
// \n
// const text = 'message';

// const myMessage = '
// The text is $ { text.toLocaleUpperCase() }, \nAnd something
// else .

// ';

// console.log(myMessage); // The text is ${text.toUppercase()},
// // And something else.
// ---------------------------------------------------------------------

// const text = 'message';

// const myMessage = `
// The text is ${text.toLocaleUpperCase()},
// And something else.
// `;

// console.log(text[0]); // m;
// console.log(text[text.length - 1]); // e;
// console.log(text[text.length]); //undefined;

// console.log(text.charAt(text.length)); // '';

// text[2] = 'Q'; // message;

// ----------------------------------------------------------------------

// Сходство с массивами - методы
//     .concat(); // 'text'.concat('asd') === 'textasd';
// .includes();
// .indexOf();
// .lastIndexOf();
// .length

// Доступ по индексу

// const name = 'John';
// console.log(name[1]); // 'o';

// Преобразование к массиву символов
// const name = 'John';
// console.log(name.split(''); //['J', 'o', 'h', 'n'])

// Еще методы--------------------------------------------------------------------

// 'text text'.indexOf('te'); //0;
// 'text text'.lastIndexOf('te'); //5;
// 'text text'.match(/text/g); //['text', 'text'];
// 'text text'.search(/text/g); // ['text', 'text'];
// 'text text'.includes('te'); //true;
// 'text text'.startsWith('te'); //true;
// 'text text'.endsWith('xt'); //true;
// 'text text'.charAt(3); //t;
// 'text text'.charCodeAt(3); //116

// 'some'.concat('text'); // 'some text';
// 'text '.repeat(2); // 'text text ';
// 'text'.replace(/t/g, 'T'); // 'TexT';
// '  text  '.trim(); // 'text';
// 'some text'.split(' '); //['some', 'text'];
// 'some text'.slice(2, 6); //'me t; можно задать отрицательные значения, если -2, то начнет считывать с конца строки
// 'some text'.substr(2, 3); // 'me ';
// 'some text'.substring(2, 3); //'m';
// 'some text'.toLocaleUpperCase;
// 'some text'.toLocaleLowerCase;

// задача--------------------------------------------------------------------------

// "Lorem ipsum is simply dummy text ever of the printing and typesetting has been the industrys standard dummy text ever since the 1500s,"

//splitText

//splitString('abcd efgh', 4)=> 'Abcd\n efg\nH'];
// 1. 'abcdefg', 4 => ['abcd', 'efg'] => ['Abcd', 'Efg']
// => 'Abcd/nEgf'

// const splitText = (text, len) => {
//     const strArr = [];
//     let startPosition = 0;

//     while (true) {
//         let chunk = text.substr(0, len);

//         if (chunk.length === 0) {
//             break;
//         }
//         strArr.push(chunk[0].toLocalUpperCase() + chunk.slice(1))
//         startPosition += len;


//     }
//     return strArr.join('\n');
// };

// console.log(splitText('abcdefg', 4));


const splitText = (str, num = 10) => {

    if (typeof str !== 'string') {
        return null;
    }

    let strArr = [];
    let startPosition = 0;

    while (true) {
        let chunk = str.substr(startPosition, num);
        if (chunk.length === 0) {
            break;
        }
        strArr.push(chunk[0].toLocaleUpperCase() + chunk.slice(1));
        startPosition += num;
    }
    return strArr.join('\n');
}


console.log(splitText('abcdefg'));