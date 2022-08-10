

function kiem_tra() {
    let a = document.getElementById("nang").value;
    let b = document.getElementById("cao").value;
    let bmi = a/(Math.pow(b,2))
    let result ;
    if (bmi < 16){
        result = "Gầy độ 3"
    } else if (bmi < 17) {
        result = "Gầy độ 2"
    }  else if (bmi < 18.5){
        result = "Gầy độ 1"
    } else if (bmi < 25){
        result = "Bình thường"
    }  else if (bmi < 30) {
        result = "Thừa cân"
    } else if (bmi < 35) {
        result = "Béo phì độ 1"
    }  else if (bmi < 40) {
        result = "Béo phì độ 2"
    }   else {
        result = "Béo phì độ 3"
    }
    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>"+ result + "</b>" ;
}

