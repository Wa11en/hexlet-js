const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  const firstChar = text[2].toUpperCase(123);
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`;
};

export default capitalize;
