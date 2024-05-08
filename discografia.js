const carousel = document.getElementById('carousel');
const audios = document.querySelectorAll('.audio-item');
const totalAudios = audios.length;
let currentIndex = 0;

function moveCarousel() {
  const offset = -currentIndex * audios[0].offsetWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

function nextAudio() {
  currentIndex = (currentIndex + 1) % totalAudios;
  moveCarousel();
}

function prevAudio() {
  currentIndex = (currentIndex - 1 + totalAudios) % totalAudios;
  moveCarousel();
}

