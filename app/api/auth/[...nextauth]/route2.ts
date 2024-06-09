import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth"
import { log } from "console";

export const authOptions : NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials are used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        // email: {
        //   label: "Email",
        //   type: "email",
        //   placeholder: "johndoe@email.com",
        // },
        username: {
            label: "Username",
            placeholder: "user",
          },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // here you write logic that takes the credentials and
        // submit to backend server and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        console.log('aaa');
        
        try {
          const res = await fetch("http://localhost:5122/api/auth/login", {
            method: "POST",
            body: JSON.stringify(
              {
                "username" : "Admin",
                "password": "Admin@123"
              }
              // {
            //   email: credentials!.username,
            //   password: credentials!.password,
            // }
            ),
            headers: { "Content-Type": "application/json" },
          });
          
          if (!res.ok) {
            // console.log(res);
            // credentials are invalid
            // return res.body;
          }
          const parsedResponse = await res.json();
          const jwt = parsedResponse.token;
          // log(parsedResponse)
          return {...parsedResponse, ...credentials};
        } catch (e) {
          // console.log(e);

          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
     // user is only available the first time a user signs in authorized
    //  console.log(user);
      if (user) {
        return {
          ...token,
          jwt: user.token,
        };
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      
      if (token) {
        session.jwt = token.jwt;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// export default NextAuth(authOptions);
