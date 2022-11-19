// meal selection
var mealSelected = document.getElementById("meal-select")
var mealTitle = document.getElementById("meal-title")
// meal ingredients
//var mealIngredients = document.getElementById("meal-ingredient")
//var mealIngredients = []

// meal description
var mealDescription1 = document.getElementById("meal-description1")
var mealDescription2 = document.getElementById("meal-description2")
var mealInstruction = document.getElementById("meal-instruction")

getMealData();
function getMealData(mealID) {
  // TODO: Insert the API url to get a list of your repos
  var queryString = document.location.search;
  var mealID = queryString.split('=')[1];
  var requestUrl = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + mealID ;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      mealTitle.textContent = data.meals[0].strMeal;
      mealSelected.src = data.meals[0].strMealThumb;
      mealDescription1.textContent = data.meals[0].strArea;
      mealDescription2.textContent = data.meals[0].strCategory;
      mealInstruction.textContent = data.meals[0].strInstructions;
      });
  }

getMealIngredients();
function getMealIngredients() {
  var mealIngredients = document.getElementById("meal-ingredient")
  var mealIngredients = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  var requestUrl = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
      for (let index = 0; index<=20; index++) {
        let imageElement = document.createElement("span");
        imageElement.attributes.append("class", "grid-cols-3")
        imageElement.src = data[index];
        mealIngredients.textContent = data.meals[0].strMeasure;
        mealIngredients.append(imageElement);
        }
    })
  }

//getIngredients();
function getIngredients() {
  var ingredientName = document.createElement("span");
  var ingredientImg = document.createElement("img");
  var requestUrl = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
  }


//getIngredients();
function getIngredients() {
  // TODO: Insert the API url to get a list of your repos
  var requestUrl = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(`Data`, data);
      for (var i = 0; i <= 20; i++) {
        mealIngredients.textContent = data.meals[i].strIngredient;
      }
    });
  }

