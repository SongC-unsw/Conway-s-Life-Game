const rows = 100;
const cols = 100;
const density = 0.1;
const cellSize = 6;
const fps = 10;

const createGrid = () => {
  let matrix = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(null).map(() => (Math.random() > density ? 0 : 1)));
  // 0 stands for dead cells, 1 stands for living cells
  return matrix;
};

const countNeighbors = (grid, x, y) => {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      // rounding border
      const newX = (x + i + rows) % rows;
      const newY = (y + j + cols) % cols;

      count += grid[newX][newY];
    }
  }
  return count;
};
const updateGrid = (grid) => {
  const newGrid = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
  // all 0 grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const neighbors = countNeighbors(grid, i, j);
      // life game rules
      if (grid[i][j] === 1) {
        newGrid[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        newGrid[i][j] = neighbors === 3 ? 1 : 0;
      }
    }
  }
  return newGrid;
};
// use canvas to paint
const drawGrid = (grid, ctx, canvas) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000";

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        ctx.fillRect(j * cellSize, i * cellSize, cellSize - 1, cellSize - 1);
      }
    }
  }
};

const main = () => {
  const canvas = document.createElement("canvas");

  canvas.width = cols * cellSize;
  canvas.height = rows * cellSize;
  document.body.appendChild(canvas);
  const pauseBtn = document.createElement("button");
  pauseBtn.innerText = "Pause";
  pauseBtn.className = "btn btn-danger";
  document.body.appendChild(pauseBtn);

  const ctx = canvas.getContext("2d");

  let grid = createGrid();
  let isRunning = true;

  // add stop and pause function
  pauseBtn.addEventListener("click", () => {
    isRunning = !isRunning;
    pauseBtn.innerText = isRunning ? "Pause" : "Resume";
    pauseBtn.className = isRunning ? "btn btn-danger" : "btn btn-success";
    if (isRunning) {
      animate();
    }
  });
  const animate = () => {
    if (!isRunning) return;

    drawGrid(grid, ctx, canvas);
    grid = updateGrid(grid);

    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1000 / fps);
  };
  animate();
};

document.addEventListener("DOMContentLoaded", main);
