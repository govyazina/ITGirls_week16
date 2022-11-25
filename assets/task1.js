let numbers = [];

document.querySelector("#input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".add").click();
    }
})

function addInArray() {
    let input = document.querySelector("#input");
    if (!isNaN(Number(input.value))) {
        numbers.push(Number(input.value));
        let inputAddDiv = document.querySelector(".input_add");
        let div = inputAddDiv.cloneNode(true);
        div.innerHTML = `${input.value}`;
        inputAddDiv.after(div);
    }
    input.value = "";
}

function sumInput() {
    numbers.sort(sortArr);
    document.querySelector(".array").innerHTML = `отсортированные значения: ${numbers}`;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    document.querySelector(".sum").innerHTML = `сумма значений: ${sum}`;
}

function sortArr(a, b) {
    return a - b;
}


