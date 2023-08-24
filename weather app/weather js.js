
const apikey= "a7070b9a6907376cd59c2d4ef1e4ae49";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
async function checkweather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector("wind").innerHTML=data.wind.speed+"kmph";

    
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
checkweather();
