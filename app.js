const button = document.querySelector('.press-button');
console.log(button);
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomGradient = () => {
  const colorStart = getRandomColor();
  const colorMiddle = getRandomColor();
  const colorEnd = getRandomColor();
  const gradient = `linear-gradient(217deg, ${colorStart}, ${colorMiddle}, ${colorEnd})`;
  return gradient;
};

button.addEventListener('click', () => {
  const gradient = getRandomGradient();
  document.body.style.backgroundImage = gradient;
});