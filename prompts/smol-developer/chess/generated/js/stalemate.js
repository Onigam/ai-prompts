(function() {
  'use strict';

  function isStalemate(board, currentPlayer) {
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col];
        if (piece && piece.color === currentPlayer) {
          const moves = piece.getValidMoves(board, row, col);
          for (const move of moves) {
            const [newRow, newCol] = move;
            const tempBoard = JSON.parse(JSON.stringify(board));
            tempBoard[newRow][newCol] = tempBoard[row][col];
            tempBoard[row][col] = null;
            if (!isInCheck(tempBoard, currentPlayer)) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }

  function isInCheck(board, currentPlayer) {
    const kingPosition = findKingPosition(board, currentPlayer);
    const opponentColor = currentPlayer === 'white' ? 'black' : 'white';

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col];
        if (piece && piece.color === opponentColor) {
          const moves = piece.getValidMoves(board, row, col);
          if (moves.some(move => move[0] === kingPosition[0] && move[1] === kingPosition[1])) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function findKingPosition(board, currentPlayer) {
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col];
        if (piece && piece.type === 'king' && piece.color === currentPlayer) {
          return [row, col];
        }
      }
    }
    return null;
  }

  window.isStalemate = isStalemate;
})();