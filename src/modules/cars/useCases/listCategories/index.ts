import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default (): any => {
	const categoriesRepository = new CategoriesRepository();

	const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

	const listCategoriesController = new ListCategoriesController(
		listCategoriesUseCase
	);
	return listCategoriesController;
};
