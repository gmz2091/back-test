export const environment = {
  supabaseUrl: process.env.SUPABASE_URL!,
  supabaseKey: process.env.SUPABASE_KEY!,
  port: process.env.PORT ? Number(process.env.PORT) : 3000
};
