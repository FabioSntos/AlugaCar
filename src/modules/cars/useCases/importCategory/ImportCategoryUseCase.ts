import fs from "fs";
import { parse } from "csv-parse";

export class ImportCategoryUseCase {
	execute(file?: Express.Multer.File) {
		// @ts-ignore: Unreachable code error
		const stream = fs.createReadStream(file.path);

		const parseFile = parse();

		stream.pipe(parseFile);
		parseFile.on("data", async line => {
			console.log(line);
		});
	}
}
