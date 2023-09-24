import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController{

    constructor(private listCategoryUseCase: ListCategoriesUseCase){

    }

    handle(req: Request, res: Response): Response{
        const all = this.listCategoryUseCase.execute();// = CategoryRepository

        console.log(all);
        

        return res.json(all)
    }
}

export { ListCategoriesController };