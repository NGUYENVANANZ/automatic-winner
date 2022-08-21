function nhapso(so) {
    document.getElementById("hien_thi").value += so
}
function chucnang(cn){
    switch (cn){
        case '+':
            document.getElementById("hien_thi").value += cn;
            break;
        case '-':
            document.getElementById("hien_thi").value += cn;
            break;
        case '*':
            document.getElementById("hien_thi").value += cn;
            break;
        case '/':
            document.getElementById("hien_thi").value += cn;
            break;
    }
}
function ketqua(){
    let phuongtrinh = document.getElementById("hien_thi").value ;
    let  ketQua = eval(phuongtrinh);
    document.getElementById("hien_thi").value = ketQua ;
}
function xoa(){
    location.reload()
}
