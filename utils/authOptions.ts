import GoogleProvider from "next-auth/providers/google";

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
    // invoked on successful sign in
    async signIn() {
      // 1. connect to db
      // 2. check if user exists
      // 3. if not, create new user
      // 4. return true to allow sign in
    },
    // session callback function that modifies the session object
    async session() {
      // 1. get user from db
      // 2. assign user id from the session
      // 3. return session
    },
  }
};
