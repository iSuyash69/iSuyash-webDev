
document.addEventListener("DOMContentLoaded",function(){
    var delay=0;
    var title=document.querySelector(".title h1");
    function showTitle(){
        title.classList.remove("hidden");
        // title.classList.add("animation");
    }
    setTimeout(showTitle,delay);
});

