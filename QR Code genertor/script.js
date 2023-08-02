let text=document.querySelector(".sub_container input");
let btn=document.querySelector(".sub_container button");
let img= document.querySelector(".sub_container img");

function qr(){
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
}

btn.addEventListener("click",function(){
    img.style.display="block";
    qr();
});

