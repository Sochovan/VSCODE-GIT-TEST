// const requestUserData = userId => {
//   const request = new Promise((resolve, reject) => {
//     if (userId === 'broken') {
//       setTimeout(() => {
//         reject(new Error('User not found'));
//       }, 500);
//     } else {
//       setTimeout(() => {
//         resolve({
//           name: 'John',
//           age: 17,
//           email: `${userId}`,
//           userId,
//         });
//       }, 1000);
//     }
//   });
//   return request;
// };

// // requestUserData('broken-1')
// //   .then(data => console.log(data))
// //   .catch(error => console.log(error))
// //   .finally(() => console.log('finally'));

// // тоже самое через then который принимает 2 аргумента:
// // requestUserData('broken-1')
// //   .then(
// //     data => console.log(data),
// //     error => console.log(error),
// //   )
// //   // .catch(error => console.log(error))
// //   .finally(() => console.log('finally'));

// // requestUserData('broken-1').then(data => console.log(data));

// // =======================================================
// // чтобы цепочка промисов правильно отрабатывала и после ошибки не сработал then добавляем выброс ошибки через throw
// requestUserData('broken')
//   .catch(error => {
//     console.log(error);
//     throw new Error('Error');
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//   .finally(() => console.log('finally'));

const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          email: `${userId}777@example.com`,
          userId: `${userId}`,
        });
      }, 1000);
    }
  });
  return request;
};

requestUserData('userid777')
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('finally'));
