var schoolData = JSON.parse(jsonDataSchool);
var libraryData = JSON.parse(jsonDataLibrary);
var restaurantData = JSON.parse(jsonDataRestaurant);
var weatherData = JSON.parse(jsonDataWeather);

var table = document.querySelector("table");
var search = document.getElementById("search-bar");
var header = document.querySelector("header>h1");
var searchContainer = document.querySelector(".search-container");

var studentsBtn = document.getElementById("students-btn");
var libraryBtn = document.getElementById("library-btn");
var foodBtn = document.getElementById("food-btn");
var weatherBtn = document.getElementById("weather-btn");

var currentView = "student";

function createTable(jsonData) {
    table.innerHTML = "";
    let thead = "<thead><tr>";
    for (key in jsonData[0]) {
        thead += "<th>" + key + "</th>";
    }
    thead += "</tr></thead>";
    table.innerHTML += thead;
    for (let i = 0; i < jsonData.length; i++) {
        let tInner = "<tr>";
        var value;
        for (value in jsonData[i]) {
            tInner += "<td>" + jsonData[i][value] + "</td>";
        }
        tInner += "</tr>";
        table.innerHTML += tInner;
    }
}

studentsBtn.addEventListener("click", function () {
    currentView = "student";
    search.placeholder = "Search by StudentName";
    search.value = "";
    header.innerHTML = "Student Records";
    studentsBtn.classList.add("active-btn");
    libraryBtn.classList.remove("active-btn");
    foodBtn.classList.remove("active-btn");
    weatherBtn.classList.remove("active-btn");
    createTable(schoolData);
});
libraryBtn.addEventListener("click", function () {
    currentView = "library";
    search.placeholder = "Search by BookName";
    search.value = "";
    header.innerHTML = "Library Directory";
    libraryBtn.classList.add("active-btn");
    studentsBtn.classList.remove("active-btn");
    foodBtn.classList.remove("active-btn");
    weatherBtn.classList.remove("active-btn");
    createTable(libraryData);
});
foodBtn.addEventListener("click", function () {
    currentView = "restaurant";
    search.placeholder = "Search by DishName";
    search.value = "";
    header.innerHTML = "Meal Hall Menu";
    foodBtn.classList.add("active-btn");
    libraryBtn.classList.remove("active-btn");
    studentsBtn.classList.remove("active-btn");
    weatherBtn.classList.remove("active-btn");
    createTable(restaurantData);
});
weatherBtn.addEventListener("click", function () {
    currentView = "weather";
    search.placeholder = "Search by CityName";
    search.value = "";
    header.innerHTML = "Nearby Weather";
    weatherBtn.classList.add("active-btn");
    libraryBtn.classList.remove("active-btn");
    foodBtn.classList.remove("active-btn");
    studentsBtn.classList.remove("active-btn");
    createTable(weatherData);
});
createTable(schoolData);

search.addEventListener("input", function (e) {
    if (currentView == "student") {
        let newData = [];
        for (let i = 0; i < schoolData.length; i++) {
            let studentName = schoolData[i].StudentName.toLowerCase();
            let input = e.target.value.toLowerCase();
            if (studentName.slice(0, input.length) == input) {
                newData.push(schoolData[i]);
            }
        }
        for (let i = 0; i < schoolData.length; i++) {
            let studentName = schoolData[i].StudentName.toLowerCase();
            let input = e.target.value.toLowerCase();
            if (studentName.includes(input) && !newData.includes(schoolData[i])) {
                newData.push(schoolData[i]);
            }
        }
        createTable(newData);
    }
    else if (currentView == "library") {
        let newData = [];
        for (let i = 0; i < libraryData.length; i++) {
            let bookName = libraryData[i].BookName.toLowerCase();
            let input = e.target.value.toLowerCase();
            if (bookName.slice(0, input.length) == input) {
                newData.push(libraryData[i]);
            }
        }
        for (let i = 0; i < libraryData.length; i++) {
            let bookName = libraryData[i].BookName.toLowerCase();
            let input = e.target.value.toLowerCase();
            if (bookName.includes(input) && !newData.includes(libraryData[i])) {
                newData.push(libraryData[i]);
            }
        }
        createTable(newData);
    }
    else if (currentView == "restaurant") {
        let newData = [];
        for (let i = 0; i < restaurantData.length; i++) {
            let dishName = restaurantData[i].DishName.toLowerCase();
            let input = e.target.value.toLowerCase();
            if (dishName.slice(0, input.length) == input) {
                newData.push(restaurantData[i]);
            }
        }
        for (let i = 0; i < restaurantData.length; i++) {
            let dishName = restaurantData[i].DishName.toLowerCase();
            let input = e.target.value.toLowerCase();
            if (dishName.includes(input) && !newData.includes(restaurantData[i])) {
                newData.push(restaurantData[i]);
            }
        }
        createTable(newData);
    }
    else {
        let newData = [];
        for (let i = 0; i < weatherData.length; i++) {
            let cityName = weatherData[i].CityName.toLowerCase();
            let input = e.target.value.toLowerCase();
            if (cityName.slice(0, input.length) == input) {
                newData.push(weatherData[i]);
            }
        }
        for (let i = 0; i < weatherData.length; i++) {
            let cityName = weatherData[i].CityName.toLowerCase();
            let input = e.target.value.toLowerCase();
            if (cityName.includes(input) && !newData.includes(weatherData[i])) {
                newData.push(weatherData[i]);
            }
        }
        createTable(newData);
    }
});

search.addEventListener("focus", function () {
    searchContainer.style.backgroundColor = "white";
    searchContainer.style.transform = "translateX(1em)";
    searchContainer.style.border = "1px solid white";

});
search.addEventListener("blur", function () {
    searchContainer.style.backgroundColor = "rgba(255, 255, 255, 0)";
    searchContainer.style.transform = "translateX(0)";
    searchContainer.style.border = "1px solid black";
});
