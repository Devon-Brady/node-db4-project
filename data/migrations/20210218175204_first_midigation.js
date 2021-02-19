exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments();
      table.text("recipe_name", 128).unique().notNullable();
    })
    .createTable("ingredients", (table) => {
      table.increments();
      table.text("ingredient_name", 128).unique().notNullable();
    })
    .createTable("Steps", (table) => {
      table.increments();
      table.text("instruction", 128).notNullable();
      table.integer("instruction_step").unsigned().notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("recipe_ingredients", (table) => {
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.float("ingredient_qty").unsigned();
      table.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function (knex) {};
