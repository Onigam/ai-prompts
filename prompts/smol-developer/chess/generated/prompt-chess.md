# Webpage and Game Specifications

## 1. HTML Structure:

- Use HTML5 doctype and UTF-8 character encoding.
- Title the webpage as "AI Generated Chess Game".
- Include a `<h1>` heading with the text "AI Generated Chess Game".
- Add a `<div>` element with the id="gameBoard" to host the game. Ensure the div size is suitable for a vertical layout and is responsive, scaling correctly on various screen sizes.
- Under the game board, include a button with id="restartButton" labeled "Restart Game". This button should restart the game upon being clicked.

## 2. CSS Styles:

- Follow the principles of material design throughout the webpage. Use a vibrant, modern color scheme for the webpage, game board, and elements such as headings and buttons.
- The game board should feature contrasting colors for each square and chess piece, following material design guidelines.
- Center the game board vertically and horizontally on the page, using CSS Flexbox or Grid.
- Implement smooth transitions and effects to improve the user experience.
- Follow modern material design principles for typography, button designs, and other UI elements.

## 3. JavaScript Game Logic:

- Follow the standard rules of Chess for the game.
- Implement a way for two human players to interact with the board: selecting a piece and a valid location to move to.
- Implement the game rules for each type of piece (pawn, rook, knight, bishop, queen, king).
- The game should end if a checkmate or stalemate condition is met.
- Clicking the "Restart Game" button should reset the game state.

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

Given these instructions and technical specifications, your task is to generate a webpage that fulfills all of these requirements. The final result should be a simple, light, and fully functional Chess game for two human players that's ready to be played in a modern web browser.
