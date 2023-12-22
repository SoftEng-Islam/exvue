// import express from "express";
// const port = process.env.PORT || 3000;
// const app = express();
// app.get("/api/v1/hello", (_req, res) => {
// 	res.json({ message: "Hello, Islam!" });
// });
// app.listen(port, () => {
// 	console.log("Server listening on port", port);
// });


import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();



var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
	console.log("Drop and re-sync db.");
});


// simple route
app.get("/", (req, res) => {
	res.json({ message: "Welcome to my application." });
});



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});