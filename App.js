const express = require("express");
const PORT = process.env.PORT || 3033;
const server = express();
require("dotenv").config();
const cors = require("cors");
require("./Config/db");
server.use(express.json());
const routePath = require("./Router/Router");
server.use(cors({ origin: "*" }));

server.get("/", (req, res) => {
  res.status(200).send(`Server upn and running PORT`);
});

server.use(routePath);

server.listen(PORT, () => {
  console.log(`Server listening to PORT: ${PORT}`);
});
