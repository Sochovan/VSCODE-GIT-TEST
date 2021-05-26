// //messenger

// // let message = 'Just learn it!';

// const createMessenger = () => {
//     let message = 'Just learn it!';

//     function sendMessage(name) {
//         const sender = 'Gromecode';
//         console.log(`${name}, ${message}. Your ${sender}`);
//     }

//     function setMessage(text) {
//         message = text;
//     }
//     return {
//         sendMesssage: sendMessage, //sendMessage
//         setMessage: setMessage, //setMessage потому что одинаковый ключ и значение
//     };
// };

// const messenger1 = createMessenger();

// messenger1.sendMesssage('Bob'); //Bob, Hi!. You Gromecode

// const messenger2 = createMessenger();
// messenger2.sendMesssage('Tom'); //Tom, Hi!. You Gromecode

// messenger2.setMessage('Hello!');
// messenger1.sendMesssage('Ann'); //Ann, Hello!. You Gromecode - потому что функция сохраняет ссылку на внешнее лексическое окружение в момент ее объявления

// //если перенести let message = 'Hi!' внутрь функции createMessage, то
// // Ann, Hi!. You Gromecode



let message = 'Just learn it!';
let sender = 'Gromcode';

const createMessenger = () => {



    function sendMessage(name) {

        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }

    function setSender(sign) {
        sender = sign;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    };

};


// export default createMessenger;

const messenger1 = createMessenger();

messenger1.sendMessage('Bob');

const messenger2 = createMessenger();
messenger2.setMessage('Good job!');
messenger1.sendMessage('Bob');

const messenger3 = createMessenger();

messenger3.setSender('Gromcode1');
messenger1.sendMessage('Bob');