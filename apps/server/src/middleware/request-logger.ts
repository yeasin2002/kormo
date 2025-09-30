import type { NextFunction, Request, Response } from "express";
import logger from "@/lib/winston-logger";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
	const start = Date.now();
	const { method, url, headers } = req;

	res.on("finish", () => {
		const duration = Date.now() - start;
		const { statusCode } = res;
		logger.info("http_request", {
			method,
			url,
			statusCode,
			duration,
			ip: req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress,
			userAgent: headers["user-agent"] ?? null,
		});
	});

	next();
}
