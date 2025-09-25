import { Invoice } from "../../domain/entities/invoice";
import { InvoiceRepository } from "../../domain/repositories/invoice-repository";

export class FetchAllInvoices {
  constructor(private repo: InvoiceRepository) {}

  async execute(): Promise<Invoice[]> {
    return this.repo.findAll();
  }
}
