module.exports = (arr) => {
  const ar = arr.reduce((acc, cv, i)=> {
    return [acc[0] + cv[i], acc[1] + cv[cv.length -1 - i]];
  }, [0, 0]);
  return Math.abs(ar[0]-ar[1]);
};