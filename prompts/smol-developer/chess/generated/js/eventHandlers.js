(function() {
  const restartButton = document.getElementById("restartButton");
  const gameBoard = document.getElementById("gameBoard");

  restartButton.addEventListener("click", resetGameState);
  gameBoard.addEventListener("click", handleBoardClick);

  function handleBoardClick(event) {
    const targetElement = event.target;
    if (targetElement.classList.contains("chess-piece")) {
      selectPiece(targetElement);
    } else if (targetElement.classList.contains("valid-move")) {
      movePiece(targetElement);
    }
  }

  function selectPiece(pieceElement) {
    const pieceId = pieceElement.getAttribute("data-piece-id");
    const validMoves = getValidMoves(pieceId);
    highlightValidMoves(validMoves);
  }

  function movePiece(moveElement) {
    const moveData = {
      pieceId: moveElement.getAttribute("data-piece-id"),
      targetPosition: {
        x: parseInt(moveElement.getAttribute("data-x")),
        y: parseInt(moveElement.getAttribute("data-y"))
      }
    };
    updateGameLogic(moveData);
    renderGame();
  }

  function highlightValidMoves(validMoves) {
    validMoves.forEach(move => {
      const moveElement = document.querySelector(
        `[data-x="${move.x}"][data-y="${move.y}"]`
      );
      moveElement.classList.add("valid-move");
    });
  }

  function resetGameState() {
    initializeGame();
    renderGame();
  }
})();