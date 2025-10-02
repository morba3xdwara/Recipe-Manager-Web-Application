let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
let empty = document.getElementsByClassName(`empty`);

if (recipes.length === 0){
    for (let i = 0; i < empty.length; i++) {
    empty[i].style.display = "block";
    }

}else {
    for (let i = 0; i < empty.length; i++) {
    empty[i].style.display = "none";
    }

    showRecipies();
}

function showRecipies(){
    let recipesList = document.getElementById("recipesList");
    recipesList.innerHTML = "";

    recipes.forEach((recipe, index) => {
        recipesList.innerHTML += `
        <li>
            ${recipe.name} <button onClick="viewIngredients(${index})">View</button>  <button onClick="deleteButton(${index})">Delete</button>  <button onClick="editRecipes(${index})">Edit</button>
        </li>`;      
    });
}

//=== 3 buttons functionalities ===

//delete button
function deleteButton(index){
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    showRecipies();
}

//recipes -> recipe -> ingredients

//view button
function viewIngredients(index){
    let ingredientsList = document.getElementById("ingredientsList");
    ingredientsList.innerHTML = "";
    
    let recipe = recipes[index];
    
    ingredientsList.innerHTML = `<h3>${recipe.name}</h3>`;
    
    recipe.ingredients.forEach(ingredient => {
        ingredientsList.innerHTML += `<li>${ingredient}</li>`;
    });
}

//edit button
function editRecipes(index){

}
