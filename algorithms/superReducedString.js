module.exports = (s) =>
  s
    .split("")
    .reduce((arr, l) => {
      if (arr[arr.length - 1] !== l) {
        arr.push(l);
      }
      return arr;
    }, [])
    .join("");
