import { expo } from "@better-auth/expo";
import { db } from "@workspace/database";
import * as schema from "@workspace/database/schema";
import { type BetterAuthOptions, betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

// import { checkout, polar, portal } from "@polar-sh/better-auth";
// import { polarClient } from "./payments";

export const auth = betterAuth<BetterAuthOptions>({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: schema,
	}),
	trustedOrigins: [process.env.CORS_ORIGIN || "", "mybettertapp://", "exp://"],
	emailAndPassword: {
		enabled: true,
	},
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
	},
	plugins: [
		expo(),
		// polar({
		// 	client: polarClient,
		// 	createCustomerOnSignUp: true,
		// 	enableCustomerPortal: true,
		// 	use: [
		// 		checkout({
		// 			products: [
		// 				{
		// 					productId: "47d28c3b-c9d0-4d15-a06b-a155eb8263b3",
		// 					slug: "kormo-app",
		// 				},
		// 			],
		// 			successUrl: process.env.POLAR_SUCCESS_URL,
		// 			authenticatedUsersOnly: true,
		// 		}),
		// 		portal(),
		// 	],
		// }),
	],
});
