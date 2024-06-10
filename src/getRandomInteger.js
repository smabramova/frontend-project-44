export default (min, max) => {
  const tempMin = Math.ceil(min);
  const tempMax = Math.floor(max);
  return Math.floor(Math.random() * (tempMax - tempMin + 1)) + tempMin;
};
