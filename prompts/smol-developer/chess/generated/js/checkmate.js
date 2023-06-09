(function() {
  'use strict';

  function isKingInCheck(board, kingPosition, currentPlayer) {
    const opponentColor = currentPlayer === 'white' ? 'black' : 'white';
    const directions = [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
      { x: -1, y: -1 },
      { x: 2, y: 1 },
      { x: 2, y: -1 },
      { x: -2, y: 1 },
      { x: -2, y: -1 },
      { x: 1, y: 2 },
      { x: 1, y: -2 },
      { x: -1, y: 2 },
      { x: -1, y: -2 }
    ];

    for (const direction of directions) {
      let x = kingPosition.x + direction.x;
      let y = kingPosition.y + direction.y;

      while (x >= 0 && x < 8 && y >= 0 && y < 8) {
        const piece = board[y][x];

        if (piece && piece.color === opponentColor) {
          if (piece.isAttacking(board, kingPosition)) {
            return true;
          }
          break;
        }

        if (piece) {
          break;
        }

        x += direction.x;
        y += direction.y;
      }
    }

    return false;
  }

  function hasValidMoves(board, currentPlayer) {
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const piece = board[y][x];

        if (piece && piece.color === currentPlayer) {
          const validMoves = piece.getValidMoves(board, { x, y });

          if (validMoves.length > 0) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function isCheckmate(board, currentPlayer) {
    const kingPosition = findKingPosition(board, currentPlayer);

    if (!isKingInCheck(board, kingPosition, currentPlayer)) {
      return false;
    }

    return !hasValidMoves(board, currentPlayer);
  }

  function findKingPosition(board, currentPlayer) {
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const piece = board[y][x];

        if (piece && piece.type === 'king' && piece.color === currentPlayer) {
          return { x, y };
        }
      }
    }

    throw new Error('King not found');
  }

  window.isCheckmate = isCheckmate;
})();