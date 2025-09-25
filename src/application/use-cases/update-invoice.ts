import { Invoice } from "../../domain/entities/invoice";
import { InvoiceRepository } from "../../domain/repositories/invoice-repository";

export class UpdateInvoice {
  constructor(private repo: InvoiceRepository) {}

  async execute(invoice: Invoice): Promise<void> {
    const existing = await this.repo.findById(invoice.id as string);
    if (!existing) throw new Error("Invoice not found");
    await this.repo.update(invoice);
  }
}
