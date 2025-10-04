import type { RouterClient } from "@orpc/server";
import { protectedProcedure, publicProcedure } from "../lib/orpc";
import { generateCoverLetterWithOrpc } from "./tools-router/Ai-cover-letter-generate";

export const appRouter = {
	generateCoverLetter: generateCoverLetterWithOrpc,
	healthCheck: publicProcedure.handler(() => {
		return "OK";
	}),
	privateData: protectedProcedure.handler(({ context }) => {
		return {
			message: "This is private",
			user: context.session?.user,
		};
	}),
};
export type AppRouterType = typeof appRouter;
export type AppRouterClientType = RouterClient<typeof appRouter>;
