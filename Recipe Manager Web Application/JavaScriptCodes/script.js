//===  GO TO THE ADDING PAGE  ===

//Waiting for the add button to be clicked
function addButtonListner(){
    let addbutton = document.getElementById("addButton");
    let addRecipe = addbutton.addEventListener("click", addButtonRedirection());

    console.log("Redirected to add recipe page");
}

//Redirecting to adding recipe page
function addButtonRedirection(){
    console.log("redirecting");
    window.location.href = "addingRecipe.html";
}

//=== GO BACK TO THE HOME PAGE  ===

//waiting for the back home button to be clicked
function goBackToHomePage(){
    let homebutton = document.getElementById("homeButton");
    let homepage = homebutton.addEventListener("click", homePageButtonRedirection());
}

function homePageButtonRedirection(){
    console.log("redirecting");
    window.location.href = "home.html";
}

//===  GO TO THE VIEW PAGE  ===

//Waiting for the view button to be clicked
function viewButtonListner(){
    let viewbutton = document.getElementById("viewButton");
    let viewRecipe = viewbutton.addEventListener("click", viewButtonRedirection());

    console.log("Redirected to view recipes page");
}

//Redirecting to adding recipe page
function viewButtonRedirection(){
    console.log("redirecting");
    window.location.href = "viewRecipes.html";
}