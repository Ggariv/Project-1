// meal selection
var mealSelected = document.getElementById("meal-select")
var mealTitle = document.getElementById("meal-title")

// meal description
var mealDescription1 = document.getElementById("meal-description1")
var mealDescription2 = document.getElementById("meal-description2")
var mealInstruction = document.getElementById("meal-instruction")

// meal ingredients - name
var mealIngredients1 = document.getElementById("meal-ingredient1");
var mealIngredients2 = document.getElementById("meal-ingredient2");
var mealIngredients3 = document.getElementById("meal-ingredient3");
var mealIngredients4 = document.getElementById("meal-ingredient4");
var mealIngredients5 = document.getElementById("meal-ingredient5");
var mealIngredients6 = document.getElementById("meal-ingredient6");
var mealIngredients7 = document.getElementById("meal-ingredient7");
var mealIngredients8 = document.getElementById("meal-ingredient8");
var mealIngredients9 = document.getElementById("meal-ingredient9");
var mealIngredients10 = document.getElementById("meal-ingredient10");
var mealIngredients11 = document.getElementById("meal-ingredient11");
var mealIngredients12 = document.getElementById("meal-ingredient12");
var mealIngredients13 = document.getElementById("meal-ingredient13");
var mealIngredients14 = document.getElementById("meal-ingredient14");
var mealIngredients15 = document.getElementById("meal-ingredient15");
var mealIngredients16 = document.getElementById("meal-ingredient16");
var mealIngredients17 = document.getElementById("meal-ingredient17");
var mealIngredients18 = document.getElementById("meal-ingredient18");
var mealIngredients19 = document.getElementById("meal-ingredient19");
var mealIngredients20 = document.getElementById("meal-ingredient20");
var mealIngredientbox = [
  mealIngredients1, 
  mealIngredients2, 
  mealIngredients3, 
  mealIngredients4, 
  mealIngredients5, 
  mealIngredients6, 
  mealIngredients7, 
  mealIngredients8,
  mealIngredients9,
  mealIngredients10,
  mealIngredients11,
  mealIngredients12,
  mealIngredients13,
  mealIngredients14,
  mealIngredients15,
  mealIngredients16,
  mealIngredients17,
  mealIngredients18,
  mealIngredients19,
  mealIngredients20,
  ]

// meal ingredients - measure
var mealMeasure1 = document.getElementById("meal-measure1");
var mealMeasure2 = document.getElementById("meal-measure2");
var mealMeasure3 = document.getElementById("meal-measure3");
var mealMeasure4 = document.getElementById("meal-measure4");
var mealMeasure5 = document.getElementById("meal-measure5");
var mealMeasure6 = document.getElementById("meal-measure6");
var mealMeasure7 = document.getElementById("meal-measure7");
var mealMeasure8 = document.getElementById("meal-measure8");
var mealMeasure9 = document.getElementById("meal-measure9");
var mealMeasure10 = document.getElementById("meal-measure10");
var mealMeasure11 = document.getElementById("meal-measure11");
var mealMeasure12 = document.getElementById("meal-measure12");
var mealMeasure13 = document.getElementById("meal-measure13");
var mealMeasure14 = document.getElementById("meal-measure14");
var mealMeasure15 = document.getElementById("meal-measure15");
var mealMeasure16 = document.getElementById("meal-measure16");
var mealMeasure17 = document.getElementById("meal-measure17");
var mealMeasure18 = document.getElementById("meal-measure18");
var mealMeasure19 = document.getElementById("meal-measure19");
var mealMeasure20 = document.getElementById("meal-measure20");
var mealMeasurebox = [
  mealMeasure1, 
  mealMeasure2, 
  mealMeasure3, 
  mealMeasure4, 
  mealMeasure5, 
  mealMeasure6, 
  mealMeasure7, 
  mealMeasure8,
  mealMeasure9,
  mealMeasure10,
  mealMeasure11,
  mealMeasure12,
  mealMeasure13,
  mealMeasure14,
  mealMeasure15,
  mealMeasure16,
  mealMeasure17,
  mealMeasure18,
  mealMeasure19,
  mealMeasure20,
  ]

// meal ingredients - image
var ingredientImage1 = document.getElementById("meal-ingredient-img1");
var ingredientImage2 = document.getElementById("meal-ingredient-img2");
var ingredientImage3 = document.getElementById("meal-ingredient-img3");
var ingredientImage4 = document.getElementById("meal-ingredient-img4");
var ingredientImage5 = document.getElementById("meal-ingredient-img5");
var ingredientImage6 = document.getElementById("meal-ingredient-img6");
var ingredientImage7 = document.getElementById("meal-ingredient-img7");
var ingredientImage8 = document.getElementById("meal-ingredient-img8");
var ingredientImage9 = document.getElementById("meal-ingredient-img9");
var ingredientImage10 = document.getElementById("meal-ingredient-img10");
var ingredientImage11 = document.getElementById("meal-ingredient-img11");
var ingredientImage12 = document.getElementById("meal-ingredient-img12");
var ingredientImage13 = document.getElementById("meal-ingredient-img13");
var ingredientImage14 = document.getElementById("meal-ingredient-img14");
var ingredientImage15 = document.getElementById("meal-ingredient-img15");
var ingredientImage16 = document.getElementById("meal-ingredient-img16");
var ingredientImage17 = document.getElementById("meal-ingredient-img17");
var ingredientImage18 = document.getElementById("meal-ingredient-img18");
var ingredientImage19 = document.getElementById("meal-ingredient-img19");
var ingredientImage20 = document.getElementById("meal-ingredient-img20");
var ingredientImagebox = [
  ingredientImage1, 
  ingredientImage2, 
  ingredientImage3, 
  ingredientImage4, 
  ingredientImage5, 
  ingredientImage6, 
  ingredientImage7, 
  ingredientImage8,
  ingredientImage9,
  ingredientImage10,
  ingredientImage11,
  ingredientImage12,
  ingredientImage13,
  ingredientImage14,
  ingredientImage15,
  ingredientImage16,
  ingredientImage17,
  ingredientImage18,
  ingredientImage19,
  ingredientImage20,
  ]

// Function
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
      for (var i = 1; i <= 20; i++) {
        mealIngredientbox[i-1].textContent = data.meals[0]['strIngredient' + i]
        mealMeasurebox[i-1].textContent = data.meals[0]['strMeasure' + i]
        }
      });
  }

