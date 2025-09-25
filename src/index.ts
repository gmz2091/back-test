import { type Request, type Response } from "express";
import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("¡Backend with TypeScript is running! 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
