/* eslint-disable */

/*
enviroment record;

globallexEnv = {
  enviromentRecord: {
  message: 'Test,
  weight: 50,
...
},
outterLexEnv: null

}

forLexEnv = {
   enviromentRecord: {
     index: 0,
     message: 'hello',
},
outterLexEnv: globalLexEnv
}

enviroment record;

createmessangerlexEnv = {
  enviromentRecord: {
    message = 'Just learn it',
    sender = 'Gromcode',
    sendMessenger: func
...
},
outterLexEnv: globalLexEnv

}
runLevEnv = {
enviromentRecord: {
  ...

},
outterLexEnv: globalLexEnv
}

*/

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

{
}

for (let index = 0; index < 5; index++) {
  let message = 'hello';
  console.log(message);
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
const messanger2 = createMessenger();

messanger1.setSender('TestSender');
messanger1.sendMessage('andrew');

messanger2.sendMessage('Andrew');
run();
