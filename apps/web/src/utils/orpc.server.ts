// // lib/orpc.server.ts
// import { auth } from "@/lib/auth";
// import { createRouterClient } from "@orpc/server";
// import { headers } from "next/headers";
// import "server-only"; // Ensures this module is never bundled for the client
// import { appRouter } from "../../../server/src/routers/index";

// // Create the server-side client
// export const oRPCserverClient = createRouterClient(appRouter, {
// 	context: async () => {
// 		const session = await auth();
// 		return {
// 			session,
// 			headers: await headers(),
// 		};
// 	},
// });
