const canvas = document.querySelector("#gameboard");
const score = document.querySelector("#score");
const GAMEBOARD = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const DIRECTIONS = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
};

const initGameboard = function () {
  generateFirstTokens();

  GAMEBOARD.forEach((row) => {
    row.forEach((col, j) => {
      let div = document.createElement("div");
      canvas.append(div);
      if (col === 2) {
        div.textContent = col;
        div.className = `token${col}`;
      } else {
        div.classList.add(["empty"]);
      }
    });
  });

  document.addEventListener("keydown", (e) => moveTokens(e));
};

const generateFirstTokens = function () {
  let firstPosX = Math.floor(Math.random() * GAMEBOARD.length);
  let firstPosY = Math.floor(Math.random() * GAMEBOARD.length);

  let secondPosX = Math.floor(Math.random() * GAMEBOARD.length);
  let secondPosY = Math.floor(Math.random() * GAMEBOARD.length);

  while (!checkAvailablePos(secondPosX, secondPosY)) {
    secondPosX = Math.floor(Math.random() * GAMEBOARD.length);
    secondPosY = Math.floor(Math.random() * GAMEBOARD.length);
  }

  GAMEBOARD[firstPosX][firstPosY] = 2;
  GAMEBOARD[secondPosX][secondPosY] = 2;
};

const generateNewToken = function () {
  let posX = Math.floor(Math.random() * GAMEBOARD.length);
  let posY = Math.floor(Math.random() * GAMEBOARD.length);

  while (!checkAvailablePos(posX, posY)) {
    posX = Math.floor(Math.random() * GAMEBOARD.length);
    posY = Math.floor(Math.random() * GAMEBOARD.length);
  }
};

const checkAvailablePos = function (x, y) {
  return GAMEBOARD[x][y] === 0 ? true : false;
};

const moveTokens = function (e) {
  // console.log(e.key)
  switch (e.key) {
    case "ArrowUp":
      move(DIRECTIONS.UP);
      break;
    case "ArrowDown":
      move(DIRECTIONS.DOWN);
      break;
    case "ArrowLeft":
      move(DIRECTIONS.LEFT);
      break;
    case "ArrowRight":
      move(DIRECTIONS.RIGHT);
      break;
    default:
      console.log("wrong key");
  }
};

const move = function (direction) {
  //   console.log(direction);
  console.table(GAMEBOARD);
  GAMEBOARD.forEach((row, i) => {
    row.forEach((col, j) => {
      if (direction === "right") {
        GAMEBOARD[i][j + 1] = GAMEBOARD[i][j];
        GAMEBOARD[i][j] = 0;
        updateBoard()
      }
    });
  });
};

const updateBoard = function () {
  divs = document.querySelectorAll("#gameboard div");
  divs.forEach((div) => {
    div.remove();
  });

  GAMEBOARD.forEach((row) => {
    row.forEach((col) => {
      let div = document.createElement("div");
      canvas.append(div);
      if (col === 2) {
        div.textContent = col;
        div.className = `token${col}`;
      } else {
        div.classList.add(["empty"]);
      }
    });
  });
};

initGameboard();
