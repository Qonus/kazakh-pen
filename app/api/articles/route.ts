import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import ArticleObject from '@/backend/objects/ArticleObject';

async function fetchArticles(query?: string): Promise<ArticleObject[]> {
  let fetchedData: ArticleObject[] = [];

  try {
    const { data, error } = await supabase.rpc("get_articles");

    if (error) throw error;

    if (query) {
      fetchedData =
        data?.filter((article) =>
          article.title.toLowerCase().includes(query.toLowerCase())
        ) || [];
    } else {
      fetchedData = data || [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch articles");
  }

  return fetchedData;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';

  try {
    const articles = await fetchArticles(query);
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
