import express from "express";
import SwaggerUi from "swagger-ui-express";

import swaggerFile from "./swagger.json";

import { router } from "./routes/index.routes";

import "./database";

const app = express();

app.use(express.json());

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => {
	console.log("Server is running on port 3333");
});
