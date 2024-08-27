// app/api/authors/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import UserObject from '@/backend/objects/UserObject';

async function fetchUsers(query?: string, limit?: string): Promise<UserObject[]> {
  const { data, error } = await supabase.rpc("get_users", {p_limit: limit ? limit : null});

  if (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }

  let users = data || [];

  if (query) {
    users = users.filter(
      (user: UserObject) =>
        user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase())
    );
  }

  return users;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';
  const limit = searchParams.get('limit') || '';

  try {
    const users = await fetchUsers(query, limit);
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
