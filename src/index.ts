import { type Request, type Response } from "express";
import express from "express";
import invoiceRoutes from "./interfaces/http/routes/invoice-routes";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/invoices", invoiceRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("¡Backend with TypeScript is running! 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
