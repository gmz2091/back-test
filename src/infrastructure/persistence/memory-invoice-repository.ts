import { Invoice } from "../../domain/entities/invoice";
import { InvoiceRepository } from "../../domain/repositories/invoice-repository";

export class MemoryInvoiceRepository implements InvoiceRepository {
  private invoices: Map<string, Invoice> = new Map();

  async create(invoice: Invoice): Promise<void> {
    this.invoices.set(invoice.id, invoice);
  }

  async update(invoice: Invoice): Promise<void> {
    this.invoices.set(invoice.id, invoice);
  }

  async delete(id: string): Promise<void> {
    this.invoices.delete(id);
  }

  async findById(id: string): Promise<Invoice | null> {
    return this.invoices.get(id) ?? null;
  }
}
