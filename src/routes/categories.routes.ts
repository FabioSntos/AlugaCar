import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
	const { name, description } = req.body;

	const createCategoryServicve = new CreateCategoryService(
		categoriesRepository
	);

	createCategoryServicve.execute({ name, description });

	return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
	const allCategories = categoriesRepository.list();

	return res.json(allCategories);
});
export { categoriesRoutes };
