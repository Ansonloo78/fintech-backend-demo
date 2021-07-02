const product = require("./product");
const express = require("express");
const cors = require("cors");

server = express();
server.use(cors());
server.use(express.json());

// router = express.Router();

// router.get("/welcome", (request, response) => {
//   response.status(200).send("Welcome to DevToolkit#2");
// });

// server.use(router);

server.use(product.router);

server.listen(3000, () => {
  console.log("Server is running!");
});


// const product = require("./product");
// const express = require("express");
// const body_parser = require("body-parser");

// server = express();
// server.use(body_parser.json());

// // router = express.Router();

// // router.get("/welcome", (request, response) => {
// //   response.status(200).send("Welcome to DevToolkit#2");
// // });

// // server.use(router);

// server.use(product.router);

// server.listen(3000, () => {
//   console.log("Server is running!");
// });



// product.create_new_product("ipad", "1000");

// product.delete_product_by_id(9);
// product.update_price_by_id(10, 1500);
// product.get_all_products();
