import { getServerSession } from "next-auth/next";
import { authOptions, SessionWithId } from "./authOptions";

export default async function getSessionUser() {
  const session: SessionWithId | null = await getServerSession(authOptions);

  if (!session || !session.user) {
    return null;
  }

  return {
    user: session.user,
    userId: session.user.id,
  };
}
