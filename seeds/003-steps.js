
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {id: 1, 'instruction': 'mix the dry','recipe_id':1,"instruction_step":1},
        {id: 2, 'instruction': 'mix the wet','recipe_id':1,"instruction_step":2},
        {id: 3, 'instruction': 'combine in bowl','recipe_id':1,"instruction_step":3},
        {id: 4, 'instruction': 'add butter to flour','recipe_id':3,"instruction_step":1},
        {id: 5, 'instruction': 'roll out dough','recipe_id':2,"instruction_step":2},
        {id: 6, 'instruction': 'put on pizza pan','recipe_id':2,"instruction_step":3},
        {id: 7, 'instruction': 'put in pie dish','recipe_id':3,"instruction_step":2},
        {id: 8, 'instruction': 'kneed the dough','recipe_id':1,"instruction_step":4},
        {id: 9, 'instruction': 'put in bread pan','recipe_id':1,"instruction_step":5},
        {id: 10, 'instruction': 'bake','recipe_id':1,"instruction_step":6,},
        {id: 11, 'instruction': 'add garlic powder to dough','recipe_id':2,"instruction_step":1},
      ]);
    });
};
