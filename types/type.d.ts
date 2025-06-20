import "next-auth";
declare module "next-auth" {
  interface User {
    username?: string;
    password?:string;
  }

  interface Session {
    user: {
      token: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    idToken?: string;
  }
}
