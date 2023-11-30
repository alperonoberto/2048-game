const canvas = document.querySelector("#gameboard");
const GAMEBOARD = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]


const initGameboard = function () {

    generateFirstTokens()

    GAMEBOARD.forEach(row => {
        row.forEach((col, j) => {
            let div = document.createElement("div")
            canvas.append(div)
            if (col === 2) {
                div.textContent = col;
                div.className = `token${col}`
            }
        })
    })
}

const generateFirstTokens = function () {
    let firstPosX = Math.floor(Math.random() * GAMEBOARD.length)
    let firstPosY = Math.floor(Math.random() * GAMEBOARD.length)

    let secondPosX = Math.floor(Math.random() * GAMEBOARD.length)
    let secondPosY = Math.floor(Math.random() * GAMEBOARD.length)

    while (!checkAvailablePos(secondPosX, secondPosY)) {
        secondPosX = Math.floor(Math.random() * GAMEBOARD.length)
        secondPosY = Math.floor(Math.random() * GAMEBOARD.length)
    }

    GAMEBOARD[firstPosX][firstPosY] = 2;
    GAMEBOARD[secondPosX][secondPosY] = 2;
}

const generateNewToken = function () {
    let posX = Math.floor(Math.random() * GAMEBOARD.length)
    let posY = Math.floor(Math.random() * GAMEBOARD.length)

    while(!checkAvailablePos(posX, posY)) {
        posX = Math.floor(Math.random() * GAMEBOARD.length)
        posY = Math.floor(Math.random() * GAMEBOARD.length)
    }
}

const checkAvailablePos = function (x, y) {
    return GAMEBOARD[x][y] === 0 ? true : false;
}

initGameboard();