const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/quotes/random";


async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function post(){
window.open("https://www.instagram.com/?hl=en#", "width=600, height=300");
}
getquote(api_url);