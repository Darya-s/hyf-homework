let inputWord = document.getElementById("word");
let inputQuantity = document.getElementById("quantity");
let btn = document.getElementById("btn");
let div = document.getElementById("gifs");

btn.addEventListener('click', function() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=bvuCn5y6d3EIjcChZKGET7Eg2BTyKv01&q=${inputWord}&limit=${inputQuantity}&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(data => {


            //div.innerHTML = data.images;
            console.log(data);
            for (let j in data) {
                let img = document.createElement("img");;
                img.src = data[j].url;
                div.appendChild(img);

            }
        });
});