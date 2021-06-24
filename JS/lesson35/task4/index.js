const parseUser = str => {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
};
