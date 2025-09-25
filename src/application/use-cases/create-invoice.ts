import { Invoice } from "../../domain/entities/invoice";
import { InvoiceRepository } from "../../domain/repositories/invoice-repository";

export class CreateInvoice {
  constructor(private repo: InvoiceRepository) {}

  async execute(invoice: Invoice): Promise<void> {
    await this.repo.create(invoice);
  }
}
