const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('all-countries');
    // for(const country of countries){
    //     console.log(country);
    // }

    // console.log(countries)

    countries.forEach(country => {
        console.log(country.cca2)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
<h3>name:${country.name.common}</h3>
<p>Capital: ${country.capital?country.capital[0]: 'No Capital'} </p>
<button onclick="loadCountryDetails('${country.cca2}')">Details</button>

`;
        countriesContainer.appendChild(div);
    })

}

const loadCountryDetails = code=>{
//https://restcountries.com/v3.1/alpha/{code}
const url =`https://restcountries.com/v3.1/alpha/${code}`

    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetail(data[0]));
}
const showCountryDetail=country=>{
    const detailContainer = document.getElementById('country-detail')
    detailContainer.innerHTML=`
    <h2>Country Detail</h2>
    <h3>Name: ${country.name.common}</h3>
     <p>Capital</p>
    <img src="${country.flags.png}" alt="">
    ` 
    
}
loadCountries();