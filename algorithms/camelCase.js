module.exports = s =>
  (s.charAt(0).toUpperCase() + s.slice(1))
    .match(/[A-Z][a-z]*/g)
    .length;
