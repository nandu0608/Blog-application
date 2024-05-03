const mongoose = require("mongoose");
require("dotenv").config(); //dotenv is a tool for storing secure data
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

const path = require("path");

const downloadsDirectory = 'C:\\Users\\nandkishor\\Downloads';
server.use(express.static(downloadsDirectory));


const bodyParser = require("body-parser");
const blogRouter =require('./routes/blog-routes')
const router = require('./routes/user-routes')

server.use(cors());
server.use(bodyParser.json());
server.use(express.json());
server.use(morgan("combined"));

//const downloadsDirectory = path.join(__dirname, 'C:\\Users\\nandkishor\\Downloads');
//server.use(express.static(downloadsDirectory));

server.use("/api/user", router.router);
server.use("/api/blog", blogRouter.router);



async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Blog-site");
  console.log("database connected");
}
main().catch(err => console.log(err));
server.listen(8000, () => {
  console.log("Server started ");
});
