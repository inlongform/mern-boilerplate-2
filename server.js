import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import users from "./routes/api/v1/users";
import passport from "passport";
import cors from "cors";
import helmet from "helmet";

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

//db config
const db = require("./config/keys").mongoURI;

//db conect
mongoose
  .connect(db)
  .then(() => console.log("mongo db connnected"))
  .catch(err => console.log(err));

//passport middleware
passport.use(passport.initialize());
// Passport Config
// require("./config/passport")(passport);

//use routes
app.use("/api/v1/users", users);

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
