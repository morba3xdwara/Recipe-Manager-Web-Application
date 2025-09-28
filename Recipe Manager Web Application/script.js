//===  GO TO THE ADDING PAGE  ===

//Waiting for the add button to be clicked
function addButtonListner(){
    let addbutton = document.getElementById("addButton");
    let addRecipe = addbutton.addEventListener("click", addButtonRedirection());

    console.log("Redirected to addRecipie page");
}

//Redirecting to adding recipie page
function addButtonRedirection(){
    console.log("redirecting");
    window.location.href = "addingRecipie.html";
}

//=== GO BACK TO THE HOME PAGE

//waiting for the back home button to be clicked
function goBackToHomePage(){
    let homebutton = document.getElementById("homeButton");
    let homepage = homebutton.addEventListener("click", homePageButtonRedirection());
}

function homePageButtonRedirection(){
    console.log("redirecting");
    window.location.href = "home.html";
}