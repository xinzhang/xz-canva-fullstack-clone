import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {handlers, signIn, signOut, auth} = NextAuth({
  providers: [
    GoogleProvider,
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id_token) {
        token.id_token = user.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.idToken = token.id_token;
      return session;
    },
  },
});
