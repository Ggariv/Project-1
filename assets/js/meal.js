//Random Meals Section image and Text
var boxContainer = document.querySelector(".meal-box");
var mealImg = document.querySelector(".meal-img");
var ingredientImg = document.querySelector(".ingredient-img");
var url;
//getting Query paramaters from url
var urlVariables = window.location.search;
var filter = urlVariables.split("&");
filter = filter[0];

//HomePage: Calling Functions
getMeal();

//Home PAGE: Displaying Random meals
function getMeal() {
  var requestUrl =
    "https://www.themealdb.com/api/json/v2/9973533/lookup.php" + filter;
  console.log(`Request url`, requestUrl);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      mealImg.src = data.meals[0].strMealThumb;

      for (var i = 1; i < 20; i++) {
        // var awais = data.meals[0].strIngredient[i];
        //console.log(`Awais`, awais);
        /* ingredientImg.src =
          "https://www.themealdb.com/images/ingredients/" +
          data.meals[0].strIngredient +
          ".png";*/
        var awais = "strIngredient1";
        console.log(`Awais`, awais);
        console.log(`Ingredient img`, data.meals[0].strIngredient1);
        console.log(`Ingredient img`, data.meals[0].awai);
      }
    });
}

function displayItems(data, i) {
  var div1 = document.createElement("div");
  var ahref = document.createElement("a");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var img = document.createElement("img");
  var div4 = document.createElement("div");
  var div5 = document.createElement("div");
  var h3 = document.createElement("h3");
  var span = document.createElement("span");
  var paragraph = document.createElement("p");

  div1.classList.add = ("group", "relative");
  div2.classList.add = ("rounded-md", "group-hover:opacity-75", "lg:h-65");
  img.classList.add = "randomMeal-img";
  div3.classList.add = ("mt-4", "flex", "justify-center");
  h3.classList.add = ("text-sm", "text-gray-700");
  span.classList.add = ("absolute", "inset-0");
  paragraph.classList.add =
    ("TxtRandomMeal-20", "mt-1", "text-gray-700", "text-sm");
  ahref.href =
    "https://www.themealdb.com//api/json/v2/9973533/lookup.php?i=" +
    data.meals[i].idMeal;

  boxContainer.appendChild(div1);
  //div1.appendChild(div2);
  div1.appendChild(div2);
  div1.appendChild(ahref);
  ahref.appendChild(div2);
  div2.appendChild(img);
  ahref.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(h3);
  h3.appendChild(span);
  div4.appendChild(paragraph);
  paragraph.textContent = data.meals[i].strMeal;
  img.src = data.meals[i].strMealThumb;
}
