let anh = null
    anh = document.getElementById('hinhanh')
function init(){
    anh = document.getElementById('hinhanh')
    anh.style.position = 'relative'
   anh.style.left = '0px'
}
function moveright() {
    anh.style.left= parseInt(anh.style.left)+10 +'px'
}
window.onload = init()
