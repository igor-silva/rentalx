﻿import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp"
});

categoriesRoutes.post("/", (req, res) => {
    console.log('Teste');
    
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
   return importCategoryController.handle(req, res);
});

export { categoriesRoutes };