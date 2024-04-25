let userScore= 0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
//generate computer choice
const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx =Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game draw!";
    msg.style.backgroundColor="black";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText=`You lost. ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("choice was clicked",userChoice);
    //generate computer choise
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else{
            let userWin= true;
            if(userChoice==="rock"){
                //paper scissor
                userWin = compChoice==="paper"? false: true;
            }else if(userChoice==="paper"){
                //rock,scissor
                userWin = compChoice==="scissor"? false: true;
            }else{
                //rock paper
                userWin = compChoice==="rock"?  false:true ;
            }
            showWinner(userWin,userChoice,compChoice);
            }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});