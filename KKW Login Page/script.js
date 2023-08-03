function nextFocus(){
    document.addEventListener("keydown",function(event){

        if(event.key==='Enter'){
            let inputBox=document.querySelectorAll("input")[0];
            inputBox.focus();
        }

        let inputBox=document.querySelectorAll("input")[0];
        if(inputBox.value!=''){
            if(event.key==='Enter'){
                let nextBox=document.querySelectorAll("input")[1];
                nextBox.focus();
            }
        }
        textInput="";
        let nextBox=document.querySelectorAll("input")[1];
        if(nextBox.value!=''){
            if(event.key==='Enter'){
                btn=document.querySelector("button");
                btn.focus();
            }
        }
    });
}

function error(){
    let btn=document.querySelector(".btn");
    let error=document.createElement("div");

    document.querySelector(".btn button").addEventListener("click",function(){
        
        let textInput=document.querySelectorAll("input")[0].value;
        let passwordInput=document.querySelectorAll("input")[1].value;

        if(textInput==''){
            error.innerHTML="Please Enter your Username";
            btn.appendChild(error);
            document.querySelector(".btn div").classList.add("error");
            document.querySelector(".sub-container").classList.add("shake");
            setTimeout(function(){
                document.querySelector(".sub-container").classList.remove("shake");
            },500);
        }
        else if(passwordInput==''){
            error.innerHTML="Please Enter your Password";
            btn.appendChild(error);
            document.querySelector(".btn div").classList.add("error");
            document.querySelector(".sub-container").classList.add("shake");
            setTimeout(function(){
                document.querySelector(".sub-container").classList.remove("shake");
            }, 500);
        }
        else{
            error.innerHTML='';
            btn.appendChild(error);
            document.querySelector(".btn div").classList.remove("error");
            signIn();
        }
    });
}

function signIn(){
    document.querySelector(".title h1").innerHTML="You are signed in as ";
    document.querySelector(".title span h1").innerHTML=document.querySelectorAll("input")[0].value;
    document.querySelectorAll("input")[0].value='';
    document.querySelectorAll("input")[0].remove();
    document.querySelectorAll("input")[0].remove();
    let signInJpg=document.createElement("img");
    document.querySelector(".input").innerHTML+=signInJpg.innerHTML="<img src="+"https://patch.com/img/cdn20/users/22973312/20190703/111508/styles/patch_image/public/green-check-point-patch___03111500060.jpg"+" >";
    document.querySelector(".input img").style.width='88px';
    document.querySelector(".input img").style.paddingBottom='35px';
    document.querySelector(".btn button").innerHTML="Sign Out";
    reloadPage();
}

function reloadPage(){
    document.querySelector(".btn button").addEventListener("click",function(){
        location.reload();
    }
)};

nextFocus();
error();