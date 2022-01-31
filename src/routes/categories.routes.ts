import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
	// const { name, description } = req.body;

	const categoryAlreadyExists = categoriesRepository.findByName(req.body.name);

	if (categoryAlreadyExists) {
		return res.status(400).json({ error: "Category already exists" });
	}
	categoriesRepository.create(req.body);

	return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
	const allCategories = categoriesRepository.list();

	return res.json(allCategories);
});
export { categoriesRoutes };
