export { default } from "next-auth/middleware";

export const config = {

  matcher: ["/add-item", "/profile", "/dashboard/:path*"],
};