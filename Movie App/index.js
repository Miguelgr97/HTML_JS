let movieNameRef = document.getElementById("movie-name"); 
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = 'https://www.omdbapi.com/?t=${movieName}&apikey=${key}'
}