
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, 'recipe_name':'Bread'},
        {id: 2, 'recipe_name': 'Pizza_Dough'},
        {id: 3, 'recipe_name': 'Pie_Crust'}
      ]);
    });
};
