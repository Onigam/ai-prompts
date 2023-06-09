(function() {
  const Piece = function(type, color) {
    this.type = type;
    this.color = color;
  };

  const createPiece = function(type, color) {
    return new Piece(type, color);
  };

  const pieces = {
    pawn: "P",
    rook: "R",
    knight: "N",
    bishop: "B",
    queen: "Q",
    king: "K"
  };

  const colors = {
    white: "w",
    black: "b"
  };

  const createInitialPieces = function() {
    const initialPieces = [];

    for (let color in colors) {
      for (let piece in pieces) {
        initialPieces.push(createPiece(pieces[piece], colors[color]));
      }
    }

    return initialPieces;
  };

  window.Piece = Piece;
  window.createPiece = createPiece;
  window.pieces = pieces;
  window.colors = colors;
  window.createInitialPieces = createInitialPieces;
})();