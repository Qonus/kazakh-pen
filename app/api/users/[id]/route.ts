// app/api/authors/[id]/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import UserObject from '@/backend/objects/UserObject';
import ArticleObject from '@/backend/objects/ArticleObject';

// Fetch user by ID
async function fetchUserById(user_id?: string): Promise<UserObject | null> {
  const { data, error } = await supabase.rpc("get_users", {
    p_user_id: user_id,
  });

  if (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user");
  }

  return data[0] || null;
}

// Fetch articles by user ID
async function fetchArticlesByUserId(user_id?: string): Promise<ArticleObject[]> {
  const { data, error } = await supabase.rpc("get_user_articles", {
    p_user_id: user_id,
  });

  if (error) {
    console.error("Error fetching articles:", error);
    throw new Error("Failed to fetch articles");
  }

  return data || [];
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: "User ID is required" }, { status: 400 });
  }

  try {
    const user = await fetchUserById(id);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const articles = await fetchArticlesByUserId(id);

    return NextResponse.json({ user, articles });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
