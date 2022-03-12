const countingValleys = (steps, path) => {
  const pathSplited = path.split("");
  let countValley = 0;
  pathSplited.reduce((previousElevation, p) => {
    const elevation = p === "U" ? previousElevation + 1 : previousElevation - 1;

    if (elevation === 0 && previousElevation < elevation) {
      ++countValley;
    }
    return elevation;
  }, 0);

  return countValley;
};

module.exports = countingValleys;
