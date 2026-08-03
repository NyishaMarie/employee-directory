import express from "express";
import {getEmployee, getEmployees, getRandomEmployee} from "#db/employees";

const app = express();
export default app;

app.get("/", (req, res) => {
    res.send("Hello employees!");
});

app.get("/employees", async (req, res) => {
  const employees = getEmployees();
  res.json(employees);
});

app.get("/employees/random", async (req, res) => {
  const employee = getRandomEmployee();
  res.json(employee);
});

app.get("/employees/:id", async (req, res) => {
  const {id} = req.params;
  console.log("id param rcvd:",id);
    const employee = await getEmployee(+id);
    if (!employee) {
        res.status(404).send("Employee not found");
    } else {
        res.json(employee);
    }
});

