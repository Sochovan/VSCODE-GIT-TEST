const createLogger = () => {
  const arr = [];

  function warn(message) {
    arr.push({ message: message, dateTime: new Date(), type: 'warn' });
    console.log(arr);
  }

  function log(message) {
    arr.push({ message: message, dateTime: new Date(), type: 'log' });
    console.log(arr);
  }

  function error(message) {
    arr.push({ message: message, dateTime: new Date(), type: 'error' });
    console.log(arr);
  }

  function getRecords(type) {
    arr.filter();
  }
  return {
    warn,
    log,
    error,
    getRecords,
  };
};

const logger = createLogger();
logger.warn('User try to restricted page');
const logger2 = createLogger();
logger2.log('User logged in');

// let message = 'Just learn it';

// function sendMessage(name) {
//   const sender = 'Gromcode';
//   console.log(`${name}, ${message}! Your ${sender}`);
// }

// function setMessage(text) {
//   message = text;
// }

// setMessage('Good job');
// sendMessage('Ann');

// const logger = createLogger();
// logger.log('User logged in');
// logger.warn('User try to restricted page');
// logger.log('User logged out');
// logger.error('Unexpected error on the site');
// logger.getRecords();

// const createLogger = () => {
//   let arr = [];
//   let dateTime = new Date();

//   const warn = message =>
//     arr.push('message: ' + message + ', dateTime: ' + dateTime + ', type: warn');

//   const log = message =>
//     arr.push('message: ' + message + ', dateTime: ' + dateTime + ', type: log');

//   const error = message =>
//     arr.push('message: ' + message + ', dateTime: ' + dateTime + ', type: error');

//   return {
//     warn,
//     log,
//     error,
//   };
// };

// ------------------------------------------------------------------------------
// algo-----------------------------
// 1.

// const createLogger = () => {
//   const arr = [];
//   let message = 'Hi, ';

//   function warn(text) {
//     let type = 'warn';
//     arr.push({ message: message, dateTime: new Date(), type: type });
//     console.log(arr);
//   }

//   function log() {
//     let type = 'log';
//     arr.push({ message: message, dateTime: new Date(), type: type });
//     console.log(arr);
//   }

//   function error() {
//     let type = 'error';
//     arr.push({ message: message, dateTime: new Date(), type: type });
//     console.log(arr);
//   }

//   function getRecords(type) {
//     arr.filter();
//   }
//   return {
//     warn,
//     log,
//     error,
//     getRecords,
//   };
// };

// console.log(createLogger());
