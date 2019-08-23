export const capitalFirstLetter = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const concatToArray = (firstArray, secondArray) =>
  Array.from(firstArray).concat(secondArray);
