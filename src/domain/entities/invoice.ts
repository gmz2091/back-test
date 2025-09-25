export type InvoiceStatus = "Paid" | "Unpaid"

export interface Invoice {
  id?: string;
  client: string;
  date: string;
  amount: number;
  status: InvoiceStatus;
}
