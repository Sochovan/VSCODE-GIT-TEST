const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    const callbackRes = callback(el, index, arr);

    res.push(el);
  }
  return res;
};
