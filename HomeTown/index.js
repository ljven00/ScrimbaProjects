const theme = document.querySelector("#theme");
const root = document.querySelector(":root");

const moon = "fa-moon";
const sun = "fa-cloud-sun";

theme.addEventListener("click", () => {
    if(root.className === ""){
        root.className = "dark";
        theme.classList.remove(moon);
        theme.classList.add(sun);
    }else{
        root.className = "";
        theme.classList.remove(sun);
        theme.classList.add(moon);
    }
    
});