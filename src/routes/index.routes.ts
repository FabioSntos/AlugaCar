import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";

export const router = Router();

router.use("/categories", categoriesRoutes);
console.log("teste");
router.use("/specifications", specificationRoutes);
