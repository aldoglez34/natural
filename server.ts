const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const { isEqual } = require("lodash");
const morgan = require("morgan");
const routes = require("./routes");
const mongoose = require("mongoose");

app.use(morgan("dev"));

if (isEqual(process.env.NODE_ENV, "production"))
  app.use(express.static("client/build"));

app.use(routes);

// TODO: add express types
app.get("*", (req: any, res: any) =>
  res.sendFile(path.join(__dirname, "./client/build/in  dex.html"))
);

// TODO: add compass uri
const MONGODB_URI = "mongodb://localhost/natural";

// TODO: add mongoose connect types
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connection to database was successful"))
  .catch((error: any) => console.log(error));

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
