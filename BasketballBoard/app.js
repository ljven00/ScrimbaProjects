
// scores
let homeScore = 0;
let guessScore = 0;

// scores label
const home = document.getElementById("home");
const guess = document.getElementById("guess");


// event listener
const btns = Array.from(document.querySelectorAll(".points"));

for (const btn of btns) {
    btn.addEventListener("click", addPoints);
}


// updating score

function addPoints(e){
    let btnClassName = e.target.className;
    let pointName = Number(e.target.textContent.charAt(2));
    let point;
    switch(pointName){
        case 1: point = 1;
            break;
        case 2: point = 2;
            break;
        default: point = 3;
    }
    

    if(btnClassName.indexOf("home") != -1 ){
        homeScore += point;
        home.textContent = homeScore;
    }else{
        guessScore += point;
        guess.textContent = guessScore;
    }

    winner(homeScore, guessScore);
}


function winner(homeScore, guessScore){
    if(homeScore > guessScore){
        if(home.className.indexOf("winner") != -1)
            return
        else{
            home.classList.add("winner");
            guess.className = "score";
        }
    }else if(guessScore > homeScore){
        if(guess.className.indexOf("winner") != -1)
            return
        else{
            guess.classList.add("winner");
            home.className = "score";
        }
    }else{
        home.className = "score";
        guess.className = "score";
    }
}