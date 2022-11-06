const alphabets = "qwertyuiopasdfghjklzxcvbnm";
export const randomChar = () => {
  return alphabets[Math.round(Math.random() * alphabets.length)];
};
