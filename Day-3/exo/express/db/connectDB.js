import mongoose from "mongoose";
 mongoose
.connect("mongodb://localhost:27017/<db_name>")
.then(() => console.log("connected"))
.catch((err) => console.error("connection error:", error));
