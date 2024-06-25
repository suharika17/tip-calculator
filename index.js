const bill = document.getElementById("bill")
let billValue;
let tipPercentage;
let tipAmount;
let totalContainer;

bill.addEventListener('change', (event) => {
    billValue = parseInt(event.target.value)
})


const tipButtons = document.querySelectorAll(".tip-buttons-container button")
Array(...tipButtons).map((tipButton) => {
    tipButton.addEventListener('click', (event) => {
        tipPercentage = event.target.textContent.slice(0, event.target.textContent.length - 1)
        tipPercentage = parseInt(tipPercentage)
        tipAmount = document.getElementById("tipAmount")
        tipAmount.textContent = `$${billValue * (tipPercentage / 100)}`
        console.log(tipAmount.textContent)
        totalContainer = document.getElementById("totalContainer")
        totalContainer.textContent = `$${billValue + parseInt(tipAmount.textContent.slice(1))}`
    })
})
const customInput = document.getElementById("customInput")
customInput.addEventListener('change', (event) => {
    tipPercentage = event.target.value
    tipPercentage = parseInt(tipPercentage)
    console.log(tipPercentage)
    tipAmount = document.getElementById("tipAmount")
    tipAmount.textContent = `$${billValue * (tipPercentage / 100)}`
    totalContainer = document.getElementById("totalContainer")
    totalContainer.textContent = `$${billValue + parseInt(tipAmount.textContent.slice(1))}`
})