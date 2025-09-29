//=== ADDING RECIPIES MECHANIC ===
let ingredientsList = [];
let recipes = [];


//adds the ingredients to the list
function addIngredientToList(){
    let ingredient = document.getElementById("ingredient");
    let addIngredientDiv = document.getElementById("addIngredientDiv");
    let invalidIngredient = document.getElementById("invalidIngredient");

    if(ingredient.value === ""){
        ingredient.placeholder = "Enter a valid ingredient";
        invalidIngredient.style.display = "block";
    }else{
        invalidIngredient.style.display = "none";
        ingredientsList.push(ingredient.value.trim());
        showIngredients();
        ingredient.value = "";
    }
}

//shows the list of igredients when you add them
function showIngredients(){
    let ingredients = document.getElementById("ingredients list");

    ingredients.innerHTML = "";

    ingredientsList.forEach((ingredient, index) => {
        ingredients.innerHTML += `
        <li>
        ${ingredient}
        <button onclick="removeIngredient(${index})">❌</button>
        <li>`;
    });
}

//delete the ingredient next to the "remove" button when clicked
function removeIngredient(index){
    ingredientsList.splice(index, 1);
    showIngredients();
}

//it submit recipie name and all ingredients and store them in recipies
function submitting(){
    let recipeName = document.getElementById("recipeName");
    let nameDiv = document.getElementById("nameDiv");
    let invalidName = document.getElementById("invalidName");

    if (recipeName.value === "" || ingredientsList.length === 0){
        recipeName.placeholder = "Enter a valid name";
        invalidName.style.display = "block";
        
    }else{
        invalidName.style.display = "none";
        let ingredients = document.getElementById("ingredients list");

        ingredients.innerHTML = "";
        let recipie = {
            name: recipeName.value,
            ingredients: ingredientsList
        }

        recipeName.value = "";
        ingredientsList = [];

        recipes.push(recipie);
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }
    saveRecipes();
}

function saveRecipes() {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}
