const mongoose = require("mongoose");

async function main() {
  const d = await mongoose.connect("mongodb://localhost:27017/student");
  const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });
  // always  schema model creates plurar collections name a in the database plurar as users not user
  const UserModel = mongoose.model("users", UserSchema);

  const data = new UserModel({ name: "Mohan", age: 20 });
  let result = await data.save();
  console.log("User saved:", result);
}

main();
