import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const client = new PrismaClient();

app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json({
    users,
  });
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id as unknown as number;

  const users = await client.user.findFirst({
    where: {
      id: parseInt(id),
    },
    select: {
      todos: true,
      username: true,
      password: true,
    },
  });

  res.json({
    users,
  });
});

app.listen(3000);

// Inserting the records into db with prisma.
async function createUser() {
  const user = await client.user.create({
    data: {
      username: "Netra kc",
      password: "123123",
      age: 25,
      city: "London",
    },
  });
  console.log(user?.password);

  const user1 = await client.user.findFirst({
    where: {
      id: 1,
    },
  });
}
