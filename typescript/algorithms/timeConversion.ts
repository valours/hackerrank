const timeConversion = (time: string) => {
  let hour: string = time.slice(0, 2);
  const minutes = time.slice(3, 5);
  const secondes = time.slice(6, 8);
  const format = time.slice(8, 9);

  if (format === "P" && parseFloat(hour) < 12) {
    hour = (Number(hour) + 12).toString();
  } else if (format === "A" && Number(hour) === 12) {
    hour = "00";
  }

  const timeFormatted = [hour, minutes, secondes].join(":");
  console.log(timeConversion);
  return timeFormatted;
};

export default timeConversion;
