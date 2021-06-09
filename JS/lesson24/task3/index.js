const getDiff = (startDate, endDate) => {
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  const difference = date1 - date2;
  const result = Math.abs(Math.floor(difference / 1000));

  const days = Math.floor(result / 60 / 60 / 24);
  const hours = Math.floor(days / 24);
  const minutes = Math.floor(hours / 60);
  const seconds = Math.floor(minutes / 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(getDiff(new Date(2020, 1, 5), new Date(2021, 1, 1)));
