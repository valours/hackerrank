module.exports = (arr) => {
  const ar = arr.reduce((acc, cv, i)=> {
    console.group();
    console.log('acc', acc);
    console.log('cv', cv);
    console.log('i', i);
    console.groupEnd();
    console.log('leng', cv.length);
    const result = cv[i] - cv[cv.length -1 - i]
    console.log('result :', result);
    return [acc[0] + cv[i], acc[1] + cv[cv.length -1 - i]];
  }, [0, 0]);
  return Math.abs(ar[0]-ar[1]);
};
