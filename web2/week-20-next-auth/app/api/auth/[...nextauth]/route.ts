import NextAuth from "next-auth";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Login with email",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "netrakhatri123@gmail.com"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req){
                return {
                    name: "netra",
                    id: "1",
                    email: "netra123@gmail.com"
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET;
});

export const GET = handler;
export const POST = handler;

