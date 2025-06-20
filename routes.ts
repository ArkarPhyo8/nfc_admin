/**
 * an array of routes that are used for authentication
 * these routes will redirect logged in user to /dashboard
 * @type {string[]}
 */

export const authRoutes: string[] = ["/sign-in"];

/**
 * the prefix for API authentication routes
 * routes that start with this prefix are used for API authentication purpose
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * an array of routes that are used for protected route
 * @type {string[]}
 */
export const protectedRoute: string[] = [
  "/",
  "/admins",
  "/users",
  "/dashboard",
];

/**
 * default route after login or logged
 */
export const defaultRoute ="/"
