import express from 'express';
import { router } from './routes';
import fs from "fs";
import path  from "path";
import YAML from "yaml";
import swaggerUi from "swagger-ui-express";
import swaggerFileJson from "./swagger/swagger.json";

const app = express();
const swaggerPath = path.resolve(__dirname,'./swagger/swagger.yaml');
const swaggerFile = fs.readFileSync(swaggerPath, "utf8");
const swaggerDocument = YAML.parse(swaggerFile);

app.use( express.json() );
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router);

app.listen(3000,
    () => console.log("Server na porta 3000")
);