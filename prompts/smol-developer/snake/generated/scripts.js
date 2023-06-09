(function() {
  const gameCanvas = document.getElementById("gameCanvas");
  const ctx = gameCanvas.getContext("2d");
  const restartButton = document.getElementById("restartButton");
  const scoreBoard = document.getElementById("scoreBoard");

  let snake, food, score, direction, gameInterval, speed;

  function init() {
    snake = [{ x: 200, y: 400 }];
    food = generateFood();
    score = 0;
    direction = "up";
    speed = 150;
    gameInterval = setInterval(gameLoop, speed);
  }

  function gameLoop() {
    update();
    render();
  }

  function update() {
    const head = { ...snake[0] };

    switch (direction) {
      case "up":
        head.y -= 20;
        break;
      case "down":
        head.y += 20;
        break;
      case "left":
        head.x -= 20;
        break;
      case "right":
        head.x += 20;
        break;
    }

    if (checkCollision(head)) {
      clearInterval(gameInterval);
      alert("Game Over!");
      return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score++;
      scoreBoard.textContent = `Score: ${score}`;
      food = generateFood();
      increaseDifficulty();
    } else {
      snake.pop();
    }
  }

  function render() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

    ctx.fillStyle = "lime";
    snake.forEach(({ x, y }) => {
      ctx.fillRect(x, y, 20, 20);
    });

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 20, 20);
  }

  function changeDirection(event) {
    const { key } = event;

    if (key === "ArrowUp" && direction !== "down") direction = "up";
    if (key === "ArrowDown" && direction !== "up") direction = "down";
    if (key === "ArrowLeft" && direction !== "right") direction = "left";
    if (key === "ArrowRight" && direction !== "left") direction = "right";
  }

  function resetGame() {
    clearInterval(gameInterval);
    init();
  }

  function generateFood() {
    const x = Math.floor(Math.random() * (gameCanvas.width / 20)) * 20;
    const y = Math.floor(Math.random() * (gameCanvas.height / 20)) * 20;
    return { x, y };
  }

  function checkCollision(head) {
    return (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= gameCanvas.width ||
      head.y >= gameCanvas.height ||
      snake.some((segment) => segment.x === head.x && segment.y === head.y)
    );
  }

  function increaseDifficulty() {
    if (score % 5 === 0) {
      clearInterval(gameInterval);
      speed *= 0.9;
      gameInterval = setInterval(gameLoop, speed);
    }
  }

  document.addEventListener("keydown", changeDirection);
  restartButton.addEventListener("click", resetGame);

  init();
})();