import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

//Router Imports
import { authorRouter } from "./routes/AuthorRoutes";
import { categoryRouter } from "./routes/CategoryRoutes";
import { genreRouter } from "./routes/GenreRoutes";
import { publisherRouter } from "./routes/PublisherRoutes";
import { seriesGenresRouter } from "./routes/SeriesGenres";
import { seriesRouter } from "./routes/SeriesRoutes";
import { userRouter } from "./routes/UserRoutes";

import "./database";

const app = express();

app.use(express.json());

app.use(
  userRouter,
  authorRouter,
  categoryRouter,
  genreRouter,
  publisherRouter,
  seriesGenresRouter,
  seriesRouter
);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(3000, () => console.log("Server is Running"));
