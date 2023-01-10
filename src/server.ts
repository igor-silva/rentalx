﻿import express from 'express';
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use( express.json() );

app.use("/categories", categoriesRoutes );
app.listen(3000,
    () => console.log("Server na porta 3000")
);