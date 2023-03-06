import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KaKaoProvider from 'next-auth/providers/kakao';
import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // NaverProvider({
        //     clientId:
        // })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true;
            if (isAllowedToSignIn) {
                return true;
            } else {
                console.log('로그인 실패');
                alert('로그인 실패');
                return '/';
            }
        },
        async jwt({ token, account, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            // if (account) {
            //     token.accessToken = account.access_token;
            //     token.id = profile.id;
            // }
            console.log(token, 'token');
            return token;
        },
    },

    pages: {
        signIn: '/auth/login',
    },
};
export default NextAuth(authOptions);
