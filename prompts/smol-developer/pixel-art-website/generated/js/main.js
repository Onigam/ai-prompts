document.addEventListener("DOMContentLoaded", () => {
  const pixelArtContainer = document.getElementById("pixel-art-container");

  function renderPixelArt(pixelArtData) {
    pixelArtContainer.innerHTML = "";
    pixelArtData.forEach((row) => {
      const rowElement = document.createElement("div");
      rowElement.classList.add("pixel-row");
      row.forEach((pixel) => {
        const pixelElement = document.createElement("div");
        pixelElement.classList.add("pixel");
        pixelElement.style.backgroundColor = pixel;
        rowElement.appendChild(pixelElement);
      });
      pixelArtContainer.appendChild(rowElement);
    });
  }

  setInterval(() => {
    const pixelArtData = generatePixelArt();
    renderPixelArt(pixelArtData);
  }, 100);
});
