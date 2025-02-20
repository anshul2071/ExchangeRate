

const dropdowns = document.querySelectorAll(".dropdown select");


const btn = document.querySelector("form button");


const fromCurr = document.querySelector(".from select");
const toCurr  = document.querySelector(".to select");

for(let select of dropdowns) {
    for(currCode in countryList) {
        let newOption = document.createElement("option");

    

    newOption.innerText = currCode;
    newOption.value = currCode;
    if(select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "NPR") {
        newOption.selected = "selected";
    }
    select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
let currCode = element.value;
let countryCode = countryList[currCode];
let img = element.parentElement.querySelector("img");
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

img.src = newSrc;

};


btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1"; // Fixes typo `amount,value`
    }

    console.log(fromCurr.value, toCurr.value);

    const BASE_URL = "https://api.exchangerate-api.com/v4/latest";
    const URL = `${BASE_URL}/${fromCurr.value.toUpperCase()}`;

    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);

        if (data.rates[toCurr.value.toUpperCase()]) {
            let rate = data.rates[toCurr.value.toUpperCase()];
            let convertedAmount = (amtVal * rate).toFixed(2);
            console.log(`Converted Amount: ${convertedAmount} ${toCurr.value}`);
        } else {
            console.error("Invalid currency selection");
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
    }
});
