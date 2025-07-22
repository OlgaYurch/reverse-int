module.exports = function reverse(n) {
  const absNumber = Math.abs(n);
  return String(absNumber).split('').reverse().join('');
};
