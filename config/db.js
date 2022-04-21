import mongoose from "mongoose";

const conn = async () => {
  mongoose
    .connect("mongodb://localhst:27017/testing")
    .then(conn => console.log("DB connected successfully!"));
};
export default conn;
