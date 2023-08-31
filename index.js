let time=document.getElementById('curr_date');
let d=new Date();
time.innerHTML=d.toLocaleTimeString();

const api= <!-- Add your api address within double quotes -->;
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=" 
const city2=document.querySelector('.search input');
const button2=document.querySelector('.search button');
const icon=document.querySelector('.weather_icon');


async function check(city){
    const x= await fetch(url + city + `&appid=${api}`);
    var data=await x.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML=data.wind.speed + " Km/hr";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".pressure").innerHTML=data.main.pressure + " hPa";
    document.querySelector(".temp_max").innerHTML=Math.round(data.main.temp_max) + "°C";
    document.querySelector(".temp_min").innerHTML=Math.round(data.main.temp_min) + "°C";
    document.querySelector(".visibility").innerHTML=((data.visibility)/1000).toFixed(0) + " Km";
            

    if(data.weather[0].main=="Clouds"){
        icon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        icon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        icon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Dizzle"){
        icon.src="images/dizzile.png";
    }
    else if(data.weather[0].main=="Mist"){
        icon.src="images/mist.png";
    }

}
    
button2.addEventListener('click', ()=>{
    check(city2.value);
})