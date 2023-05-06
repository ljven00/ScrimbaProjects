
//input value
const valueEl = document.querySelector("#value");
let value;

// placeholder of value to be converted
const valToBeConvertedEl = Array.from(document.querySelectorAll(".value"));

// value converted
const feetEl = document.querySelector("#feet");
const metersEl = document.querySelector("#meters");
const gallonsEl = document.querySelector("#gallons");
const litersEl = document.querySelector("#liters");
const poundsEl = document.querySelector("#pounds");
const kilosEl = document.querySelector("#kilos");

// convert button
const convertBtn = document.querySelector("#convert-btn");

// convert click event
convertBtn.addEventListener("click", () =>{
    value = Number(valueEl.value);
    if(isNaN(value) || value <= 0){
        value = 20;
        valueEl.value = value;
    }
    feetEl.textContent = toFeet(value);
    metersEl.textContent = toMeters(value);
    gallonsEl.textContent = toGallons(value);
    litersEl.textContent = toLiters(value);
    poundsEl.textContent = toPounds(value);
    kilosEl.textContent = toKilos(value);
    renderInput(value, valToBeConvertedEl);
});

// conversion function

/* return the feet measures of the given meter */
function toFeet(n){
    return (3.28084 * n).toFixed(3);
}

/* */
function toMeters(n){
    return (n / 3.28084).toFixed(3);
}

/* */
function toGallons(n){
    return (n / 3.785).toFixed(3);
}

/* */
function toLiters(n){
    return (n * 3.785).toFixed(3);
}

/* */
function toPounds(n){
    return (n * 2.205).toFixed(3);
}

/* */
function toKilos(n){
    return (n / 2.205).toFixed(3);
}


// filling value to be converted
function renderInput(n, arr){
    for (const el of arr) {
        el.textContent = n;
    }
}
