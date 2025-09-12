const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";

let searchRecipe = document.querySelector("#search");
let result = document.querySelector("#results");
let recipedeatils=document.querySelector("#details")
   
searchRecipe.addEventListener("input", async function () {
    console.log("fetching the data from API..");
    let response = await fetch(BASE_URL);
    let data = await response.json();

    // clear previous results
    result.innerHTML = "";

    data.meals.forEach(meal => {
        let mealName = meal.strMeal;
        let area = meal.strArea;
        
        // check if search value is included in meal name
        if (mealName.toLowerCase().includes(searchRecipe.value.toLowerCase())|| area.toLowerCase().includes(searchRecipe.value.toLowerCase())) {
            let mealDiv = document.createElement("div");
            mealDiv.innerText = `${mealName} (${area})`;
            result.appendChild(mealDiv);
        }
   
    });

});
