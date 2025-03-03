const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

// Populate dropdowns with currency options to populate the dropdown with currencycode
for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        
        // Set default selected currencies
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "NPR") {
            newOption.selected = "selected";
        }
        
        select.append(newOption);
    }

    // Update flag on currency change using eventlistener change as the country on the select dropdown changes the flag is updated accordingly
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Function to update flags based on selected currency which is used by even listener above.
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];  // Use country list to get country code
    let img = element.parentElement.querySelector("img");
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    img.src = newSrc;
};




//button with eventlistener click which triggers the coversion based on below code



btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    // If the amount is empty or less than 1, set it to 1
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    // Logging selected currencies (for debugging)
    console.log(fromCurr.value, toCurr.value);

    const BASE_URL = "https://api.exchangerate-api.com/v4/latest";
    const URL = `${BASE_URL}/${fromCurr.value.toUpperCase()}`;

    try {
        // Fetch exchange rate data
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);

        // Check if the target currency is available
        if (data.rates[toCurr.value.toUpperCase()]) {
            let rate = data.rates[toCurr.value.toUpperCase()];
            let convertedAmount = (amtVal * rate).toFixed(2);

            // Show result on the screen rather than on the console
            let resultMsg = document.querySelector("#conversion-result");
            resultMsg.innerText = `${amtVal} ${fromCurr.value} = ${convertedAmount} ${toCurr.value}`;
        } else {
            console.error("Invalid currency selection");
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
    }
});
