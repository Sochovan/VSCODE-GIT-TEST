const img = document.querySelector('img');

document.addEventListener('DOMContentLoaded', () => {
  console.log(`img: ${img.offsetWidth} x ${img.offsetHeight}`); //чтобы отрисовался DOM;
});

window.addEventListener('load', () => {
  console.log(`img: ${img.offsetWidth} x ${img.offsetHeight}`); // чтобы загрузились все ресурсы (например, картинки)
});

window.addEventListener('beforeunload', e => {
  e.returnValue = ''; // перед уходом со страницы переспрашиваем
});

window.addEventListener('unload', () => {
  console.log('Page left'); // отправка аналитики перед закрытием страницы
});
