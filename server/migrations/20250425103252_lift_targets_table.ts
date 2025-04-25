import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("lift_targets", (table) => {
    table.string("id").primary().unique();
    table.string("lift_id").notNullable();
    table.string("user_id").notNullable();
    table.integer("weight").notNullable();
    table.string("date");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("status").defaultTo("active");
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
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("lift_targets");
}
