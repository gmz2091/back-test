import { Request, Response } from "express";
import { CreateInvoice } from "../../../application/use-cases/create-invoice";
import { UpdateInvoice } from "../../../application/use-cases/update-invoice";
import { DeleteInvoice } from "../../../application/use-cases/delete-invoice";
import { Invoice } from "../../../domain/entities/invoice";
import { FetchAllInvoices } from "../../../application/use-cases/findAll-invoices";

export class InvoiceController {
  constructor(
    private fetchAllInvoices: FetchAllInvoices,
    private createInvoice: CreateInvoice,
    private updateInvoice: UpdateInvoice,
    private deleteInvoice: DeleteInvoice
  ) {}

  findAll = async (req: Request, res: Response) => {
    try {
      const invoices = await this.fetchAllInvoices.execute();
      res.json(invoices);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const invoice: Invoice = req.body;
      await this.createInvoice.execute(invoice);
      res.status(201).json({ message: "Invoice created" });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const invoice: Invoice = { ...req.body, id: req.params.id };
      await this.updateInvoice.execute(invoice);
      res.json({ message: "Invoice updated" });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Invoice id is required" });
      }
      await this.deleteInvoice.execute(id);
      res.json({ message: "Invoice deleted" });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };
}
