import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("lift_records", (table) => {
    table.string("id").primary().unique();
    table.string("lift_id").notNullable();
    table.integer("weight").notNullable();
    table.string("date").notNullable();
    table.string("user_id").notNullable();
    table.boolean("is_max").defaultTo(false);
    table.integer("reps").defaultTo(0);
    table
      .foreign("lift_id")
      .references("id")
      .inTable("lifts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.comment(
      "Lift records table for tracking individual lifts for a user"
    );
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("lift_records");
}
