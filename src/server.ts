import express from "express";
import SwaggerUi from "swagger-ui-express";
import "./database";
import "./shared/container";
import swaggerFile from "./swagger.json";

import { router } from "./routes/index.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => {
	console.log("Server is running on port 3333");
});
