// export { getSection };

const getSection = num => {
  const arrDiv = document.querySelectorAll('div');
  const arrSpan = document.querySelectorAll('span');

  for (let i = 0; i < arrSpan.length; i += 1) {
    if (`span[data-number = "${num}"]`) {
      const a = arrDiv[i].closest('data-number');
    }
  }
  return a;
};
console.log(getSection());
