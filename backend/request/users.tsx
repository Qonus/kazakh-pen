import UserObject from "../objects/UserObject";

export async function fetchUsers(params: string): Promise<UserObject[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/users${params}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

export async function fetchAuthorData(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/users/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch author data");
  }
  return response.json();
}
