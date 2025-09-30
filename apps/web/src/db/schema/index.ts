import { account, session, verification } from "./auth-schema";
import { companies } from "./companies";
import { user } from "./user-schema";

export const schema = {
	account: account,
	session: session,
	verification: verification,
	user: user,
	companies: companies,
};
