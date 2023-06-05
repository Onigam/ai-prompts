function createRandomPixelArt() {
  const width = 32;
  const height = 32;
  const pixelArtData = [];

  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      row.push(`#${randomColor}`);
    }
    pixelArtData.push(row);
  }

  return pixelArtData;
}

function generatePixelArt() {
  const pixelArtData = createRandomPixelArt();
  const pixelArtCanvas = document.getElementById("pixel-art-container");
  pixelArtCanvas.dispatchEvent(
    new CustomEvent("PIXEL_ART_GENERATED", { detail: pixelArtData })
  );
  return pixelArtData;
}

document.addEventListener("DOMContentLoaded", generatePixelArt);
