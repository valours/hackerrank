const camelCase = (str: string) =>
  (str.charAt(0).toUpperCase() + str.slice(1)).match(/[A-Z][a-z]*/g).length;

export default camelCase;
