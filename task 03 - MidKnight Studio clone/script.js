//code for loader
window.addEventListener("load",function(){
    var loader=document.querySelector(".loader");
    loader.style.display="none";
})
//code for navigation bar color
window.addEventListener("scroll",function(){
    var nav=document.querySelector("nav");
    if(window.scrollY>40){
        nav.style.backgroundColor="black";
    }
    else{
        nav.style.backgroundColor="transparent";
    }
}); 
//code for title animation 
document.addEventListener("DOMContentLoaded",function(){
    var title=document.querySelector(".title h1");
    function showTitle(){
        // title.classList.remove("hidden");
        title.style.visibility="visible";
        title.classList.add("visible");
    }
    setTimeout(showTitle,1500);
});

