const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
var cors = require("cors");
const db = require("./dbConnection");
const Book = require("./model");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

db();

app.get("/", (req, res) => {
  res.send("Hello Boys and Girls");
});

app.post("/add-book", async (req, res) => {
  const checkIfPostAlreadyExists = await Book.find({ name: req.body.name });
  if (checkIfPostAlreadyExists.length > 0) {
    res.status(409);
    res.json({ message: "You Already have this Book registered" });
    return;
  }

  await Book.create(req.body);
});

app.get("/get-all-books", async (req, res) => {
  res.json(await Book.find({}));
});

app.delete("/delete-book", async (req, res) => {
  console.log(req.body);
  await Book.deleteOne(req.body);
});

mongoose.connection.once("open", async () => {
  app.listen(port, () => {
    console.log("you're listen to the port 3000");
  });
});

// {
//   name: "Peter Pan",
//   imageURL:
//     "https://m.media-amazon.com/images/I/51+MEyUzkUL._SY344_BO1,204,203,200_.jpg",
//   text: "Certa noite, um menino um tanto quanto diferente e especial chamado Peter Pan convida Wendy Darling e seus irmaos a voar, com a ajuda da ciumenta fada Sininho, em direcao a Terra do Nunca, uma ilha magica habitada pelos meninos perdidos que nao querem crescer. Wendy e os irmaos chegam aquele local distante e descobrem um universo de seres maravilhosos. Porem, Peter Pan tem um inimigo - o terrivel Capitao Gancho, comandante de um grupo de piratas em seu temido e sombrio navio, que tentara acabar com a felicidade de Peter e seus amigos.",
//   price: "57,00",
// }
