let numbers = [];

function addInArray() {
    let inputValue = document.querySelector("#input").value;
    if (!isNaN(Number(inputValue))) {
        numbers.push(Number(inputValue));
        let div = document.querySelector(".input_add").cloneNode(true);
        div.innerHTML = `${inputValue}`;
        document.querySelector(".input_add").after(div);
    }
    document.querySelector("#input").value = "";

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


