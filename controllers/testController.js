import mongoose from "mongoose";
import conn from "../config/db.js";

const test = (req, res) => {
  let test;
  conn();
  try {
    test = mongoose.model("test", {});
  } catch (err) {
    res.status(400).send(err);
  }
  const newUser = new test({ username: "claude" });
  newUser.save();
  res.status(200).send({ message: newUser });
};
export default test;
