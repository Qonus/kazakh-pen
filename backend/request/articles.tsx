import ArticleObject from "../objects/ArticleObject";

export async function fetchArticles(params: string): Promise<ArticleObject[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/articles${params}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
}

export async function fetchArticleData(id?: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/articles/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch article data");
  }
  return response.json();
}
