import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Logger from "./services/loggerService.ts";
import authRouter from "./routes/auth.router.ts";

function bootstrap() {
  try {
    dotenv.config();
    const router = express();
    const port = process.env.PORT;
    const dbUri = process.env.MONGO_URL;

    Logger.info("asdasd");
    Logger.info(port);
    Logger.info(dbUri);

    mongoose
      .connect(dbUri!)
      .then(() => {
        Logger.success("Connected to MongoDB");
      })
      .catch((err) => {
        Logger.error("Error connecting to DB:");
        Logger.error(err);
      });

    router.use("/auth", authRouter);
    router.use("/posts", authRouter);
    router.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (e) {
    Logger.error(e);
  }
}

bootstrap();
