//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 function getData() {
     let city=document.getElementById("city").value;
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0176d3a1666bb57e284c70d4cddf72dd`;
fetch(url)
.then(function(res){
    return res.json();

})
.then(function(res){
    append(res);
    console.log("res:",res)
})
.catch(function(err){
    console.log("err:",err)
});
 }

function getDatalocation(lat,lon){
  
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0176d3a1666bb57e284c70d4cddf72dd`;
fetch(url)
.then(function(res){
   return res.json();

})
.then(function(res){
   append(res);
   console.log("res:",res)
})
.catch(function(err){
   console.log("err:",err)
});
}


 function append(data){
     let container=document.getElementById("container");
     document.getElementById("container").innerText=" "
     let map=document.getElementById("gmap_canvas");
     let city =document.createElement("p")
     city.innerText=`city:name:${data.name}`;
     let min=document.createElement("p");
     min.innerText=`min_temperature:${data.main.temp_min}`;
     let max=document.createElement("p");
     max.innerText=`max_temperature:${data.main.temp_max}`;
     
     let current=document.createElement("p");
     current.innerText=`current_temperature:${data.main.temp}`;
     let humidity=document.createElement("p");
     humidity.innerText=`Humidity:${data.main.humidity}`;
     
     container.append(city,min,max,current,humidity);
     map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed `
    

 }

 function getWeather (){
    navigator.geolocation.getCurrentPosition(success);
    function success(position){
       let crd = position.coords;
   
       console.log('Your current position is:');
       console.log(`Latitude : ${crd.latitude}`);
       console.log(`Longitude: ${crd.longitude}`);
       console.log(`More or less ${crd.accuracy} meters.`);
       getDatalocation(crd.latitude,crd.longitude);
    }
   
 }
