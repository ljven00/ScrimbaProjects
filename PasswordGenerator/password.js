const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const symbol = "*/-+!#$%&()=?{}[]<>,.";
const digits = 123456789;
const sample = upper + digits + lower + symbol;
let size = 15;


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

console.log(password);
