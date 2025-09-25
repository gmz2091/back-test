import "dotenv/config";
import cors from "cors";
import { type Request, type Response } from "express";
import express from "express";
import invoiceRoutes from "./interfaces/http/routes/invoice-routes";
import { environment } from "./config/environment";

const app = express();

app.use(cors());
const PORT = environment.port;

app.use(express.json());

app.use("/invoices", invoiceRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
