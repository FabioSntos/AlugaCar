import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { router } from "./routes/index.routes";
import { specificationRoutes } from "./routes/specification.routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => {
	console.log("Server is running on port 3333");
});
