const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const selectDe = document.querySelector(".select-de")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const startingValue = document.querySelector(".starting-value")
    const valueConvert = document.querySelector(".value-convert")/* dolar -outras moedas */



    const realToday = 1
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const bitcoinToday = 585.00

    if (selectDe.value == "dolar") {

        startingValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (selectDe.value == "euro") {

        startingValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (selectDe.value == "libra") {

        startingValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (selectDe.value === "bitcoin") {
        const btcValue = parseFloat(inputCurrencyValue) / bitcoinToday

        startingValue.innerHTML = btcValue.toFixed(8) + " BTC"
        const formatted = new Intl.NumberFormat("en-GB", {
            minimumFractionDigits: 8, maximumFractionDigits: 8
        })
            .format(btcValue)
        startingValue.innerHTML = formatted + " ₿"
    }

    if (selectDe.value == "real") {
        startingValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencySelect.value == "dolar") {

        valueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {

        valueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {

        valueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value === "bitcoin") {
        const btcValue = parseFloat(inputCurrencyValue) / bitcoinToday

        valueConvert.innerHTML = btcValue.toFixed(8) + " BTC"
        const formatted = new Intl.NumberFormat("en-GB", {
            minimumFractionDigits: 8, maximumFractionDigits: 8
        })
            .format(btcValue)
        valueConvert.innerHTML = formatted + " ₿"
    }

    if (currencySelect.value == "real") {
        valueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

}

const currencyName = document.getElementById("currency-name")
const currencyImg = document.querySelector(".currency-img")

function changeCurrency() {


    if (currencySelect.value == "real") {

        currencyName.innerHTML = "Real"
        currencyImg.src = "./Assets/Real.png"
    }

    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./Assets/Dolar.png"
    }

    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/Euro.png"
    }

    if (currencySelect.value == "libra") {

        currencyName.innerHTML = "Libra"
        currencyImg.src = "./Assets/Libra.png"
    }

    if (currencySelect.value == "bitcoin") {

        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./Assets/Bitcoin.png"
    }

    convertValues()
}

changeCurrency()

currencySelect.addEventListener("change", changeCurrency)

const currencyReal = document.getElementById("currency-real")
const imgConverter = document.querySelector(".img-converter")

function changeSelect() {

    if (selectDe.value == "real") {

        currencyReal.innerHTML = "Real"
        imgConverter.src = "./Assets/Real.png"
    }

    if (selectDe.value == "dolar") {

        currencyReal.innerHTML = "Dólar Americano"
        imgConverter.src = "./Assets/Dolar.png"
    }

    if (selectDe.value == "euro") {

        currencyReal.innerHTML = "Euro"
        imgConverter.src = "./Assets/Euro.png"
    }

    if (selectDe.value == "libra") {

        currencyReal.innerHTML = "Libra"
        imgConverter.src = "./Assets/Libra.png"
    }

    if (selectDe.value == "bitcoin") {

        currencyReal.innerHTML = "Bitcoin"
        imgConverter.src = "./Assets/Bitcoin.png"
    }
    convertValues()
}
changeSelect()

selectDe.addEventListener("change", changeSelect)

convertButton.addEventListener("click", convertValues)

