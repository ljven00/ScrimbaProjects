
/* Password characters */
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const symbol = "*/-+!#$%&()=?{}[]<>,.";
const digits = 123456789;
const sample = upper + digits + lower + symbol;



// password length
let size;
const sizeEl = document.querySelector("#password-length");

// passwords elements
const passwordOne = document.querySelector(".one");
const passwordTwo = document.querySelector(".two");


// copying the password on click
passwordOne.addEventListener("click", (e)=> {
	e.target.focus;
	navigator.clipboard.writeText(e.target.textContent)
	alert("First password copied");
});

passwordTwo.addEventListener("click", (e)=> {
	e.target.focus;
	navigator.clipboard.writeText(e.target.textContent)
	alert("Second password copied");
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


