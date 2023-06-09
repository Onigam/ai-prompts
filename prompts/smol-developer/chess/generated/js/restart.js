function resetGameState() {
  // Reset the game state to its initial state
  initializeGame();

  // Update the game logic
  updateGameLogic();

  // Render the game board
  renderGame();
}

document.getElementById("restartButton").addEventListener("click", resetGameState);