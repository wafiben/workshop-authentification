const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/UserRoute");
const PostRouter = require("./Routes/PostRouter");
var cors = require("cors");

//on n'ecrit pas le parametre path dans le config car le .env est de meme niveau que le index(entry point)
dotenv.config();
//midelware

app.use(express.json());
app.use("/auth", userRoute);
app.use("/post", PostRouter);
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = 9000;

mongoose.connect(process.env.URL, (error) => {
  if (error) {
    console.log("connexion failed ");
  } else {
    console.log("database is connected");
  }
});
app.listen(port, (error) => {
  if (error) console.log("failed to run ");
  console.log(`server is running on port ${port}`);
});
