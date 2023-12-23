import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import express, {Express, Request, Response} from "express";

const app: Express = express();

// set port, listen for requests
const PORT: string | 8080 = process.env.PORT || 8080;

import bodyParser from "body-parser";
import cors from "cors";



var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


import db from "./models/index.ts";
db.sequelize.sync({ force: true }).then(() => {
	console.log("Drop and re-sync db.");
});


// simple route
app.get("/", (req: Request, res: Response) => {
	res.json({ message: "Welcome to my application." });
});




app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});