//put your code here

function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}
export { defer };
