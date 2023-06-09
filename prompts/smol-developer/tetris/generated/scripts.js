(function() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const restartButton = document.getElementById("restartButton");
  const scoreBoard = document.getElementById("scoreBoard");
  let gameInterval;
  let score;
  let tetrimino;
  let board;

  const tetriminoShapes = [
    [
      [1, 1, 1],
      [0, 1, 0]
    ],
    [
      [1, 1],
      [1, 1]
    ],
    [
      [1, 1, 0],
      [0, 1, 1]
    ],
    [
      [0, 1, 1],
      [1, 1, 0]
    ],
    [
      [1, 1, 1, 1]
    ],
    [
      [1, 1, 1],
      [1, 0, 0]
    ],
    [
      [1, 1, 1],
      [0, 0, 1]
    ]
  ];

  const colors = [
    "#FF0D72",
    "#0DC2FF",
    "#0DFF72",
    "#F538FF",
    "#FF8E0D",
    "#FFE138",
    "#3877FF"
  ];

  function initGame() {
    canvas.width = 320;
    canvas.height = 640;
    ctx.scale(20, 20);
    board = createMatrix(10, 20);
    score = 0;
    tetrimino = createTetrimino();
    gameInterval = setInterval(updateGame, 1000 / 2);
    document.addEventListener("keydown", handleEvent);
    restartButton.addEventListener("click", restartGame);
  }

  function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
      matrix.push(new Array(w).fill(0));
    }
    return matrix;
  }

  function createTetrimino() {
    const shape = tetriminoShapes[Math.floor(Math.random() * tetriminoShapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return { shape, color, pos: { x: Math.floor(board[0].length / 2) - 1, y: 0 } };
  }

  function collide(board, tetrimino) {
    const shape = tetrimino.shape;
    const pos = tetrimino.pos;
    for (let y = 0; y < shape.length; ++y) {
      for (let x = 0; x < shape[y].length; ++x) {
        if (shape[y][x] && (board[y + pos.y] && board[y + pos.y][x + pos.x]) !== 0) {
          return true;
        }
      }
    }
    return false;
  }

  function merge(board, tetrimino) {
    const shape = tetrimino.shape;
    const pos = tetrimino.pos;
    for (let y = 0; y < shape.length; ++y) {
      for (let x = 0; x < shape[y].length; ++x) {
        if (shape[y][x]) {
          board[y + pos.y][x + pos.x] = tetrimino.color;
        }
      }
    }
  }

  function rotate(matrix, dir) {
    const transposed = matrix[0].map((_, i) => matrix.map(row => row[i]));
    return dir > 0 ? transposed.map(row => row.reverse()) : transposed.reverse();
  }

  function move(dir) {
    tetrimino.pos.x += dir;
    if (collide(board, tetrimino)) {
      tetrimino.pos.x -= dir;
    }
  }

  function drop() {
    tetrimino.pos.y++;
    if (collide(board, tetrimino)) {
      tetrimino.pos.y--;
      merge(board, tetrimino);
      tetrimino = createTetrimino();
      if (collide(board, tetrimino)) {
        restartGame();
      }
    }
  }

  function rotateTetrimino(dir) {
    const pos = tetrimino.pos.x;
    let offset = 1;
    tetrimino.shape = rotate(tetrimino.shape, dir);
    while (collide(board, tetrimino)) {
      tetrimino.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > tetrimino.shape[0]) {
        tetrimino.shape = rotate(tetrimino.shape, -dir);
        tetrimino.pos.x = pos;
        return;
      }
    }
  }

  function clearLines() {
    outer: for (let y = board.length - 1; y > 0; --y) {
      for (let x = 0; x < board[y].length; ++x) {
        if (!board[y][x]) {
          continue outer;
        }
      }
      const row = board.splice(y, 1)[0].fill(0);
      board.unshift(row);
      ++y;
      score += 10;
    }
  }

  function updateGame() {
    drop();
    clearLines();
    scoreBoard.textContent = `Score: ${score}`;
  }

  function handleEvent(event) {
    if (event.key === "ArrowLeft") {
      move(-1);
    } else if (event.key === "ArrowRight") {
      move(1);
    } else if (event.key === "ArrowDown") {
      drop();
    } else if (event.key === "ArrowUp") {
      rotateTetrimino(1);
    }
  }

  function renderGame() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(board, { x: 0, y: 0 });
    drawMatrix(tetrimino.shape, tetrimino.pos);
    requestAnimationFrame(renderGame);
  }

  function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          ctx.fillStyle = value;
          ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
        }
      });
    });
  }

  function restartGame() {
    clearInterval(gameInterval);
    board = createMatrix(10, 20);
    score = 0;
    tetrimino = createTetrimino();
    gameInterval = setInterval(updateGame, 1000 / 2);
  }

  initGame();
  renderGame();
})();