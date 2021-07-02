import express from 'express';
import { factorialRouter } from './common/factorial.controller';
import { customerRouter } from './customers/customer.controller';

const app = express()
const PORT: string | number = process.env.PORT || 5000;
app.use(express.json());

/* app.use("/", (req, res) => {
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
}); */

app.use("/api/customers", customerRouter)

app.use("/api/factorial", factorialRouter)

app.listen(PORT, () => console.log(`hosting @${PORT}`));