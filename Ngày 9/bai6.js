function yeuchi(){
    alert('yêu tất cả các chị')
}

function chay() {
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight)
    document.getElementById('no').style.left = x + 'px';
    document.getElementById('no').style.top = y + 'px';
}
