
//input value
const valueEl = $("#value");
// const valueEl = document.querySelector("#value");
let value;


// placeholder of value to be converted
const valToBeConvertedEl = Array.from(document.querySelectorAll(".value"));

// value converted
const feetEl = $("#feet");
// const feetEl = document.querySelector("#feet");
const metersEl = $("#meters");
// const metersEl = document.querySelector("#meters");
const gallonsEl = $("#gallons");
// const gallonsEl = document.querySelector("#gallons");
const litersEl = $("#liters");
// const litersEl = document.querySelector("#liters");
const poundsEl = $("#pounds");
// const poundsEl = document.querySelector("#pounds");
const kilosEl = $("#kilos");
// const kilosEl = document.querySelector("#kilos");

// convert button
const convertBtn = $("#convert-btn");
// const convertBtn = document.querySelector("#convert-btn");

// convert click event
convertBtn.click(function(){
    value = Number(valueEl.val());
    if(isNaN(value) || value <= 0){
        value = 20;
        valueEl.val(value);
    }
    valueEl.val("");
    renderConversion(value)
});

/*
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
*/

// render conversion function

function renderConversion(val){
    feetEl.text(toFeet(val));
    metersEl.text(toMeters(val));
    gallonsEl.text(toGallons(val));
    litersEl.text(toLiters(val));
    poundsEl.text(toPounds(val));
    kilosEl.text(toKilos(val));
    renderInput(value, valToBeConvertedEl);
}


// conversion functions

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
