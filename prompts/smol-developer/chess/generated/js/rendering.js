(function () {
  const gameBoard = document.getElementById("gameBoard");

  function renderBoard(boardState) {
    gameBoard.innerHTML = "";
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.row = row;
        square.dataset.col = col;

        if ((row + col) % 2 === 0) {
          square.classList.add("light");
        } else {
          square.classList.add("dark");
        }

        const piece = boardState[row][col];
        if (piece) {
          const pieceElement = document.createElement("img");
          pieceElement.src = `assets/${piece.color}_${piece.type}.png`;
          pieceElement.classList.add("piece");
          square.appendChild(pieceElement);
        }

        gameBoard.appendChild(square);
      }
    }
  }

  window.renderBoard = renderBoard;
})();
