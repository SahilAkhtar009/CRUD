const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/student");

const UsersSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
});

const usersModel = mongoose.model("users", UsersSchema);

const CreateUser = async () => {
  const user = new usersModel({
    name: "Suraj Prajapati",
    age: 30,
    course: "B C A",
  });
  const result = await user.save();
  console.log("User created successfully", result);
};

// CreateUser();

// Read Data from DataBase

const ReadData = async () => {
  const users = await usersModel.find();
  console.log("All Users:", users);
};

// ReadData();

// Update Data

// Read Data from DataBase

const updateData = async () => {
  const updateUser = await usersModel.updateOne(
    {
      name: "Dipanshu Vishwakarma",
    },
    {
      $set: {
        name: "Dipanshu Mauriya",
      },
    }
  );
  console.log(updateUser);
};

// updateData();

// Delete Data from DataBase

const deleteData = async () => {
  const deletedUser = await usersModel.deleteOne({ name: "John Doe" });
  console.log(deletedUser);
};

deleteData();
