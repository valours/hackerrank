module.exports = (time) => {
  let hour = time.slice(0, 2);
  const minutes = time.slice(3, 5);
  const secondes = time.slice(6, 8);
  const format = time.slice(8, 9);

  if (format === 'P' && hour < 12) {
    hour = Number(hour) + 12;
  } else if (format === 'A' && Number(hour) === 12) {
    hour = '00';
  }

  const timeFormatted = [hour, minutes, secondes].join(':');
  return timeFormatted;
};
