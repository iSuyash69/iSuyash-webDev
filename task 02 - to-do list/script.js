var inputBox=document.querySelector(".flex-item1 input");
var listContainer=document.querySelector(".list-container");

function addTask(){
    if(inputBox.value===''){
        alert("No input given ! Task can't be added ");
    }
    else{
        var li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        var removeIcon=document.createElement("span");
        removeIcon.innerHTML="\u00d7";
        removeIcon.classList.add("removeIcon")
        li.appendChild(removeIcon);
        var editIcon=document.createElement("span");
        editIcon.innerHTML="\u270e";
        editIcon.classList.add("editIcon")
        li.appendChild(editIcon);

    }
    inputBox.value='';
    saveData();
}
document.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        addTask();
    }
    else if(event.key==='Escape'){
        var li=document.querySelectorAll("li")[0];
        li.remove();
    }
});

listContainer.addEventListener("click", function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("Checked");
        saveData();
    }
    else if(event.target.classList.contains("removeIcon")){
        event.target.parentElement.remove();
        saveData();
    }
    else if(event.target.classList.contains("editIcon")){
       let taskContent=event.target.parentElement.textContent;
       taskContent=taskContent.slice(0,-2);
       event.target.parentElement.remove();
       inputBox.value=taskContent;
       inputBox.focus();
    }
});


function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();