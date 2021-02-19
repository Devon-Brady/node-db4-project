const db = require("../../data/dcConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes');
}

function getInstructions(recipe_id) {
  return db('Steps')
    .where('recipe_id', recipe_id)
    .select('instruction')
    .orderBy('instruction_step');
}

function getShoppingList(recipe_id) {
  return db('recipe_ingredients as r_i')
    .join('ingredients as ing', 'r_i.ingredient_id', 'ing.id')
    .where('recipe_id', recipe_id)
    .select('ing.ingredient_name', 'r_i.ingredient_qty')
}
