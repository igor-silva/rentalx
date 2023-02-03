﻿import { ISpecificationsRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService{
    constructor(private specificationRepository: ISpecificationsRepository){

    }
    execute({name, description}: IRequest): void{
        this.specificationRepository.create({
            name,
            description,
        });
        
    }
}

export { CreateSpecificationService};