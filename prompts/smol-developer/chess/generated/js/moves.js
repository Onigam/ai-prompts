(function() {
  const board = document.getElementById("gameBoard");
  const pieces = {
    pawn: "P",
    rook: "R",
    knight: "N",
    bishop: "B",
    queen: "Q",
    king: "K"
  };

  function isValidMove(piece, from, to) {
    const dx = Math.abs(to.x - from.x);
    const dy = Math.abs(to.y - from.y);

    switch (piece) {
      case pieces.pawn:
        return (dy === 1 && dx === 0) || (dy === 2 && dx === 0 && from.y === 1);
      case pieces.rook:
        return dx === 0 || dy === 0;
      case pieces.knight:
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
      case pieces.bishop:
        return dx === dy;
      case pieces.queen:
        return dx === dy || dx === 0 || dy === 0;
      case pieces.king:
        return (dx === 1 && dy === 1) || (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
      default:
        return false;
    }
  }

  function getValidMoves(piece, position) {
    const validMoves = [];

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const to = { x, y };
        if (isValidMove(piece, position, to)) {
          validMoves.push(to);
        }
      }
    }

    return validMoves;
  }

  window.isValidMove = isValidMove;
  window.getValidMoves = getValidMoves;
})();