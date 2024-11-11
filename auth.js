import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
        console.log("account=>", account);
        console.log("profile=>", profile);
        
    //   if (account.provider === "google") {
    //     return profile.email_verified && profile.email.endsWith("@example.com");
    //   }
    //   return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
});
