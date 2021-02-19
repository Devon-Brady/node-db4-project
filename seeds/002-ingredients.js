
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, 'ingredient_name': 'water'},
        {id: 2, 'ingredient_name': 'flour'},
        {id: 3, 'ingredient_name': 'yeast'},
        {id: 4, 'ingredient_name': 'sugar'},
        {id: 5, 'ingredient_name': 'salt'},
        {id: 6, 'ingredient_name': 'oil'},
        {id: 7, 'ingredient_name': 'garlic_powder'},
        {id: 8, 'ingredient_name': 'butter'}
      ]);
    });
};
