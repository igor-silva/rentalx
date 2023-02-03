import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository()

specificationRoutes.post("/", (req, resp) => {
    const { name, description } = req.body;
    const createSpecificationService = new CreateSpecificationService(specificationRepository);

    createSpecificationService.execute({ name, description });

    return resp.status(201).send();
});

export { specificationRoutes };