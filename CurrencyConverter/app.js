const currency1 = document.querySelector("#currency1");
const currency2 = document.querySelector("#currency2");
const currency1Input = document.querySelector("#currency1Input");
const currency2Input = document.querySelector("#currency2Input");
const swapBtn = document.querySelector("#primary");

let currencyData;
let conversion_rate;
async function fetchCurrencyList(){
    currencyData = await (await fetch("https://v6.exchangerate-api.com/v6/0a4f5d58fe160ce11365dea0/latest/USD")).json();
    populateDropDowns();
}

function populateDropDowns()
{
    const allCurrencies = Object.keys(currencyData.conversion_rates);
    allCurrencies.forEach((currency) => {
        const option1 = document.createElement("option");
        option1.innerText = currency;
        currency1.insertAdjacentElement("beforeend", option1);

        const option2 = document.createElement("option");
        option2.innerText = currency;
        currency2.insertAdjacentElement("beforeend", option2);
    })
}


fetchCurrencyList();


async function fetchConversionRate(){
    let response;
    if(currency1.value !== "none" && currency2.value !== "none")
    {
        response = await axios.get(`https://v6.exchangerate-api.com/v6/0a4f5d58fe160ce11365dea0/pair/${currency1.value}/${currency2.value}`);   
        conversion_rate = response.data.conversion_rate;
        console.log(conversion_rate);
        currency2Input.value = currency1Input.value * conversion_rate;
    }
}

currency1.addEventListener("change", async () => {
    fetchConversionRate();
});

currency2.addEventListener("change", async() => {
    fetchConversionRate();
})

currency1Input.addEventListener("input", () => {
    currency2Input.value = currency1Input.value * conversion_rate;
});


swapBtn.addEventListener("click", () => {
    if(currency1.value !== "none" && currency2.value !== "none"){
        let temp = currency1.value;
        currency1.value = currency2.value;
        currency2.value = temp;

        fetchConversionRate();
    }
})