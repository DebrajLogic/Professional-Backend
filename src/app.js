import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

/* Configurations */
// to accept json and also set a limit
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// to get access to assets(images, favicon, etc.)
app.use(express.static("public"));
app.use(cookieParser());
/* Configurations */

export { app };
