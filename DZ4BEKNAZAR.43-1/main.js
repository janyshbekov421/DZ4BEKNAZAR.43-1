let count = 0;

const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function updateDisplay() {
 countDisplay.textContent = count;
 countDisplay.className = count > 0 ? 'green' : 'red';
}

incrementButton.addEventListener('click', () => {
 count += 1;
 updateDisplay();
});

decrementButton.addEventListener('click', () => {
 if (count > 0) {
  count -= 1;
  updateDisplay();
 }
});


updateDisplay();




const button = document.createElement('button');
button.style.width = '500px';
button.style.height = '500px';
button.style.border = '2px solid black';
button.style.position = 'relative';
button.textContent = 'Наведи курсор на меня';
document.body.appendChild(button);

const coordinatesDisplay = document.createElement('p');
coordinatesDisplay.textContent = 'Координаты: (0, 0)';
document.body.appendChild(coordinatesDisplay);

button.addEventListener('mousemove', (event) => {
 const rect = button.getBoundingClientRect();
 const x = event.clientX - rect.left;
 const y = event.clientY - rect.top;
 coordinatesDisplay.textContent = `Координаты: (${x}, ${y})`;
});

let currentLight = 0;
const lights = ['red', 'yellow', 'green'];

function changeLight() {
 const red = document.getElementById('red');
 const yellow = document.getElementById('yellow');
 const green = document.getElementById('green');

 red.classList.remove('active');
 yellow.classList.remove('active');
 green.classList.remove('active');

 if (lights[currentLight] === 'red') {
  red.classList.add('active');
 } else if (lights[currentLight] === 'yellow') {
  yellow.classList.add('active');
 } else {
  green.classList.add('active');
 }

 currentLight = (currentLight + 1) % lights.length;
}

setInterval(changeLight, 2000);






