function Input(event) {
    if (event.key === "Enter") {
        calculateTip();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const tipSlider = document.getElementById("tipSlider");
    const tipPercentTextBox = document.getElementById("tipPercentTextBox");
    const tipAmountTextBox = document.getElementById("tipAmountTextBox");
    const totalTextBox = document.getElementById("totalTextBox");

    tipPercentTextBox.value = tipSlider.value + "%";

    tipSlider.addEventListener("input", function () {
        tipPercentTextBox.value = tipSlider.value + "%";
        calculateTip();
    });

    function calculateTip() {
        const billTotal = parseFloat(document.getElementById("myTextBox").value);
        const tipPercentage = parseFloat(tipSlider.value);
        const tipAmount = (billTotal * (tipPercentage / 100));
        const totalBill = (billTotal + parseFloat(tipAmount));

        tipAmountTextBox.value = "$" + tipAmount.toFixed(2);
        totalTextBox.value = "$" + totalBill.toFixed(2);
    }
});

