// Random meal image function
var randomMealBox0 = document.querySelector(".random-meal-box0");
var randomMealBox1 = document.querySelector(".random-meal-box1");
var randomMealBox2 = document.querySelector(".random-meal-box2");
var randomMealBox3 = document.querySelector(".random-meal-box3");
var randomMealBox = [randomMealBox0, randomMealBox1, randomMealBox2, randomMealBox3, ];

// Random name function
var randomNameBox0 = document.querySelector(".random-name-box0");
var randomNameBox1 = document.querySelector(".random-name-box1");
var randomNameBox2 = document.querySelector(".random-name-box2");
var randomNameBox3 = document.querySelector(".random-name-box3");
var randomNameBox = [randomNameBox0, randomNameBox1, randomNameBox2, randomNameBox3, ];

// Random meal selector
var randomUrl0 = document.querySelector(".random-meal-link0");
var randomUrl1 = document.querySelector(".random-meal-link1");
var randomUrl2 = document.querySelector(".random-meal-link2");
var randomUrl3 = document.querySelector(".random-meal-link3");
var randomUrl = [randomUrl0, randomUrl1, randomUrl2, randomUrl3,];

getApi();

//This function will get the data from the Api
function getApi() {
  // TODO: Insert the API url to get a list of your repos
  var requestUrl = "https://www.themealdb.com//api/json/v2/9973533/randomselection.php";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
      })
    .then(function (data) {
      console.log(`Data`, data);
      for (var i = 0; i < 4; i++) {
        randomMealBox[i].src = data.meals[i].strMealThumb;
        randomNameBox[i].textContent = data.meals[i].strMeal;
        randomUrl[i].href = "mealstats.html?id=" + data.meals[i].idMeal;
        console.log(data.meals[i].strMeal);
        }
      });
  }

