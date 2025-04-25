import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("lifts", (table) => {
    table.string("id").primary().unique();
    table.string("name").notNullable();
    table.string("slug").notNullable();
    table.comment(
      "Each unique lift has a unique slug, and ID. These can be used for tracking across users and standardises naming"
    );
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("lifts");
}
