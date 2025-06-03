import NextAuth from "next-auth";
import authConfig from "./lib/auth/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isAuth = true;
  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/signup");

  if (isAuthPage) {
    if (isAuth) {
      return Response.redirect(new URL("/", req.nextUrl));
    }
    return null;
  }

  if (!isAuth) {
    return Response.redirect(new URL("/login", req.nextUrl));
  }
  return null;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
