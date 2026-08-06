import express from 'express';

import employees, { getEmployee, getEmployees, getRandomEmployee, addEmployee } from "#db/employees";

const router = express.Router();

export default router;
// Error handling middleware

router.get("/", (req, res) => {
    res.send(employees);
});

router.post("/", (req, res) => {
    const {name} = req.body ?? {};
    if (!name) return res.status(400).send("Name is required.");

    res.status(201).send(addEmployee(name));
});

router.get("/random", (req, res) => {
    res.send(getRandomEmployee());
});

router.get("/:id", (req, res) => {
    const employee = getEmployee(+req.params.id);
    if (!employee) return res.status(404).send("Employee not found.");
    res.send(employee);
});

