
let currentPlayer='O';
let btn=document.querySelectorAll(".row button");
let currentPlayerStatus=document.querySelector(".sub_container1 p span");
let winner_Status=document.querySelector(".sub_container1 p");
let someoneWon=false;

function swap(i){
    if(currentPlayer=='X'){
        currentPlayer='O';
        btn[i].innerHTML=currentPlayer;
        currentPlayerStatus.innerHTML='X';
    }
    else{
        currentPlayer='X';
        btn[i].innerHTML=currentPlayer;
        currentPlayerStatus.innerHTML='O';
    }
}
// function winner(){
//     if(btn[0,1,2].innerHTML!='' && btn[0].innerHTML==btn[1].innerHTML && btn[1].innerHTML==btn[2].innerHTML || 
//         btn[3,4,5].innerHTML!='' && btn[3].innerHTML==btn[4].innerHTML && btn[4].innerHTML==btn[5].innerHTML ||
//         btn[6,7,8].innerHTML!='' && btn[6].innerHTML==btn[7].innerHTML && btn[7].innerHTML==btn[8].innerHTML){
//         if(btn[0,1,2].innerHTML=='X' || btn[3,4,5].innerHTML=='X' || btn[6,7,8].innerHTML=='X'){
//             winner_Status.innerHTML='Congrats, X won the game !!';
//         }
//         else{
//             winner_Status.innerHTML='Congrats, O won the game !!';
//         }
//         someoneWon=true;
//     }
//     else if(btn[0,3,6].innerHTML!='' && btn[0].innerHTML==btn[3].innerHTML && btn[3].innerHTML==btn[6].innerHTML || 
//         btn[1,4,7].innerHTML!='' && btn[1].innerHTML==btn[4].innerHTML && btn[4].innerHTML==btn[7].innerHTML ||
//         btn[2,5,8].innerHTML!='' && btn[2].innerHTML==btn[5].innerHTML && btn[5].innerHTML==btn[8].innerHTML){
//         if(btn[0,3,6].innerHTML=='X' || btn[1,4,7].innerHTML=='X' || btn[2,5,8].innerHTML=='X'){
//             winner_Status.innerHTML='Congrats, X won the game !!';
//         }
//         else{
//             winner_Status.innerHTML=' Congrats, O won the game !!';
//         }
//         someoneWon=true;
//     }
//     else if(btn[0,4,8].innerHTML!='' && btn[0].innerHTML==btn[4].innerHTML && btn[4].innerHTML==btn[8].innerHTML || 
//         btn[2,4,6].innerHTML!='' && btn[2].innerHTML==btn[4].innerHTML && btn[4].innerHTML==btn[6].innerHTML){
//         if(btn[0,4,8].innerHTML=='X' || btn[2,4,6].innerHTML=='X'){
//             winner_Status.innerHTML='Congrats, X won the game !!';
//         }
//         else{
//             winner_Status.innerHTML='Congrats, O won the game !!';
//         }
//         someoneWon=true;
//     }
// }

function winner() {
    const winningCombinations = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++){
        let combination = winningCombinations[i];
        let a=combination[0];
        let b=combination[1];
        let c=combination[2];
        if (btn[a].innerHTML !== '' && btn[a].innerHTML === btn[b].innerHTML && btn[b].innerHTML === btn[c].innerHTML){
            someoneWon = true;
            if (btn[a].innerHTML === 'X') {
                winner_Status.innerHTML ='X won the game';
            } else {
                winner_Status.innerHTML = 'O won the game';
            }
            btn[a].style.background='rgba(0, 255, 0, 0.5)';
            btn[b].style.background='rgba(0, 255, 0, 0.5)';
            btn[c].style.background='rgba(0, 255, 0, 0.5)';
        }
    }
}

function gameTied(){
    if(btn[0].innerHTML!='' && btn[1].innerHTML!='' && btn[2].innerHTML!='' && btn[3].innerHTML!='' && btn[4].innerHTML!='' && btn[5].innerHTML!='' && btn[6].innerHTML!='' && btn[7].innerHTML!='' && btn[8].innerHTML!=''){
        winner_Status.innerHTML='Game Tied !!';
    }
}

function lets_play(){
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener("click",function(){
            if(btn[i].innerHTML==''){
                if(someoneWon==true){
                    console.log(someoneWon);
                    btn[i].style.cursor='not-allowed';
                }
                else{
                    swap(i);
                    winner();
                    gameTied();                
                }
            }      
        });
    }
}

function newGame(){
    let reset=document.querySelector(".sub_container3");
    reset.addEventListener('click',function(){
        location.reload();
    });
}


lets_play();
newGame();


