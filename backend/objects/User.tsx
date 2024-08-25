export default interface User {
  user_id: number;
  type: "historical_figure" | "simple_user";
  first_name: string;
  last_name: string;
  description?: string;
  birth_date?: string; // You might want to use Date type if you convert the string
  death_date?: string;
  nationality?: string;
  image?: string;
  created_at: string; // Again, consider using Date if you're parsing these
  updated_at: string;
}
