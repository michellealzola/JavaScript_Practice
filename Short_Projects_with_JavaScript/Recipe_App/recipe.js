const recipes = [  {    name: "Pesto Pasta",    ingredients: ["pasta", "basil", "garlic", "olive oil", "parmesan cheese"],
    instructions: "1. Cook the pasta according to package instructions. 2. In a food processor, combine basil, garlic, olive oil, and parmesan cheese. 3. Toss the cooked pasta with the pesto sauce. Serve hot.",
  },
  {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "curry powder", "onion", "garlic", "coconut milk"],
    instructions: "1. Cut the chicken breast into small pieces. 2. In a pan, sauté onion and garlic until soft. 3. Add the chicken and curry powder, and cook until the chicken is browned. 4. Pour in the coconut milk and simmer until the sauce thickens. Serve hot with rice.",
  },
  {
    name: "Banana Bread",
    ingredients: ["ripe bananas", "flour", "sugar", "butter", "eggs"],
    instructions: "1. Preheat the oven to 350°F. 2. In a mixing bowl, mash the ripe bananas. 3. Add flour, sugar, butter, and eggs to the bowl, and mix until well combined. 4. Pour the batter into a greased loaf pan. 5. Bake for 50-60 minutes, or until a toothpick inserted in the center comes out clean. Let cool before slicing and serving.",
  }
];

let buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', function()
    {
        getRecipe(i);
    });
}

function getRecipe(dataNum)
{
    let htmlCodeName = '';
    htmlCodeName += '<p>' + recipes[dataNum].name + '</p>';
    document.getElementById('name').innerHTML = htmlCodeName;

    let htmlCodeIngredients = '';
    htmlCodeIngredients += '<p>' + recipes[dataNum].ingredients + '</p>';
    document.getElementById('ingredients').innerHTML = htmlCodeIngredients;

    let htmlCodeInstructions = '';
    htmlCodeInstructions += '<p>' + recipes[dataNum].instructions + '</p>';
    document.getElementById('instructions').innerHTML = htmlCodeInstructions;
}

let submit = document.getElementById('submit');

submit.addEventListener('click', getSearchResults);

function getSearchResults()
{
    let searchKeyword = document.getElementById('search').value.toLowerCase();
    let result = '';
    let filteredRecipes = recipes.filter(recipe => recipe.instructions.toLowerCase().includes(searchKeyword));

    if (filteredRecipes.length === 0) 
    {
        result += '<p>No results found.</p>';
        
    }
    else
    {
        for (let i = 0; i < filteredRecipes.length; i++) 
        {
            let htmlCodeName = '';
            htmlCodeName += '<p>' + filteredRecipes[i].name + '</p>';
            document.getElementById('name').innerHTML = htmlCodeName;

            let htmlCodeIngredients = '';
            htmlCodeIngredients += '<p>' + filteredRecipes[i].ingredients + '</p>';
            document.getElementById('ingredients').innerHTML = htmlCodeIngredients;

            let htmlCodeInstructions = '';
            htmlCodeInstructions += '<p>' + filteredRecipes[i].instructions + '</p>';
            document.getElementById('instructions').innerHTML = htmlCodeInstructions;
        }
    }
    document.getElementById('results').innerHTML = result;
}