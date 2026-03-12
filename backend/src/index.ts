import express from "express";
import cors from "cors";
import createHttpError from "http-errors";

import connectDB from "./config/db.ts";
import errorHandler from "./middlewares/errorHandler.ts";
import env from "./lib/envalidate.ts";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint was not Found"));
});
app.use(errorHandler);

// Connect to MongoDB
connectDB()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  });
