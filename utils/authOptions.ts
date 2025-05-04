import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User, {IUser} from "@/models/User";
import { type Profile, DefaultSession } from "next-auth";
import { type GoogleProfile } from "next-auth/providers/google";

interface SessionWithId extends DefaultSession {
  user: DefaultSession["user"] & {
    id: string;
  };
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        }
      }
    })
  ],
  callbacks: {
    async signIn({
      profile
    }: {
      profile?: Profile | undefined
    }): Promise<boolean> {
      if (profile === undefined) {
        console.error("Invalid profile");
        return false;
      }

      const googleProfile = profile as GoogleProfile;

      await connectDB();

      const userExists: IUser | null = await User.findOne({email: profile.email});

      if (userExists === null) {
        await User.create({
          email: googleProfile.email,
          username: googleProfile.name.slice(0, 20),
          image: googleProfile.picture
       });
      }

      return true;
    },
    async session({
      session
    }: {
      session: DefaultSession
    }): Promise<DefaultSession | SessionWithId> {
      if (session.user === undefined) {
        return session;
      }

      const user: IUser | null = await User.findOne({email: session.user.email});

      if (user === null) {
        return session;
      }

      return {
        ...session,
        user: {
          ...session.user,
          id: user._id.toString(),
        },
      };;
    }
  }
};
