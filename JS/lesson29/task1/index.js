// Асинхронность в JavaScript
// JS однопоточный - выполняет одну операцию в единицу времени
// WebAPIs: DOM, setTimeout/setInterval; Event Loop, AJAX запросы к серверу, загрузка картинок/видео

// const buttonElem = document.querySelector('#button');

// buttonElem.addEventListener('click', () => console.log('Click'));
// let sum = 0;
// const startTime = new Date();
// console.log('Cycle started');
// for (let i = 0; i < 5e9; i++) {
//   sum += 1;
// }

// const endTime = new Date();
// console.log(`Cycle took ${endTime - startTime}ms`);

// ================================================================
// const addImage = (imgSrc, callback) => {
//   const imgElem = document.createElement('img');
//   console.dir(imgElem);
//   imgElem.setAttribute('alt', 'My Photo');
//   imgElem.src = imgSrc;
//   const containerElem = document.querySelector('.page');

//   containerElem.append(imgElem);

//   const onImageLoaded = () => {
//     const { width, height } = imgElem;
//     callback(null, { width, height });
//   };

//   imgElem.addEventListener('load', onImageLoaded);

//   imgElem.addEventListener('error', () => callback('Image load fail'));
// };

// const imgSrc =
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
// // //callack example
// // const onImageLoaded = (error, imgElem) => {
// //   if (error) {
// //     console.log(error);
// //     return;
// //   }

// const onImageLoaded = (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const { width, height } = data;
//   const sizeElem = document.querySelector('.image-size');
//   sizeElem.textContent = `${width} x ${height}`;
// };
// addImage(imgSrc, onImageLoaded);

//test call
//addImage("https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg", onImageLoaded);

// ============================================================
const addImage = (imgSrc, callback) => {
  const container = document.querySelector('.page');
  const imgElem = document.createElement('img');

  container.append(imgElem);

  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed...'));
};

const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

addImage(imgSrc, onImageLoaded);
