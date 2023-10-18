import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.get('/', async (req, res) => {
  res.send('Hello, this is the backend for waantrading -- UNDER CONSTRUCTIONS');
});


app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3005, () => console.log(`Server Running`));
