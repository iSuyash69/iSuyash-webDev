function main(){
    if(document.querySelector(".search_box input").value==''){
        alert("No input given");
    }
    else{
        fetching();
        document.querySelector(".content").style.display='flex';
        document.querySelector(".extras").style.display='flex';
    }
}

function fetching(){
    const apiUrl1='https://api.openweathermap.org/data/2.5/weather?q=';
    const apiUrl2='&appid=7a230a2594131583dcd6abfdd7bf2443&units=metric';
    let city=document.querySelector(".search_box input").value;
    fetch(apiUrl1+city+apiUrl2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        document.querySelector("#city").style.fontSize='35px';
        document.querySelector("#city").innerHTML=data.name;
        document.querySelector("#temperature").innerHTML=Math.ceil(data.main.temp)+'&deg;c';
        document.querySelector(".wind h2").innerHTML=data.wind.speed+'Km/h';
        document.querySelector(".humidity h2").innerHTML=data.main.humidity+'%';
        console.log(data);
        weather(data);
    })
    .catch(function(){
        document.querySelector(".content img").style.width='75px';
        document.querySelector(".content img").setAttribute("src",'https://images.emojiterra.com/google/android-11/512px/1f972.png');
        document.querySelector("#temperature").innerHTML='';
        document.querySelector("#city").style.fontSize='25px';
        document.querySelector("#city").innerHTML='City Not Found';
        document.querySelector(".wind h2").innerHTML='';
        document.querySelector(".humidity h2").innerHTML='';
        alert("plz enter correct city name");
    })
}

function weather(data){
    document.querySelector(".content img").style.width='110px';
    switch(data.weather[0].main){
        case 'Haze':
            document.querySelector(".content img").setAttribute("src",'images/mist.png');
            break;
        case 'Clouds':
            document.querySelector(".content img").setAttribute("src",'images/clouds.png');
            break;
        case 'Snow':
            document.querySelector(".content img").setAttribute("src",'images/snow.png');                
            break;
        case 'Clear':
            document.querySelector(".content img").setAttribute("src",'C:images/clear.png');
            break;
        case 'Rain':
            document.querySelector(".content img").setAttribute("src",'images/rain.png');
            break;      
        case 'Drizzle':
            document.querySelector(".content img").setAttribute("src",'images/drizzle.png');
            break;
        default:
            document.querySelector(".content img").setAttribute("src",'images/clouds.png');
            break;
    }
}

document.querySelector(".search_box i").addEventListener("click",function(){
    main();
});

document.addEventListener("keydown",function(event){
    if(event.key=='Enter'){
        main();
    }
});
