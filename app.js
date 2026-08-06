import express from "express";
import morgan from "morgan";

import employeesRouter from "#routers/employees";
import errorHandler from "#middleware/errorHandler";

const app = express();
export default app;

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello employees!");
});

app.use("/employees", employeesRouter);

app.use(errorHandler);