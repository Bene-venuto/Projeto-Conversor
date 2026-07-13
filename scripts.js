const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectFrom = document.querySelector(".currency-select-from")
const inputCurrency = document.querySelector(".input-currency")

// Taxas de câmbio em relação ao Real Brasileiro (BRL)
    const exchangeRates = {
        "BRL": 1,
        "USD": 5.2,
        "EUR": 5.5,
        "GBP": 6.3,
        "BTC": 280000
    }

function convertValues(){
    const inputCurrencyValue = inputCurrency.value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    // Verifica se o valor de entrada é válido (não vazio e maior que zero)
    if (!inputCurrencyValue || inputCurrencyValue <= 0) {
        currencyValueToConvert.innerHTML = "R$0,00"
        currencyValueConverted.innerHTML = "R$0,00"
        return
    
} 

const currencyFrom = currencySelectFrom.value
const currencyTo = currencySelect.value

// Converte o valor de entrada para BRL (Real Brasileiro) usando a taxa de câmbio da moeda de origem
const valueInBRL = inputCurrencyValue * exchangeRates[currencyFrom]
const convertedValue = valueInBRL / exchangeRates[currencyTo]

 // Formata o valor a ser convertido com base na moeda selecionada
currencyValueToConvert.innerHTML = new Intl.NumberFormat(
    getLocale(currencyFrom), {
        style: "currency",
        currency: currencyFrom
    }
).format(inputCurrencyValue)

// Formata o valor convertido com base na moeda selecionada
currencyValueConverted.innerHTML = new Intl.NumberFormat(
    getLocale(currencyTo), {
        style: "currency",
        currency: currencyTo
    }
).format(convertedValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    const currencyInfo = {
        "BRL": {name: "Real Brasileiro", img: "./assets/Brasil.png"},
        "USD": {name: "Dólar Americano", img: "./assets/USA.png"},
        "EUR": {name: "Euro", img: "./assets/Euro.png"},
        "GBP": {name: "Libra Esterlina", img: "./assets/Libra.png"},
        "BTC": {name: "Bitcoin", img: "./assets/Bitcoin.png"}
    }

    const selected = currencyInfo[currencySelect.value]
    currencyName.innerHTML = selected.name
    currencyImg.src = selected.img

    convertValues()
}

function changeCurrencyFrom() {
    const currencyNameFrom = document.getElementById("currency-name-from")
    const currencyImgFrom = document.querySelector(".currency-img-from")

    const currencyInfo = {
        "BRL": {name: "Real Brasileiro", img: "./assets/Brasil.png"},
        "USD": {name: "Dólar Americano", img: "./assets/USA.png"},
        "EUR": {name: "Euro", img: "./assets/Euro.png"},
        "GBP": {name: "Libra Esterlina", img: "./assets/Libra.png"},
        "BTC": {name: "Bitcoin", img: "./assets/Bitcoin.png"}
    }

    const selected = currencyInfo[currencySelectFrom.value]
    currencyNameFrom.innerHTML = selected.name
    currencyImgFrom.src = selected.img

    convertValues()
}
 // Função auxiliar para obter o locale correto com base na moeda selecionada
function getLocale(currency) {
    const locales = {
        "BRL": "pt-BR",
        "USD": "en-US",
        "EUR": "de-DE",
        "GBP": "en-GB",
        "BTC": "en-US"
    }
    return locales[currency] 
}


currencySelect.addEventListener("change", changeCurrency)
currencySelectFrom.addEventListener("change", changeCurrencyFrom)
convertButton.addEventListener("click", convertValues)
inputCurrency.addEventListener("input", convertValues)


