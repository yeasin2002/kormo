import type { NextFunction, Request, Response } from "express";
import logger from "@/lib/winston-logger";

export function errorHandler(
	err: any,
	req: Request,
	res: Response,
	_next: NextFunction,
) {
	// Normalise error object
	const status = err.status || err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	// Log full error with stack and request info
	logger.error("unhandled_error", {
		message,
		status,
		stack: err.stack,
		route: req.originalUrl,
		method: req.method,
		body: req.body,
		params: req.params,
		query: req.query,
	});

	// Return safe error to client
	res.status(status).json({
		error: {
			message: status === 500 ? "Internal Server Error" : message,
		},
	});
}
