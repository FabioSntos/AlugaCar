import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

export const createCategoryController = new CreateCategoryController(
	createCategoryUseCase
);
