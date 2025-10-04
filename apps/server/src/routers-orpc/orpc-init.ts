import { OpenAPIHandler } from "@orpc/openapi/node";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/node";
import type {
	NodeHttpRequest,
	NodeHttpResponse,
} from "@orpc/standard-server-node";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
import chalk from "chalk";
import type { NextFunction } from "express";
import { createContext } from "@/lib/context";
import { appRouter } from ".";

const rpcHandler = new RPCHandler(appRouter, {
	interceptors: [
		onError((error) => {
			console.log(
				chalk.bgRed.white(
					"------------------------------RPC Error------------------------------",
				),
			);
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

export const orpcInit = async (
	req: NodeHttpRequest,
	res: NodeHttpResponse,
	next: NextFunction,
) => {
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
};
