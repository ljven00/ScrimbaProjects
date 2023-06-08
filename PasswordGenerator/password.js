
/* Password characters */
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const symbol = "*/-+!#$%&()=?{}[]<>,.";
const digits = 123456789;
const sample = upper + digits + lower + symbol;

// root
const rootEl = document.querySelector(":root");

// password length
let size;
const sizeEl = document.querySelector("#password-length");

// passwords elements
const passwordOne = document.querySelector(".one");
const passwordTwo = document.querySelector(".two");
const copied = document.querySelector("#copied");


function copiedAnimation(){
	copied.style.animation = "copy .3s ease";
	let timerId = setTimeout(()=>{
		copied.style.animation = "ease-in";
	}, 300);
}

// copying the password on click
passwordOne.addEventListener("click", (e)=> {
	e.target.focus;
	navigator.clipboard.writeText(e.target.textContent);
	copiedAnimation();
});

passwordTwo.addEventListener("click", (e)=> {
	e.target.focus;
	navigator.clipboard.writeText(e.target.textContent);
	copiedAnimation();
});

// generate password button
const generateBtn = document.querySelector("#gen-btn");

generateBtn.addEventListener("click", ()=>{
	size = Number(sizeEl.value);
	if(size < 15)
		size = 15;
	passwordOne.textContent = getSample(sample, size);
	passwordTwo.textContent = getSample(sample, size);
});

// double click event to change theme
generateBtn.addEventListener("dblclick", ()=>{
	if(rootEl.className === "")
		rootEl.className = "dark";
	else
		rootEl.className = "";
});

/* takes a string and a length to generate a random password */
function getSample(w, s){
	let string = "";
	let r;
	for(let i = 0; i < s; i++){
		r = Math.floor(Math.random() * w.length)
		string += w.charAt(r);
	}
	return string;
}

let password = getSample(sample, size);


