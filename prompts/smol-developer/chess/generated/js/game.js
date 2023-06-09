(function () {
  const gameBoard = document.getElementById("gameBoard");
  const restartButton = document.getElementById("restartButton");

  let board, currentPlayer, gameOver;

  function initializeGame() {
    board = createInitialBoard();
    currentPlayer = "white";
    gameOver = false;
    renderGame(board);
    attachEventHandlers();
  }

  function createInitialBoard() {
    // Code from js/board.js
    return createBoard();
  }

  function updateGameLogic(piece, targetPosition) {
    // Code from js/moves.js, js/checkmate.js, and js/stalemate.js
    if (isValidMove(piece, targetPosition)) {
      movePiece(piece, targetPosition);
      if (isCheckmate(currentPlayer)) {
        gameOver = true;
        alert(currentPlayer + " wins!");
      } else if (isStalemate(currentPlayer)) {
        gameOver = true;
        alert("It's a draw!");
      } else {
        currentPlayer = currentPlayer === "white" ? "black" : "white";
      }
    }
  }

  function handleEvents(event) {
    // Code from js/eventHandlers.js
    handleBoardClick(event);
  }

  function renderGame(board) {
    // Code from js/rendering.js
    renderBoard(board);
  }

  function resetGameState() {
    // Code from js/restart.js
    restartGame();
  }

  function attachEventHandlers() {
    gameBoard.addEventListener("click", handleEvents);
    restartButton.addEventListener("click", resetGameState);
  }

  initializeGame();
})();
