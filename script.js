// Search Meal - image Section
var popularMealBox0 = document.querySelector(".popular-meal-0");
var popularMealBox1 = document.querySelector(".popular-meal-1");
var popularMealBox2 = document.querySelector(".popular-meal-2");
var popularMealBox3 = document.querySelector(".popular-meal-3");
var popularMealBox4 = document.querySelector(".popular-meal-4");
var popularMealBox = [popularMealBox0, popularMealBox1, popularMealBox2, popularMealBox3, popularMealBox4, ];
// Search Meal - title Section
var nameMealBox0 = document.querySelector(".name-meal-0");
var nameMealBox1 = document.querySelector(".name-meal-1");
var nameMealBox2 = document.querySelector(".name-meal-2");
var nameMealBox3 = document.querySelector(".name-meal-3");
var nameMealBox4 = document.querySelector(".name-meal-4");
var nameMealBox = [nameMealBox0, nameMealBox1, nameMealBox2, nameMealBox3, nameMealBox4, ];
getApi();

//This function will get the data from the Api
function getApi() {
    // TODO: Insert the API url to get a list of your repos
    var requestUrl = "https://www.themealdb.com//api/json/v2/9973533/latest.php";
    fetch(requestUrl).then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(`Data`, data);
        for (var i = 0; i < 5; i++) {
          popularMealBox[i].src = data.meals[i].strMealThumb;
          nameMealBox[i].textContent = data.meals[i].strMeal;
        }
      });
    }