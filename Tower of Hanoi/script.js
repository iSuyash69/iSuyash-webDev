let selectedValue='3';

//Function for how to play button
function popup(){
    let howToPlay=document.querySelector("#howto");
    howToPlay.addEventListener("click",function(){
        let popup=document.querySelector(".popup");
        let closePopup=document.querySelector(".popup i");
        popup.style.display='flex';
        closePopup.addEventListener("click",function(){
            popup.style.display='none';
        });
    });
}

// Function for restart button 
function restart(){
    let restart=document.querySelector("#restart");
    restart.addEventListener("click",function(){
        location.reload();
    });
}

// Function to change no of disks
function disks(){
    let yellow=document.querySelector(".yellow");
    let pink=document.querySelector(".pink");
    let diskNumber=document.querySelector("#no_of_disks");
    diskNumber.addEventListener("change",function(){
        selectedValue=this.value;
        if(selectedValue=='3'){
            yellow.style.display='none';
            pink.style.display='none';            
        }
        else if(selectedValue=='4'){
            yellow.style.display='block';
            pink.style.display='none';            

        }
        else if(selectedValue=='5'){
            yellow.style.display='block';
            pink.style.display='block';
        }
    });
}


//Function for winning condition
function success(moves){
    Swal.fire({
        icon:'success',
        title: 'Congragulations....',
        text: `You completed the game in ${moves} moves`,
        showConfirmButton:false,
        timer:3000,
        customClass: {
            popup: 'custom-popup',
            title: 'custom-title',
            content: 'custom-text',
        },
        didDestroy:function(){
            location.reload(); 
        }
    });
}

//Function for failure condition
function failure(){
    Swal.fire({
        icon:'error',
        title:'Game Over',
        text:'placing larger block onto a smaller block is not allowed',
        showConfirmButton:false,
        timer:2500,
        customClass:{
            popup:'custom-popup',
            title:'custom-title',
            content:'custom-text',
        },
        didDestroy:function(){
            location.reload();
        }
    });
}

//Main function of the game - dragging mechanism and game logic 
function mechanicsAndLogic(){
    let moves= document.querySelector("h2 span");
    let movesCount=0;
    let selectedBlock=null;
    let towers=document.querySelectorAll(".tower");
    let blocks=document.querySelectorAll(".block");

    for(let i=0;i<towers.length;i++){
        for(let j=0;j<blocks.length;j++){
            blocks[j].addEventListener('dragstart',function(event){
                selectedBlock=event.target;
                if(selectedBlock!=event.target.parentElement.firstElementChild){
                    event.preventDefault();
                }
            });
        }
        towers[i].addEventListener("dragover",function(event){
            event.preventDefault();
        });
        towers[i].addEventListener("drop",function(event){
            let towerC=document.querySelector(".C");
            let lastBlock=event.target.lastElementChild;
            let currentValue=parseInt(selectedBlock.getAttribute('value'));
            let lastValue=0;
            if(lastBlock!=null){
                lastValue=lastBlock.getAttribute('value');
                if(currentValue>lastValue){
                    failure();
                }
                else{
                    towers[i].insertBefore(selectedBlock,towers[i].firstChild);
                    movesCount++;
                }
            }
            else{
                towers[i].insertBefore(selectedBlock,towers[i].firstChild);
                movesCount++;
            }
            moves.innerHTML=movesCount;
            console.log(selectedValue);
            if(towerC.children.length==selectedValue){
                success(movesCount);
            }
        });      
    }
}

disks();
popup();
restart();
mechanicsAndLogic();
