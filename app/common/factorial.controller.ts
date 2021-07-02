import express from "express";

export const factorialRouter = express.Router();

factorialRouter.get("/", async (req, res) => {
    res.status(200).send("hi");
});

factorialRouter.get("/:id", async (req, res) => {
    const id: number = parseInt(req.params.id, 10);

    return res.status(200).send({ number: id, factorial: factorial(id) });
});

const factorial = (n: number): number => {
    return n == 1 ? 1 : n * factorial(n - 1);
};