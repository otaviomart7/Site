const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 18;
let snake, direction, food, score, game, speed;

document.addEventListener("keydown", changeDirection);

function startGame() {
    snake = [
        { x: 9 * box, y: 9 * box },      // cabeça
        { x: 8 * box, y: 9 * box }       // corpo inicial
    ];
    direction = "RIGHT";
    food = spawnFood();
    score = 0;
    speed = 150;

    document.getElementById("score").innerText = score;
    document.getElementById("gameOver").classList.add("hidden");
    document.getElementById("startBtn").style.display = "none";

    clearInterval(game);
    game = setInterval(draw, speed);
}

function spawnFood() {
    return {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box
    };
}

function changeDirection(event) {
    if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

function draw() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // cobra
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "#00ffcc" : "#00cc99";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // comida
    ctx.fillStyle = "#ff0055";
    ctx.fillRect(food.x, food.y, box, box);

    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === "UP") headY -= box;
    if (direction === "DOWN") headY += box;
    if (direction === "LEFT") headX -= box;
    if (direction === "RIGHT") headX += box;

    // colisões
    if (
        headX < 0 || headY < 0 ||
        headX >= canvas.width || headY >= canvas.height ||
        collision(headX, headY, snake)
    ) {
        clearInterval(game);
        document.getElementById("gameOver").classList.remove("hidden");
        document.getElementById("startBtn").style.display = "block";
        return;
    }

    // comer comida
    if (headX === food.x && headY === food.y) {
        score++;
        food = spawnFood();

        // aumenta velocidade
        speed = Math.max(60, speed - 5);
        clearInterval(game);
        game = setInterval(draw, speed);

    } else {
        snake.pop();
    }

    const newHead = { x: headX, y: headY };
    snake.unshift(newHead);

    document.getElementById("score").innerText = score;
}

function collision(x, y, array) {
    return array.some(segment => segment.x === x && segment.y === y);
}