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
        NaverProvider({
            clientId: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_CLIENT_SECRET,
        }),
        KaKaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        // async jwt({ token, account, profile }) {
        //     console.log(token, 'token', account, '어카운트', profile, '프로파일');
        //     return token;
        // },
        async session({ session, token }) {
            session.accessToken = token.sub;

            return session;
        },
        // async signIn({ user, account, profile, email, credentials }) {
        //     const isAllowedToSignIn = true;
        //     if (isAllowedToSignIn) {
        //         return true;
        //     } else {
        //         console.log('로그인 실패');
        //         alert('로그인 실패');
        //         return '/';
        //     }
        // },
    },

    pages: {
        signIn: '/auth/login',
    },
};
export default NextAuth(authOptions);
