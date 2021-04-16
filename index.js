//A
//1.

function findOppositeNumber(n, inputNumber) {
    let i = n / 2 + inputNumber;
    if (i < n) {
        console.log(i);
    } else {
        console.log(i - n);
    }
}

findOppositeNumber(10, 2);
findOppositeNumber(10, 6);

//2.

function merger2String(s1, s2) {
    let x = [];
    let y = [];
    x = s1.split("");
    y = s2.split("");
    let arr = [];
    for (i = 0; i < Math.max(x.length, y.length); i++) {
        arr.push(x[i], y[i]);
    }
    console.log(arr.join(""));
}

merger2String("abc", "123");
merger2String("abc", "0123");
merger2String("abcd", "123");

//B

let form = document.querySelector('#input');
let count = 0;
let luckyNumber = Math.floor(Math.random() * 10) + 1;
form.onsubmit = (e) => {
    e.preventDefault();
    count++;
    if (count < 3) {
        let number = form.number.value;
        if (isNaN(number)) {
            alert("Số bạn nhập không phù hợp. Vui lòng nhập lại");
        } else if (number == "") {
            alert("Không được để trống ô dự đoán. Vui lòng nhập một số phù hợp")
        } else if (number > 10) {
            alert("Số bạn nhập không phù hợp. Vui lòng nhập lại")
        } else if (number === luckyNumber) {
            alert("Xin chúc mừng bạn đã đoán trúng số độc đắc");
        } else {
            alert("Số bạn nhập không trúng");
        }
    } else {
        alert("Bạn đã dùng hết 3 lần dự đoán. Vui lòng quay lại sau.")
    }
}

