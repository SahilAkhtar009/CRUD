const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  // res.send("Hello from Express!");
  res.render("form.ejs");
});

async function Product(data) {
  await mongoose.connect("mongodb://localhost:27017/product");
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
  });

  const ProductModel = mongoose.model("Products", productSchema);
  const product = new ProductModel({
    name: data.name,
    price: data.price,
    quantity: data.qnt,
  });
  let result = await product.save();
  console.log("Product saved successfully", result);
}

app.post("/submit", (req, res) => {
  const data = req.body;
  // console.log(data);
  res.send("Form submitted successfully!");
  Product(data);
});

app.listen(2000);
