export const textValidation = (text) => {
  const letters = /^[A-Za-z]+$/;
  return letters.test(String(text).toLowerCase());
};
