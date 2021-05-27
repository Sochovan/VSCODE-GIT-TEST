// algo

// 1. Create methods - they record input message in memory with the definite type
//  1.1 create empty array;
//  1.2 crete record;
//  1.3 push record to array;
// 2. Create method - input type of message -> create array with this type of message, sorted by the creating Date
//   2.1.if str = undefined -> return the hole array sorted by creating date;
//   2.2 check if the input string = type of message
//   2.3 create array of messages with definite type

const createLogger = () => {
  let arr = [];
  const warn = message =>
    arr.push({
      message: message,
      dateTime: new Date(),
      type: 'warn',
    });
  const log = message =>
    arr.push({
      message: message,
      dateTime: new Date(),
      type: 'log',
    });
  const error = message =>
    arr.push({
      message: message,
      dateTime: new Date(),
      type: 'error',
    });

  const getRecords = str => {
    if (str === undefined) {
      return arr.sort((a, b) => b.dateTime - a.dateTime);
    }
    return arr.filter(elem => elem.type === str).sort((a, b) => b.dateTime - a.dateTime);
  };

  return {
    warn,
    log,
    error,
    getRecords,
  };
};

export { createLogger };

const logger = createLogger();
console.log(logger.warn('User try to restricted page'));

console.log(logger.log('User logged in'));

console.log(logger.warn('Unexpected error on the site'));
console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
