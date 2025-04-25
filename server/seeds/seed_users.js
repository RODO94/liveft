export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();

  await knex("users").insert([
    { name: "Salla", id: "salla" },
    { name: "Rory", id: "rory" },
  ]);
}
