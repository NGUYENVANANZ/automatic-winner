const gameOver = new Audio("gameover.mp4");
const play = new Audio("playgame.mp4");


let canvas = document.getElementById('gameZone');
let context = canvas.getContext('2d');

let score = 0;
let khoangcachhaiong = 160;
let khoangcachdenongduoi;
let toc = 2

let birdimg = new Image();
let hinhnenchinh = new Image();
let ongtren = new Image();
let ongduoi = new Image();
let bird
let ong = [];
let scoreBoard = [];



function init() {
    birdimg.src = "bird.png";
    hinhnenchinh.src = "nenchinh.png";
    ongtren.src = "ongtren.png";
    ongduoi.src = "ongduoi.png";
    bird = {
        x: 180,
        y: 150
    }
    ong[0] = {
        x: canvas.width,
        y: 0
    }
}
function run() {
    play.play()
    context.drawImage(hinhnenchinh, 0, 0);
    context.drawImage(birdimg, bird.x, bird.y);
    for (let i = 0; i < ong.length; i++) {
        khoangcachdenongduoi = ongtren.height + khoangcachhaiong;
        context.drawImage(ongtren, ong[i].x, ong[i].y);
        context.drawImage(ongduoi, ong[i].x, ong[i].y + khoangcachdenongduoi);
        ong[i].x -= toc;
        // sinh ống
        if (ong[i].x >= canvas.width / 2 && ong[i].x < canvas.width/2 + toc) {
            ong.push({
                x: canvas.width,
                y: Math.floor(Math.random() * ongtren.height) - ongtren.height
            })
        }
        // xóa ống
        if (ong[i].x + ongtren.width === 0) {
            ong.splice(0, 1);
        }
        // cộng điểm
        if (bird.x === ong[i].x) {
            score++;
            if (score % 4 === 0) toc++;
        }
        // thua
        if (bird.y + birdimg.height === canvas.height ||
            (bird.x + birdimg.width >= ong[i].x && bird.x + birdimg.width <= ong[i].x + ongtren.width)
            &&
            (bird.y + birdimg.height <= ong[i].y + ongtren.height || bird.y + birdimg.height >= ong[i].y + khoangcachdenongduoi)
        ) {
            play.pause()
            gameOver.play()
            document.getElementById("score").innerHTML = score;
            document.getElementById("GamOver").hidden = false
            luuDiem(score)
            return;
        }

    }
    document.getElementById("scoreShow").innerHTML = "Score : " + score;
    bird.y += 1;
    requestAnimationFrame(run);
}
document.addEventListener("keydown", function (evt) {
    switch (evt.keyCode) {
        case 32:
            bird.y -= 50
    }
})
init();
run();
function reset() {
    gameOver.pause()
    bird = {
        x: 180,
        y: 150
    }
    ong = [];
    ong[0] = {
        x: canvas.width,
        y: 0
    }
    score = 0
    toc = 2
    document.getElementById("GamOver").hidden = true
    run();
}
function luuDiem(score){
    scoreBoard.push(score)
    scoreBoard.sort(function(a, b){return a - b}).reverse()
    document.getElementById("rank1").innerHTML = scoreBoard[0]
    if(scoreBoard[1] >= 0){document.getElementById("rank2").innerHTML = scoreBoard[1]}
    if(scoreBoard[2] >= 0){document.getElementById("rank3").innerHTML = scoreBoard[2]}
    if(scoreBoard[3] >= 0){document.getElementById("rank4").innerHTML = scoreBoard[3]}
    if(scoreBoard[4] >= 0){document.getElementById("rank5").innerHTML = scoreBoard[4]}
}


