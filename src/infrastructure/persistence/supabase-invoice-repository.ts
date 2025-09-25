import { Invoice } from "../../domain/entities/invoice";
import { InvoiceRepository } from "../../domain/repositories/invoice-repository";
import { SupabaseClient } from "@supabase/supabase-js";

export class SupabaseInvoiceRepository implements InvoiceRepository {
  constructor(private supabase: SupabaseClient) {}

  async create(invoice: Invoice): Promise<void> {
    const { error } = await this.supabase.from("invoices").insert(invoice);
    if (error) throw error;
  }

  async update(invoice: Invoice): Promise<void> {
    const { error } = await this.supabase
      .from("invoices")
      .update(invoice)
      .eq("id", invoice.id);

    if (error) throw error;
  }

  async delete(id: string): Promise<void> {
    const { error } = await this.supabase
      .from("invoices")
      .delete()
      .eq("id", id);

    if (error) throw error;
  }

  async findById(id: string): Promise<Invoice | null> {
    const { data, error } = await this.supabase
      .from("invoices")
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") throw error; // "no rows returned"
    return data ?? null;
  }
}
