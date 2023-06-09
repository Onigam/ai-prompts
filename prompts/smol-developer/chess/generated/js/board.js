(function () {
  const boardSize = 8;
  const initialBoard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
  ];

  function createBoard() {
    const board = [];
    for (let i = 0; i < boardSize; i++) {
      const row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(initialBoard[i][j]);
      }
      board.push(row);
    }
    return board;
  }

  function getPieceAt(board, row, col) {
    return board[row][col];
  }

  function setPieceAt(board, row, col, piece) {
    board[row][col] = piece;
  }

  function movePiece(board, fromRow, fromCol, toRow, toCol) {
    const piece = getPieceAt(board, fromRow, fromCol);
    setPieceAt(board, fromRow, fromCol, "");
    setPieceAt(board, toRow, toCol, piece);
  }

  function isWithinBoard(row, col) {
    return row >= 0 && row < boardSize && col >= 0 && col < boardSize;
  }

  window.createBoard = createBoard;
  window.getPieceAt = getPieceAt;
  window.setPieceAt = setPieceAt;
  window.movePiece = movePiece;
  window.isWithinBoard = isWithinBoard;
})();
