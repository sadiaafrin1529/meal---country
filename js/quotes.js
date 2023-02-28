const loadQuote=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayQiote(data))
}
const displayQiote=quote=>{
    // console.log(quote)
    const blockQuote=document.getElementById('quote');
    console.log(quote);
    blockQuote.innerHTML=quote.quote;
}



// loadQuote();