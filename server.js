const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const _ = require("lodash");

if (_.isEqual(process.env.NODE_ENV, "production"))
  app.use(express.static("client/build"));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
);

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
