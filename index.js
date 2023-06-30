const express = require("express");
const app = express();
const port = process.env.port || 5000;
const cors = require("cors");
const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Website is running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  const selectedCategories = categories.find((n) => n.id == id);
  res.send(selectedCategories);
});

app.listen(port, () => {
  console.log("Chef is ongoing");
});
