export default interface User {
  user_id: number;
  type: "historical_figure" | "simple_user";
  first_name: string;
  last_name: string;
  description?: string;
  birth_date?: string;
  death_date?: string;
  nationality?: string;
  image?: string;
  created_at: string;
  updated_at: string;
}
