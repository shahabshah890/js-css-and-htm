const BASE_URL =
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns= document.querySelectorAll("dropdown select")


for(let select of dropdowns){
    for(code in countryList){
        console.log(code,countryList[code])
    }
}