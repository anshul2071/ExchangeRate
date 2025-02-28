const btn = document.querySelector("#btn");
const fromCurr = document.querySelector("#from-currency");
const toCurr = document.querySelector("#to-currency");
const resultMsg = document.querySelector("#conversion-result");
const amountInput = document.querySelector("#amount");
const fromFlag = document.querySelector("#from-flag");
const toFlag = document.querySelector("#to-flag");

// Update flag when currency changes
const updateFlag = (element, flagElement) => {
    let currencyCode = element.value;
    let countryCode = element.getAttribute("data-country"); // Assuming you have country codes in HTML
    flagElement.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

fromCurr.addEventListener("change", () => updateFlag(fromCurr, fromFlag));
toCurr.addEventListener("change", () => updateFlag(toCurr, toFlag));

// Convert currency when button is clicked
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    let amtVal = amountInput.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amountInput.value = "1";
    }

    const BASE_URL = "https://api.exchangerate-api.com/v4/latest";
    const URL = `${BASE_URL}/${fromCurr.value.toUpperCase()}`;

    try {
        let response = await fetch(URL);
        let data = await response.json();

        if (data.rates[toCurr.value.toUpperCase()]) {
            let rate = data.rates[toCurr.value.toUpperCase()];
            let convertedAmount = (amtVal * rate).toFixed(2);

            // Show result on the screen
            resultMsg.innerText = `${amtVal} ${fromCurr.value} = ${convertedAmount} ${toCurr.value}`;
        } else {
            resultMsg.innerText = "Invalid currency selection";
        }
    } catch (error) {
        resultMsg.innerText = "Error fetching exchange rates!";
        console.error("Error fetching exchange rates:", error);
    }
});
