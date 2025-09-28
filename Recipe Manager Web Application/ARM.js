//=== ADDING RECIPIES MECHANIC ===
let ingredientsList = [];
let recipies = [];

//adds the ingredients to the list
function addIngredientToList(){
    let ingredient = document.getElementById("ingredient");
    let addIngredientDiv = document.getElementById("addIngredientDiv");

    if(ingredient.value === ""){
        ingredient.placeholder = "Enter a valid ingredient";
        addIngredientDiv.innerHTML += `
        <br>Invalid
        `
    }else{
        
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
        <button onclick="removeIngredient(${index})">remove</button>
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
    let recipieName = document.getElementById("recipieName");
    let nameDiv = document.getElementById("nameDiv");

    if (recipieName.value === "" || ingredientsList.length === 0){
        recipieName.placeholder = "Enter a valid name";
        nameDiv.innerHTML += `
        <br>Invalid
        `
    }else{
        let recipie = {
            name: recipieName.value,
            ingredients: ingredientsList
        }

        recipieName.value = "";
        ingredientsList = [];

        recipies.push(recipie);
    }
}