import { getEnvVar } from "./utils/getEnvVar.js";
import express from "express";
import cors from "cors";
import pino from "pino-http";
import router from "./routers/index.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { prisma } from "../lib/prisma.ts";

const PORT = getEnvVar("PORT", 4000);

export default async function setupServer() {
  try {
    await prisma.$connect();
    console.log("✅ DB CONNECTED");
  } catch (error) {
    console.error("❌ DB CONNECTION ERROR:", error);
    process.exit(1);
  }

  const app = express();
  app.use(
    express.json({
      type: ["application/json", "application/vnd.api+json"],
      limit: "100kb",
    }),
  );

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    }),
  );

  app.get("/", (req, res) => {
    res.json({
      message: "Hello Node!",
    });
  });

  app.use(router);

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
