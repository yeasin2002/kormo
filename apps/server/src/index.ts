import "dotenv/config";

import { errorHandler, requestLogger } from "@/middleware";
import { OpenAPIHandler } from "@orpc/openapi/node";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/node";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
import { apiReference } from "@scalar/express-api-reference";
import { toNodeHandler } from "better-auth/node";
import chalk from "chalk";
import cors from "cors";
import express from "express";
import { auth } from "./lib/auth";
import { createContext } from "./lib/context";
import { appRouter } from "./routers";
import { PORT } from "./utils";

const app = express();
app.use((_req, _res, next) => {
	console.log(
		chalk.bgRed(
			"========================================================================================",
		),
	);
	next();
});
app.use(requestLogger);

app.use(
	cors({
		origin: process.env.CORS_ORIGIN || "",
		methods: ["GET", "POST", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	}),
);
app.get(
	"/docs",
	apiReference({
		pageTitle: "API Documentation",
		theme: "deepSpace",
		sources: [
			{ title: "oRPC", url: "../public/openapi.json" },
			{ url: "/api/auth/open-api/generate-schema", title: "Auth" },
		],
	}),
);

app.all("/api/auth{/*path}", toNodeHandler(auth));



const rpcHandler = new RPCHandler(appRouter, {
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});
const apiHandler = new OpenAPIHandler(appRouter, {
	plugins: [
		new OpenAPIReferencePlugin({
			schemaConverters: [new ZodToJsonSchemaConverter()],
		}),
	],
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});

app.use(async (req, res, next) => {
	const rpcResult = await rpcHandler.handle(req, res, {
		prefix: "/rpc",
		context: await createContext({ req }),
	});
	if (rpcResult.matched) return;

	const apiResult = await apiHandler.handle(req, res, {
		prefix: "/api",
		context: await createContext({ req }),
	});
	if (apiResult.matched) return;

	next();
});

app.use(express.json());

app.get("/", (_req, res) => {
	res.status(200).send("OK");
});

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
