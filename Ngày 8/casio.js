let soHienTai = "0"
let ketQua = 0
let phepTinh = "+"

function nhan1Nut(phimBam) {
    if (parseInt(phimBam) == phimBam) {
        soHienTai += phimBam
        document.getElementById("bieu-thuc").innerHTML += phimBam
    }
    else
    if (phimBam == "AC") {
        reset()
    }
    else
    if (phimBam == "=") {
        tinhToan()
        phepTinh = "="
        document.getElementById("ket-qua").innerHTML = ketQua.toString()
    }
    else {
        document.getElementById("bieu-thuc").innerHTML += phimBam
        tinhToan()
        phepTinh = phimBam
    }
}

function reset() {
    document.getElementById("bieu-thuc").innerHTML = " "
    document.getElementById("ket-qua").innerHTML = "0"
    soHienTai = "0"
    ketQua = 0
    phepTinh = "+"
}

function tinhToan() {
    if (phepTinh ===  "+") {
        ketQua += parseInt(soHienTai)
    }
    if (phepTinh == "-") {
        ketQua -= parseFloat(soHienTai)
    }
    if (phepTinh == "*") {
        ketQua *= parseFloat(soHienTai)
    }
    if (phepTinh == "/") {
        ketQua /= parseFloat(soHienTai)
    }
    soHienTai = "0"
}
