import "dotenv/config";

import { errorHandler, requestLogger } from "@/middleware";
import { apiReference } from "@scalar/express-api-reference";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express from "express";
import path from "node:path";
import { auth } from "./lib/auth";
import { orpcInit } from "./routers/orpc-init";
import { PORT } from "./utils";

const app = express();

// app.use((_req, _res, next) => {
//   console.log(
//     chalk.bgRed(
//       "========================================================================================"
//     )
//   );
//   next();
// });

app.use(requestLogger);
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get(
  "/docs",
  apiReference({
    pageTitle: "API Documentation",
    theme: "deepSpace",
    sources: [
      { title: "oRPC", url: "/openapi.json" },
      { title: "Auth", url: "/api/auth/open-api/generate-schema" },
    ],
  })
);

app.all("/api/auth{/*path}", toNodeHandler(auth));

app.use(orpcInit);

app.get("/", (_req, res) => {
  res.status(200).send({
    message: "OK",
    data: "OK",
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
