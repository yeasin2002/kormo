import chalk, { type ChalkInstance } from "chalk";
import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, errors, printf } = format;

const devFormat = printf(({ level, message, timestamp, stack, ...meta }) => {
	// Color map for levels
	const levelColors: Record<string, ChalkInstance> = {
		error: chalk.redBright.bold,
		warn: chalk.yellowBright,
		info: chalk.cyanBright,
		http: chalk.greenBright,
		debug: chalk.magentaBright,
	};

	const colorizeLevel = levelColors[level] || chalk.white;
	const ts = chalk.dim(timestamp);
	const paddedLevel = level.toUpperCase().padEnd(5);

	// Format meta as key=value with colors
	const formatMeta = (obj: Record<string, unknown>, indent = 2): string => {
		if (!obj || Object.keys(obj).length === 0) return "";
		return (
			"\n" +
			Object.entries(obj)
				.map(([k, v]) => {
					const key = chalk.blueBright(k);
					const val =
						typeof v === "string"
							? chalk.green(`"${v}"`)
							: typeof v === "number"
								? chalk.yellow(v.toString())
								: typeof v === "boolean"
									? chalk.magenta(v.toString())
									: chalk.gray(JSON.stringify(v));
					return " ".repeat(indent) + `${key}=${val}`;
				})
				.join("\n")
		);
	};

	const base = `${ts} ${colorizeLevel(paddedLevel)} ${stack || message}`;
	return base + formatMeta(meta);
});

const prodFormat = combine(timestamp(), errors({ stack: true }), format.json());

const logger = createLogger({
	level: process.env.LOG_LEVEL ?? "info",
	format:
		process.env.NODE_ENV === "production"
			? prodFormat
			: combine(
					timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
					errors({ stack: true }),
					devFormat,
				),
	transports: [
		new transports.Console({ handleExceptions: true }),
		new DailyRotateFile({
			filename: "logs/%DATE%-app.log",
			datePattern: "YYYY-MM-DD",
			maxFiles: "14d",
			zippedArchive: true,
			level: "info",
		}),
	],
	exitOnError: false,
});

export default logger;
