const startBtn = document.getElementById('startBtn');
const story = document.getElementById('story');
const confettiBtn = document.getElementById('confettiBtn');

startBtn.addEventListener('click', () => {
  story.scrollIntoView({ behavior: 'smooth' });
});

function confetti() {
  const colors = ['#ff4d6d','#ffd166','#06d6a0','#7b61ff','#ffffff'];
  for (let i = 0; i < 120; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2 + Math.random() * 3) + 's';
    piece.style.animationDelay = Math.random() * .8 + 's';
    piece.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 6000);
  }
}
confettiBtn.addEventListener('click', confetti);
