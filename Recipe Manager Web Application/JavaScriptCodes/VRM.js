let recipes = JSON.parse(localStorage.getItem("recipes"));
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
            ${recipe.name} <button>View</button>  <button onClick="deleteButton(${index})">Delete</button>  <button>Edit</button>
        <li>`;      
    });
}

function deleteButton(index){
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    showRecipies();
}