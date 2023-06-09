# Webpage and Game Specifications

## 1. HTML Structure:

- Use HTML5 doctype and UTF-8 character encoding.
- Title the webpage as "AI Generated Conway's Game of Life".
- Include a `<h1>` heading with the text "AI Generated Conway's Game of Life".
- Add a `<canvas>` element with the id="gameCanvas" to host the game. Ensure the canvas size is suitable for a high resolution display and is responsive, scaling correctly on various screen sizes.
- Include inputs fields or a form to allow users to set parameters or start the game with random parameters.
- Under the canvas, include a button with id="startButton" labeled "Start Game". This button should start or restart the game upon being clicked.

## 2. CSS Styles:

- Follow the principles of modern design throughout the webpage. Use a clean, modern color scheme for the webpage, game canvas, and elements such as headings and buttons.
- Center the game canvas vertically and horizontally on the page, using CSS Flexbox or Grid.
- Implement smooth transitions and effects to improve the user experience.
- Follow modern principles for typography, button designs, and other UI elements.

## 3. JavaScript Game Logic:

- Implement the standard rules of Conway's Game of Life for the game.
- The game should be able to start with either random parameters or user-defined parameters.
- The game should visually represent cells as alive or dead and update these cells based on the game's rules.
- The game state should be updated at regular intervals to animate the "life" on the canvas.

## 4. Code Requirements:

- Write the game in pure, vanilla JavaScript with no external dependencies.
- The code should be well-structured, efficient, and well-commented.
- Divide the game logic into logical sections: initialization, game logic update, event handling, and rendering. Fully implement and complete each declared function.
- Enclose the game logic within a self-invoking function to avoid polluting the global scope.
- Implement robust error handling to prevent the game from crashing during gameplay.

## Additional Instructions:

- The webpage and game should be compatible across all modern web browsers (Chrome, Firefox, Safari, Edge).
- The final code should be ready to run without any additional steps or dependencies. It should be written such that it can be copied directly into HTML, CSS, and JavaScript files and run without any errors.

---

Given these instructions and technical specifications, your task is to generate a webpage that fulfills all of these requirements. The final result should be a simple, light, and fully functional Conway's Game of Life that's ready to be played in a modern web browser.
