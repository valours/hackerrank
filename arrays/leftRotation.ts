const rotLeft = (array, number_rotation) => {
  const arrayShifted = [...array];

  for (let rotation = 0; rotation < number_rotation; rotation++) {
    const firstElement = arrayShifted.shift();
    arrayShifted.push(firstElement);
  }

  return arrayShifted;
};

export default rotLeft;
