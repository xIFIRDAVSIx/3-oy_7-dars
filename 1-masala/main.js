let elForm = document.querySelector(".form")
let elInp1 = document.querySelector(".inp1")
let elInp2 = document.querySelector(".inp2")
let elSelect = document.querySelector(".selc")


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()
    function myFunc() {

        if (elSelect.value == "usd") {
            elInp2.value = elInp1.value * 13000 + " so'm"

        } else if (elSelect.value == "yevro") {
            elInp2.value = elInp1.value * 14500 + " so'm"

        } else if (elSelect.value == "yuan") {
            elInp2.value = elInp1.value * 1700 + " so'm"

        } else if (elSelect.value == "rubl") {
            elInp2.value = elInp1.value * 160 + " so'm"

        } else if (elSelect.value == "dinor") {
            elInp2.value = elInp1.value * 125 + " so'm"

        } else if (elSelect.value == "funt") {
            elInp2.value = elInp1.value * 17000 + " so'm"

        } else {
            console.log(0); 
        }
    }

    myFunc()
})
