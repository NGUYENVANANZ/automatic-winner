

function soNgay(){
    let thang = +document.getElementById('thang').value
switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10 :
    case 12:
        document.write('tháng'+thang+'có 31 ngày')
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.write('tháng'+thang+'có 30 ngày')
        break;
    default:
        document.write('tháng'+thang+'có 28 hoặc 29 ngày')
}
}




