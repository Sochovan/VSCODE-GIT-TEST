const delay = time => {
  const pr = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return pr;
};

delay(3000).then(() => console.log('Done'));
