import { InvoiceRepository } from "../../domain/repositories/invoice-repository";

export class DeleteInvoice {
  constructor(private repo: InvoiceRepository) {}

  async execute(id: string): Promise<void> {
    const existing = await this.repo.findById(id);
    if (!existing) throw new Error("Invoice not found");
    await this.repo.delete(id);
  }
}
