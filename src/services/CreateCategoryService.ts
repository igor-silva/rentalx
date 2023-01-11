import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest{
    name: string;
    description: string;
}
/*
* [x] - Definir tipo de retorno
* [x] - Alterar o retonro de erro
* [x] - Acessar o repositório
*/
class CreateCategoryService {

    constructor(private categoriesRepository: ICategoriesRepository){

    }

    execute({ name, description }:IRequest): void{
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists){
            throw new Error("Category Already exists!");
        }
    
        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryService }