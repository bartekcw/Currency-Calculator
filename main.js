function calculateEurExchange(input) {
    fetch("http://api.nbp.pl/api/exchangerates/rates/a/eur/")
        .then((data) => data.json())
        .then((data) => {
            console.log("Kurs euro", data.rates[0].mid);
            let eurRate = data.rates[0].mid
            let endValue = input * eurRate
            document.querySelector("#endvalue").innerHTML = endValue.toFixed(2)
        })
        .catch((err) => console.log(err))
}

function calculateUsdExchange(input) {
    fetch("http://api.nbp.pl/api/exchangerates/rates/a/usd/")
        .then((data) => data.json())
        .then((data) => {
            console.log("Kurs dolar amerykański", data.rates[0].mid);
            let usdRate = data.rates[0].mid
            let endValue = input * usdRate
            document.querySelector("#endvalue").innerHTML = endValue.toFixed(2)
        })
        .catch((err) => console.log(err))
}

function calculateChfExchange(input) {
    fetch("http://api.nbp.pl/api/exchangerates/rates/a/chf/")
        .then((data) => data.json())
        .then((data) => {
            console.log("Kurs frank szwajcarski", data.rates[0].mid);
            let chfRate = data.rates[0].mid
            let endValue = input * chfRate
            document.querySelector("#endvalue").innerHTML = endValue.toFixed(2)
        })
        .catch((err) => console.log(err))
}


document.addEventListener("DOMContentLoaded", function() {
    
    let form = document.querySelector(".exchangeform")


    form.addEventListener("submit", (e) => {

        e.preventDefault()

        let givenValue = document.querySelector(".inputamount").value
        console.log(givenValue);
        let givenCurrency = document.querySelector("#currency").value
        console.log("Wybrana waluta to", givenCurrency);

        if (givenCurrency === "EUR") {
            calculateEurExchange(givenValue)
        } else if (givenCurrency === "USD") {
            calculateUsdExchange(givenValue)
        } else if (givenCurrency === "CHF") {
            calculateChfExchange(givenValue)
        }
    })
    
});