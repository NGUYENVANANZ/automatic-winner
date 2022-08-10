let so = "0"
let KQ = 0
let tinh = "+"
function Nhannut(phimbam) {
    if (parseInt(phimbam) == phimbam) {
        so += phimbam
        document.getElementById('bieu_thuc').innerHTML += phimbam
    } else
        if (phimbam == "C") {
            LamMoi()
        } else
            if (phimbam == "=") {
                BaiToan()
                tinh = "="
                document.getElementById('ket_qua').innerHTML = KQ.toString()
            } else {
                document.getElementById('bieu_thuc').innerHTML += phimbam
                BaiToan()
                tinh = phimbam
            }
}
function LamMoi() {
    document.getElementById('bieu_thuc').innerHTML = ""
    document.getElementById('ket_qua').innerHTML = 0
    so = "0"
    KQ = 0
    tinh = "+"
}
function BaiToan(){
    if (tinh ===  "+") {
        KQ += parseFloat(so)
    }
    if (tinh === "-") {
        KQ -= parseFloat(so)
    }
    if (tinh === "*") {
        KQ *= parseFloat(so)
    }
    if (tinh === "/") {
        KQ /= parseFloat(so)
    }
    so = "0"

}

