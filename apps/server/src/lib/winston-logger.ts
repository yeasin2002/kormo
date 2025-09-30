import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, printf, errors, colorize, align } = format;

const devFormat = combine(
  colorize({ all: true }),
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  align(),
  printf(({ timestamp, level, message, stack, ...meta }) => {
    const metaString = Object.keys(meta).length
      ? JSON.stringify(meta, null, 2)
      : "";
    return `[${timestamp}] ${level}: ${stack || message} ${metaString}`;
  })
);

const prodFormat = combine(timestamp(), errors({ stack: true }), format.json());

const logger = createLogger({
  level: process.env.LOG_LEVEL ?? "info",
  format: process.env.NODE_ENV === "production" ? prodFormat : devFormat,
  transports: [
    new transports.Console({
      handleExceptions: true,
    }),
    new DailyRotateFile({
      filename: "logs/%DATE%-app.log",
      datePattern: "YYYY-MM-DD",
      maxFiles: "14d",
      zippedArchive: false,
      level: "info",
    }),
  ],
  exitOnError: false,
});

export default logger;
