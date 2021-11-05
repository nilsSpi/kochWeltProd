let recipeIngredients = [
    ['500', 'g', 'Mehl'],
    ['6', 'Stck.', 'Eier, Größe M'],
    ['200', 'ml', 'Sprudelwasser'],
    ['300', 'g', 'Käse (Emmentaler, Bergkäse, Limburger o.ä.)'],
    ['1', 'Prise', 'Salz'],
    ['1', 'TL', 'Salz, für das Kochwasser'],
    ['2', 'Stck.', 'Zwiebeln, groß'],
    ['2', 'EL', 'Butter'],
    ['1', 'EL', 'Butter, für die Schüssel']
];

let initRecipeQuantities = '4';

function init() {
    includeHTML();
    initCreatRecipeIngredientsTable();
}


function setQuantities() {
    //    let quantities = +document.getElementById('contentRecipeNumber').value;
}

function initCreatRecipeIngredientsTable() {
    let awaitIncludeHTML = setInterval(() => {
        if (tableIncluded()) {
            creatRecipeIngredientsTable();
            clearInterval(awaitIncludeHTML);
        }
    }, 100);
}

function tableIncluded() {
    return document.getElementById("contentRecipeTable");
}


function creatRecipeIngredientsTable() {
    let recipeQuantities = +document.getElementById('contentRecipeNumber').value;
    let contentRecipeTable = document.getElementById('contentRecipeTable');
    contentRecipeTable.innerHTML = ``; // Clear InnerHTML in Table

   // 1/2
    // let recipeIngredientsQuantitie = document.getElementById('contentRecipeNumber').value;
    // document.getElementById('contentRecipeNumber').value = recipeQuantities;
    for (let i = 0; i < recipeIngredients.length; i++) {
        let recipeIngredientQuantitie = recipeIngredients[i][0] / initRecipeQuantities * recipeQuantities;
        // Check if Table odd or Even
        if (i % 2 == 0) {
            contentRecipeTable.innerHTML += `<tr class="table-row-odd">
                                                <td class="content-recipe-amount">${recipeIngredientQuantitie} ${recipeIngredients[i][1]} ${recipeIngredients[i][2]}</td>
                                            </tr>`;
        } else {
            contentRecipeTable.innerHTML += `<tr class="table-row-even">
                                                <td class="content-recipe-amount">${recipeIngredientQuantitie} ${recipeIngredients[i][1]} ${recipeIngredients[i][2]}</td>
                                            </tr>`;
        }
    }
}

