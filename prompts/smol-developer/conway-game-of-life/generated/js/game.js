(function() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const startButton = document.getElementById("startButton");
  let gameInterval;

  function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    startButton.addEventListener("click", startGame);
  }

  function startGame() {
    clearInterval(gameInterval);
    const gridSize = 10;
    const rows = Math.floor(canvas.height / gridSize);
    const cols = Math.floor(canvas.width / gridSize);
    let grid = createGrid(rows, cols);
    gameInterval = setInterval(() => {
      grid = updateGameLogic(grid);
      render(grid, gridSize);
    }, 100);
  }

  function createGrid(rows, cols) {
    const grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
      grid[i] = new Array(cols);
      for (let j = 0; j < cols; j++) {
        grid[i][j] = Math.floor(Math.random() * 2);
      }
    }
    return grid;
  }

  function updateGameLogic(grid) {
    const newGrid = JSON.parse(JSON.stringify(grid));
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const aliveNeighbors = countAliveNeighbors(grid, i, j);
        if (grid[i][j] === 1) {
          newGrid[i][j] = aliveNeighbors === 2 || aliveNeighbors === 3 ? 1 : 0;
        } else {
          newGrid[i][j] = aliveNeighbors === 3 ? 1 : 0;
        }
      }
    }
    return newGrid;
  }

  function countAliveNeighbors(grid, row, col) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newRow = (row + i + rows) % rows;
        const newCol = (col + j + cols) % cols;
        count += grid[newRow][newCol];
      }
    }
    return count;
  }

  function render(grid, gridSize) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 1) {
          ctx.fillStyle = "black";
          ctx.fillRect(j * gridSize, i * gridSize, gridSize - 1, gridSize - 1);
        }
      }
    }
  }

  init();
})();