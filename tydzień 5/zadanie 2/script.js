const currencies = window.currencies;

function formatPrice(currency) {

    let rate = currencies[currency];

    return function(strings, ...values) {

        let otp = "";

        strings.forEach(function(string, index) {

            let value = values[index];

            otp += string;

            if(value !== undefined) {

                if(typeof value === "number") {
                    otp += (value / rate).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + " " + currency;
                } else {
                    otp += value;
                }

            }

        });

        return otp;

    };

}

let product = {
    name: "Pendrive 16GB",
    price: 23,
    quantity: 4
};

let { name: pName, price: pPrice, quantity: pQuantity } = product || {};

let info = formatPrice("USD")`Kupiłeś produkt '${pName}' w cenie ${pPrice} za sztukę. Łączna wartość zamówienia to ${pPrice * pQuantity}.`;

document.querySelector("#otp").textContent = info;