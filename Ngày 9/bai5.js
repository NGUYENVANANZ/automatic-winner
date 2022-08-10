function Nhannut(phimbam) {
        if (phimbam == "C") {
            document.getElementById('bieu_thuc').innerHTML = ""
            document.getElementById('ket_qua').innerHTML = ""
        } else
            if (phimbam == "=") {
                let bieuThuc = document.getElementById('bieu_thuc').innerHTML
                document.getElementById('ket_qua').innerHTML = eval(bieuThuc)
            } else {
                document.getElementById('bieu_thuc').innerHTML += phimbam
            }
}


