import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';  // Adjust the path if necessary
import ArticleObject from '@/backend/objects/ArticleObject';
import UserObject from '@/backend/objects/UserObject';

async function fetchArticleById(article_id?: string): Promise<ArticleObject | null> {
  const { data, error } = await supabase.rpc("get_articles", {
    p_article_id: article_id,
  });

  if (error) {
    console.error("Error fetching article:", error);
    throw new Error("Failed to fetch article");
  }

  return data[0] || null;
}

async function fetchUsersByArticleId(article_id?: string): Promise<UserObject[]> {
  const { data, error } = await supabase.rpc("get_article_users", {
    p_article_id: article_id,
  });

  if (error) {
    console.error("Error fetching article users:", error);
    throw new Error("Failed to fetch article users");
  }

  return data || [];
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

  if (!id) {
    return NextResponse.json({ message: "Article ID is required" }, { status: 400 });
  }

  try {
    const article = await fetchArticleById(id);
    if (!article) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    const users = await fetchUsersByArticleId(id);

    return NextResponse.json({ article, users });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
