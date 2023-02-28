const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = melas => {
    // console.log(melas);
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    melas.forEach(meal => {
        console.log(meal.strMeal)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <button onclick="loadMealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">Details
                      </button>
                    </div>
                  </div>
        `;
        div.classList.add('col')
        mealsContainer.appendChild(div);
    })
}
const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText);
}

const loadMealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
        .catch(error => {

            console.log(error)
        })
}
const loadMealDetails2 = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try{
        const res= await fetch(url);
    const data= await res.json();
    displayMealDetails(data.meals[0]);
    }
    catch(error){
console.log(error)
    }

}

const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealDetails = document.getElementById('mealDetailsBody');
    mealDetails.innerHTML = `
<img class="img-fluid" src="${meal.strMealThumb}" >
`
}

loadMeals(`fish`);