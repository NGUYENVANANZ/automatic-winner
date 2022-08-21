
let canvas= document.getElementById('gamezone');
let context= canvas.getContext('2d');


let birdimg= new Image();
let hinhnenchinh=new Image();
let ongtren= new Image();
let ongduoi=new Image();
// gắn ảnh
birdimg.src="bird.png";
hinhnenchinh.src="nenchinh.png";
ongtren.src="ongtren.png";
ongduoi.src="ongduoi.png";
// vị trí khởi đầu của chim
let bird={
    x: hinhnenchinh.width/5,
    y: hinhnenchinh.height/4
}

// khai báo biến điểm và khoảng cách các ống
let score=0;
let khoangcachhaiong=120;
let khoangcachdenongduoi;


// khai báo mảng ống
let ong=[];
ong[0]={
    x:canvas.width,
    y:0
}
function run(){

    // vẽ nền
    context.drawImage(hinhnenchinh,0,0);
    // vị trí chim
    context.drawImage(birdimg,bird.x,bird.y);
    for(let i=0;i<ong.length;i++){
        khoangcachdenongduoi=ongtren.height+khoangcachhaiong*1.5;
        context.drawImage(ongtren,ong[i].x,ong[i].y);
        context.drawImage(ongduoi,ong[i].x,ong[i].y+khoangcachdenongduoi);
        // tốc độ ống di chuyển
        ong[i].x-=2;
        // khi tới nửa bức tranh tự động thêm ống
        if(ong[i].x === canvas.width/2){
            ong.push({
                x:canvas.width,
                // y random và trừ do độ dài ống trên để đảm bảo các ống luôn ở trị trí thẳng hàng trên x
                y:Math.floor(Math.random()*ongtren.height)-ongtren.height
            })
        }
        // khi cột đến cuối thì xóa nó khỏi mảng
        if(ong[i].x + ongtren.width === 0 )ong.splice(0,1);
        // khi chim qua cột sẽ cộng điểm
        if(bird.x === ong[i].x) score++;
        if(bird.y+birdimg.height ===canvas.height|| // khi chim rơi xuống nền
            // trường hợp chim ở tọa độ x giữa ống
            (bird.x+birdimg.width >= ong[i].x && bird.x+birdimg.width <= ong[i].x+ongtren.width)
            &&
            // khi chim cao hơn ống hoặc thấp hơn ống
            (bird.y + birdimg.height <=ong[i].y+ongtren.height|| bird.y +birdimg.height>= ong[i].y+ khoangcachdenongduoi)
        ){

            return;
        }

    }
    // hiện điểm
    document.getElementById("scoreshow").innerHTML = " score : "+ score;
    // chim rơi
    bird.y+=1;
    requestAnimationFrame(run);
}
// nhấn space để chim bay
document.addEventListener("keydown",function(evt){
     switch (evt.keyCode){
         case 32:
             bird.y-= 30
     }
    //     case 38:
    //         bird.y-=30
    //         break;
    //     case 40:
    //         bird.y+=30
    //         break;
    // }
})

run();