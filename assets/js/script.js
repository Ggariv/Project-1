//popular males and Text
var popularMeal0 = document.querySelector(".poularMeal-img0");
var popularMeal1 = document.querySelector(".poularMeal-img1");
var popularMeal2 = document.querySelector(".poularMeal-img2");
var popularMeal3 = document.querySelector(".poularMeal-img3");
var popularMeal4 = document.querySelector(".poularMeal-img4");
var popularUrl0 = document.querySelector(".popularMeal-link0");
var popularUrl1 = document.querySelector(".popularMeal-link1");
var popularUrl2 = document.querySelector(".popularMeal-link2");
var popularUrl3 = document.querySelector(".popularMeal-link3");
var popularUrl4 = document.querySelector(".popularMeal-link4");
var popularMealTxt0 = document.querySelector(".TxtpopularMeal-0");
var popularMealTxt1 = document.querySelector(".TxtpopularMeal-1");
var popularMealTxt2 = document.querySelector(".TxtpopularMeal-2");
var popularMealTxt3 = document.querySelector(".TxtpopularMeal-3");
var popularMealTxt4 = document.querySelector(".TxtpopularMeal-4");
var poularMeal = [
  popularMeal0,
  popularMeal1,
  popularMeal2,
  popularMeal3,
  popularMeal4,
];
var popularMealTxt = [
  popularMealTxt0,
  popularMealTxt1,
  popularMealTxt2,
  popularMealTxt3,
  popularMealTxt4,
];
var popularUrl = [
  popularUrl0,
  popularUrl1,
  popularUrl2,
  popularUrl3,
  popularUrl4,
];
//Random Meals Section image and Text
var randomMealBox0 = document.querySelector(".randomMeal-img20");
var randomMealBox1 = document.querySelector(".randomMeal-img21");
var randomMealBox2 = document.querySelector(".randomMeal-img22");
var randomMealBox3 = document.querySelector(".randomMeal-img23");
var randomMealBox4 = document.querySelector(".randomMeal-img24");
var randomMealTxt0 = document.querySelector(".TxtRandomMeal-20");
var randomMealTxt1 = document.querySelector(".TxtRandomMeal-21");
var randomMealTxt2 = document.querySelector(".TxtRandomMeal-22");
var randomMealTxt3 = document.querySelector(".TxtRandomMeal-23");
var randomMealTxt4 = document.querySelector(".TxtRandomMeal-24");
var randomMealBox = [
  randomMealBox0,
  randomMealBox1,
  randomMealBox2,
  randomMealBox3,
  randomMealBox4,
];
var randomMealsText = [
  randomMealTxt0,
  randomMealTxt1,
  randomMealTxt2,
  randomMealTxt3,
  randomMealTxt4,
];

//Popular Ingredients
var popularIng0 = document.querySelector(".randomIng-img0");
var popularIng1 = document.querySelector(".randomIng-img1");
var popularIng2 = document.querySelector(".randomIng-img2");
var popularIng3 = document.querySelector(".randomIng-img3");
var popularIng4 = document.querySelector(".randomIng-img4");
var ingredientUrl0 = document.querySelector(".ingredient-link0");
var ingredientUrl1 = document.querySelector(".ingredient-link1");
var ingredientUrl2 = document.querySelector(".ingredient-link2");
var ingredientUrl3 = document.querySelector(".ingredient-link3");
var ingredientUrl4 = document.querySelector(".ingredient-link4");
var randomIngTxt0 = document.querySelector(".TxtandomIng-0");
var randomIngTxt1 = document.querySelector(".TxtandomIng-1");
var randomIngTxt2 = document.querySelector(".TxtandomIng-2");
var randomIngTxt3 = document.querySelector(".TxtandomIng-3");
var randomIngTxt4 = document.querySelector(".TxtandomIng-4");
var popularIng = [
  popularIng0,
  popularIng1,
  popularIng2,
  popularIng3,
  popularIng4,
];
var randomIngTxt = [
  randomIngTxt0,
  randomIngTxt1,
  randomIngTxt2,
  randomIngTxt3,
  randomIngTxt4,
];
var ingredientUrl = [
  ingredientUrl0,
  ingredientUrl1,
  ingredientUrl2,
  ingredientUrl3,
  ingredientUrl4,
];

//HomePage: Calling Functions
getPopularMeals();
getRandomIngredients();
getRandomMeals();

//Home: Popular Meals
function getPopularMeals() {
  var requestUrl = "https://www.themealdb.com//api/json/v2/9973533/latest.php";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < 5; i++) {
        poularMeal[i].src = data.meals[i].strMealThumb;
        popularMealTxt[i].textContent = data.meals[i].strMeal;
        popularUrl[i].href = "meal.html?i=" + data.meals[i].idMeal;
      }
    });
}

//Home PAGE: Displaying Random meals
function getRandomMeals() {
  var requestUrl =
    "https://www.themealdb.com//api/json/v2/9973533/randomselection.php";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(`Data`, data);
      for (var i = 0; i < 5; i++) {
        randomMealBox[i].src = data.meals[i].strMealThumb;
        randomMealsText[i].textContent = data.meals[i].strMeal;
      }
    });
}

//Home Page: Popular Ingredients
function getRandomIngredients() {
  var requestUrl = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < 5; i++) {
        popularIng[i].src =
          "https://www.themealdb.com/images/ingredients/" +
          data.meals[i].strIngredient +
          ".png";
        randomIngTxt[i].textContent = data.meals[i].strIngredient;
        ingredientUrl[i].href =
          "search.html?filter=ingredients&i=" + data.meals[i].strIngredient;
      }
    });
}
