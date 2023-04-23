
const root = document.querySelector(":root");
const btn = document.querySelector(".theme");
root.classList.add("light");

btn.addEventListener("click", (e) => {
    if(root.className === "light"){
        root.className = "dark";
        e.target.innerText = "Light Mode";
    }
    else{
        root.className = "light";
        e.target.innerText = "Dark Mode";
    }
});
