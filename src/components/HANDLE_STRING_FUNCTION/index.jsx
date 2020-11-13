const getFirstMiddleLastIndex = (stringInput) => {
  if (stringInput.length < 4) return stringInput;
  const fLetter = stringInput.charAt(0);
  const midLetter =
    stringInput.length % 2 === 0
      ? stringInput.charAt(stringInput.length / 2 - 1) // vd: 10/2 (a bcd ef edc d) - length % 2 = ef ->want get e => length / 2 - 1
      : stringInput.charAt(stringInput.length / 2); // tra ve mot so cua do dai chia 2
  const lLetter = stringInput.charAt(stringInput.length - 1);
  return fLetter + midLetter + lLetter;
};

export { getFirstMiddleLastIndex };
