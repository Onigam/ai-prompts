## Webpage and Game Specifications:

### 1. **Basic Page Structure:**

- Utilize HTML5 doctype, UTF-8 character set, and a responsive viewport suitable for a wide range of devices.
- Title the webpage as "Vibrant Snake Game".
- Include a heading (h1) with the text "Vibrant Snake Game" and a subheading (h2) stating the game instructions: "Use the arrow keys to guide the snake to the food. Be careful not to run into the snake's own body!"
- Employ an HTML5 canvas element with id="gameCanvas" to host the game. Set the width and height appropriately for a vertical layout (for instance, width: 400px, height: 800px).
- Below the canvas, position a button with id="restartButton" labelled "Restart Game" that resets the game when clicked.
- Create an area below the button with id="scoreBoard" to display the player's current score.

### 2. **CSS Styles:**

- The canvas should have a dark background color, for example, black or navy blue, with a vibrant colored snake and food for a good contrast.
- Use modern, vibrant color schemes for the webpage and elements such as headings, buttons, and score text.
- Make use of CSS Flexbox or Grid to vertically and horizontally center the canvas on the page.
- Implement smooth transitions and effects to enhance user experience.
- Make sure the typography, button designs, and other elements adhere to modern design principles.

### 3. **JavaScript Game Logic:**

- The snake, controlled by the player, should move continuously across the canvas.
- The arrow keys should be used to control the snake's direction.
- Randomly place food items on the canvas. When the snake reaches the food, it should consume it, which increases the player's score and the snake's length.
- The game should end if the snake runs into the edge of the canvas or into its own body.
- The game's difficulty should increase realistically with the player's score, possibly by increasing the snake's speed.
- The "Restart Game" button should reset the game state, including the player's score.

### 4. **Code Requirements:**

- Use plain, vanilla JavaScript to ensure the game runs on any modern browser without dependencies.
- The code should be clean, efficient, and well-commented.
- Utilize `requestAnimationFrame` or `setInterval` for the game loop to ensure smooth gameplay.
- Your code should be divided into logical sections: initialization, game logic, event handling, and rendering.
- Enclose the game logic, event handling, and rendering within a self-invoking function to avoid polluting the global scope.
- Implement error handling to prevent the game from crashing during gameplay.

### Additional Instructions:

- The webpage and game must be responsive, performant, and compatible across all modern browsers (Chrome, Firefox, Safari, Edge).
- The final code should be ready to be copied and pasted directly into HTML, CSS, and JavaScript files, and should run without any errors or additional steps.
- The game UI and design should be simple, vibrant, and adhere to modern design principles.
- Ensure that the game's difficulty is realistic and proportionally increases with the player's score.

---

Your task is to generate a webpage that meets all of these specifications.
