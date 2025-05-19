# Conway's Life Game

This is a simple web implementation of Conway's Game of Life.

## Description

Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

The game is played on a grid of cells, each of which can be either alive or dead. The state of each cell in the next generation is determined by the state of its neighbors in the current generation, according to the following rules:

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

This implementation uses a canvas to visualize the grid and includes a pause/resume button.

## How to Run

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.

## Technologies Used

- HTML
- CSS (with Bootstrap for button styling)
- JavaScript
