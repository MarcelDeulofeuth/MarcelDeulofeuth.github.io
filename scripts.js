// Generar el pixel art dinámicamente
const pixelArtContainer = document.querySelector('.pixel-art');

for (let i = 0; i < 256; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixelArtContainer.appendChild(pixel);
}
