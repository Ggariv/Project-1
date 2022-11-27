//Random Meals Section image and Text
var boxContainer = document.querySelector(".meal-box");
var url;
//getting Query paramaters from url
var urlVariables = window.location.search;
var filter = urlVariables.split("&");
var filter2 = filter[1];
filter = filter[0];
filter = filter.split("=");
filter = filter[1];



if (filter == "meal") {
  url = "https://www.themealdb.com/api/json/v1/1/search.php?" + filter2;
} else if (filter == "country") {
  url = "https://www.themealdb.com/api/json/v1/1/filter.php?" + filter2;
} else if ((filter = "ingredients")) {
  url = "https://www.themealdb.com/api/json/v1/1/filter.php?" + filter2;
  console.log(`Ingredients`);
} else {
  url = "http://themealdb.com/api/json/v1/1/search.php?" + filter2;
}

//HomePage: Calling Functions
getApi();

//Home PAGE: Displaying Random meals
function getApi() {
  var requestUrl = url;
  console.log(`Request url`, requestUrl);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(`Data`, data);
      for (var i = 0; i < data.meals.length; i++) {
        displayItems(data, i);
      }
    });
}

function displayItems(data, i) {
  var div1 = document.createElement("div");
  var ahref = document.createElement("a");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var link = document.createElement("a");
  var img = document.createElement("img");
  var div4 = document.createElement("div");
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
  ahref.href = "mealstats.html?i=" + data.meals[i].idMeal;
  // link to food stats

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
