function selectCard(card) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');

  const language = card.querySelector('p').innerText.toLowerCase();
  let url = '';

  switch (language) {
    case 'english':
      url = 'english.html';
      break;
    case 'spanish':
      url = 'spanish.html';
      break;
    case 'french':
      url = 'french.html';
      break;
    case 'german':
      url = 'german.html';
      break;
    case 'dutch':
      url = 'dutch.html';
      break;
    case 'italian':
      url = 'italian.html';
      break;
    case 'portuguese':
      url = 'portuguese.html';
      break;
    case 'russian':
      url = 'russian.html';
      break;
    default:
      url = '#';
  }

  if (url !== '#') {
    // 500ms ke baad jaane ke liye thoda animation ka waqt de rahe
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  }
}

// Canvas Particle Background Code - yeh waise hi chalega
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
let particlesArray;

// resize canvas
window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

// create particle
class Particle {
  constructor(x, y, directionX, directionY, size, color){
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
  update(){
    if(this.x + this.size > canvas.width || this.x - this.size < 0){
      this.directionX = -this.directionX;
    }
    if(this.y + this.size > canvas.height || this.y - this.size < 0){
      this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

// initialize particle array
function init(){
  particlesArray = [];
  let numberOfParticles = (canvas.width * canvas.height) / 9000;
  for (let i = 0; i < numberOfParticles; i++){
    let size = (Math.random() * 1.5) + 1.5;
    let x = (Math.random() * (innerWidth - size * 2));
    let y = (Math.random() * (innerHeight - size * 2));
    let directionX = (Math.random() * 0.3) - 0.15;
    let directionY = (Math.random() * 0.3) - 0.15;
    let color = 'white';
    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

// animation loop
function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particlesArray.length; i++){
    particlesArray[i].update();
  }
}

canvas.width = innerWidth;
canvas.height = innerHeight;
init();
animate();

// Welcome message code
const params = new URLSearchParams(window.location.search);
const username = params.get('username');
const welcomeEl = document.getElementById('welcome-message');

if (username) {
  welcomeEl.textContent = `${username}!`;
} else {
  welcomeEl.textContent = `Welcome to Speak Easy!`;
}
