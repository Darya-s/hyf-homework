let input = document.getElementById("userIn")
let btn = document.getElementById("btn");
let ul = document.querySelector("ul");
let div = document.getElementById("weather");



function getWeather() {

    navigator.geolocation.getCurrentPosition((position) => {

        localStorage.setItem('latitude', position.coords.latitude);
        localStorage.setItem('longitude', position.coords.longitude);
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=88661241d4f98de3608bb686461df319`)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${localStorage.getItem('latitude')}&lon=${localStorage.getItem('longitude')}&appid=88661241d4f98de3608bb686461df319`)
            .then(response => response.json())
            .then(data => {
                console.log(data);


                //let myArr = [data.name, data.main.temp, data.wind.speed, data.clouds.all, data.sys.sunrise, data.sys.sunset];
                //console.log(myArr);


                div.innerHTML = `City : ${data.name} <br> Temperature: ${data.main.temp} <br> Wind speed: ${data.wind.speed}<br> Clouds:${data.clouds.all}<br> Sunrise:${data.sys.sunrise} <br> Sunset:${data.sys.sunset} `;


                /*for (let j in myArr) {
                    let newdiv = document.createElement("div");
                    newdiv.innerText = myArr[j];
                    div.appendChild(newdiv);
                }*/





            });
    });
}

//products[j].name.style.fontWeight="bold";










//products[j].name.style.fontWeight="bold";





// let link = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=88661241d4f98de3608bb686461df319`;
//  div.innerHTML = Object.keys(data.weather[main]);
//div.innerHTML += Object.keys(data.temp);







btn.addEventListener("click", getWeather);
/*
fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    const breeds = Object.keys(data.message);
    const chosenBreedIndex = Math.floor(Math.random() * breeds.length);
    const chosenBreed = breeds[chosenBreedIndex];
    const chosenBreedUrl = `https://dog.ceo/api/breed/${chosenBreed}/images/random`;
    fetch(chosenBreedUrl)
      .then((response) => response.json())
      .then((data) => {
        const imgEl = document.getElementById("img1");
        imgEl.src = data.message;
        const captionEl = document.getElementById("caption1");
        captionEl.innerHTML = chosenBreed;
      });*/