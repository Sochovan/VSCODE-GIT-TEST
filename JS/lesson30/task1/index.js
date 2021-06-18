// Промисы

// Callback hell
// Promise
// Подписка на Promise
// Цепочка промиссов

// Callback hell

// const promiseObj = new Promise((resolve, reject) => {
//   //executor code
// });

// // любой другой код приложния

// promiseObj.then(onSuccess, onError);
// promiseObj.then(onSuccess); // промис перешел в статус 'fullfilled';
// promiseObj.catch(onError); //промис перешел в статус "rejected"
// promiseObj.finally(finallyHandler); //промис перешел в завершенное состояние ('fulfilled' или 'rejected')

const addImageWithPromise = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const container = document.querySelector('.page');
    const imgElem = document.createElement('img');

    container.append(imgElem);

    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });

  return p;
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const result = addImageWithPromise(imgSrc);
console.log(result);

// const onImageLoaded = (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const { width, height } = data;
//   const sizeElem = document.querySelector('.image-size');
//   sizeElem.textContent = `${width} x ${height}`;
// };

// const imgSrc =
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// addImage(imgSrc, onImageLoaded);
