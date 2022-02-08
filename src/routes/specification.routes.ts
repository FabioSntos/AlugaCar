import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

export const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (req, res) => {
	const { name, description } = req.body;

	const createSpecificationService = new CreateSpecificationUseCase(
		specificationsRepository
	);

	createSpecificationService.execute({ name, description });

	return res.status(201).send();
});

specificationRoutes.get("/", (req, res) => {
	const allCategories = specificationsRepository.list();

	return res.json(allCategories);
});
