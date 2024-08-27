export default interface ArticleObject {
  article_id: number;
  type: "opinion" | "work" | "biography";
  title: string;
  content: string;
  likes: number;
  published_date?: string;
  image?: string;
  created_at: string;
  updated_at: string;
}
