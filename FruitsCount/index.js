
// emoji
const appleIcon = "🍎";
const bananaIcon = "🍌";
const avocadoIcon = "🥑";
const otherIcon = "🌳";
let currentIcon;

let count = 0;

let appleEl = document.querySelector("#apple-count");
let bananaEl = document.querySelector("#banana-count");
let avocadoEl = document.querySelector("#avocado-count");
let otherEl = document.querySelector("#other-count");
let countEl = document.querySelector("#count");

const clearBtn = document.querySelector("#clear");
const resetBtn = document.querySelector("#reset");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
let currentFruit;
let fruitChoice;

// increment 
function increment(){
    fruitChoice = document.querySelector("input[name='fruit']:checked");
    [count, currentIcon] = fruitCheck(fruitChoice.value);
    count += 1;
    currentFruit = document.querySelector(`#${fruitChoice.id}-count`);
    currentFruit.textContent = count;
    countEl.textContent = `${count} ${currentIcon}`;
}

plusBtn.addEventListener("click", increment);

// decrement
function decrement(){
    fruitChoice = document.querySelector("input[name='fruit']:checked");
    [count, currentIcon] = fruitCheck(fruitChoice.value);
    if(count === 0)
        return;
    count -= 1;
    currentFruit = document.querySelector(`#${fruitChoice.id}-count`);
    currentFruit.textContent = count;
    countEl.textContent = `${count} ${currentIcon} (s)`;
}

minusBtn.addEventListener("click", decrement);

// fruit check
function fruitCheck(fruitChoice){
    let n, icn;
    switch(fruitChoice){
        case "Apple": {
            n = Number(appleEl.textContent);
            icn = appleIcon;
        }
            break;
        case "Banana": {
            n = Number(bananaEl.textContent);
            icn = bananaIcon;
        }
            break;
        case "Avocado": {
            n = Number(avocadoEl.textContent);
            icn = avocadoIcon;
        }
            break;
        default: {
            n = Number(otherEl.textContent);
            icn = otherIcon;
        }
            break;
    }
    
    return [n, icn];
}


// reset
function reset(){
    count = 0;
    appleEl.textContent = count;
    bananaEl.textContent = count;
    avocadoEl.textContent = count;
    otherEl.textContent = count;
    countEl.textContent = count;
}

resetBtn.addEventListener("click", reset);

// clear
function clear(){
    count = 0;
    currentFruit.textContent = count;
    countEl.textContent = count;
}

clearBtn.addEventListener("click", clear);