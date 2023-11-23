const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Information Technology" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Content Creation" },
        { name: "Business" },
        { name: "Science" },
        { name: "Engineering" },
        { name: "Philosophy" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.disconnect();
  }
}

main();
