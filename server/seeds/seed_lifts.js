export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("lifts").del();
  await knex("lifts").insert([
    {
      id: "1",
      name: "clean + jerk",
      slug: "clean-jerk",
    },
    { id: "2", name: "snatch", slug: "snatch" },
    { id: "3", name: "squat", slug: "squat" },
    { id: "4", name: "deadlift", slug: "deadlift" },
    { id: "5", name: "bench press", slug: "bench-press" },
  ]);
}
