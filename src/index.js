module.exports = function reverse (n) {
    let absNumber = Math.abs(n);
  return String(absNumber).split('').reverse().join('');
}
