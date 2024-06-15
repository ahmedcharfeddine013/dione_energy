/**
 * an array of routes that are accessible to the public
 * @type {string[]}
 */

export const publicRoutes = [];

/**
 * an array of routes that are used for authentication
 * @type {string[]}
 */

export const authRoutes = ["/auth/sign-in", "/auth/sign-up", "/auth/error"];

/**
 * the prefix for api authentication routes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth/";

/**
 * the default path after logging in for user userole
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/";
