const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const num = document.querySelectorAll(".num");
const subTotal = document.querySelectorAll(".subTotal");
const unitPrice = document.querySelectorAll(".unitPrice");
const totalPrice = document.querySelector(".totalPrice");

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", () => {
        let a = parseInt(num[i].innerText) + 1;
        subTotal[i].innerText = parseInt(unitPrice[i].innerText.replace(" DA", "")) * a + " DA"
        a = (a < 10) ? "0" + a : a;
        num[i].innerText = a;
        totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt(unitPrice[i].innerText.replace(" DA", ""))
    })
};

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", () => {
        let a = parseInt(num[i].innerText) - 1;
        if (a >= 0) {
            subTotal[i].innerText = parseInt(unitPrice[i].innerText.replace(" DA", "")) * a + " DA"
            a = (a < 10) ? "0" + a : a;
            num[i].innerText = a;
            totalPrice.innerText = parseInt(totalPrice.innerText) - parseInt(unitPrice[i].innerText.replace(" DA", ""))
        }
    })
};

let price = 0;
for (let i = 0; i < subTotal.length; i++) {
    price = price + parseInt(subTotal[i].innerText.replace(" DA", ""))
}
totalPrice.innerText = price



let removeItemBtn = document.querySelectorAll(".removeBtn")
for (let i = 0; i < removeItemBtn.length; i++) {
    let button = removeItemBtn[i]
    button.addEventListener('click', function (event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

