const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=59266d627dd5fb262430ea1b6fbd01d2&page=1";

async function getMovies() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();

    console.log(respData);
}

getMovies();