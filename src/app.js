import express from "express";
import cors from "cors";
import paymentRoute from "./routes/payment.route.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/payment", paymentRoute);

export default app;
