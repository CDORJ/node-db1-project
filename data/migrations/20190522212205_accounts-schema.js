exports.up = function (knex, Promise) {
  return knex.schema.createTable("accounts", (tbl) => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.decimal("budget").notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("accounts");
};
