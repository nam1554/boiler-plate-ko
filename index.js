const express = require("express");
const app = express();
const port = 6000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://nam1554:rl2tjq63%40%21@boilerplate.nfxsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`Example app listening onn port ${port}`));
