import { Router } from "express";
import { InvoiceController } from "../controllers/invoice-controller";
import { CreateInvoice } from "../../../application/use-cases/create-invoice";
import { UpdateInvoice } from "../../../application/use-cases/update-invoice";
import { DeleteInvoice } from "../../../application/use-cases/delete-invoice";
import { FetchAllInvoices } from "../../../application/use-cases/findAll-invoices";
import { createClient } from "@supabase/supabase-js";
import { environment } from "../../../config/environment";
import { SupabaseInvoiceRepository } from "../../../infrastructure/persistence/supabase-invoice-repository";

const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
const repo = new SupabaseInvoiceRepository(supabase);

const controller = new InvoiceController(
  new FetchAllInvoices(repo),
  new CreateInvoice(repo),
  new UpdateInvoice(repo),
  new DeleteInvoice(repo)
);

const router = Router();


router.get("/", controller.findAll);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
