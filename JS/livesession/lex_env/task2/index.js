// export const createLogger = () => {
//   const arrWarn = [];
//   function warn(stringWarn) {
//     arrWarn.push({ message: stringWarn, dateTime: new Date(), type: 'warn' });
//     return arrWarn;
//   }
//   const arrError = [];
//   function error(stringError) {
//     arrError.push({
//       message: stringError,
//       dateTime: new Date(),
//       type: 'error',
//     });
//     return arrError;
//   }
//   const arrLog = [];
//   function log(stringLog) {
//     arrLog.push({
//       message: stringLog,
//       dateTime: new Date(),
//       type: 'log',
//     });
//     return arrLog;
//   }
//   function getRecords(text) {
//     if (text == 'warn') {
//       const resWarn = [...arrWarn].sort((a, b) => b.dateTime - a.dateTime);
//       return resWarn;
//     }
//     if (text == 'error') {
//       const resError = [...arrError].sort((a, b) => b.dateTime - a.dateTime);
//       return resError;
//     }
//     if (text == 'log') {
//       const resLog = [...arrLog].sort((a, b) => b.dateTime - a.dateTime);
//       return resLog;
//     }
//     if (text == null) {
//       const arr = arrWarn.concat(arrError, arrLog);
//       const res = [...arr].sort((a, b) => b.dateTime - a.dateTime);
//       return res;
//     }
//     if (text !== 'warn' && text !== 'error' && text !== 'log') {
//       return [];
//     }
//   }
//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// };

// input: string;
// output: undefined;

// --------------------------------------------------------------------
// option 2

const createLogger = () => {
  // lex env
  // {
  //   warn
  //   error
  //   log
  //   getrecords
  //   messages
  // }
  const messages = [];
  function warn(stringWarn) {
    messages.push({ message: stringWarn, dateTime: new Date(), type: 'warn' });
  }

  const arrError = [];
  function error(stringError) {
    messages.push({
      message: stringError,
      dateTime: new Date(),
      type: 'error',
    });
  }
  const arrLog = [];
  function log(stringLog) {
    messages.push({
      message: stringLog,
      dateTime: new Date(),
      type: 'log',
    });
  }
  // input: string
  // output: array

  function getRecords(text) {
    if (text) {
      messages.filter(message => message.type === text);
    }

    return (text ? messages.filter(message => message.tyoe === text) : [...messages]).sort(
      (a, b) => b.dateTime - a.dateTime,
    );
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger1 = createLogger();
console.log(logger1);
logger1.error('saasadadsd');
logger1.error('hello');
logger1.log('some log');

console.log(logger1.getRecords('error'));

console.log(logger1.getRecords('qrwwr3r'));
// console.log(logger.warn('User try to restricted page'));

// console.log(logger.log('User logged in'));

// console.log(logger.warn('Unexpected error on the site'));
// console.log(logger.getRecords());
// console.log(logger.getRecords('log'));
// console.log(logger.getRecords('error'));
// console.log(logger.getRecords('warn'));
