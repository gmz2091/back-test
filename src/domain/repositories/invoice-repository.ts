import { Invoice } from "../entities/invoice";

export interface InvoiceRepository {
  create(invoice: Invoice): Promise<void>;
  update(invoice: Invoice): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Invoice | null>;
}
