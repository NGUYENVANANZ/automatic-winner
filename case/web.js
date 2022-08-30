let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

class thongTin {
    img;
    name;
    price;

    constructor(img, name, price) {
        this.name = name;
        this.img = img;
        this.price = price;
    }
}

let gai1 = new thongTin("https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/298462605_395105379432001_7185410628197021744_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hga0wS7So58AX_joY7y&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-w8QiSL3Q-9CrnJF9uglXvtoHEMva5FQwnsN_qCazPMw&oe=6311BE83", "Vị Đào", "800$")
let gai2 = new thongTin("https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/298658927_395105596098646_2200079347203525009_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=n482mFQH7SEAX9MolZw&tn=k3c0L6P0nP-h-gox&_nc_ht=scontent-hkt1-2.xx&oh=00_AT_1PMJDFvFY0ywYSInEBnlKgiIWTYwJD-Uf9Vn0TjgGQA&oe=6310F13E", "Vị Dâu", "700$")
let gai3 = new thongTin("https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/298570362_395105489431990_2513646511829774753_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=f6_MKTNjKXwAX94i-la&_nc_ht=scontent-hkt1-2.xx&oh=00_AT-FcXnjMzIc6K5Fq_4Dm_Pf3VDI5w6dpUxWRW-3lWj8Zw&oe=63104517", "Mix 3 vị", "600$")
let gai4 = new thongTin("https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/298569134_395105552765317_4793269636343020483_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KfUKqhk25iUAX-AXDpY&_nc_ht=scontent-hkt1-1.xx&oh=00_AT9TUOXvIY31wLJkZzRMHBLgJ1UbJ3WQeysMReurXOF-mg&oe=631035ED", "Nho", "500$")

let gai = [gai1, gai2, gai3, gai4];

function Search() {
    let check = false
    let search = document.getElementById("timkiem").value;
    for (let i = 0; i < gai.length; i++) {
        if (gai[i].name === search) {
            check = true
            modal.style.display = "block";
            let str = "<div class=\"card\" style=\"width: 18rem;\">\n" +
                "                                <img class=\"card-img-top\"\n" +
                "                                     src= " + gai[i].img +
                "                                     alt=\"Card image cap\">\n" +
                "                                <div class=\"card-body\">\n" +
                "                                    <h5 class=\"card-title\"> " + gai[i].name + "</h5>\n" +
                "                                    <p class=\"card-text\">" + gai[i].price + "</p>\n" +
                "                                    <button onclick='themGioHang(" + i + ")'>Thêm giỏ hàng</button>\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                        </div>";

            document.getElementById("pTimKiem").innerHTML += str
        }
    }
    if (check === false) {
        alert("Mời nhập lại");
    }
}

span.onclick = function () {
    modal.style.display = "none";
}

let gioHang = []

function hienThiGH() {
    let gh = ""
    for (let i = 0; i < gioHang.length; i++) {
        gh += '  <tr>\n' +
            '                            <td><img class="class-img" sizes="100px" src="' + gioHang[i].img + '   " alt="">' +
            '                            <td><p class="card-text">' + gioHang[i].price + '</p></td>\n' +
            '                            <td> <input style="width: 100px;outline: none" type="number" value="1"min="0"></td>\n' +
            '                            <td style="cursor: pointer" onclick="xoaGioHang(' + i + ')">Xóa</td>\n' +
            '\n' +
            '                        <tr>'
    }

    document.getElementById("gioHang").innerHTML = gh;
}

function themGioHang(id) {
    gioHang.push(gai[id]);
    hienThiGH();

}

function xoaGioHang(id) {
    gioHang.splice(id, 1);
    hienThiGH()

}

show()

function show() {
    let str = "";
    for (let i = 0; i < gai.length; i++) {
        str += `
           <div class="grid__row">
            <div class="grid__column-2-4">
            <a href="https://www.facebook.com/profile.php?id=100037618023382">
                <div class="home_produc-item">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top"
                             src="${gai[i].img}" width="200" height="150"}"
                             alt="Card image cap">

                    </div>
                </div>
            </a>
            <div class="card-body">
                <h5 class="card-title">${gai[i].name}</h5>
                <p class="card-text">${gai[i].price}</p>
               <button onclick="themGioHang(${i})">Thêm vào giỏ</button>
            </div>
           </div>
        </div>
`
    }
    document.getElementById("show_x").innerHTML = str;
}

function create() {
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    gai.push(new thongTin(img, name, price));
    clearInput();
    show();
}

function clearInput() {
    document.getElementById("name").value = "";
    document.getElementById("img").value = "";
    document.getElementById("price").value = "";
}

