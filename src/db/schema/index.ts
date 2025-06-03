import { account, session, verification } from "./auth-schema";
import { user } from "./user-schema";

export const schema = {
  account: account,
  session: session,
  verification: verification,
  user: user,
};
