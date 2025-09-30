import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, printf, errors } = format;

const logFormat = printf(({ timestamp, level, message, stack, ...meta }) => {
  // stack exists for error logs
  const base = `${timestamp} ${level}: ${stack || message}`;
  const metaString = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : "";
  return base + metaString;
});

const transportConsole = new transports.Console({
  level: process.env.LOG_LEVEL ?? "info",
  handleExceptions: true,
});

const transportFile = new transports.File({
  filename: "logs/app.log",
  level: "info",
  handleExceptions: true,
  maxsize: 5 * 1024 * 1024, // 5MB
  maxFiles: 5,
});

const transportRotate = new DailyRotateFile({
  filename: "logs/%DATE%-app.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: false,
  maxSize: "20m",
  maxFiles: "14d",
  level: "info",
});

const logger = createLogger({
  level: process.env.LOG_LEVEL ?? "info",
  format: combine(
    timestamp(),
    errors({ stack: true }), // capture stack trace in error objects
    // you can switch to json() in production if you want structured logs
    logFormat
  ),
  transports: [transportConsole, transportRotate, transportFile],
  exitOnError: false,
});

export default logger;
